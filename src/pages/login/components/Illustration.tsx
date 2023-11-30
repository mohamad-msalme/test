import React from "react";
import Frame2 from "../../../icons/Frame2.svg";
import Frame3 from "../../../icons/Frame3.svg";

const Illustration: React.FC = () => {
  return (
    <div className="illustration">
      <img alt="" width="50%" src={Frame2} style={{ textAlign: "right" }} />
      <img alt="" width="50%" src={Frame3} style={{ textAlign: "left" }} />
    </div>
  );
};
export { Illustration as default };
