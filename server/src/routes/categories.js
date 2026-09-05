import {Router} from "express";
import Category from "../models/Category.js";
import {requireAuth} from "../middleware/auth.js";
const router=Router();
router.get("/",async(_,res)=>res.json(await Category.find().sort({name:1})));
router.post("/",requireAuth,async(req,res)=>res.status(201).json(await Category.create(req.body)));
router.put("/:id",requireAuth,async(req,res)=>res.json(await Category.findByIdAndUpdate(req.params.id,req.body,{new:true})));
router.delete("/:id",requireAuth,async(req,res)=>{await Category.findByIdAndDelete(req.params.id);res.sendStatus(204)});
export default router;