import express from "express";
import cors from "cors";
import { connectDB } from "./db/index.js";

// ----------- EMPLOYEE ROUTER IMPORTS -----------
import employeeRouter from "./routes/employee.route.js";

const app = express();
const port = process.env.PORT;

// ----------- GLOBAL MIDDLEWARES -----------
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use(express.json());

// ------------ START SERVER -------------
const startServer = async () => {
    try {
        const db = await connectDB();

        app.use((req, res, next) => {
            req.db = db;
            next();
        });

        // All employee routes
        app.use("/api/v1/employees", employeeRouter);

        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });

    } catch (error) {
        console.error("❌ Failed to start server:", error);
    }
};

startServer();
