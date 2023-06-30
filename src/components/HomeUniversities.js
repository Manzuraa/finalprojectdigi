import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import UniversitiesCard from "./universities/UniversitiesCard";
import { v4 as uuidv4 } from "uuid";

export default function HomeUniversities () {
  const universitiesCard = [
    {
      title: "Boston University",
      location: "Massachussets, USA",
      image: require("../public/Boston.jpg"),
      linkUrl: "/",
      description:
        "Is Boston University the right place for you? With an average class size of 30 students and a student-to-faculty ratio of 10:1,...",
    },
    {
      title: "New York University",
      location: "New York, USA",
      image: require("../public/NYU.jpg"),
      linkUrl: "/countries",
      description:
        "In the most amazing city on Earth, along with great facilities and top-notch faculty makes NYU...",
    },
    {
      title: "University of Richmond",
      location: "Virginia, USA",
      image: require("../public/Richmond.jpg"),
      linkUrl: "/countries",
      description:
        "The University of Richmond, a private, liberal arts university, provides a collaborative learning and research environment...",
    },
    {
      title: "Rice University",
      location: "California, USA",
      image: require("../public/UCA.jpg"),
      linkUrl: "/countries",
      description:
        "The University boasts a dynamic and culturally diverse campus located in a world-class city with modern facilities to boost your learning...",
    },
  ];
  return (
    <div>
      <Box component="section">
      <Box>
            <Stack sx={{justifyContent:"center"}}>
          <Typography
            textAlign="center"
            variant="h2"
            color="secondary.main"
            sx={{ p: 2 }}
          >
            Find your best-fit school
          </Typography>
          <Typography
          textAlign="center"
            variant="body1"
            sx={{ pb: 2 }}
          >
            Top university choices of Turkmen students
          </Typography>
          </Stack>
          <Box>
          <Grid sx={{ flexGrow: 1, mt:2, bgcolor:"custom.main", }} container spacing={4} justifyContent="center" >
            {universitiesCard.map((card) => (
              <Grid item key={uuidv4()} xs={12} sm={6} md={3}>
                <UniversitiesCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  link={card.linkUrl}
                  location={card.location}
                />
              </Grid>
            ))}
            ;
          </Grid>
          </Box>
          <Link href="/universities" underline="hover" variant="button" sx={{display: "flex", justifyContent:"center", textDecoration:"none"}}>
          Show all universities
          </Link>
        </Box>
      </Box>
      
    </div>
  );
}
