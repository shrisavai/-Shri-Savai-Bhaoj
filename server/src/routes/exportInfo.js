import {Router} from "express";
import ExportInfo from "../models/ExportInfo.js";
import {requireAuth} from "../middleware/auth.js";
const router=Router();
const defaults={
 tradeTerms:[
  {code:"EXW",name:"Ex Works",description:"Buyer takes responsibility from our yard onward."},
  {code:"FCA",name:"Free Carrier",description:"We deliver to a carrier named by the buyer."},
  {code:"FAS",name:"Free Alongside Ship",description:"We deliver alongside the vessel at the port of shipment."},
  {code:"FOB",name:"Free on Board",description:"We load the goods on board the vessel; risk transfers at the ship's rail."},
  {code:"CIF",name:"Cost, Insurance & Freight",description:"We cover cost, insurance and freight to the destination port."}
 ],
 paymentOptions:[
  {code:"100%",name:"100% Advance",description:"Full payment before production/dispatch."},
  {code:"70/30",name:"70% Advance + 30% LC",description:"70% advance, balance against Letter of Credit."},
  {code:"40/60",name:"40% Advance + 60% on DP",description:"40% advance, balance on Documents Against Payment."}
 ]
};
router.get("/",async(_,res)=>{
 let data=await ExportInfo.findOne();
 if(!data) data=await ExportInfo.create(defaults);
 res.json(data);
});
router.put("/",requireAuth,async(req,res)=>{
 let data=await ExportInfo.findOne();
 if(!data)data=new ExportInfo();
 data.tradeTerms=req.body.tradeTerms; data.paymentOptions=req.body.paymentOptions;
 res.json(await data.save());
});
export default router;