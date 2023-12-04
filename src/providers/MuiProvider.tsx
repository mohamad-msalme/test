import React from "react";
import { theme } from "../theme";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

export const MuiProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  );
};
