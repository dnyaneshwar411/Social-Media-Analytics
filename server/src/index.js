import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import langflowRoutes from './routes/langflowRoutes.js';

dotenv.config();
const { PORT } = process.env;
export const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (_, res) => res.status(200).json({ success: true, message: "The server is up and running!" }));
app.use('/api', langflowRoutes);

app.listen(PORT, () => console.log("serving requests on port- ", PORT));