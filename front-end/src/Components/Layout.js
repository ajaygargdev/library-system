import React from "react";
import { Container, Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    {/* Header */}
    <Header />

    {/* Main Content */}
    <Container component="main" sx={{ flex: 1, my: 3 }}>
      {children}
    </Container>

    {/* Footer */}
    <Footer />
  </Box>
);

export default Layout;
