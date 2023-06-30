import { Box, Link, Stack, TextField, Typography } from '@mui/material';
import React from 'react'
import ButtonComponent from './common/ButtonComponent';

function HomeContact() {
  return (
    <Box component="section" sx={{display: "flex", flexDirection: "column", justifyContent: "center", mb:"20px"}}>
        <Stack sx={{justifyContent:"center"}}>
          <Typography
            textAlign="center"
            variant="h2"
            color="secondary.main"
            sx={{ p: 2 }}
          >
            Get in touch with us
          </Typography>
          <Typography
          textAlign="center"
            variant="body1"
            sx={{ pb: 2 }}
          >
            We will get back to your questions here
          </Typography>
          </Stack>
    
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '80%', ml: "10%"},
    }}
    
  >
    <TextField color="secondary" id="nameandsurname" label="Your name and surname" variant="outlined" required fullWidth />
    <TextField color="secondary" id="email" label="Your email address" variant="outlined" required type='email'  fullWidth />
    <TextField color="secondary" id="message" label="Your message" variant="outlined" multiline rows={4} fullWidth  />
  
  <Link variant="button" to="/">
            <ButtonComponent
              buttonText="Submit"
              buttonColor="secondary"           
            />
             </Link>
             </Box>
  </Box>
);
}

export default HomeContact