import React from "react";

type TSearchNormalIcon = {
  width?: string;
  height?: string;
  color?: string;
};
export const SearchNormalIcon: React.FC<TSearchNormalIcon> = (props) => (
  <svg
    width={props.width ? props.width : "24"}
    height={props.height ? props.height : "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
      stroke={props.color ? props.color : "rgba(0, 0, 0, 0.64)"}
      strokeOpacity="0.88"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.9299 20.6888C19.4599 22.2888 20.6699 22.4488 21.5999 21.0488C22.4499 19.7688 21.8899 18.7188 20.3499 18.7188C19.2099 18.7088 18.5699 19.5988 18.9299 20.6888Z"
      stroke={props.color ? props.color : "rgba(0, 0, 0, 0.64)"}
      strokeOpacity="0.88"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
