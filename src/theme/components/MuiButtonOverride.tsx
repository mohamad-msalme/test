import { ThemeOptions } from "@mui/material/styles";

const MuiButtonOverride: ThemeOptions["components"]["MuiButton"] = {
  defaultProps: {
    disableRipple: true,
  },
  variants: [
    {
      props: { variant: "contained", color: "secondary" },
      style: {
        borderRadius: "1.4rem",
        fontSize: "1.5rem",
        lineHeight: 1.2,
        fontWeight: 400,
        padding: "1rem 2rem",
        textAlign: "center",
        color: "#0080FF",
        border: "1.25px solid #0080FF",
        backgroundColor: "white",
        textTransform: "none",
        transition: "all 0.3s",
        ":hover": {
          color: "white",
          backgroundColor: "#0080FF",
        },
      },
    },
    {
      props: { variant: "contained", color: "primary" },
      style: {
        borderRadius: "1.4rem",
        fontSize: "1.5rem",
        padding: "1rem 2rem",
        lineHeight: 1.2,
        fontWeight: 400,
        textAlign: "center",
        color: "white",
        border: "1.25px solid #0080FF",
        backgroundColor: "#0080FF",
        textTransform: "none",
        transition: "all 0.3s",
        ":hover": {
          color: "#0080FF",
          backgroundColor: "white",
        },
      },
    },
  ],
};

export default MuiButtonOverride;
