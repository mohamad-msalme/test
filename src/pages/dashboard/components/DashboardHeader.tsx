import { Badge, IconButton, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import notificationIcon from "../../../icons/notification.svg";
import setting from "../../../icons/setting.svg";
import account from "../../../icons/account.png";

/* The code defines a functional component called `DashboardHeader` using the arrow function syntax. It
is a React component that renders a header section for a dashboard. */
const DashboardHeader: React.FC = () => {
  return (
    <div className="dashboard-header">
      <div className="search">
        <IconButton aria-label="search">
          <SearchIcon sx={{ width: "3rem", height: "2rem" }} />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, fontSize: "2rem", height: "6vh" }} // Add flex: 1 to make InputBase take the remaining space
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div className="notifications">
        <Badge variant="standard" badgeContent={1} max={999}>
          <img src={notificationIcon} alt="Notification" />
        </Badge>
        <Badge>
          <img src={setting} alt="Settings" />
        </Badge>
        <img style={{ cursor: "pointer" }} src={account} alt="Account" />
      </div>
    </div>
  );
};

export { DashboardHeader as default };
