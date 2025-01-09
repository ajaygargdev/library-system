import { app, startServer } from "./server.js";
import { routerLibrary } from "./router/library/index.js";
import express from "express";
import cors from "cors";
import { errorlogger, logger } from "./logger/index.js";

app.use(logger);
app.use(express.json());
app.use(cors());
app.use("/api", routerLibrary);
app.use(errorlogger);
app.use((req, res) => {
  res.status(404).send("Page not found");
});

startServer();
