import React from "react";
import { Typography, Box } from "@mui/material";
const Footer = () => (
  <Box
    sx={{
      p: 2,
      mt: "auto",
      bgcolor: "primary.main",
      color: "white",
      textAlign: "center",
    }}
  >
    <Typography variant="body2">&copy; 2025 Library System</Typography>
  </Box>
);

export default Footer;
