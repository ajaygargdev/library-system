import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getData = () => {  
  if (fs.existsSync(path.join(__dirname, "../../data.json"))) {
    return JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../data.json"), "utf8")
    );
  }
  return [];
};

const updateData = (data) => {
  if (fs.existsSync(path.join(__dirname, "../../data.json"))) {
    fs.unlinkSync(path.join(__dirname, "../../data.json"));
  }
  fs.writeFileSync(
    path.join(__dirname, "../../data.json"),
    JSON.stringify(data),
    "utf-8"
  );
};

const getNewId = (() => {
  const data = getData() || [];
  let max = -Infinity;
  data.every((val) => val.id > max && (max = val.id));
  max = max < 0 ? 0 : max;
  return () => ++max;
})();

export const createBook = (req, res) => {
  const { title, author, description } = req?.body || {};
  if (title && author && description) {
    const book = {
      id: getNewId(),
      title,
      author,
      description,
      status: "unread",
      createdOn: Date.now(),
      updatedOn: Date.now(),
    };
    const data = getData() || [];
    data.push(book);
    updateData(data);
    return res.status(201).json(book);
  } else {
    return res.status(400).json({ message: "bad request" });
  }
};

export const getBooks = (req, res) => {
  const data = getData() || [];
  const searchParam = (req.query?.search || "").toLowerCase();
  const filterStatus = req.query?.status;
  const _data = data.filter(
    (val) =>
      (val.title?.toLowerCase().includes(searchParam) || val.author?.toLowerCase().includes(searchParam)) &&
      (!filterStatus || val.status === filterStatus)
  );
  if (data.length > 0) {
    return res.status(200).json(_data);
  } else {
    return res.status(404).json({ message: "Book not exist" });
  }
};

export const getBookById = (req, res) => {
  const data = getData() || [];
  const id = req.params.id;
  if (id) {
    const book = data.find((val) => val.id == id);
    if (book) {
      return res.status(200).json(book);
    } else {
      return res.status(404).json({ message: "Book not exist" });
    }
  } else {
    return res.status(400).json({ message: "Bad request" });
  }
};

export const updateStatus = (req, res) => {
  const data = getData() || [];
  const id = req.params.id;
  if (id) {
    const book = data.find((val) => val.id == id);
    if (book) {
      book.status = book.status === "unread" ? "read" : "unread";
      book.updatedOn = Date.now();
      updateData(data);
      return res.status(200).json(book);
    } else {
      return res.status(404).json({ message: "Book not exist" });
    }
  } else {
    return res.status(400).json({ message: "Bad request" });
  }
};


export const deleteBook = (req, res) => {
  const data = getData() || [];
  const id = req.params.id;
  if (id) {
    const book = data.find((val) => val.id == id);
    if (book) {
      const newData = data.filter(val=>val.id!=id);
      updateData(newData);
      return res.status(200).json(book);
    } else {
      return res.status(404).json({ message: "Book not exist" });
    }
  } else {
    return res.status(400).json({ message: "Bad request" });
  }
};