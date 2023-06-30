import { Box, Container, Typography } from "@mui/material";
import React from "react";
import bgHome from "../public/Herobg.jpg";
import ButtonComponent from "./common/ButtonComponent";
import { Link } from "react-router-dom";

function HeroHome() {
  return (
    <Box
      component="section"
      sx={{
        height: "85vh",
        backgroundImage: `url(${bgHome})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Box sx={{ maxWidth: { lg: 1 / 2 }, px: { xs: 4, lg: 1 } }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 400,
              pb: 3,
              color: "white",
            }}
          >
            Your Dream University Clicks Away
          </Typography>
          <Typography
            variant="body1"
            color="white"
            sx={{
              mb: 4,
              bgcolor: {
                xs: "#ffffff94",
                lg: "#ffffff00",
              },
            }}
          >
            Get a personalized guidance for your higher education planning
            process
          </Typography>
          <Link variant="button" to="/universities">
            <ButtonComponent
              buttonText="Search your universities"
              buttonColor="secondary"
              arrowColor="primary.contrastText"
              
            />
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroHome;
