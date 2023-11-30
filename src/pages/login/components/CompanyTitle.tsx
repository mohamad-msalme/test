import React from "react";
import Slogan from "../../../icons/Slogan.svg";

const CompanyTitle: React.FC = () => {
  return (
    <div className="title-box">
      <img src={Slogan}></img>
    </div>
  );
};

export { CompanyTitle as default };
