import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

export const connectDB = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");

        const db = client.db("employeeDB");  // <–– your database name
        return db;

    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
};
