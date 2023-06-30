import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ArticleCard from "./articles/ArticleCard";
import { v4 as uuidv4 } from "uuid";

function ArticlesSection() {
  const articleCards = [
    {
      cardDate: new Date(2022, 11, 26),
      cardImg: require("../public/Tests.jpg"),
      imageTitle: "Standardized Test",
      articleHead: "Find out differences between SAT, TOEFL, IELTS",
      imgAlt: "card image",
    },
    {
      cardDate: new Date(2012, 0, 6),
      cardImg: require("../public/Search.jpg"),
      imageTitle: "College Search",
      articleHead: "Tips and tricks when researching your options",
      imgAlt: "card image",
    },
    {
      cardDate: new Date(2000, 5, 3),
      cardImg:  require("../public/Application.jpg"),
      imageTitle: "Applying to Schools",
      articleHead: "Timeline and application package preparation",
      imgAlt: "card image",
    },
  ];
  return (
    <Box mb={10}>
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h2"
          textAlign="center"
          color="secondary.main"
          mb={1}
        >
          Articles & news
        </Typography>
        <Typography
          variant="body1"
          maxWidth={700}
          textAlign="center"
          color="custom1.main"
          mb={5}
        >
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </Typography>
        <Grid container justifyContent="space-between" spacing={5}>
          {articleCards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={uuidv4()}>
              <ArticleCard
                cardDate={card.cardDate}
                cardImg={card.cardImg}
                imageTitle={card.imageTitle}
                articleHead={card.articleHead}
                imgAlt={card.imgAlt}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ArticlesSection;
