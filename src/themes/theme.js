import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#CDA274",
      contrastText: "#fff  ",
    },
    secondary: {
      main: "#292F36",
      contrastText: "#fff  ",
    },
    custom: {
      main: "#C06BCE",
    },
    custom1: {
      main: "#4D5053",
    },
  },

  typography: {
    allVariants: {
      fontFamily: "Jost, sanf-serif",
    },
    h1: {
      fontFamily: "DM Serif Display, serif",
      fontSize: "85px",
      "@media (max-width:900px)": {
        fontSize: "60px",
      },
      "@media (max-width:600px)": {
        fontSize: "50px",
      },
    },
    h2: {
      fontFamily: "DM Serif Display, serif",
      fontSize: "50px",
      "@media (max-width:900px)": {
        fontSize: "45px",
      },
      "@media (max-width:600px)": {
        fontSize: "40px",
      },
    },
    h4: {
      fontFamily: "DM Serif Display, serif",
      fontSize: "40px",
      "@media (max-width:900px)": {
        fontSize: "35px",
      },
      "@media (max-width:600px)": {
        fontSize: "30px",
      },
    },
    h6: {
      fontFamily: "DM Serif Display, serif",
      fontSize: "25px",
      "@media (max-width:900px)": {
        fontSize: "22px",
      },
      "@media (max-width:600px)": {
        fontSize: "20px",
      },
    },

    body1: {
      fontSize: "22px",
      "@media (max-width:900px)": {
        fontSize: "20px",
      },
      "@media (max-width:600px)": {
        fontSize: "18px",
      },
    },
    button: {
      fontWeight: "600",
      fontSize: "20px",
      "@media (max-width:900px)": {
        fontSize: "18px",
      },
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
    },
  },
});
