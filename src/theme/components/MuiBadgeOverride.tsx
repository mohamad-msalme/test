import { Components } from "@mui/material";
import { TPaletteOptions } from "../palette";

export const MuiBadgeOverride = (
  props: TPaletteOptions,
): Components["MuiBadge"] => {
  console.log(props);
  return {
    defaultProps: {
      sx: {
        cursor: "pointer",
      },
    },
    variants: [
      {
        props: { variant: "standard" },
        style: {
          "& .MuiBadge-badge": {
            transform: "scale(0.8)",
            backgroundColor: "#FF3333",
            color: "white",
            width: "0.8rem",
            height: "2rem",
            fontSize: "1.2rem",
            padding: "0 0.6rem",
          },
        },
      },
    ],
  };
};
