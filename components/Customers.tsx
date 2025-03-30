import React, { ReactNode } from "react";
const Customers = ({
  children,
  title,
  className,
}: {
  children: ReactNode[];
  title: string;
  className?: string;
}) => {
  return (
    <div className="py-5 px-2 flex max-lg:flex-col items-center justify-between gap-14 ">
      <div className="text-[14px] font-matter text-balance text-[#898989] max-w-[220px] max-lg:text-center">
        {title}
      </div>
      <div
        className={`grid grid-cols-2 gap-x-4 md:gap-x-6 max-md:gap-y-8 max-lg:max-w-4xl md:grid-cols-5 flex-1 ${className}`}
      >
        {children.map((node: ReactNode, i: number) => (
          <div key={title + i} className="m-auto">
            {node}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Customers;
