import * as motion from "motion/react-client";
import { Variants } from "motion/react";

export default function StreamlineBookersExperience() {
  const variants: Variants = {
    initial: {
      maskImage: "linear-gradient(to right,rgba(0,0,0,0) ,rgba(0,0,0,0))",
      y: "15px",
    },
    animate: {
      maskImage: [
        null,
        "linear-gradient(to right,rgba(0,0,0,1) ,rgba(0,0,0,1))",
        "linear-gradient(to right,rgba(0,0,0,1) ,rgba(0,0,0,1)",
        "linear-gradient(to right,rgba(0,0,0,0) ,rgba(0,0,0,0))",
      ],
      y: [null, "0px", "0px", "10px"],
    },
  };
  const format = (num: number) => (num < 10 ? "0" + num : num);

  return (
    <div aria-hidden={true} role="presentation" className="w-full relative">
      <div className="h-[110%] max-h-[350px] -bottom-[15%] min-w-[700px] w-full absolute right-[10%]  font-matter border-r border-t rounded-tr-3xl border-gray flex flex-col">
        <div className="border-b border-gray grid-cols-7 py-2 px-4 flex justify-end items-center gap-4 ">
          <div className="flex gap-2 items-center">
            <div className="w-[34px] rounded-full bg-black p-[3px] flex justify-end">
              <div className="w-1/2 aspect-square bg-white rounded-full" />
            </div>
            <span className="text-sm text-[#111827] font-semibold tracking-wide">
              Overlay my calender
            </span>
          </div>
          <div className="p-1 flex justify-center gap-0.5 bg-[#f3f4f6] rounded-md [&>span]:px-3 [&>span]:py-1 leading-tight">
            <span className=" bg-white border border-[#e1e2e5] rounded-md">
              12h
            </span>
            <span className="text-[#cccccc]">24h</span>
          </div>
        </div>
        <div className="grid grid-cols-7 text-xs py-2 border-b border-gray font-semibold">
          {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map(
            (eachDay, index) => (
              <div className="m-auto space-x-1" key={eachDay}>
                <span
                  className={index === 4 ? "text-[#111111]" : "text-[#6b7280]"}
                >
                  {eachDay}
                </span>
                <span
                  className={
                    index === 4
                      ? "bg-black text-white rounded-lg px-1 py-0.5"
                      : "text-[#6b7280]"
                  }
                >
                  {format(index + 4)}
                </span>
              </div>
            )
          )}
        </div>
        <div className="relative h-full">
          <div className="relative z-10 grid grid-cols-7 grid-rows-3 h-full font-matter text-[11px] text-[#111111] [&>div]:rounded-lg">
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                repeatDelay: 2,
                repeat: Infinity,
                times: [0, 0.125, 0.875, 1],
                duration: 4,
              }}
              className="col-start-3 row-start-1 row-span-3 bg-[#d9f3ff] p-2 m-auto"
              style={{ width: "calc(100% - 4px)", height: "calc(100% - 4px)" }}
            >
              <div className="opacity-80 leading-[1.3] font-semibold tracking-wide">
                Making coffee
              </div>
              <div className="text-[10px] opacity-50 leading-[1.5]">
                9:00 AM - 4PM
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                repeatDelay: 2,
                repeat: Infinity,
                times: [0, 0.125, 0.875, 1],
                duration: 4,
                delay: 0.2,
              }}
              className=" col-start-4 row-start-2 bg-[#E9DDFE] p-2 m-auto"
              style={{ width: "calc(100% - 4px)", height: "calc(100% - 4px)" }}
            >
              <div className="opacity-80 leading-[1.3] font-semibold tracking-wide">
                Breakfast
              </div>
              <div className="text-[10px] leading-[1.5] opacity-50">
                11:30 AM - 2PM
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                repeatDelay: 2,
                repeat: Infinity,
                times: [0, 0.125, 0.875, 1],
                duration: 4,
                delay: 0.4,
              }}
              className=" col-start-5 row-start-1 bg-[#E9DDFE] p-2 m-auto"
              style={{ width: "calc(100% - 4px)", height: "calc(100% - 4px)" }}
            >
              <div className="opacity-80 leading-[1.3] font-semibold tracking-wide">
                Breakfast
              </div>
              <div className="text-[10px] leading-[1.5] opacity-50">
                11:30 AM - 2PM
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                repeatDelay: 2,
                repeat: Infinity,
                times: [0, 0.125, 0.875, 1],
                duration: 4,
                delay: 0.6,
              }}
              className=" col-start-5 row-start-2 row-span-2 pt-[25%]"
            >
              <div
                className="h-[100%] bg-[#e9ddfe] w-full rounded-lg p-2 m-auto"
                style={{
                  width: "calc(100% - 4px)",
                  height: "calc(100% - 4px)",
                }}
              >
                <div className="opacity-80 leading-[1.3] font-semibold tracking-wide">
                  Design conference
                </div>
                <div className="text-[10px] leading-[1.5] opacity-50">
                  6PM - 8:30 PM
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                repeatDelay: 2,
                repeat: Infinity,
                times: [0, 0.125, 0.875, 1],
                duration: 4,
                delay: 0.8,
              }}
              className=" col-start-6 row-start-2 row-span-2 bg-[#F9d7d9] p-2 m-auto"
              style={{ width: "calc(100% - 4px)", height: "calc(100% - 4px)" }}
            >
              <div className="opacity-80 leading-[1.3] font-semibold tracking-wide">
                Hiring call
              </div>
              <div className="text-[10px] leading-[1.5] opacity-50">
                6PM - 8:30 PM
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                repeatDelay: 2,
                repeat: Infinity,
                times: [0, 0.125, 0.875, 1],
                duration: 4,
                delay: 1,
              }}
              className="col-start-7 row-start-1 row-span-3 py-[33%]"
            >
              <div
                className="bg-[#D9F3FF] h-full rounded-lg p-2 m-auto"
                style={{
                  width: "calc(100% - 4px)",
                  height: "calc(100% - 4px)",
                }}
              >
                <div className="opacity-80 leading-[1.3] font-semibold tracking-wide">
                  Full company meeting
                </div>
                <div className="text-[10px] leading-[1.5] opacity-50">
                  6PM - 8:30 PM
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute inset-0 grid grid-cols-7 grid-rows-3">
            {Array.from(
              { length: 7 * 3 },
              (_: undefined, i) => `cell-${i + 1}`
            ).map((cellId) => (
              <div
                key={cellId}
                className="w-full h-full border-l border-b border-gray"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
