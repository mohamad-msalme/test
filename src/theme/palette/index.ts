import {
  PaletteOptions,
  SimplePaletteColorOptions,
  TypeText,
} from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

export interface TPaletteOptions extends PaletteOptions {
  primary: SimplePaletteColorOptions;
  error: SimplePaletteColorOptions;
  text: TypeText;
  grey: ColorPartial;
  common: {
    black: string;
    white: string;
  };
}
export const palette: TPaletteOptions = {
  primary: {
    light: "rgba(0, 128, 255, 0.5)",
    main: "#0080FF",
    dark: "#0066CC",
    contrastText: "#fff",
  },
  error: {
    light: "rgba(255, 0, 0, 0.2)",
    main: "rgba(255, 0, 0, 1)",
  },
  text: {
    primary: "#121212",
    secondary: "#000000E0",
    disabled: "#888",
  },
  grey: {
    A100: "#00000014",
    A200: "#00000066",
    A400: "#000000A3",
  },
  common: {
    black: "#000",
    white: "#fff",
  },
};
