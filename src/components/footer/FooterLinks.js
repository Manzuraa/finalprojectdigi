import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function FooterLinks({ linkTitle, navLinks, target }) {
  return (
    <>
      <Typography sx={{ pb: 2, textAlign:"center" }} variant="h5">
        {linkTitle}
      </Typography>
      <Box component='ul' sx={{ display: "flex", flexDirection: "column",  }}>
        {navLinks.map((link) => (
          <Link to={link.href} key={uuidv4()} target="_blank">
            <Typography
              sx={{ fontWeight: 400, fontSize: "20px", pb: 3, lineHeight: 1.5 }}
              color="secondary"
            >
              {link.linkName}
            </Typography>
          </Link>
        ))}
      </Box>
    </>
  );
}

export default FooterLinks;
