import React, { ComponentProps } from "react";

const TimeZone = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_4294_9172)">
        <path
          d="M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666M14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00004 1.33331M14.6667 7.99998H1.33337M8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998M8.00004 14.6666C9.66756 12.8411 10.6152 10.472 10.6667 7.99998C10.6152 5.528 9.66756 3.15888 8.00004 1.33331M8.00004 14.6666C6.33252 12.8411 5.38487 10.472 5.33337 7.99998C5.38487 5.528 6.33252 3.15888 8.00004 1.33331M1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331"
          stroke="#6B7280"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4294_9172">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TimeZone;
