import { Components } from "@mui/material/styles";
import { TPaletteOptions } from "../palette";

export const MuiButtonOverride = ({
  primary,
  common,
}: TPaletteOptions): Components["MuiButton"] => {
  return {
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
          color: primary.main,
          border: `1.25px solid ${primary.main}`,
          backgroundColor: "white",
          textTransform: "none",
          transition: "all 0.3s",
          ":hover": {
            color: "white",
            backgroundColor: primary.main,
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
          border: `1.25px solid ${primary.main}`,
          backgroundColor: primary.main,
          textTransform: "none",
          transition: "all 0.3s",
          ":hover": {
            color: primary.main,
            backgroundColor: "white",
          },
        },
      },
      {
        props: { variant: "contained", color: "primary", size: "large" },
        style: {
          border: "none",
          borderRadius: "1.9rem",
          fontSize: "1.8rem",
          padding: "1.4rem 2.4rem",
          lineHeight: 1.2,
          fontWeight: 700,
          textAlign: "center",
          color: common.white,
          backgroundColor: primary.main,
          textTransform: "none",
          transition: "all 0.3s",
          ":hover": {
            color: common.white,
            backgroundColor: primary.dark,
            boxShadow: "none",
          },
          ":active": {
            boxShadow: "none",
            color: common.white,
            backgroundColor: "#004D99",
          },
          ":disabled": {
            backgroundColor: primary.light,
            color: common.white,
          },
        },
      },
    ],
  };
};
