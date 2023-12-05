import React from "react";

type TArrowRightIconProps = {
  width?: number;
  height?: number;
  color?: string;
};
export const ArrowRightIcon: React.FC<TArrowRightIconProps> = (props) => {
  return (
    <svg
      width={props?.width ? props.width : 20}
      height={props?.height ? props.height : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.42498 17.225C7.26665 17.225 7.10831 17.1667 6.98331 17.0417C6.74165 16.8 6.74165 16.4 6.98331 16.1583L12.4166 10.725C12.8166 10.325 12.8166 9.67502 12.4166 9.27502L6.98331 3.84168C6.74165 3.60002 6.74165 3.20002 6.98331 2.95835C7.22498 2.71668 7.62498 2.71668 7.86665 2.95835L13.3 8.39168C13.725 8.81668 13.9666 9.39168 13.9666 10C13.9666 10.6084 13.7333 11.1834 13.3 11.6084L7.86665 17.0417C7.74165 17.1584 7.58331 17.225 7.42498 17.225Z"
        fill={props?.color ? props.color : "#1A1A1A"}
      />
    </svg>
  );
};
