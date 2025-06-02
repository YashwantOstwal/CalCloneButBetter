import CrossSVG from "@/components/CrossSVG";
import { ReactNode } from "react";

export default function GridItemCover({ children }: { children: ReactNode }) {
  return (
    <div className="relative p-2 first:border-l border-r max-sm:border-x border-x-gray w-full max-w-[200px] flex-1 min-h-[180px]">
      <CrossSVG className="absolute -left-3 -bottom-3 " />
      <CrossSVG className="absolute -right-3 -bottom-3 " />
      <CrossSVG className="absolute -left-3 -top-3 " />
      <CrossSVG className="absolute -right-3 -top-3 " />
      {children}
    </div>
  );
}
