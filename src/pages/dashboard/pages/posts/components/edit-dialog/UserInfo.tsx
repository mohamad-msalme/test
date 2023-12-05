import React from "react";
import account from "@icons/account.png";
import { Typography } from "@mui/material";

type TUserInfoprops = {
  name: string;
  date: string;
};

export const UserInfo: React.FC<TUserInfoprops> = ({ name, date }) => (
  <div
    style={{ display: "flex", alignItems: "center", columnGap: "2rem" }}
    className="card-header"
  >
    <img src={account} className="avatar" alt="User Avatar" />
    <div
      style={{ display: "flex", flexDirection: "column", rowGap: "0.3rem" }}
      className="text-box"
    >
      <Typography fontWeight={600} variant="body2">
        {name}
      </Typography>
      <Typography variant="overline">{date}</Typography>
    </div>
  </div>
);
