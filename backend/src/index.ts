import express, { type Request, type Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoutes.js";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to MongoDB"));

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/my/user", myUserRoute);

const PORT = process.env.PORT || 7000;

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello From the server" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
