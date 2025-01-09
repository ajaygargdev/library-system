import { Router } from "express";
import {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  updateStatus,
} from "../../controller/library/index.js";

export const routerLibrary = Router();

routerLibrary.get("/books", getBooks);
routerLibrary.get("/books/:id", getBookById);
routerLibrary.post("/books", createBook);
routerLibrary.put("/books/:id", updateStatus);
routerLibrary.delete("/books/:id", deleteBook);
