import { Box, Container } from "@mui/material"
import React from "react"
import FooterMain from "./footer/FooterMain"
import Copyright from "./footer/Copyright"


function Footer() {
    return (
    <Box>
        <Container maxWidth="80%">
            <Box  sx={{ bgcolor:"#BFACE2"}}>
                <FooterMain />
                <Copyright />
                </Box> 
                </Container>
    </Box>
    )
}
export default Footer