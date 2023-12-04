import React from "react";
import { Box, Typography } from "@mui/material";

export const Footer: React.FC = () => (
  <Box justifyContent="center" alignItems="center" display="flex" columnGap={1}>
    <Typography component="span" variant="h3">
      Don’t you have an account?
    </Typography>
    <Typography component="span" variant="h5">
      Sign up
    </Typography>
  </Box>
);
