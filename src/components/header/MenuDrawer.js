import { Box, SwipeableDrawer } from "@mui/material";
import React from "react";
import Logo from "../common/Logo";
import NavBar from "./NavBar";

function MenuDrawer({ open, onOpen, onClose }) {
  const linkStyle = {
    marginBottom: "20px",
  };
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          mx: 5,
        }}
      >
        <Box sx={{ my: 5 }}>
          <Logo />
        </Box>
        <NavBar navStyle={linkStyle} />
      </Box>
    </SwipeableDrawer>
  );
}

export default MenuDrawer;
