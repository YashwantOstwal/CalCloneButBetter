import React, { CSSProperties, ReactNode } from "react";
import CrossSVG from "./CrossSVG";
import { cn } from "@/utils/cn";

let zIndex = 30;
interface SectionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Section({ children, className, style }: SectionProps) {
  return (
    <div
      style={{ zIndex: zIndex-- }}
      className="border-b border-[#c0c2c4] px-3"
    >
      <section
        style={{ ...style }}
        className={cn(
          "border-x-gray border-x relative p-3 max-w-screen-xl mx-auto",
          className
        )}
      >
        <CrossSVG className="absolute -left-[14px] -bottom-[14px] rounded-full scale-[0.85]" />
        <CrossSVG className="absolute -right-[14px] -bottom-[14px] rounded-full scale-[0.85]" />
        {children}
      </section>
    </div>
  );
}
