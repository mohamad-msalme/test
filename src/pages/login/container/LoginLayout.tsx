import React from "react";

import { Outlet } from "react-router-dom";
import { Aesthetic } from "../components";

import "./test.scss";
export const LoginLayout: React.FC = () => {
  return (
    <div className="container">
      <div className="aesthetic-box">
        <Aesthetic />
      </div>
      <div className="page-box">
        <Outlet />
      </div>
    </div>
  );
};
