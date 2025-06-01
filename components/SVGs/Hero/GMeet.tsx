import React, { ComponentProps } from "react";

const GMeetLogo = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      width="59"
      height="48"
      viewBox="0 0 59 48"
      fill="none"
    >
      <g clipPath="url(#clip0_4181_42633)">
        <path
          d="M33 24L38.6867 30.5L46.3333 35.3867L47.6667 24.04L46.3333 12.9467L38.54 17.24L33 24Z"
          fill="#00832D"
        />
        <path
          d="M0 34.3333V44C0 46.21 1.79 48 4 48H13.6667L15.6667 40.6933L13.6667 34.3333L7.03333 32.3333L0 34.3333Z"
          fill="#0066DA"
        />
        <path
          d="M13.6667 0L0 13.6667L7.03333 15.6667L13.6667 13.6667L15.6333 7.39333L13.6667 0Z"
          fill="#E94235"
        />
        <path d="M13.6667 13.6667H0V34.3334H13.6667V13.6667Z" fill="#2684FC" />
        <path
          d="M55.0667 5.78668L46.3334 12.9467V35.3867L55.1067 42.58C56.4201 43.6067 58.3401 42.67 58.3401 41V7.33335C58.3401 5.64335 56.3767 4.71668 55.0667 5.78668ZM33.0001 24V34.3333H13.6667V48H42.3334C44.5434 48 46.3334 46.21 46.3334 44V35.3867L33.0001 24Z"
          fill="#00AC47"
        />
        <path
          d="M42.3334 0H13.6667V13.6667H33.0001V24L46.3334 12.9533V4C46.3334 1.79 44.5434 0 42.3334 0Z"
          fill="#FFBA00"
        />
      </g>
      <defs>
        <clipPath id="clip0_4181_42633">
          <rect width="58.3333" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GMeetLogo;
