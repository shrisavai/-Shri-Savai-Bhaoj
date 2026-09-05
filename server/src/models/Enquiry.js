import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name:{type:String,required:true},
  company:String,country:String,phone:String,
  email:{type:String,required:true},
  product:String,message:String,
  status:{type:String,default:"new"}
},{timestamps:true});
export default mongoose.model("Enquiry",schema);