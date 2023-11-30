import * as React from "react";
import useNavigationItem from "../hooks/useNavigationItem";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

/* The code defines a functional component called `DashboardBreadCrumbs` which is a TypeScript React
component. */
const DashboardBreadCrumbs: React.FC<{}> = () => {
  const { parent, child } = useNavigationItem();
  const pathSegments = [parent, child].filter(Boolean); // Remove empty segments

  const breadcrumbs = pathSegments.map((segment, index) =>
    index === 0 ? (
      <Link
        underline="hover"
        key={segment}
        color="inherit"
        href={`/${pathSegments.slice(0, index + 1).join("/")}`}
      >
        {segment}
      </Link>
    ) : (
      <Typography key={segment}>{segment}</Typography>
    ),
  );

  return (
    <Stack spacing={2}>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.length === 0 ? (
          <Typography color="text.primary">Home</Typography>
        ) : (
          breadcrumbs
        )}
      </Breadcrumbs>
    </Stack>
  );
};

export { DashboardBreadCrumbs as default };
