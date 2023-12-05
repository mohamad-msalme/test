import { Components } from "@mui/material";
import { TPaletteOptions } from "../palette";

export const MuiChipOverride = (
  props: TPaletteOptions,
): Components["MuiChip"] => {
  console.log(props);
  return {
    defaultProps: {
      clickable: true,
      skipFocusWhenDisabled: true,
    },
    variants: [
      {
        props: { variant: "filled", color: "primary", size: "medium" },
        style: {
          display: "flex",
          alignItems: "center",
          columnGap: "0.6rem",
          borderRadius: "1.1rem",
          padding: "0.8rem",
          backgroundColor: "rgba(229, 242, 255, 1)",
          color: "rgba(0, 128, 255, 1)",
          fontSize: "1.2rem",
          lineHeight: 1.4,
          fontWeight: 400,
          ":hover": {
            backgroundColor: "rgba(229, 242, 255, 20%)",
            color: "rgba(0, 128, 255, 1)",
          },
          "& .MuiChip-label": {
            padding: 0,
          },
          "& svg": {
            order: 1,
          },
        },
      },
      {
        props: { variant: "filled", color: "secondary", size: "medium" },
        style: {
          display: "flex",
          alignItems: "center",
          borderRadius: "1.1rem",
          padding: "0.8rem",
          backgroundColor: "rgba(0, 0, 0, 0.08)",
          color: "rgba(0, 0, 0, 1)",
          fontSize: "1.2rem",
          lineHeight: 1.4,
          fontWeight: 400,
          ":hover": {
            backgroundColor: "rgba(0, 0, 0, 20%)",
            color: "rgba(0, 0, 0, 1.2)",
          },
          "& .MuiChip-label": {
            padding: 0,
          },
          "& svg": {
            order: 1,
          },
        },
      },
    ],
  };
};
