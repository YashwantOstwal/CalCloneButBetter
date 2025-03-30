import React, { ComponentProps } from "react";

const Duration = (props: ComponentProps<"svg">) => {
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
      <g clipPath="url(#clip0_3465_51156)">
        <path
          d="M8.00004 3.99998V7.99998L10.6667 9.33331M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z"
          stroke="#6B7280"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3465_51156">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Duration;
