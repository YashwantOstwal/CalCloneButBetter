import React, { ReactNode } from "react";
import CrossSVG from "./CrossSVG";

let zIndex = 30;
const WrapSection = ({
  children,
  containerProps,
}: // addCross = [false, false, true, true],
{
  children: ReactNode;
  containerProps?: {
    className: string;
  };
  // addCross?: boolean[];
}) => {
  return (
    <div style={{ zIndex: zIndex-- }} className="relative flex justify-center">
      <div className="absolute -bottom-[0.5px] h-[1px] w-[100vw] bg-[#c0c2c4]/50" />
      <section
        className={`border-x-gray border-x !relative mx-3 p-3 !flex-1 ${containerProps?.className}`}
      >
        <CrossSVG className="absolute -left-[14px] -bottom-[14px] rounded-full scale-[0.85]" />
        <CrossSVG className="absolute -right-[14px] -bottom-[14px] rounded-full scale-[0.85]" />
        {children}
      </section>
    </div>
  );
};

export default WrapSection;
