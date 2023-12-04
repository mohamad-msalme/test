import { TPaletteOptions } from "../palette";
import { Components } from "@mui/material/styles";

export const MuiTypographyOverride = ({
  error,
}: TPaletteOptions): Components["MuiTypography"] => ({
  variants: [
    {
      props: {
        color: "error",
      },
      style: {
        color: error.main,
        fontWeight: 400,
        fontSize: "1.5rem",
        lineHeight: 1.5,
      },
    },
  ],
});
