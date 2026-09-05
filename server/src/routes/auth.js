import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const router = Router();

router.post("/create-first-admin", async (req, res) => {
  try {
    if (await Admin.countDocuments()) {
      return res.status(403).json({
        message: "Admin already exists"
      });
    }

    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 12);

    const admin = await Admin.create({
      name,
      email: email.toLowerCase(),
      passwordHash: hash
    });

    res.status(201).json({
      id: admin._id
    });
  } catch (e) {
    res.status(400).json({
      message: e.message
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    const admin = await Admin.findOne({
      email: email.toLowerCase()
    });

    if (
      !admin ||
      !(await bcrypt.compare(password, admin.passwordHash))
    ) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    if (!admin.isActive) {
      return res.status(403).json({
        message: "Admin account is inactive"
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        email: admin.email,
        role: admin.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "8h"
      }
    );

    res.json({
      token,
      admin: {
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (e) {
    console.error("Admin login error:", e);

    res.status(500).json({
      message: e.message
    });
  }
});

export default router;