import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import ConsultantsCard from "./consultants/ConsultantsCard";
import { v4 as uuidv4 } from "uuid";

export default function HomeConsultants() {
  const consultantsCard = [
    {
      title: "Mahri Atayeva",
      location: "Turkey",
      image: require("../public/Mahri.png"),
      linkUrl: "/",
    },
    {
      title: "Myrat Myradov",
      location: "China, Japan, South Korea",
      image: require("../public/Myrat.png"),
      linkUrl: "/",
    },
    {
      title: "Aman Berdiyev",
      location: "USA, Canada",
      image: require("../public/Aman.png"),
      linkUrl: "/",
    },
    {
      title: "Ayna Geldiyeva",
      location: "Germany, Russia",
      image: require("../public/Ayna.png"),
      linkUrl: "/",
    },
  ];
  return (
    <div>
      <Box component="section">
        <Box>
          <Stack sx={{ justifyContent: "center" }}>
            <Typography
              textAlign="center"
              variant="h2"
              color="secondary.main"
              sx={{ p: 2 }}
            >
              Explore our consultants
            </Typography>
            <Typography textAlign="center" variant="body1" sx={{ pb: 2 }}>
              Our expert consultants are here to give you individualized help in your university admissions
            </Typography>
          </Stack>
          <Box>
            <Grid
              sx={{ flexGrow: 1, mt: 2, bgcolor: "custom.main" }}
              container
              spacing={4}
              justifyContent="center"
            >
              {consultantsCard.map((card) => (
                <Grid item key={uuidv4()} xs={12} sm={6} md={3}>
                  <ConsultantsCard
                    image={card.image}
                    title={card.title}
                    location={card.location}
                    link={card.linkUrl}
                  />
                </Grid>
              ))}
              ;
            </Grid>
          </Box>
          <Link
            href="/consultants"
            underline="hover"
            variant="button"
            sx={{
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            Show all consultants
          </Link>
        </Box>
      </Box>
    </div>
  );
}
