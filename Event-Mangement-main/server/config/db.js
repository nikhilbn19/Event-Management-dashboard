import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()
export default async function connectDB (){
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    }catch(err){
        console.log("Error in connecting to MongoDB", err);
        process.exit(1);
    }
}