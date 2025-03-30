"use client";
import { ReactNode, useRef, useState } from "react";
import {
  useScroll,
  motion,
  useMotionValueEvent,
  AnimatePresence,
  MotionConfig,
} from "motion/react";
import CustomButton from "./CustomButton";
import DropDownTemplate from "./DropDownTemplate";
import DropDownIcon from "./BenefitsSVGs/DropDownIcon";
import Logo from "./Logo";
import Link from "next/link";

interface animateProps {
  backgroundColor: string;
  boxShadow?: string;
}
let controlInterval: NodeJS.Timeout;
const NavBar = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<string | null>(null);
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const [animate, setAnimate] = useState<animateProps>({
    backgroundColor: "#F4F4F4",
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 0"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.5) {
      setAnimate({
        boxShadow:
          "0px 4px 8px rgba(34, 42, 53, .05), 0px 0px 0px 1px rgba(34, 42, 53, .08), 0px 1px 5px -4px rgba(19, 19, 22, .7)",
        backgroundColor: "#FEFEFE",
      });
    } else {
      setAnimate({
        backgroundColor: "#F4F4F4",
      });
    }
  });
  const handleMouseEnter = (tab: string) => {
    clearInterval(controlInterval);
    setState(tab);
  };
  const handleMouseLeave = () => {
    controlInterval = setInterval(() => {
      setState(null);
    }, 300);
  };

  const DropDownCard: { [key: string]: ReactNode } = {
    Solutions: <Solutions />,
    Developer: <Developer />,
    Resources: <Resources />,
  };
  return (
    <div ref={ref} className="w-full fixed top-0 flex justify-center z-40">
      <div className="w-full max-w-screen-xl lg:pt-2 lg:px-9 flex justify-center">
        {state && (
          <motion.div
            key={state}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.3 }}
            onMouseEnter={() => clearInterval(controlInterval)}
            onMouseLeave={handleMouseLeave}
            className="absolute top-[110%] p-4 rounded-2xl border border-gray  bg-[#fefefe] font-matter max-w-screen-lg"
          >
            {DropDownCard[state]}
          </motion.div>
        )}
        <motion.div
          initial={{ backgroundColor: "#F4F4F4" }}
          animate={{ ...animate }}
          className="w-full flex justify-between items-center px-4 md:px-[34px] lg:rounded-2xl  py-4"
        >
          <div className="flex">
            <Logo />
            <span className="-mt-1.5 font-cal">®</span>
          </div>
          <button
            onClick={() => setOpenSideBar((prev) => !prev)}
            className="lg:hidden w-4 h-4 space-y-[4px] "
          >
            <MotionConfig transition={{ ease: "linear" }}>
              <motion.div
                initial={{ rotate: "0deg", y: "0px" }}
                animate={
                  openSideBar
                    ? { rotate: "45deg", y: "6px" }
                    : { rotate: "0deg", y: "0px" }
                }
                className="py-[1px] bg-black rounded-full"
              />
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: openSideBar ? 0 : 1 }}
                className="py-[1px] bg-black rounded-full"
              />
              <motion.div
                initial={{ rotate: "0deg" }}
                animate={
                  openSideBar
                    ? { rotate: "-45deg", y: "-6px" }
                    : { rotate: "0deg", y: "0px" }
                }
                className="py-[1px] bg-black rounded-full"
              />
            </MotionConfig>
          </button>
          <ol className="hidden lg:flex font-matter text-[14px] text-[#141414] gap-10 [&>li]:cursor-pointer ">
            <li
              onMouseEnter={() => handleMouseEnter("Solutions")}
              onMouseLeave={handleMouseLeave}
              className="flex items-end gap-0.5"
            >
              <span>Solutions</span>
              <DropDownIcon flag={state == "Solutions"} />
            </li>
            <li>Enterprise</li>
            <li
              onMouseEnter={() => handleMouseEnter("Developer")}
              onMouseLeave={handleMouseLeave}
              className="flex items-end gap-0.5"
            >
              Developer
              <DropDownIcon flag={state == "Developer"} />
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("Resources")}
              onMouseLeave={handleMouseLeave}
              className="flex items-end gap-0.5"
            >
              Resources
              <DropDownIcon flag={state == "Resources"} />
            </li>
            <li>Pricing</li>
          </ol>
          <div className="gap-3 hidden lg:flex items-center">
            <Link
              href="https://app.cal.com/auth/login"
              className=" font-medium font-matter text-[15px] hover-opacity:85"
            >
              Sign In
            </Link>
            <CustomButton
              href="https://cal.com/signup"
              className=" flex-grow-0"
            >
              Get Started
            </CustomButton>
          </div>
        </motion.div>
        <AnimatePresence>{openSideBar && <SideBar />}</AnimatePresence>
      </div>
    </div>
  );
};
const SideBar = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="lg:hidden border-t-2 border-black fixed top-12 inset-x-0 bottom-0 bg-[#f4f4f4] flex flex-col justify-center font-cal text-[22px]"
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="flex-1 overflow-y-scroll tracking-wide pb-[50px]"
    >
      {[
        "Pricing",
        "Platform",
        "Enterprise",
        "Features",
        "Docs",
        "Blog",
        "Merch",
      ].map((eachTab) => (
        <div
          key={eachTab}
          className="p-4 md:px-[34px] font-bold border-b-2 border-dashed border-black"
        >
          {eachTab}
        </div>
      ))}
    </motion.div>
    <li
      className="flex flex-col items-center px-4 pb-6 pt-12 gap-4 bg-transparent"
      style={{ boxShadow: "0px -10px 30px 20px #f4f4f4" }}
    >
      <div className="">
        <span className="opacity-40 mr-2">Existing customer?</span>
        <span className="font-bold">Go to app</span>
      </div>
      <button className="font-cal w-full min-h-20 text-xl bg-gradient-to-b from-[#2c2c30] to-[#1d1d20] hover:opacity-90 rounded-xl grid place-items-center text-white max-w-lg">
        Go to app
      </button>
    </li>
  </motion.div>
);
const Solutions = () => {
  const data = [
    [
      {
        href: "",
        title: "For Individuals",
        description: "Personal Scheduling made simple",
        icon: "",
      },
    ],
    [
      {
        href: "https://cal.com/scheduling/talent-acquisition-teams",
        icon: "",
        title: "Recruiting",
      },
      {
        href: "https://cal.com/scheduling/sales-teams",
        icon: "",
        title: "Sales",
      },
    ],
  ];
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="[text-indent:16px] text-sm opacity-80">
          by team size
        </div>
        <div className="[text-indent:16px] text-sm opacity-80">by use case</div>
      </div>
      <div className="grid grid-cols-2">
        {data.map((eachData, i) => (
          <DropDownTemplate data={eachData} key={"Solutions-" + i} />
        ))}
      </div>
    </>
  );
};
const Resources = () => {
  const data = [
    {
      href: "https://cal.com/docs/api-reference/v2/introduction",
      icon: "",
      title: "API",
      description: "Build your own integrations with our public API 2",
    },
  ];
  return <DropDownTemplate data={data} key="Resources" />;
};
const Developer = () => {
  const data = [
    {
      href: "https://cal.com/docs/api-reference/v2/introduction",
      icon: "",
      title: "API",
      description: "Build your own integrations with our public API",
    },
  ];
  return <DropDownTemplate data={data} key="Resources" />;
};

export default NavBar;
