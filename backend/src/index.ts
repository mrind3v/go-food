import express, {type Request, type Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 7000;

app.get("/test", async (req : Request, res: Response) => {
  res.json({ message: "Hello From the server" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
