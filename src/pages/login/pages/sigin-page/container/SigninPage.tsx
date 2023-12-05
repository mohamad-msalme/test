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
        "@media(max-width: 1200px)": {
          transform: "none",
        },
        "@media(max-width: 1100px)": {
          paddingX: "3rem",
          paddingY: "3rem",
          bgcolor: "white",
          borderRadius: "2rem",
        },
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
