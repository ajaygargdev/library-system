import express from "express";

export const app = express();
const PORT = process.env.PORT || 8000;

// app.use(express.json());


export const startServer = () => {
  app.listen(PORT, () => console.log("Server Started..."));
};

