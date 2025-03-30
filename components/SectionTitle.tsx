import React from "react";
const SectionTitle = ({
  query,
  title,
  description,
  className,
}: {
  query: string;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={`font-matter space-y-4 pb-[14px] flex flex-col items-center justify-center text-center ${className}`}
    >
      <div className="text-[12px] text-[#242424] flex gap-2 px-[14px] py-1 bg-white shadow-md border border-gray rounded-full w-fit">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
          width="20"
          height="20"
        >
          <path
            fillRule="evenodd"
            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
            clipRule="evenodd"
            fill="#141414"
          />
        </svg>
        {query}
      </div>
      <div className="text-[32px] lg:text-[48px] text-[#141414] font-cal text-balance  leading-tight">
        {title}
      </div>
      <p className="text-[16px] lg:text-[18px] text-[#898989] max-w-2xl">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
