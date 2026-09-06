import { Router } from "express";
import Product from "../models/Product.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

/* ================= GET PRODUCTS ================= */

router.get("/", async (req, res) => {
  try {
    const q =
      req.query.featured === "true"
        ? { featured: true }
        : {};

    const products = await Product
      .find(q)
      .sort({ createdAt: -1 });

    res.json(products);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Could not load products."
    });
  }
});

/* ================= CREATE PRODUCT ================= */

router.post("/", requireAuth, async (req, res) => {
  try {
    const {
      name,
      category,
      origin,
      finish,
      price,
      description,
      featured,
      images
    } = req.body;

    if (!name || !category) {
      return res.status(400).json({
        message: "Product name and category are required."
      });
    }

    if (!Array.isArray(images) || images.length === 0) {
      return res.status(400).json({
        message: "At least one image URL is required."
      });
    }

    const product = await Product.create({
      name,
      category,
      origin,
      finish,
      price,
      description,
      images,
      featured: featured === true || featured === "true"
    });

    res.status(201).json(product);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Could not create product."
    });
  }
});

/* ================= UPDATE PRODUCT ================= */

router.put("/:id", requireAuth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found."
      });
    }

    const {
      name,
      category,
      origin,
      finish,
      price,
      description,
      featured,
      images
    } = req.body;

    if (name !== undefined) product.name = name;
    if (category !== undefined) product.category = category;
    if (origin !== undefined) product.origin = origin;
    if (finish !== undefined) product.finish = finish;
    if (price !== undefined) product.price = price;
    if (description !== undefined) {
      product.description = description;
    }

    if (images !== undefined) {
      if (!Array.isArray(images)) {
        return res.status(400).json({
          message: "Images must be an array of URLs."
        });
      }

      product.images = images;
    }

    if (featured !== undefined) {
      product.featured =
        featured === true ||
        featured === "true";
    }

    await product.save();

    res.json(product);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Could not update product."
    });
  }
});

/* ================= DELETE PRODUCT ================= */

router.delete("/:id", requireAuth, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found."
      });
    }

    res.sendStatus(204);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Could not delete product."
    });
  }
});

export default router;