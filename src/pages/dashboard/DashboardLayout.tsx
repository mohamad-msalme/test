import React from "react";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { Outlet } from "react-router";
import {
  DashboardBreadCrumbs,
  DashboardHeader,
  DashboardNavBar,
} from "./components";

export const DashboardLayout: React.FC = () => {
  return (
    <Grid container width="100vw" height="90vh">
      <DashboardNavBar />
      <Grid display="flex" flexDirection="column" rowGap="4rem" item xs={10}>
        <DashboardHeader />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "2rem",
            padding: "1.6rem 4.8rem",
          }}
        >
          <DashboardBreadCrumbs />
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
};
