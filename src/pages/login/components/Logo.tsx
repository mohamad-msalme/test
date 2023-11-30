import React from "react";
import { Typography } from "@mui/material";
import logoImg from "../../../icons/LogoImg.svg";

const Logo: React.FC<{}> = () => {
  return (
    <div className="logo-box">
      <img src={logoImg}></img>
      <Typography className="logo-text">Socialha</Typography>
    </div>
  );
};
export { Logo as default };
