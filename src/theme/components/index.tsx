import { Components } from "@mui/material";
import { MuiCssBaseLine } from "./MuiCssBaseLine";
import { TPaletteOptions } from "../palette";
import { MuiChipOverride } from "./MuiChipOverride";
import { MuiListOverride } from "./MuiListOverride";
import { MuiBadgeOverride } from "./MuiBadgeOverride";
import { MuiButtonOverride } from "./MuiButtonOverride";
import { MuiTextFieldOverride } from "./MuiTextFieldOverride";
import { MuiPaginationOverride } from "./MuiPaginationOverride";
import { MuiTypographyOverride } from "./MuiTypographyOverride";
import { MuiBreadcrumbsOverride } from "./MuiBreadcrumbsOverride";

/**
 * The function exports a constant named "components" which returns an object with various components
 * and their corresponding overrides based on the given props.
 * @param {TPaletteOptions} props - The "props" parameter is of type "TPaletteOptions", which is a type
 * that represents the options for customizing the theme palette.
 * @returns an object of components. The components include overrides for MuiChip, MuiList, MuiBadge,
 * MuiButton, MuiCssBaseline, MuiTextField, MuiTypography, MuiPagination, and MuiBreadcrumbs.
 */
export const components = (props: TPaletteOptions): Components => {
  return {
    MuiChip: MuiChipOverride(props),
    MuiList: MuiListOverride(props),
    MuiBadge: MuiBadgeOverride(props),
    MuiButton: MuiButtonOverride(props),
    MuiCssBaseline: MuiCssBaseLine(props),
    MuiTextField: MuiTextFieldOverride(props),
    MuiTypography: MuiTypographyOverride(props),
    MuiPagination: MuiPaginationOverride(props),
    MuiBreadcrumbs: MuiBreadcrumbsOverride(props),
  };
};
