import React from "react";
import { Box } from "@mui/material";

export const TableFooter: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      padding: "1rem 2rem",
    }}
  >
    {children}
  </Box>
);
