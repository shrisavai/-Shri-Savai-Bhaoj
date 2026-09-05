import { Router } from "express";
import { Resend } from "resend";

import Enquiry from "../models/Enquiry.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  try {
    const {
      name,
      company,
      country,
      phone,
      email,
      product,
      message
    } = req.body;

    // Basic validation
    if (!name || !email || !product || !message) {
      return res.status(400).json({
        message: "Name, email, product and message are required."
      });
    }

    // Save enquiry to MongoDB
    const enquiry = await Enquiry.create({
      name,
      company,
      country,
      phone,
      email,
      product,
      message
    });

    // Send enquiry email
    await resend.emails.send({
      from: "Website Enquiry <onboarding@resend.dev>",
      to: [process.env.ENQUIRY_TO],
      subject: `New Enquiry — ${product}`,
      replyTo: email,
      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Country:</strong> ${country || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Product:</strong> ${product}</p>

        <hr />

        <h3>Message</h3>
        <p>${message}</p>
      `
    });

    res.status(201).json({
      message: "Enquiry submitted successfully.",
      enquiry
    });

  } catch (error) {
    console.error("Enquiry error:", error);

    res.status(500).json({
      message: "Could not send enquiry."
    });
  }
});

router.get(
  "/",
  requireAuth,
  async (_, res) => {
    res.json(
      await Enquiry.find().sort({
        createdAt: -1
      })
    );
  }
);

router.patch(
  "/:id",
  requireAuth,
  async (req, res) => {
    res.json(
      await Enquiry.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )
    );
  }
);

export default router;