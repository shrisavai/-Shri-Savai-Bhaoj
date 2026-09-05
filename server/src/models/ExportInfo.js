import mongoose from "mongoose";
const schema = new mongoose.Schema({
  tradeTerms:[{code:String,name:String,description:String}],
  paymentOptions:[{code:String,name:String,description:String}]
});
export default mongoose.model("ExportInfo",schema);