// import { ThemeProvider } from "@emotion/react";
// import { CssBaseline } from "@mui/material";
// import { appTheme } from "./themes/theme";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import News from "./pages/News";
// import About from "./pages/About"; 
// import NoPage from "./pages/NoPage";
// function App() {
//   return (
//     <ThemeProvider theme={appTheme}>
//       <CssBaseline enableColorScheme/>
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//           <Route index element={<Home/>}/>
//           <Route path="news" element={<News/>}/>
//           <Route path="about" element={<About/>}/>
//           <Route path="*" element={<NoPage/>}/>
//         </Route>
//       </Routes>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }
// export default App;

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from "./pages/Home"
import Countries from "./pages/Countries"
import Universities from "./pages/Universities"
import Consultants from "./pages/Consultants"

function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="countries" element={<Countries/>}/>
        <Route path="universities" element={<Universities/>}/>
        <Route path="consultants" element={<Consultants/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App