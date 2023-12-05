import React from "react";
type TChipChevronDownicon = {
  width?: string;
  height?: string;
  color?: string;
};
export const ChipChevronDownicon: React.FC<TChipChevronDownicon> = (props) => (
  <svg
    width={props.width ? props.width : "24"}
    height={props.height ? props.height : "24"}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 19.2C15.5333 19.2 15.0667 19.02 14.7133 18.6667L10.3667 14.32C10.1733 14.1267 10.1733 13.8067 10.3667 13.6133C10.56 13.42 10.88 13.42 11.0733 13.6133L15.42 17.96C15.74 18.28 16.26 18.28 16.58 17.96L20.9267 13.6133C21.12 13.42 21.44 13.42 21.6333 13.6133C21.8267 13.8067 21.8267 14.1267 21.6333 14.32L17.2867 18.6667C16.9333 19.02 16.4667 19.2 16 19.2Z"
      fill={props.color ? props.color : "black"}
      fillOpacity="0.88"
    />
  </svg>
);
