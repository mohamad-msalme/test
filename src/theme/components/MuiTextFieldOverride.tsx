import { ThemeOptions } from "@mui/material/styles";

const MuiTextFieldOverride: ThemeOptions["components"]["MuiTextField"] = {
  defaultProps: {
    hiddenLabel: true,
    size: "medium",
  },
  variants: [
    {
      props: { variant: "outlined" },
      style: {
        width: "31.6rem",
        borderRadius: "1.4rem",
        "& .MuiInputBase-root.MuiOutlinedInput-root": {
          borderRadius: "2rem",
          border: "none",
          "& .MuiInputBase-input.MuiOutlinedInput-input": {
            border: "none",
            borderRadius: "2rem",
            borderColor: "red",
            padding: "1rem",
            fontSize: "1.5rem",
            fontWeight: 400,
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
  ],
};

export default MuiTextFieldOverride;
