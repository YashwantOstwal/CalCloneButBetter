import React, { CSSProperties, ReactNode } from "react";
import CrossSVG from "./CrossSVG";
import { cn } from "@/utils/cn";

interface SectionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id: string;
}

export default function Section({
  children,
  className,
  style,
  id,
}: SectionProps) {
  return (
    <div className="border-b border-[#c0c2c4] px-3 mb-3">
      <section
        id={id}
        style={{ ...style }}
        className={cn(
          "border-x-gray border-x relative p-3 max-w-screen-xl mx-auto",
          className
        )}
      >
        <CrossSVG className="absolute -left-3 -bottom-3 " />
        <CrossSVG className="absolute -right-3 -bottom-3" />
        {children}
      </section>
    </div>
  );
}
