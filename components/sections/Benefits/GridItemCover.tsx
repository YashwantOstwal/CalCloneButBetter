import CrossSVG from "@/components/CrossSVG";
import { ReactNode } from "react";

export default function GridItemCover({ children }: { children: ReactNode }) {
  return (
    <div className="relative p-2 first:border-l border-r max-sm:border-x border-x-gray w-full max-w-[200px] flex-1 min-h-[180px]">
      <CrossSVG className="absolute -left-[14px] -bottom-[14px] rounded-full scale-[0.85]" />
      <CrossSVG className="absolute -right-[14px] -bottom-[14px] rounded-full scale-[0.85]" />
      <CrossSVG className="absolute -left-[14px] -top-[14px] rounded-full scale-[0.85]" />
      <CrossSVG className="absolute -right-[14px] -top-[14px] rounded-full scale-[0.85]" />
      {children}
    </div>
  );
}
