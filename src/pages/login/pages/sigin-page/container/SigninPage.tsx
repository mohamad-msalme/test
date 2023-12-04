import React from "react";
import { Stack } from "@mui/material";
import { Footer, Form, Header } from "../components";

export const SigninPage: React.FC = () => {
  return (
    <Stack
      sx={{
        transform: "translateX(40%)",
        display: "flex",
        rowGap: "8rem",
      }}
    >
      <Header />
      <Stack rowGap="3.2rem">
        <Form />
        <Footer />
      </Stack>
    </Stack>
  );
};
