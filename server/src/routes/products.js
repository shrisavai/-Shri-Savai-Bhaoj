import {Router} from "express";
import Product from "../models/Product.js";
import {requireAuth} from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router=Router();
router.get("/",async(req,res)=>{
  const q=req.query.featured==="true"?{featured:true}:{};
  res.json(await Product.find(q).sort({createdAt:-1}));
});
router.post("/",requireAuth,upload.array("images",12),async(req,res)=>{
  const images=(req.files||[]).map(f=>`/uploads/${f.filename}`);
  const data={...req.body,images,featured:req.body.featured==="true"};
  res.status(201).json(await Product.create(data));
});
router.put("/:id",requireAuth,upload.array("images",12),async(req,res)=>{
  const product=await Product.findById(req.params.id);
  if(!product) return res.sendStatus(404);
  Object.assign(product,req.body);
  if(req.files?.length) product.images=req.files.map(f=>`/uploads/${f.filename}`);
  if("featured" in req.body) product.featured=req.body.featured==="true";
  res.json(await product.save());
});
router.delete("/:id",requireAuth,async(req,res)=>{
  await Product.findByIdAndDelete(req.params.id); res.sendStatus(204);
});
export default router;