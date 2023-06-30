import { Box, Link } from '@mui/material'
import React from 'react'
import logo from "../../public/logo.svg"


function Logo() {
  return (
    <Box >
      <Link href='/' 
      >
      <img src={logo} alt='logo' className='logoimage'/>
      </Link>
    </Box>
  )
}

export default Logo