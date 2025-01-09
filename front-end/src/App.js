import React, { createContext, useState } from "react";
import { CssBaseline } from "@mui/material";
import Layout from "./Components/Layout";
import AddBook from "./Components/AddBook";
import BookList from "./Components/BookList";

// eslint-disable-next-line no-unused-vars
export const Context = createContext();

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState({});
  return (
    <Context
      value={{ data, setData, error, setError, selectedBook, setSelectedBook }}
    >
      <CssBaseline>
        <Layout>
          <AddBook />
          <BookList />
        </Layout>
      </CssBaseline>
    </Context>
  );
};

export default App;
