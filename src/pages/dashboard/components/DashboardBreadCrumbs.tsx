import React from "react";
import { ArrowRightIcon } from "@icons/ArrowRightIcon";
import { useNavigationItem } from "../hooks/useNavigationItem";
import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";

/* The code is defining a functional component called `DashboardBreadCrumbs` that renders a breadcrumb
navigation component. */
export const DashboardBreadCrumbs: React.FC = () => {
  const { parent, child } = useNavigationItem();
  const pathSegments = [parent, child].filter(Boolean); // Remove empty segments

  const breadcrumbs = pathSegments.map((segment, index) =>
    index === 0 ? (
      <Link
        underline="hover"
        key={segment}
        color="inherit"
        href={`/${pathSegments.slice(0, index + 1).join("/")}`}
        sx={{
          color: "rgba(0, 0, 0, 0.88)",
          fontSize: "1.8rem",
          fontWeight: 400,
          lineHeight: 1.33,
        }}
      >
        {(segment?.slice(0, 1).toUpperCase() ?? "") + (segment?.slice(1) ?? "")}
      </Link>
    ) : (
      <Typography
        variant="h3"
        sx={(theme) => ({ color: theme.palette.primary.main })}
        key={segment}
      >
        {(segment?.slice(0, 1).toUpperCase() ?? "") + (segment?.slice(1) ?? "")}
      </Typography>
    ),
  );

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<ArrowRightIcon color="rgba(0, 0, 0, 0.4)" />}
      >
        {breadcrumbs.length === 0 ? (
          <Typography color="text.primary">Home</Typography>
        ) : (
          breadcrumbs
        )}
      </Breadcrumbs>
    </Stack>
  );
};
