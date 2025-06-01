import React, { CSSProperties } from "react";

const CrossSVG = (props: {
  className?: string;
  style?: CSSProperties;
  fill?: string;
}) => {
  const { fill, ...rest } = props;
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill={fill || "#F4F4F4"}
      stroke="#C0C2C4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <rect
        width="28"
        height="28"
        fill={fill || "#F4F4F4"}
        stroke="transparent"
      />
      <path d="M7 14h14" />
      <path d="M14 7v14" />
    </svg>
  );
};

export default CrossSVG;
