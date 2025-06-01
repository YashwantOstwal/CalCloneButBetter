import * as motion from "motion/react-client";
const Loader = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className="size-4"
    width="16"
    height="16"
    animate={{ rotate: "360deg" }}
    transition={{
      repeat: Infinity,
      ease: "linear",
      duration: 1.5,
    }}
  >
    <path
      stroke='url("#gradient")'
      strokeLinecap="round"
      strokeWidth="1.25px"
      d="M8 1.75v1.042m0 10.416v1.042m3.125-11.663-.521.902m-5.208 9.022-.521.902m8.537-8.538-.902.52m-9.02 5.21-.903.52M14.25 8h-1.042M2.792 8H1.75m11.662 3.125-.902-.52m-9.02-5.21-.903-.52m8.538 8.538-.52-.902m-5.21-9.022-.52-.902"
      fill="none"
    ></path>
    <defs>
      <radialGradient
        id="gradient"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(102.529 4.047 5.711) scale(11.5244)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#000000"></stop>
        <stop offset="1" stopColor="#000000" stopOpacity=".2"></stop>
      </radialGradient>
    </defs>
  </motion.svg>
);

export default Loader;
