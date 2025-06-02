"use client";
import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { easeInOut } from "motion";
const GridItem = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img?: string;
}) => {
  const [mouseIn, setMouseIn] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
      className="card-shadow bg-white border border-gray rounded-2xl flex flex-col px-2 py-4 md:p-4 items-center relative overflow-hidden h-full"
    >
      <div
        className={`h-14 my-2 aspect-square bg-neutral-100 rounded-md relative bg-no-repeat bg-center [backgroundSize:24px] ${img}`}
      >
        <span className="absolute w-1 h-1 rounded-full bg-[#C8D4DD] left-2 top-2" />
        <span className="absolute w-1 h-1 rounded-full bg-[#C8D4DD] right-2 top-2" />
        <span className="absolute w-1 h-1 rounded-full bg-[#C8D4DD] left-2 bottom-2" />
        <span className="absolute w-1 h-1 rounded-full bg-[#C8D4DD] right-2 bottom-2 " />
      </div>
      <div className="flex-1 flex items-center text-center font-semibold leading-tight text-base">
        {title}
      </div>
      <AnimatePresence>
        {mouseIn && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 0.95 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: easeInOut }}
            className="absolute inset-0 bg-white p-2 flex flex-col items-center justify-center gap-2 cursor-pointer"
          >
            <span className="absolute left-2 top-2 bg-[#C8D4DD] rounded-full w-1.5 h-1.5" />
            <span className="absolute left-2 bottom-2 bg-[#C8D4DD] rounded-full w-1.5 h-1.5" />
            <span className="absolute right-2 top-2 bg-[#C8D4DD] rounded-full w-1.5 h-1.5" />
            <span className="absolute right-2 bottom-2 bg-[#C8D4DD] rounded-full w-1.5 h-1.5" />
            <span className="font-semibold text-base text-center">{title}</span>
            <span className="text-center text-sm font-medium text-gray-700">
              {description}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GridItem;
