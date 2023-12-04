import React from "react";

export const EeySlashIcon: React.FC<{ isError?: boolean }> = ({ isError }) => {
  const color = isError ? "rgba(255, 0, 0, 1)" : "black";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.53 9.46992L9.47001 14.5299C8.82001 13.8799 8.42001 12.9899 8.42001 11.9999C8.42001 10.0199 10.02 8.41992 12 8.41992C12.99 8.41992 13.88 8.81992 14.53 9.46992Z"
        stroke={color}
        strokeOpacity="0.88"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.47 3.72998 5.18 5.80998 2.89 9.40998C1.99 10.82 1.99 13.19 2.89 14.6C3.68 15.84 4.6 16.91 5.6 17.77"
        stroke={color}
        strokeOpacity="0.88"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.42001 19.5302C9.56001 20.0102 10.77 20.2702 12 20.2702C15.53 20.2702 18.82 18.1902 21.11 14.5902C22.01 13.1802 22.01 10.8102 21.11 9.40018C20.78 8.88018 20.42 8.39018 20.05 7.93018"
        stroke={color}
        strokeOpacity="0.88"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.51 12.7002C15.25 14.1102 14.1 15.2602 12.69 15.5202"
        stroke={color}
        strokeOpacity="0.88"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.47 14.5298L2 21.9998"
        stroke={color}
        strokeOpacity="0.88"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2L14.53 9.47"
        stroke={color}
        strokeOpacity="0.88"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
