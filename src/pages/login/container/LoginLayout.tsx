import React from "react";
import { Aesthetic } from "../components";
import "./test.scss";
export const LoginLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="container">
      <div className="aesthetic-box">
        <Aesthetic />
      </div>
      <div className="page-box">{children}</div>
    </div>
  );
};
