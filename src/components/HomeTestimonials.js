import { Box, Container, Grid, Stack, Typography,} from '@mui/material'
import React from 'react'
import FeedbackCard from './testimonials/FeedbackCard'

function HomeTestimonials() {
    const feed = [
        {
          ava: "R",
          avaUrl: require("../public/Bahar.jpg"),
          title: "Bahar Meredova",
          city: "New York University",
          country: "USA",
          feedback:
            "Lorem Ipsum is simply dummy  text of the typesetting industry. Ipsum has been.",
        },
        {
          ava: "R",
          avaUrl:require("../public/Meret.jpg"),
          title: "Meret Nepesov",
          city: "Middle East Technical University",
          country: "Turkey",
          feedback:
            "Lorem Ipsum is simply dummy  text of the typesetting industry. Ipsum has been.",
        },
        {
          ava: "R",
          avaUrl: require("../public/Merjen.jpg"),
          title: "Merjen Babayeva",
          city: "Westminster University",
          country: "UK",
          feedback:
            "Lorem Ipsum is simply dummy  text of the typesetting industry. Ipsum has been.",
        },
      ];
  return (
    <Stack sx={{ flexDirection: "column", }}>
        <Container >
        <Stack >
            <Typography
              textAlign="center"
              variant="h2"
              color="secondary.main"
              sx={{ p: 2 }}
            >
              Here is what our students say
            </Typography>
            <Typography textAlign="center" variant="body1" sx={{ pb: 2 }}>
              Success stories of students who got into their dream schools with Yokary Okuw
            </Typography>
          </Stack>
          <Grid container spacing={3} justifyContent="center">
            {feed.map((feed) => (
              <Grid item xs={12} sm={6} md={4}>
                <FeedbackCard
                  ava={feed.ava}
                  title={feed.title}
                  city={feed.city}
                  country={feed.country}
                  feedback={feed.feedback}
                  avaUrl={feed.avaUrl}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
    </Stack>
  )
}

export default HomeTestimonials