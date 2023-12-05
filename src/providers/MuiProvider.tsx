import React from "react";
import { theme } from "../theme";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

/**
 * The MuiProvider component is a wrapper that provides Material-UI theme and CSS baseline to its
 * children.
 * @param  - The `MuiProvider` component is a functional component that takes in a single prop called
 * `children`. The `children` prop is of type `React.PropsWithChildren`, which means it can accept any
 * valid React component as its children.
 * @returns The MuiProvider component is returning a JSX element. It is wrapping the children
 * components with a ThemeProvider and CssBaseline component from the Material-UI library.
 */
export const MuiProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  );
};
