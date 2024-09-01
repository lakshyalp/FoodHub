import mongoose from "mongoose";

export const connectDB= async()=>{

  await mongoose.connect('mongodb+srv://lpemail247:KoygyeJtECly8xoj@cluster0.5fmzj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(()=>console.log("DB connected"));
}