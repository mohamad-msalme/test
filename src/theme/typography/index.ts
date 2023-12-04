import { TPaletteOptions } from "../palette";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography = ({
  primary,
  text,
  grey,
}: TPaletteOptions): TypographyOptions => {
  return {
    fontFamily: "'Poppins', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      // fotm title
      fontSize: "3.2rem",
      fontWeight: 700,
      lineHeight: 1.5,
      color: text.primary,
      textAlign: "center",
    },
    h2: {
      // form subtitle
      fontSize: "2rem",
      fontWeight: 400,
      color: text.primary,
      lineHeight: 1.5,
      textAlign: "center",
    },
    h3: {
      // remember Me Dont you have account
      fontSize: "1.8rem",
      fontWeight: 400,
      color: text.secondary,
      lineHeight: 1.33,
    },
    h4: {
      // Forget Password
      fontSize: "1.8rem",
      letterSpacing: "-0.2px",
      fontWeight: 400,
      color: primary.main,
      lineHeight: 1.33,
      cursor: "pointer",
    },
    h5: {
      // Sign up
      fontSize: "1.8rem",
      fontWeight: 600,
      color: primary.main,
      lineHeight: 1.33,
      cursor: "pointer",
    },
    h6: {
      // dialog title
      fontSize: "1.6rem",
      fontWeight: 700,
      lineHeight: 1.5,
      color: text.secondary,
      textAlign: "center",
    },
    body1: {
      // grid content
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 2,
      letterSpacing: "0.75px",
      color: grey["A400"],
    },
    body2: {
      // grid name column
      fontSize: "1.4rem",
      fontWeight: 400,
      lineHeight: 1.5,
      color: text.primary,
    },
    subtitle1: {
      // Media privacy
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.33,
      color: text.primary,
    },
    subtitle2: {
      // grid header
      fontSize: "1.6rem",
      fontWeight: 600,
      lineHeight: 2,
      letterSpacing: "0.75px",
    },
    overline: {
      fontSize: "1.2rem",
      fontWeight: 400,
      lineHeight: 1.8,
      letterSpacing: "0.4px",
      color: grey["A200"],
    },
  };
};
