import {Router} from "express";
import Certification from "../models/Certification.js";
import {requireAuth} from "../middleware/auth.js";
import upload from "../middleware/upload.js";
const router=Router();
router.get("/",async(_,res)=>res.json(await Certification.find().sort({createdAt:1})));
router.post("/",requireAuth,upload.single("image"),async(req,res)=>{
  res.status(201).json(await Certification.create({...req.body,image:req.file?`/uploads/${req.file.filename}`:""}));
});
router.put("/:id",requireAuth,upload.single("image"),async(req,res)=>{
  const data={...req.body}; if(req.file)data.image=`/uploads/${req.file.filename}`;
  res.json(await Certification.findByIdAndUpdate(req.params.id,data,{new:true}));
});
router.delete("/:id",requireAuth,async(req,res)=>{await Certification.findByIdAndDelete(req.params.id);res.sendStatus(204)});
export default router;