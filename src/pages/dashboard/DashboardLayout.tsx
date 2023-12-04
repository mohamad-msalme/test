import React from "react";
import Grid from "@mui/material/Grid";
import DashboardMain from "./DashboardMain";
import DashboardNavBar from "./components/DashboardNavBar";
import { Outlet } from "react-router";

export const DashboardLayout: React.FC = () => {
  return (
    <Grid container width="100vw" height="90vh">
      <DashboardNavBar />
      <DashboardMain />
      <Outlet />
    </Grid>
  );
};
