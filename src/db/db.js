import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

 export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1); // Exit if DB  connection fails
    }
};
