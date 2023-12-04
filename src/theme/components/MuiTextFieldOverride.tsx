import { Components } from "@mui/material/styles";
import { TPaletteOptions } from "../palette";

export const MuiTextFieldOverride = ({
  primary,
  error,
  text,
  grey,
}: TPaletteOptions): Components["MuiTextField"] => {
  console.log(primary);
  return {
    defaultProps: {
      hiddenLabel: true,
      size: "medium",
      InputProps: {
        disableUnderline: true,
      },
    },
    variants: [
      {
        props: { variant: "outlined", size: "small" },
        style: {
          "& .MuiInputBase-root.MuiOutlinedInput-root": {
            borderRadius: "1.4rem",
            transition: "all 0.3s",
            fontSize: "1.5rem",
            ":hover": {
              backgroundColor: "rgba(0, 0, 0, 0.12)",
              boxShadow: " 0 0 0  1.25px rgba(0, 0, 0, 0.12)",
            },
            "&.Mui-focused": {
              backgroundColor: "white",
              boxShadow: " 0 0 0  2.5px rgba(0, 128, 255, 1)",
            },
            "& .MuiButtonBase-root.MuiIconButton-root": {
              ":hover": {
                backgroundColor: "transparent",
              },
            },
            "& .MuiInputBase-input.MuiOutlinedInput-input": {
              cursor: "pointer",
              padding: "1rem",
              letterSpacing: "-0.2px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
              boxShadow: " 0 0 0  1.25px rgba(0, 0, 0, 0.12)",
            },
          },
        },
      },
      {
        props: { variant: "standard" },
        style: {
          width: "100%",
          flex: 1,
          fontSize: "2rem",
          height: "100%",
          "& .MuiInputBase-root.MuiInput-root": {
            "&:before": {
              borderBottom: "none",
            },
            "& .MuiInputBase-input.MuiInput-input": {
              padding: "2rem",
              fontSize: "1.5rem",
            },
          },
        },
      },
      {
        props: { variant: "filled" },
        style: {
          "& .MuiInputBase-root.MuiFilledInput-root": {
            borderRadius: "1.9rem",
            backgroundColor: grey["A100"],
            transition: "all 0.3s ease-in-out",
            color: text.secondary,
            ":hover": {
              backgroundColor: "white",
              boxShadow:
                "0px 9.625px 13.125px 0px #00000033, 0px 7.875px 40.25px 0px #0000001F, 0px 21px 33.25px 0px #00000024",
            },
            ":focus-within": {
              boxShadow: `0 0 0 0.35rem ${primary.main}`,
              backgroundColor: grey["A100"],
            },
            "&.Mui-error": {
              backgroundColor: error.light,
              ":focus-within": {
                boxShadow: `0 0 0 0.35rem ${error.main}`,
              },
            },
            "& .MuiInputBase-input.MuiFilledInput-input": {
              padding: "1.4rem",
              fontSize: "2.1rem",
              lineHeight: 1.3,
              letterSpacing: "-0.2px",
              cursor: "pointer",
            },
          },
        },
      },
    ],
  };
};
