import React from "react";

import qwe from "../../../icons/Slogan.svg";
import asd from "../../../icons/illustration.svg";
import LogoImg from "../../../icons/LogoImg.svg";

import { Box, Stack, Typography } from "@mui/material";

export const Aesthetic: React.FC = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "start",
        rowGap: "3rem",
        "& > *": {
          zIndex: 100,
        },
      }}
      className="aesthetic-section"
    >
      <Box
        className="logo-img-box"
        padding="3.2rem 0 0 5rem"
        display="flex"
        columnGap="1.2rem"
      >
        <img src={LogoImg} />
        <Typography
          fontSize="2.4rem"
          fontWeight={600}
          lineHeight={1.5}
          color="white"
          letterSpacing="-0.2px"
        >
          Socialha
        </Typography>
      </Box>
      <Box className="slogan-img-box" sx={{ padding: " 0 0 0 1rem" }}>
        <img src={qwe} alt="" />
      </Box>
      <Box className="illustration-img-box" pl="3rem">
        <img src={asd} />
      </Box>
    </Stack>
  );
};
