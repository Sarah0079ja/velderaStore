import React from 'react'
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Success = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>success</AlertTitle>
        <h1>Thankyou for your purchase</h1>
        <strong>Your order is on its way!!!</strong>
      </Alert>
    </Box>
  );
}

export default Success