import React, { useContext, useState } from "react";
import { TextField, Button, Typography, Grid2, Paper } from "@mui/material";
import { addBook } from "../Services";
import { Context } from "../App";

const AddBookForm = () => {
  const { setSelectedBook } = useContext(Context);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState(""); // description instead of year
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !description) {
      setError("All fields are required");
      return;
    }

    // Prepare the new book object
    const newBook = { title, author, description };
    addBook(newBook)
      .then((response) => {
        if (!response.success) {
          setError(response.error);
        } else {
          setError("");
          setSelectedBook(response.data);
          setTitle("");
          setAuthor("");
          setDescription("");
        }
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 2, bgcolor: "background.paper" }}>
      <Typography variant="h5" gutterBottom>
        Add a New Book
      </Typography>
      {error && (
        <Typography variant="h5" gutterBottom>
          {error}
        </Typography>
      )}
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Book Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Author"
              variant="outlined"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Grid2>
          <Grid2 item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Book
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Paper>
  );
};

export default AddBookForm;
