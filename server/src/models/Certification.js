import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name:{type:String,required:true},
  issuer:String,
  description:String,
  image:String
},{timestamps:true});
export default mongoose.model("Certification",schema);