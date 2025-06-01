const Calender = () => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 29"
      fill="none"
      width="29"
      height="29"
    >
      <g filter="url(#a)" fill="none">
        <g clipPath="url(#b)" fill="none">
          <path
            fill="#F6F5F4"
            d="M4.212 10.557v7.487c0 .239 0 .477.002.716 0 .201.004.403.01.604a8.9 8.9 0 0 0 .115 1.314c.079.44.209.85.413 1.249a4.21 4.21 0 0 0 1.836 1.836c.399.204.809.332 1.248.412.433.077.875.103 1.314.116.2.005.403.007.604.01h8.92c.201-.002.403-.005.604-.01.438-.013.88-.039 1.314-.116.44-.079.849-.209 1.248-.412a4.213 4.213 0 0 0 1.836-1.836c.204-.4.332-.81.413-1.249.077-.433.103-.874.115-1.314.006-.2.008-.403.01-.604V10.368H4.212v.19Z"
          ></path>
          <path
            fill="#EE544A"
            d="M24.2 9.234a8.883 8.883 0 0 0-.115-1.314 4.403 4.403 0 0 0-.413-1.249 4.23 4.23 0 0 0-.772-1.064 4.214 4.214 0 0 0-1.064-.772 4.427 4.427 0 0 0-1.248-.412 8.901 8.901 0 0 0-1.314-.116c-.2-.005-.403-.007-.604-.01H9.752c-.201.002-.403.005-.604.01-.438.013-.88.039-1.314.116-.44.079-.849.209-1.248.412A4.213 4.213 0 0 0 4.75 6.67c-.204.4-.332.81-.413 1.249a8.656 8.656 0 0 0-.114 1.314c-.005.2-.008.403-.01.604l-.001.527H24.21l-.001-.527a25.33 25.33 0 0 0-.01-.604Z"
          ></path>
          <path
            fill="#FFFFFF"
            d="M11.088 8.744a.81.81 0 0 1-.33-.31.956.956 0 0 1-.126-.468v-.018h.58l.003.012a.47.47 0 0 0 .05.196c.03.056.072.101.127.133a.393.393 0 0 0 .199.048c.125 0 .22-.038.287-.113.066-.076.1-.185.1-.33V5.946h.598V7.9c0 .302-.086.535-.257.703-.171.167-.411.25-.722.25-.197.001-.367-.036-.508-.109Zm2.547-.022a.977.977 0 0 1-.563-.928V5.945h.598v1.796c0 .184.053.332.157.442.104.11.253.164.444.164.194 0 .34-.054.444-.164a.618.618 0 0 0 .154-.442V5.945h.598v1.85c0 .21-.048.395-.145.555a.978.978 0 0 1-.414.371 1.43 1.43 0 0 1-.638.133 1.43 1.43 0 0 1-.635-.132Zm2.308-2.777h.598v2.366h1.25v.494h-1.849v-2.86h.001Z"
          ></path>
          <path
            fill="#2C2C2C"
            d="M11.154 13.29h-.024L8.786 14.86v-.835l2.356-1.618h.806v8.739h-.793v-7.854h-.001Zm7.666-.127v-.018h-4.87v-.739h5.687v.77l-4.003 7.969h-.872l4.058-7.982Z"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="b">
          <rect
            width="20"
            height="20"
            x="4.212"
            y="4.297"
            fill="#fff"
            rx="4"
          ></rect>
        </clipPath>
        <filter
          id="a"
          width="28"
          height="28"
          x=".212"
          y=".297"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2545_2259"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2545_2259"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};
export default Calender;
