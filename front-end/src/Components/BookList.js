import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Grid2,
  Typography,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Modal,
} from "@mui/material";

import { Context } from "../App";
import { deleteBook, getBookById, getBooks, updateStatus } from "../Services";

const BookList = () => {
  const {
    data: books,
    setData,
    error,
    setError,
    selectedBook,
    setSelectedBook,
  } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterReadStatus, setFilterReadStatus] = useState("");
  const [openModal, setOpenModal] = useState(false); // Modal state for book details
  useEffect(() => {
    getBooks(searchQuery, filterReadStatus)
      .then((response) => {
        if (!response.success) {
          setError(response.error);
        } else {
          setData(response.data);
          setError("");
        }
      })
      .catch((err) => {
        setError(err?.message || "error");
      });
  }, [searchQuery, filterReadStatus, selectedBook, setError, setData]);

  const handleMarkAsRead = (bookId) => {
    updateStatus(bookId)
      .then((response) => {
        if (!response.success) {
          setError(response.error);
        } else {
          setSelectedBook(response.data);
          setError("");
        }
      })
      .catch((err) => {
        setError(err?.message || "error");
      });
  };

  const handleDeleteBook = (bookId) => {
    deleteBook(bookId)
      .then((response) => {
        if (!response.success) {
          setError(response.error);
        } else {
          setSelectedBook(response.data);
          setError("");
        }
      })
      .catch((err) => {
        setError(err?.message || "error");
      });
  };

  const handleOpenModal = (bookId) => {
    getBookById(bookId)
      .then((response) => {
        if (!response.success) {
          setError(response.error);
        } else {
          setSelectedBook(response.data);
          setError("");
          setOpenModal(true);
        }
      })
      .catch((err) => {
        setError(err?.message || "error");
      });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedBook(null);
  };

  return (
    <>
      {/* Search and Filter Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Search and Filter</Typography>

        <TextField
          label="Search by Title or Author"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Filter by Read Status</InputLabel>
          <Select
            value={filterReadStatus}
            onChange={(e) => setFilterReadStatus(e.target.value)}
            label="Filter by Read Status"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="read">Read</MenuItem>
            <MenuItem value="unread">Unread</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Books in Library</Typography>
        {error && <Typography variant="h5">{error}</Typography>}
        {!error && (
          <Grid2 container spacing={2} sx={{ mt: 2 }}>
            {books.map((book, index) => (
              <Grid2 item xs={12} sm={6} key={index}>
                <Paper
                  sx={{ p: 3, bgcolor: "background.paper", borderRadius: 2 }}
                >
                  <Typography variant="h6">{book.title}</Typography>
                  <Typography variant="body2">Author: {book.author}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Description: {book.description}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Status: {book.status}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="outlined"
                      onClick={() => handleOpenModal(book.id)}
                      sx={{ mr: 2 }}
                    >
                      Show Details
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleMarkAsRead(book.id)}
                      sx={{ mr: 2 }}
                      disabled={book.status === "read"}
                    >
                      Mark as Read
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDeleteBook(book.id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </Paper>
              </Grid2>
            ))}
          </Grid2>
        )}
      </Box>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            bgcolor: "background.paper",
            p: 4,
            width: 400,
            mx: "auto",
            mt: 10,
          }}
        >
          {selectedBook && (
            <>
              <Typography variant="h6">Book Details</Typography>
              <Typography variant="body1">
                <strong>Title:</strong> {selectedBook.title}
              </Typography>
              <Typography variant="body1">
                <strong>Author:</strong> {selectedBook.author}
              </Typography>
              <Typography variant="body1">
                <strong>Description:</strong> {selectedBook.description}
              </Typography>
              <Typography variant="body1">
                <strong>Status:</strong> {selectedBook.status}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCloseModal}
                >
                  Close
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default BookList;
