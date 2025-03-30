import React, { ReactNode } from "react";

const Card = ({
  sNo,
  title,
  description,
  demo,
}: {
  sNo: string;
  title: string;
  description: string;
  demo: ReactNode;
}) => {
  return (
    <div className="font-matter overflow-hidden bg-white border border-gray grid grid-rows-2 rounded-2xl">
      <div className="p-5 pb-10 min-h-[200px]">
        <div className="inline-block py-1 px-2 font-mono text-[#6b7280] mb-3 text-sm rounded-md bg-[#e5e7eb] font-bold">
          {sNo}
        </div>
        <h3 className="mb-[6px] text-[18px] text-[#141414] font-semibold">
          {title}
        </h3>
        <p className="text-[16px] text-[#898989]">{description}</p>
      </div>
      {demo}
    </div>
  );
};

export default Card;
