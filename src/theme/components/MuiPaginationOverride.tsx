import { Components } from "@mui/material";
import { TPaletteOptions } from "../palette";

export const MuiPaginationOverride = (
  props: TPaletteOptions,
): Components["MuiPagination"] => {
  console.log(props);
  return {
    variants: [
      {
        props: {
          variant: "outlined",
          size: "large",
          shape: "rounded",
        },
        style: {
          marginLeft: "auto",
          "& .MuiPagination-ul": {
            columnGap: "1rem",
            "& li": {
              width: "4rem",
              height: "4rem",
            },
            "& .MuiButtonBase-root": {
              border: "none",
              borderRadius: "1.4rem",
              fontSize: "1.5rem",
              lineHeight: 1.3,
              padding: "1rem",
              backgroundColor: "rgba(0, 0, 0, 0.08)",
              color: "rgba(0, 0, 0, 0.88)",
              "&.Mui-selected": {
                backgroundColor: "rgba(0, 102, 204, 1)",
                color: "white",
              },
              "&.Mui-disabled": {
                opacity: "50%",
              },
              "& svg": { width: "2rem", height: "2rem" },
            },
          },
        },
      },
    ],
  };
};
