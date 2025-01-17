import express from "express";
import dotenv from "dotenv";

dotenv.config();
export const app = express();
const PORT = process.env.PORT || 8000;

export const startServer = () => {
  app.listen(PORT, () => console.log("Server Started..."));
};

