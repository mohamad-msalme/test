import { Box, Grid } from "@mui/material";
import React from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardBreadCrumbs from "./components/DashboardBreadCrumbs";
import DashboardTable from "./components/DashboardTable";

const DashboardMain: React.FC<{}> = () => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      rowGap="4rem"
      padding="0 4rem"
      item
      xs={10}
    >
      <DashboardHeader />
      <Box display="flex" flexDirection="column" rowGap="2rem">
        <DashboardBreadCrumbs />
        <DashboardTable />
      </Box>
    </Grid>
  );
};

export { DashboardMain as default };
