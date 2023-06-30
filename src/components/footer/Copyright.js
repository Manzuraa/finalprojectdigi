import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import React from "react";

function CopyRight() {
  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="body1" align="center">
        Copyright &copy; Yokaryokuw | Designed by &nbsp;
        <Link
          underline="none"
          to="https://www.figma.com/file/2ZLOhqewIKeHkr4Gyk8KPH/Interior-Design-Webflow-Website-Template-(Community)?type=design&node-id=1-2499&t=8WFEchhMEeq3nRhx-0"
        >
          Digi Templates &nbsp;
        </Link>
          Developed by &nbsp;
        <Link to="www.linkedin.com/in/manzura-allabergenova-27502976">
          Manzura
        </Link>
      </Typography>
    </Box>
  );
}

export default CopyRight;
