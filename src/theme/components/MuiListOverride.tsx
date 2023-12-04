import { Components } from "@mui/material/styles";
import { TPaletteOptions } from "../palette";

export const MuiListOverride = (
  props: TPaletteOptions,
): Components["MuiList"] => {
  console.log(props);
  return {
    defaultProps: {
      disablePadding: true,
      sx: {
        "& .MuiTypography-root": {
          fontSize: "1.5rem",
        },
        "& .MuiListItemIcon-root svg": {
          width: "2rem",
          height: "2rem",
        },
      },
    },
  };
};
