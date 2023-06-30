import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Stack,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { Link } from "react-router-dom";
  import { ChevronRight } from "@mui/icons-material";
  
  function ArticleCard({ cardDate, cardImg, imageTitle, articleHead, imgAlt }) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return (
      <Card
        variant="outlined"
        sx={{
          borderRadius: "70px",
          "&:hover": {
            bgcolor: "custom.main",
          },
        }}
      >
        <CardActionArea>
          <Link to="/contact">
            <CardContent p={4} position="relative">
              <CardMedia
                component="img"
                height={290}
                image={cardImg}
                alt={imgAlt}
                sx={{ borderRadius: "70px 70px 0 0", mb: 2 }}
              />
              <Typography
                position="absolute"
                top={260}
                left={25}
                variant="caption"
                px={1.5}
                py={0.5}
                color="custom1.main"
                sx={{
                  bgcolor: "#fff",
                  borderRadius: "10px 10px 10px 0",
                  textTransform: "capitalize",
                }}
              >
                {imageTitle}
              </Typography>
              <Typography
                variant="h6"
                color="secondary.main"
                sx={{ textTransform: "capitalize", maxWidth: 5 / 6 }}
              >
                {articleHead}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                py={2}
              >
                <Typography variant="caption" color="custom1.main">
                  {cardDate.getDate()}&nbsp;{months[cardDate.getMonth()]},&nbsp;
                  {cardDate.getFullYear()}
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "custom.main",
                    borderRadius: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  py="8px"
                  px="9px"
                >
                  <ChevronRight fontSize="large" color="secondary" />
                </Box>
              </Stack>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    );
  }
  
  export default ArticleCard;