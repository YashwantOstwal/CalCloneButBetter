import { ReactNode } from "react";

interface BenefitsCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function BenefitsCard({
  title,
  description,
  children,
}: BenefitsCardProps) {
  return (
    <div className="card-shadow bg-white rounded-2xl border border-gray grid grid-rows-5 font-matter gap-4 overflow-hidden">
      <div className="px-8 pt-8 space-y-4 row-span-2">
        <div className="text-[20px] text-[#141414] font-semibold tracking-wide">
          {title}
        </div>
        <p className="text-[#6b7280] text-[16px] ">{description}</p>
      </div>
      <div
        aria-hidden
        className="row-span-3 [&>div:h-full] [&>div:w-full] flex justify-center"
      >
        {children}
      </div>
    </div>
  );
}
