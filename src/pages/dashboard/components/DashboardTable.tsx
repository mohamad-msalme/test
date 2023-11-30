import { TextField } from "@mui/material";
import React from "react";
import searchImg from "../../../icons/search.svg";
import PostTable from "./PostTable";

const DashboardTable: React.FC<{}> = () => {
  return (
    <div className="dashboard-table">
      <div className="dashboard-table-header">
        <TextField
          InputProps={{
            startAdornment: <img color="black" src={searchImg} />,
          }}
          placeholder="Type here "
          variant="outlined"
        />
      </div>
      <PostTable />
    </div>
  );
};

export { DashboardTable as default };
