"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "motion/react";
import Deel from "@/public/Deel.png";
import Shimmer from "@/public/Shimmer.png";
import Angellist from "@/public/Angellist.png";
import ATeam from "@/public/ATeam.png";

export default function BusinessSlideShow() {
  const controlInterval = useRef<NodeJS.Timeout>(undefined);
  const targetRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(targetRef, { once: true });

  const [active, setActive] = useState(0);

  const toggleActivePeriodically = () => {
    clearInterval(controlInterval.current);
    controlInterval.current = setInterval(() => {
      setActive((prev) => (prev + 1) % 4);
    }, 5000);
  };

  const handleClick = (index: number) => {
    setActive(index);
    toggleActivePeriodically();
  };

  useEffect(() => {
    if (isInView) toggleActivePeriodically();
  }, [isInView]);

  const data = [
    {
      company: "Deel",
      Content: "See how Deel improved CSAT by 20% with Cal.com",
      backgroundImage: Deel,
      gradient:
        "linear-gradient(to right,rgba(14,54,119,0.4),rgba(14,54,119,0.4))",

      imgProps: {
        src: "/DeelLogo.svg",
        className: "mx-auto h-fit w-12 sm:w-14",
        width: 48,
        height: 15,
        alt: "Deel Logo",
      },
      buttonProps: {
        ActiveClassName:
          " bg-gradient-to-b from-[rgba(14,54,119,0.2)] to-[transparent] to-[16px] border-t-[rgb(14,54,119)]",
      },
    },
    {
      company: "Angellist",
      Content:
        "See how AngelList used instant meetings to easily meet with customers",
      backgroundImage: Angellist,
      gradient:
        "linear-gradient(to right,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/Angellist.png')",
      imgProps: {
        src: "/AngellistLogo.png",
        className: "mx-auto h-fit w-24",
        width: 96,
        height: 15,
        alt: "Angellist Logo",
      },
      buttonProps: {
        ActiveClassName:
          "bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[transparent] to-[16px] border-t-[rgb(0,0,0)]",
      },
    },
    {
      company: "Shimmer",
      Content: "See how Shimmer transformed ADHD coaching with Cal.com",
      backgroundImage: Shimmer,
      gradient:
        "linear-gradient(to right,rgba(251,214,55,0.4),rgba(251,214,55,0.4))",
      imgProps: {
        src: "/ShimmerLogo.png",
        className: "mx-auto h-fit w-24 sm:w-28 ",
        width: 96,
        height: 15,
        alt: "Shimmer Logo",
      },
      buttonProps: {
        ActiveClassName:
          "bg-gradient-to-b from-[rgba(251,214,55,0.2)] to-[transparent] to-[16px] border-t-[rgb(251,214,55)]",
      },
    },
    {
      company: "ATeam",
      Content: "See how A.Team cut scheduling time by 70% with Cal.com",
      backgroundImage: ATeam,
      gradient:
        "linear-gradient(to right,rgba(153,60,248,0.4),rgba(153,60,248,0.4)),url('/ATeam.png')",
      imgProps: {
        src: "/aTeamLogo.svg",
        className: "mx-auto h-fit w-20 sm:w-24",
        width: 80,
        height: 15,
        alt: "ATeam Logo",
      },
      buttonProps: {
        ActiveClassName:
          "bg-gradient-to-b from-[rgba(153,60,248,0.2)] to-[transparent] to-[16px] border-t-[rgb(153,60,248)]",
      },
    },
  ];

  return (
    <div className="flex flex-col gap-4" ref={targetRef}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="overflow-hidden relative aspect-video w-full rounded-2xl"
        >
          <Image
            src={data[active].backgroundImage}
            alt=""
            className="w-full h-full object-cover "
          />
          <div
            className="absolute inset-0 flex flex-col items-start justify-between p-2 lg:p-6"
            style={{
              backgroundImage: data[active].gradient,
            }}
          >
            <div className="brightness-0 invert">
              <Image
                src={data[active].imgProps.src}
                className={data[active].imgProps.className}
                width={data[active].imgProps.width}
                height={data[active].imgProps.height}
                alt={data[active].imgProps.alt}
              />
            </div>
            <div className="font-cal text-lg font-medium leading-tight text-white text-balance sm:text-2xl">
              {data[active].Content}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-wrap gap-4 justify-center">
        {data.map((eachData, index) => (
          <button
            key={eachData.company}
            className={`w-32 border-t-[1.5px] pt-4 
              ${
                active === index
                  ? eachData.buttonProps.ActiveClassName
                  : "grayscale opacity-20 border-t-gray"
              }
            `}
            onClick={() => handleClick(index)}
          >
            <Image
              src={eachData.imgProps.src}
              className={eachData.imgProps.className}
              width={eachData.imgProps.width}
              height={eachData.imgProps.height}
              alt={eachData.imgProps.alt}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
