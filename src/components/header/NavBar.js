import { Link } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import React from "react";

function NavBar({ navStyle }) {
  const navItems = [
    { linkname: "Home", href: "/" },
    { linkname: "Countries", href: "/countries" },
    { linkname: "Universities", href: "/universities" },
    { linkname: "Consultants", href: "/Consultants" },
    { linkname: "Testimonials", href: "/testimonials" },
    { linkname: "Articles and news", href: "/articles" },
    { linkname: "Contact", href: "/contact" },
  ];
  return (
    <>
      {navItems.map((navItem) => (
        <Link
          href={navItem.href}
          sx={{ fontWeight: 400, fontSize: "20px", lineHeight: "25px" }}
          underline="none"
          color="secondary"
          key={uuidv4()}
          style={navStyle}
        >
          {navItem.linkname}
        </Link>
      ))}
    </>
  );
}

export default NavBar;



// import { Box } from '@mui/material';
// import React from 'react'
// import { Link } from 'react-router-dom';
// import {v4 as uuidv4} from "uuid"

// function NavBar(navStyle) {
//     const NavItems =[
//         {LinkName:"Home", href:"/"},
//         {LinkName:"Countries", href:"/countries"},
//         {LinkName:"Universities", href:"/universities"},
//         {LinkName:"Consultants", href:"/consultants"},
//     ];

//   return (
//     <Box className='menu'>
// {NavItems.map((NavItem)=> (
//     <Link
//     variant="body1"
//     href={NavItem.href}
//     underline="none"
//     color='secondary'
//     key={uuidv4()}
//     >
// {NavItem.LinkName}
//     </Link>
// ))} 
//     </Box>
//   )
// }

// export default NavBar