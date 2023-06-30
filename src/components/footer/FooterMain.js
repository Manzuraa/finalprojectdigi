import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../common/Logo";
import SocialIcons from "./SocialIcons";
import FooterLinks from "./FooterLinks";


function FooterMain() {
  const footerLinks = [
    { linkName: "About us", href: "/about" },
    { linkName: "Careers", href: "/careers" },
    { linkName: "Our team", href: "/team" },
    { linkName: "Contact us", href: "/contact" },
  ];


  const contactLinks = [
    {
      linkName: "55 Archabil, Ashgabat, Turkmenistan",
      href: "https://goo.gl/maps/GY6etvPkzdPkWwdg6",
    },
    { linkName: "mailto:contact@yokaryokuw.com ", href: "mailto:contact@yokaryokuw.com" },
    { linkName: "(123) 456 - 7890", href: "tel:(123) 456 - 7890" },
  ];

  return (
    <Grid container justifyContent="space-between">
      <Grid item xs={12} md={5} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Logo />
        <Typography>
        Your dream university clicks away
        </Typography>
        <Box >
          <SocialIcons />
        </Box>
      </Grid>
      <Grid item xs={6} md={2}>
        <FooterLinks linkTitle="Pages" navLinks={footerLinks} />
      </Grid>
      <Grid item xs={12} md={3}>
        <FooterLinks linkTitle="Contact" navLinks={contactLinks} />
      </Grid>
    </Grid>
  );
}

export default FooterMain;
