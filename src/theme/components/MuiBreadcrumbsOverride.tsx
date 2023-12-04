import { Components } from "@mui/material";
import { TPaletteOptions } from "../palette";

export const MuiBreadcrumbsOverride = (
  props: TPaletteOptions,
): Components["MuiBreadcrumbs"] => {
  console.log(props);
  return {
    defaultProps: {
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
};
