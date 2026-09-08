import { Router } from "express";
import { Resend } from "resend";

import Enquiry from "../models/Enquiry.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

const resend = new Resend(process.env.RESEND_API_KEY);

/*
|--------------------------------------------------------------------------
| POST /api/enquiries
|--------------------------------------------------------------------------
| Public route — customers submit enquiries here.
*/
router.post("/", async (req, res) => {
  try {
    const {
      name,
      company,
      country,
      phone,
      email,
      product,
      message,
    } = req.body;

    // -------------------------------------------------------
    // VALIDATION
    // -------------------------------------------------------

    if (!name || !email || !product || !message) {
      return res.status(400).json({
        message: "Name, email, product and message are required.",
      });
    }

    // -------------------------------------------------------
    // SAVE ENQUIRY TO MONGODB
    // -------------------------------------------------------

    const enquiry = await Enquiry.create({
      name: name.trim(),
      company: company?.trim() || "",
      country: country?.trim() || "",
      phone: phone?.trim() || "",
      email: email.trim().toLowerCase(),
      product: product.trim(),
      message: message.trim(),
    });

    // -------------------------------------------------------
    // SEND EMAIL THROUGH RESEND
    // -------------------------------------------------------

    const { data, error } = await resend.emails.send({
      /*
       * IMPORTANT:
       * This must be an email address using a domain
       * verified inside your Resend account.
       *
       * Example:
       * enquiry@shrisavaibhaoj.com
       */

      from: process.env.ENQUIRY_FROM,

      /*
       * The email address where YOU receive enquiries.
       */
      to: [process.env.ENQUIRY_TO],

      subject: `New Enquiry — ${product}`,

      /*
       * When you press Reply in your email,
       * it will reply directly to the customer.
       */
      replyTo: email.trim(),

      html: `
        <!DOCTYPE html>

        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Website Enquiry</title>
          </head>

          <body
            style="
              margin:0;
              padding:0;
              background:#f5f3ef;
              font-family:Arial,Helvetica,sans-serif;
              color:#111111;
            "
          >

            <div
              style="
                max-width:680px;
                margin:40px auto;
                background:#ffffff;
                border:1px solid #e5e1da;
                border-radius:14px;
                overflow:hidden;
              "
            >

              <!-- HEADER -->

              <div
                style="
                  background:#111111;
                  padding:28px 32px;
                  color:#ffffff;
                "
              >

                <div
                  style="
                    font-size:10px;
                    letter-spacing:3px;
                    text-transform:uppercase;
                    color:#b58a3b;
                    font-weight:bold;
                    margin-bottom:10px;
                  "
                >
                  Website Enquiry
                </div>

                <h1
                  style="
                    margin:0;
                    font-size:25px;
                    line-height:1.3;
                    font-weight:500;
                  "
                >
                  New Product Enquiry
                </h1>

              </div>


              <!-- CUSTOMER DETAILS -->

              <div style="padding:30px 32px;">

                <h2
                  style="
                    margin:0 0 20px;
                    font-size:16px;
                    font-weight:600;
                  "
                >
                  Customer Details
                </h2>


                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style="border-collapse:collapse;"
                >

                  <tr>
                    <td
                      style="
                        padding:10px 0;
                        width:150px;
                        color:#777777;
                        font-size:13px;
                      "
                    >
                      Name
                    </td>

                    <td
                      style="
                        padding:10px 0;
                        font-size:14px;
                        font-weight:600;
                      "
                    >
                      ${name}
                    </td>
                  </tr>


                  <tr>
                    <td
                      style="
                        padding:10px 0;
                        color:#777777;
                        font-size:13px;
                      "
                    >
                      Company
                    </td>

                    <td
                      style="
                        padding:10px 0;
                        font-size:14px;
                      "
                    >
                      ${company || "Not provided"}
                    </td>
                  </tr>


                  <tr>
                    <td
                      style="
                        padding:10px 0;
                        color:#777777;
                        font-size:13px;
                      "
                    >
                      Country
                    </td>

                    <td
                      style="
                        padding:10px 0;
                        font-size:14px;
                      "
                    >
                      ${country || "Not provided"}
                    </td>
                  </tr>


                  <tr>
                    <td
                      style="
                        padding:10px 0;
                        color:#777777;
                        font-size:13px;
                      "
                    >
                      Phone
                    </td>

                    <td
                      style="
                        padding:10px 0;
                        font-size:14px;
                      "
                    >
                      ${phone || "Not provided"}
                    </td>
                  </tr>


                  <tr>
                    <td
                      style="
                        padding:10px 0;
                        color:#777777;
                        font-size:13px;
                      "
                    >
                      Email
                    </td>

                    <td
                      style="
                        padding:10px 0;
                        font-size:14px;
                      "
                    >
                      ${email}
                    </td>
                  </tr>


                  <tr>
                    <td
                      style="
                        padding:10px 0;
                        color:#777777;
                        font-size:13px;
                      "
                    >
                      Product
                    </td>

                    <td
                      style="
                        padding:10px 0;
                        font-size:14px;
                        font-weight:600;
                      "
                    >
                      ${product}
                    </td>
                  </tr>

                </table>


                <!-- DIVIDER -->

                <div
                  style="
                    height:1px;
                    background:#e5e1da;
                    margin:25px 0;
                  "
                ></div>


                <!-- MESSAGE -->

                <h2
                  style="
                    margin:0 0 12px;
                    font-size:16px;
                    font-weight:600;
                  "
                >
                  Customer Message
                </h2>

                <div
                  style="
                    background:#f7f5f2;
                    border-left:3px solid #b58a3b;
                    padding:16px;
                    font-size:14px;
                    line-height:1.7;
                    color:#444444;
                  "
                >
                  ${message}
                </div>


                <!-- FOOTER -->

                <p
                  style="
                    margin:28px 0 0;
                    font-size:11px;
                    line-height:1.6;
                    color:#999999;
                  "
                >
                  This enquiry was submitted through the
                  Shri Savai Bhaoj Marble website.
                </p>

              </div>

            </div>

          </body>
        </html>
      `,
    });

    // -------------------------------------------------------
    // RESEND ERROR
    // -------------------------------------------------------

    if (error) {
      console.error("Resend error:", error);

      return res.status(201).json({
        message:
          "Enquiry received, but email notification could not be sent.",
        enquiry,
      });
    }

    // -------------------------------------------------------
    // SUCCESS
    // -------------------------------------------------------

    return res.status(201).json({
      message: "Enquiry submitted successfully.",
      enquiry,
      emailId: data?.id || null,
    });

  } catch (error) {
    console.error("Enquiry error:", error);

    return res.status(500).json({
      message: "Could not submit enquiry.",
    });
  }
});


/*
|--------------------------------------------------------------------------
| GET /api/enquiries
|--------------------------------------------------------------------------
| Protected — admin only.
*/
router.get("/", requireAuth, async (req, res) => {
  try {
    const enquiries = await Enquiry.find()
      .sort({
        createdAt: -1,
      });

    return res.json(enquiries);

  } catch (error) {
    console.error("Fetch enquiries error:", error);

    return res.status(500).json({
      message: "Could not fetch enquiries.",
    });
  }
});


/*
|--------------------------------------------------------------------------
| PATCH /api/enquiries/:id
|--------------------------------------------------------------------------
| Protected — admin only.
*/
router.patch("/:id", requireAuth, async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!enquiry) {
      return res.status(404).json({
        message: "Enquiry not found.",
      });
    }

    return res.json(enquiry);

  } catch (error) {
    console.error("Update enquiry error:", error);

    return res.status(500).json({
      message: "Could not update enquiry.",
    });
  }
});


export default router;