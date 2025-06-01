import React, { CSSProperties, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ClientShowcaseProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

interface CaptionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

interface ClientsProps {
  children: ReactNode[];
  className?: string;
  style?: CSSProperties;
}

function ClientShowcase({ children, className, style }: ClientShowcaseProps) {
  return (
    <div
      className={cn(
        "py-5 px-2 flex max-lg:flex-col items-center justify-between gap-14",
        className
      )}
      style={{ ...style }}
    >
      {children}
    </div>
  );
}

function Caption({ children, className, style }: CaptionProps) {
  return (
    <div
      className={cn(
        "text-sm font-matter text-balance text-[#898989] max-w-[220px] max-lg:text-center",
        className
      )}
      style={{ ...style }}
    >
      {children}
    </div>
  );
}

function Clients({ children, className, style }: ClientsProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-4 md:gap-x-6 max-md:gap-y-8 max-lg:max-w-4xl md:grid-cols-5 flex-1",
        className
      )}
      style={{ ...style }}
    >
      {children.map((child: ReactNode, index: number) => (
        <div key={`customer-${index}`} className="m-auto">
          {child}
        </div>
      ))}
    </div>
  );
}

ClientShowcase.Caption = Caption;
ClientShowcase.Clients = Clients;

export default ClientShowcase;
