// buttonTheme.ts
import { ThemeOptions } from "@mui/material/styles";

const MuiBadgeOverride: ThemeOptions["components"]["MuiBadge"] = {
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

export default MuiBadgeOverride;
