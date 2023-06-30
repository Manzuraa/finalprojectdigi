import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

function FeedbackCard({ ava, title, city, country, feedback, avaUrl }) {
  return (
    <Card sx={{ borderRadius: 10 }}>
      <CardHeader
        sx={{ px: 4, pt: 4 }}
        avatar={
          <Avatar
            size="large"
            src={avaUrl}
            sx={{ width: "77px", height: "77px", bgcolor: "yellow" }}
          >
            {ava}
          </Avatar>
        }
        titleTypographyProps={{
          variant: "h6",
          color: "secondary.main",
          textTransform: "capitalize",
        }}
        subheaderTypographyProps={{
          variant: "body1",
          color: "custom1.main",
          textTransform: "capitalize",
        }}
        title={title}
        subheader={city + ", " + country}
      />

      <CardContent sx={{ px: 4 }}>
        <Typography variant="body1" color="custom1.main">
          {feedback}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FeedbackCard;
