"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Duration from "./HeroSectionSVGs/Duration";
import Location from "./HeroSectionSVGs/Location";
import TimeZone from "./HeroSectionSVGs/TimeZone";
import CalVideoLogo from "./HeroSectionSVGs/CalVideoLogo";
import GMeetLogo from "./HeroSectionSVGs/GMeetLogo";
import ZoomLogo from "./HeroSectionSVGs/ZoomLogo";
import Calender from "./Calender";

const HeroSectionCard = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const controlInterval: NodeJS.Timeout = setInterval(() => {
      setActive((prev) => (prev + 1) % 8);
    }, 4000);
    return () => {
      clearInterval(controlInterval);
    };
  });

  const data = [
    {
      name: "Sarah Miller",
      services: "Academic Counseling",
      description:
        "Virtual counseling session for university students to discuss academic progress and well-being.",
      duration: "45 mins",
      timeZone: "America/Chicago",
      via: "Google Meet",
    },
    {
      name: "John Smith",
      services: "Medical Appointment",
      description:
        "Welcome to Sacred Hearth Hospital. Please pick a time for your appointment.",
      duration: "30 mins",
      location: "Sacred Heart Medical Center",
      timeZone: "America/New York",
    },
    {
      name: "Oliver Wilson",
      services: "Property Viewing",
      description:
        "Tour your potential dream home with our experienced real estate professionals.",
      duration: "120 mins",
      location: "Pine Realty Office",
      timeZone: "Australia/Sydney",
    },
    {
      name: "Charlotte Johnson",
      services: "Legal Consultation",
      description:
        "Discuss your legal matters with our experienced attorneys in a private consultation.",
      duration: "15 mins",
      timeZone: "America/Los Angeles",
      via: "Zoom",
    },
    {
      name: "Isabella Moore",
      services: "Photoshoot",
      description:
        "Capture your special moments with our professional photography services today.",
      duration: "120 mins",
      location: "22 Capture Street",
      timeZone: "Australia/Sydney",
    },
    {
      name: "Sophia Davis",
      services: "Immigration Consultation",
      description:
        "Expert guidance on visa applications, permanent residency, and immigration procedures.",
      duration: "45 mins",
      timeZone: "Europe/Paris",
      via: "Google Meet",
    },
    {
      name: "Ethan Taylor",
      services: "IT Support",
      description:
        "Get expert technical assistance to resolve your computer and software challenges.",
      duration: "15 mins",
      timeZone: "Asia/Singapore",
      via: "Cal Video",
    },
    {
      name: "Emma Brown",
      services: "Office hours",
      description:
        "Join a virtual meeting to discuss your child's academic progress and development plan.",
      duration: "45 mins",
      via: "Cal Video",
      timeZone: "Europe/London",
    },
  ];

  const parentVariants = {
    initial: { opacity: 0, y: "10px" },
    animate: {
      opacity: 1,
      y: "0px",
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const childVariants = {
    initial: { opacity: 0, y: "10px" },
    animate: { opacity: 1, y: "0px" },
  };
  return (
    <motion.div
      // style={{ transformOrigin: "75% 50%" }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ ease: "easeOut" }}
      aria-hidden
      className="bg-[#fafafa] p-1 border border-gray rounded-xl font-inter lg:w-[140%] m-auto max-lg:[transform:translateY(12%)] w-fit origin-[75%_50%]"
    >
      <div className="border border-gray bg-white rounded-xl grid md:grid-cols-[auto_1fr] max-md:grid-rows-[auto_1fr] overflow-hidden">
        <div className="space-y-5 px-5 py-6 mx-auto">
          <motion.ul
            key={active + "profile"}
            variants={parentVariants}
            initial="initial"
            animate="animate"
            className=" space-y-1"
          >
            <motion.li variants={childVariants}>
              <Image
                src={`/HeroSectionImages/${data[active].name}.png`}
                width={24}
                height={24}
                alt={data[active].name}
                className="rounded-full size-6"
                style={{ objectFit: "cover" }}
              />
            </motion.li>
            <motion.li
              variants={childVariants}
              className="text-[#6b7280] text-[14px]"
            >
              {data[active].name}
            </motion.li>
            <motion.li
              variants={childVariants}
              className="text-[20px] text-[#101010] font-cal"
            >
              {data[active].services}
            </motion.li>
            <motion.li
              variants={childVariants}
              className=" text-[14px] text-[#374151] text-balance max-w-sm md:max-w-[250px]"
            >
              {data[active].description}
            </motion.li>
          </motion.ul>
          <motion.div
            key={active + "info"}
            initial={{ opacity: 0, y: "10px" }}
            animate={{ opacity: 1, y: "0px" }}
            className="space-y-2 text-[#374151] text-[14px] [&>div]:flex [&>div]:gap-2 [&>div]:items-center [&>div]:flex-nowrap "
          >
            {data[active].duration && (
              <div>
                <Duration className="w-5 h-6" />
                {data[active].duration}
              </div>
            )}
            {data[active].via && (
              <div>
                {data[active].via === "Cal Video" ? (
                  <CalVideoLogo className="w-5 h-6" />
                ) : data[active].via === "Google Meet" ? (
                  <GMeetLogo className="w-5 h-6" />
                ) : (
                  <ZoomLogo className="w-5 h-6" />
                )}
                {data[active].via}
              </div>
            )}
            {data[active].location && (
              <div>
                <Location className="w-5 h-6" />
                {data[active].location}
              </div>
            )}
            {data[active].timeZone && (
              <div>
                <TimeZone className="w-5 h-6" />
                {data[active].timeZone}
              </div>
            )}
          </motion.div>
        </div>
        <Calender active={active} />
      </div>
    </motion.div>
  );
};

export default HeroSectionCard;
