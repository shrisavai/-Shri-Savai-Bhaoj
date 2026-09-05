import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import {fileURLToPath} from "url";
import {connectDB} from "./config/db.js";
import auth from "./routes/auth.js";
import products from "./routes/products.js";
import categories from "./routes/categories.js";
import certifications from "./routes/certifications.js";
import exportInfo from "./routes/exportInfo.js";
import enquiries from "./routes/enquiries.js";

const app=express();
const __dirname=path.dirname(fileURLToPath(import.meta.url));
app.use(cors({origin:process.env.CLIENT_ORIGIN||"http://localhost:5173"}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/uploads",express.static(path.resolve(__dirname,"../uploads")));
app.get("/api/health",(_,res)=>res.json({ok:true}));
app.use("/api/auth",auth);
app.use("/api/products",products);
app.use("/api/categories",categories);
app.use("/api/certifications",certifications);
app.use("/api/export-info",exportInfo);
app.use("/api/enquiries",enquiries);

app.use((err,req,res,next)=>{
  console.error(err);
  res.status(400).json({message:err.message||"Request failed"});
});

const port=process.env.PORT||5000;
connectDB().then(()=>app.listen(port,()=>console.log(`API running on http://localhost:${port}`)))
.catch(err=>{console.error("MongoDB connection failed",err);process.exit(1)});
