import React from "react";
import "../styles/NavbarStyle.css";
import { AppBar } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
function Navbar() {
  return (
    <AppBar position="static" sx={{ color: "black" }}>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            Mallar
          </Button>
        </Box>
      </Container>
    </AppBar>

    // <div className="Nav-container">
    //   <div className="Menu-container">
    //     <h2>J'CV Skapare</h2>
    //   </div>
    //   <div className="Menu-container">
    //     <h2>Mallar</h2>
    //     <h2>Kontakt</h2>
    //   </div>
    // </div>
  );
}

export default Navbar;
