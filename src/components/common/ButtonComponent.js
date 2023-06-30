import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

function ButtonComponent({ buttonText, buttonColor, arrowColor }) {
  return (
    <Button
      variant="contained"
      color={buttonColor}
      sx={{
        py: { xs: 1.5, sm: 2, md: 3 },
        px: { xs: 4, md: 6 },
        borderRadius: { xs: '14px', sm: '16px', md: '18px' },
        textTransform: "capitalize",
      }}
    >
      {buttonText} <ArrowForward sx={{ ml: 1 }} color={arrowColor} />
    </Button>
  );
}

export default ButtonComponent;
