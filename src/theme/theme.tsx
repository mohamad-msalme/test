import React from "react";
import { createTheme } from "@mui/material/styles";

import MuiListOverride from "./components/MuiListOverride";
import MuiBadgeOverride from "./components/MuiBadgeOverride";
import MuiButtonOverride from "./components/MuiButtonOverride";
import MuiBreadcrumbsOverride from "./components/MuiBreadcrumbsOverride";
import MuiTextFieldOverride from "./components/MuiTextFieldOverride";

const theme = createTheme({
  components: {
    MuiButton: MuiButtonOverride,
    MuiBadge: MuiBadgeOverride,
    MuiBreadcrumbs: MuiBreadcrumbsOverride,
    MuiList: MuiListOverride,
    MuiTextField: MuiTextFieldOverride,
  },
});

export { theme as default };
