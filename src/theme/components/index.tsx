import { Components } from "@mui/material";
import { MuiCssBaseLine } from "./MuiCssBaseLine";
import { TPaletteOptions } from "../palette";
import { MuiListOverride } from "./MuiListOverride";
import { MuiBadgeOverride } from "./MuiBadgeOverride";
import { MuiButtonOverride } from "./MuiButtonOverride";
import { MuiTextFieldOverride } from "./MuiTextFieldOverride";
import { MuiTypographyOverride } from "./MuiTypographyOverride";
import { MuiBreadcrumbsOverride } from "./MuiBreadcrumbsOverride";

export const components = (props: TPaletteOptions): Components => {
  return {
    MuiBadge: MuiBadgeOverride(props),
    MuiButton: MuiButtonOverride(props),
    MuiBreadcrumbs: MuiBreadcrumbsOverride(props),
    MuiList: MuiListOverride(props),
    MuiTextField: MuiTextFieldOverride(props),
    MuiCssBaseline: MuiCssBaseLine(props),
    MuiTypography: MuiTypographyOverride(props),
  };
};
