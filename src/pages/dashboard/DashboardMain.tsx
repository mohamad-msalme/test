import { Box, Grid } from "@mui/material";
import React from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardBreadCrumbs from "./components/DashboardBreadCrumbs";
import DashboardTable from "./components/DashboardTable";

const DashboardMain: React.FC<{}> = () => {
  return (
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
        <DashboardTable />
      </Box>
    </Grid>
  );
};

export { DashboardMain as default };
