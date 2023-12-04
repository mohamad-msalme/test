import { Components } from "@mui/material";
import { TPaletteOptions } from "../palette";

export const MuiCssBaseLine = (
  props: TPaletteOptions,
): Components["MuiCssBaseline"] => {
  console.log(props);
  return {
    styleOverrides: {
      html: {
        fontSize: "62.52%",
      },
      "*": {
        padding: 0,
        marging: 0,
        boxSizing: "border-box",
      },
    },
  };
};
