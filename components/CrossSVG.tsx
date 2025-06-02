import React, { CSSProperties } from "react";
import { cn } from "@/utils/cn";

const CrossSVG = ({
  fill,
  className,
  ...rest
}: {
  className?: string;
  style?: CSSProperties;
  fill?: string;
}) => {
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
      className={cn("rounded-full size-6", className)}
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
