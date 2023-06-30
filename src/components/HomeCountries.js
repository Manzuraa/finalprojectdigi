import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import CountriesCard from "./countries/CountriesCard";
import { v4 as uuidv4 } from "uuid";

export default function HomeCountries() {
  const countriesCard = [
    {
      title: "Russia",
      image: require("../public/Russia.jpg"),
      linkUrl: "/countries",
      description:
        "Russia is the top popular destination for Turkmen students.",
    },
    {
      title: "USA",
      image: require("../public/USA (2).jpg"),
      linkUrl: "/countries",
      description:
        "Russia is the top popular destination for Turkmen students.",
    },
    {
      title: "China",
      image: require("../public/China.jpg"),
      linkUrl: "/countries",
      description:
        "Russia is the top popular destination for Turkmen students.",
    },
    {
      title: "Turkey",
      image: require("../public/Turkey.png"),
      linkUrl: "/countries",
      description:
        "Russia is the top popular destination for Turkmen students.",
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
            Discover by country
          </Typography>
          <Typography
          textAlign="center"
            variant="body1"
            sx={{ pb: 2 }}
          >
            Top country choices of Turkmen students
          </Typography>
          </Stack>
          <Box>
          <Grid sx={{ flexGrow: 1, mt:2, ml:0.1 }} container spacing={4} justifyContent="center" >
            {countriesCard.map((card) => (
              <Grid item key={uuidv4()} xs={12} sm={6} md={3}>
                <CountriesCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  link={card.linkUrl}
                />
              </Grid>
            ))}
            ;
          </Grid>
          </Box>
          <Link href="/countries" underline="hover" variant="button" sx={{display: "flex", justifyContent:"center", textDecoration:"none"}}>
          Show all countries
          </Link>
        </Box>
      </Box>
      
    </div>
  );
}
