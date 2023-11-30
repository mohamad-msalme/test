import React from "react";
import { ThemeOptions } from "@mui/material/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MuiBreadcrumbsOverride: ThemeOptions["components"]["MuiBreadcrumbs"] = {
  defaultProps: {
    separator: <NavigateNextIcon fontSize="large" />,
    sx: {
      fontSize: "1.8rem",
      textDecoration: "none",
      weight: 400,
      color: "rgba(0, 0, 0, 88%)",
      "& .MuiTypography-root:hover": {
        textDecoration: "none", // Remove textDecoration on hover
      },
      "& .MuiTypography-root.MuiTypography-body1": {
        fontSize: "1.8rem",
        color: "#0080FF",
      },
    },
  },
};

export default MuiBreadcrumbsOverride;
