import { AppBar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import NavBar from "./header/NavBar";
import Logo from "./common/Logo";
import { Menu } from "@mui/icons-material";
import MenuDrawer from "./header/MenuDrawer.js";

function Header() {
  const [open, setOpen] = useState(false);
  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <Container section sx={{width:"100%"}}>
      <Grid container 
      justifyContent="space-between" alignItems="center">
        <Grid item>
          <Stack flexDirection={"row"} alignItems={"center"}>
          <Logo />
          {/* <Typography variant="h6" sx={{ ml: "15px", color: "secondary.main" }}>
            Ýokary Okuw
          </Typography> */}
          </Stack>
        </Grid>
        <Grid className="navbar" item sm={7} md={8}>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <NavBar />
          </Box>
        </Grid>
        <Grid item sx={{ display: { xs: "flex", sm: "none" } }}>
          <Menu onClick={toggleDrawer} fontSize="large" />
          <MenuDrawer
            open={open}
            onOpen={toggleDrawer}
            onClose={toggleDrawer}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;

// import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
// import React from "react";
// import Logo from "./common/Logo"
// import NavBar from "./header/NavBar";

// function Header() {
//   return (
//   <AppBar className="appbar"       position="sticky"
//   sx={{ boxShadow: "0 0 0", backgroundColor: "#fff" }}>
//     <Toolbar className="toolbar">
//       <Stack className="logo" flexDirection={"row"} alignItems={"center"}>
//         <Logo/>
//         <Typography variant="h6" sx={{ml:"15px"}}>
//           Yokary Okuw
//         </Typography>
//       </Stack>
//       <NavBar/>
//     </Toolbar>
//   </AppBar>
//   )
// }

// export default Header;
