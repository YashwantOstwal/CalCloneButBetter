"use client";
import CrossSVG from "@/components/CrossSVG";
import { AnimatePresence, motion } from "motion/react";
import CalLightHouse from "@/public/Cal-lighthouse.png";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const controlRef = useRef<NodeJS.Timeout>(undefined);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    controlRef.current = setTimeout(() => {
      setOpen(true);
    }, 5000);
    return () => clearInterval(controlRef.current);
  }, []);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="
          fixed z-40 backdrop-blur-sm top-0 h-screen w-full flex flex-col justify-center lg:justify-end items-center lg:pb-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full max-w-[960px] max-h-[85vh] lg:max-h-[75vh] shrink-0 relative p-3 border-r-gray border border-gray"
          >
            <CrossSVG
              className="absolute -left-3 -bottom-3 "
              fill="#c0c2c4"
              stroke="white"
            />
            <CrossSVG
              className="absolute -right-3 -bottom-3 "
              fill="#c0c2c4"
              stroke="white"
            />
            <CrossSVG
              className="absolute -left-3 -top-3 "
              fill="#c0c2c4"
              stroke="white"
            />
            <CrossSVG
              className="absolute -right-3 -top-3 "
              fill="#c0c2c4"
              stroke="white"
            />
            <motion.div className=" card-shadow border flex flex-col border-gray rounded-2xl bg-white h-full p-4 lg:p-6 font-matter">
              <div className="flex justify-between items-center mb-4">
                <h1 className=" font-cal  text-[#111827]">
                  {"What's better ?"}
                </h1>
                <button
                  onClick={() => setOpen(false)}
                  className="text-[#898989]"
                >
                  Close
                </button>
              </div>
              <div className="overflow-y-scroll ml-4 grid flex-1 grid-cols-6 grid-rows-[auto_auto_auto] gap-3 lg:gap-5 text-[#6f6f6f]">
                <SNo className="col-span-1 col-start-1 bg-[#369EFF]">1</SNo>
                <div className="flex gap-2 col-span-5 ">
                  <div className="">
                    <p className="w-full">
                      Lighthouse scores for my clone on Desktop — significantly
                      better than the official site.
                    </p>
                    <Image
                      className="w-full max-w-[350px] h-auto"
                      src={CalLightHouse}
                      alt="lighthouse results"
                    />
                  </div>
                </div>
                <SNo className="col-span-1 col-start-1 bg-[#ff9447]">2</SNo>

                <div className="flex gap-2 col-span-5">
                  <div className="">
                    Fetched user reviews for the&nbsp;
                    <Link
                      href="#wall-of-love"
                      className="text-zinc-600 font-semibold underline hover:no-underline underline-offset-2"
                    >
                      {"#WallOfLove"}
                    </Link>
                    &nbsp; section directly from the&nbsp;
                    <Link
                      className="text-[#6701e6] underline hover:no-underline decoration-[#8338ec] hover:text-[#8338ec] underline-offset-2"
                      href="https://widget.senja.io/api/widget-config/6a0c4b74-527a-4058-bded-8a358821c1a0"
                    >
                      Senja API
                    </Link>
                    &nbsp; on the server — taking advantage of the fact that the
                    official site uses client-side fetching and exposes the API
                    publicly. This allowed me to scrape the API and implement
                    proper server-side fetching in my clone.
                  </div>
                </div>
                <SNo className="col-span-1 col-start-1 bg-[#25d0ab]">3</SNo>
                <div className="flex gap-2 col-span-5">
                  <p>
                    Minimized the client-side JS bundle by reducing the number
                    of infinitely animating, non-interactive components —
                    converting them into server-rendered elements powered by
                    pure CSS animations. On the original site, these components
                    re-render almost the entire document every 4 seconds just to
                    advance to the next animation keyframe.
                    <br />
                    <br />
                    My clone avoids such exhaustive re-renders by handling
                    keyframe animations more efficiently. While this slightly
                    increases the CSS payload, the JavaScript bundle size is far
                    more critical for performance. No surprise that my clone
                    outperforms the official site
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
const SNo = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => (
  <span
    className={cn(
      "mt-1 h-fit w-fit grid place-items-center rounded-full  tracking-tighter text-sm size-[26px] leading-none text-white font-semibold",
      className
    )}
  >
    {children}
  </span>
);
