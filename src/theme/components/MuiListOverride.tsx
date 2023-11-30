import { ThemeOptions } from "@mui/material/styles";

const MuiListOverride: ThemeOptions["components"]["MuiList"] = {
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

export default MuiListOverride;
