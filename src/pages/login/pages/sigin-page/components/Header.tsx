import React from "react";
import { Stack, Typography } from "@mui/material";

export const Header: React.FC = () => (
  <Stack display="flex" rowGap="1.2rem">
    <Typography variant="h1">Welcome to Socialha 👋🏼</Typography>
    <Typography variant="h2">Please enter your information below</Typography>
  </Stack>
);
