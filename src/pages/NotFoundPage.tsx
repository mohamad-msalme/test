import React from "react";
import { Typography, Box } from "@mui/material";

export const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h1" color="primary" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary">
        The page you are looking for might be unavailable or does not exist.
      </Typography>
    </Box>
  );
};
