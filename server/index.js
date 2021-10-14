import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import firstRouter from "./routers/firstRouter.js"
dotenv.config();
const app = express();
app.use(express.json());
app.use("/memories",firstRouter)



app.listen(process.env.PORT,()=>{
  mongoose.connect(process.env.MONGO_URI).then(()=> console.log("database has been connected")).catch(()=> console.log("database can not found ..."))
})
