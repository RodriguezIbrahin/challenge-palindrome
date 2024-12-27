import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import connectDB from "./data/db.js";
import palindromeRouter from "./routers/palindrome.routers.js";

dotenv.config();

export const app = express();
app.use(cors());
app.use(json());
connectDB();

app.use("/palindrome", palindromeRouter);

app.get("/ping", (req, res) => {
  res.json({
    message: "pong",
  });
});
