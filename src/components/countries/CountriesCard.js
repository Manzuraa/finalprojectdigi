import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CountriesCard({title, image, linkUrl, description}) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="country image"
          link={linkUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{textAlign:"center"}}>
            {title}
          </Typography>
          {/* <Typography variant="body1" color="secondary">
            {description}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}