import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/userRoute.js"
import companyRoute from "./routes/companyRoute.js";
import jobRoutes from "./routes/jobRoutes.js"
import applicationRoutes from "./routes/applicationRotes.js"

dotenv.config({});
const app=express();

app.get("/home",(req,res)=>{
  return res.status(200).json({
    message:"BACKEND CODE",
    success:true
  })
})


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:5173", // Specify the client origin
  credentials: true, // Include credentials if necessary
};
app.use(cors(corsOption));

const PORT=process.env.PORT||8000;

//api's
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/application", applicationRoutes);

app.listen(PORT,()=>{
  connectDB();
  console.log(`Server is running on ${PORT}`)
})