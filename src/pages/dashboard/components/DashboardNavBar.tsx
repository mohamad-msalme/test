import React from "react";
import { Grid } from "@mui/material";
import { useNavigationItem } from "../hooks/useNavigationItem";
import { DashboardNavBarList } from "./DashboardNavBarList";

import LogoImg from "@icons/Logo.svg";
import noteIcon from "@icons/note.svg";
import activeIcon from "@icons/activeIcon.svg";

const navigationItems = [
  {
    label: "Posts",
    icon: noteIcon,
    path: "/posts",
    children: [
      { label: "Statistics", icon: activeIcon, path: "/posts/statistics" },
      { label: "Management", icon: activeIcon, path: "/posts/management" },
    ],
  },
];

/**
 * The DashboardNavBar component is a functional component in TypeScript React that renders a
 * navigation bar for a dashboard.
 * @returns The DashboardNavBar component is returning a JSX element.
 */
export const DashboardNavBar: React.FC = () => {
  const { child } = useNavigationItem();
  return (
    <Grid item xs={2}>
      <div className="dashboard-nav">
        <div className="logo-box">
          <img src={LogoImg} />
          <div className="text">Socialha</div>
        </div>
        <div className="list-items">
          <div className="subheader">
            {(child ?? "")?.slice(0, 1).toUpperCase() + child?.slice(1)}
          </div>
          {navigationItems.map((item) => (
            <DashboardNavBarList {...item} key={item.path} />
          ))}
        </div>
      </div>
    </Grid>
  );
};
