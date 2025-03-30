import React from "react";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import StackCards from "./StackCards";
import * as motion from "motion/react-client";
import { GCalender, Calender, Outlook } from "./BrandLogo";
import Logo from "./Logo";
import Icon from "./HowItWorksSVGs/Icon";
import Camera from "./HowItWorksSVGs/Camera";
import Microphone from "./HowItWorksSVGs/Microphone";
import Chat from "./HowItWorksSVGs/Chat";
import ShareScreen from "./HowItWorksSVGs/ShareScreen";
import Recording from "./HowItWorksSVGs/Recording";
import SectionWrap from "./SectionWrap";
const HowItWorks = () => {
  return (
    <SectionWrap>
      <div className="py-6 lg:py-20 px-1">
        <SectionTitle
          query="How it works"
          title="With us, appointment scheduling is easy"
          description="Effortless scheduling for individuals, powerful solutions for
        fast-growing modern companies."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            sNo="01"
            title="Connect your calendar"
            description="We'll handle all the cross-referencing, so you don't have to worry about double bookings."
            demo={<Demo />}
          />
          <Card
            sNo="02"
            title="Set your availability"
            description="Want to block off weekends? Set up any buffers? We make that easy."
            demo={<Demo2 />}
          />

          <Card
            sNo="03"
            title="Choose how to meet"
            description="It could be a video chat, phone call, or a walk in the park!"
            demo={<Demo3 />}
          />
        </div>
      </div>
    </SectionWrap>
  );
};

//TODO maintain the speed ,translate the container to right distance which would require to modify the inset of the children,modify the transition property of the animating components to reach the right config,  use motionConfig to pass transition property to children,variants,componentizing,
const Demo3 = () => {
  const toolBar = [
    <Camera key="camera" />,
    <Microphone key="microphone" />,
    <Chat key="chat" />,
    <ShareScreen key="share-screen" />,
    <Recording key="recording" />,
  ];
  return (
    <div
      className="h-full border-t border-l border-gray rounded-tl-3xl flex flex-col items-center"
      style={{ transform: "translateX(10%)" }}
    >
      <div className="w-full border-b border-gray py-3 px-5 flex [&>span]:p-1 [&>span]:rounded-full [&>span]:bg-[#9ca3af] gap-1">
        <span />
        <span />
        <span />
      </div>
      <div className="w-full grid grid-cols-2 flex-1 divide-x divide-gray">
        <Screen />
        <Screen />
      </div>
      <div className="py-3 px-5 flex gap-4 border border-b-0 border-gray rounded-tl-2xl rounded-tr-2xl">
        {toolBar}
      </div>
    </div>
  );
};
function Screen() {
  return (
    <div className="flex justify-center items-center relative py-4">
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 0.95, opacity: [0.15, 0] }}
        transition={{
          duration: 1,
          repeatType: "loop",
          repeatDelay: 1,
          repeat: Infinity,
        }}
        className="h-full absolute aspect-square bg-[#9ca3af] rounded-full"
      ></motion.div>
      <Icon />
    </div>
  );
}
const Demo2 = () => {
  return (
    <div className="h-full justify-center relative [transform:translateX(10%)] w-[110%]">
      <StackCards top="15px" shrinkBy="10%" stackCount={3}>
        <div className="p-5 w-[81%] space-y-4">
          <Item from="8:30 am" to="5:00 pm" />
          <Item delay={0.3} from="9:00 am" to="6:00 pm" />
          <Item from="10:00 am" to="6:00 pm" />
        </div>
      </StackCards>
    </div>
  );
};
function Item({
  delay = 0,
  from,
  to,
}: {
  delay?: number;
  from: string;
  to: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        initial={{ backgroundColor: "rgba(0,0,0,0.1)" }}
        animate={{ backgroundColor: "rgba(0,0,0,1)" }}
        transition={{
          delay,
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 2,
          repeatType: "reverse",
        }}
        className="w-[34px] rounded-full bg-black p-[3px]"
      >
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
          transition={{
            delay,
            duration: 0.1,
            repeat: Infinity,
            repeatDelay: 2,
            repeatType: "reverse",
          }}
          className="w-1/2 aspect-square bg-white rounded-full"
        />
      </motion.div>
      <motion.div
        className="flex text-nowrap flex-1 items-center gap-2 text-sm"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{
          delay,
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 2,
          repeatType: "reverse",
        }}
      >
        <span className="py-2 px-3 border border-[#d1d5db] rounded-md flex-1">
          {from}
        </span>
        <span className="px-2">-</span>
        <span className="py-2 px-3 border border-[#d1d5db] rounded-md flex-1">
          {to}
        </span>
      </motion.div>
    </div>
  );
}
const Demo = () => (
  <div className="h-full relative">
    <div className="grid place-items-center absolute inset-x-1 -bottom-[60%] xl:-bottom-[70%] aspect-square max-w-[400px] mx-auto">
      <div
        style={{
          maskImage:
            "radial-gradient(circle at 50% 37.5%,rgba(0,0,0,0),rgba(0,0,0,0) 45%,rgba(0,0,0,1) 60%)",
        }}
        className="absolute w-[95%] aspect-square border border-[#e5e7eb] rounded-full"
      />
      <div className="absolute w-[75%] aspect-square border border-[#e5e7eb] rounded-full">
        <motion.div
          style={{
            offsetPath: "circle(50% at center)",
            offsetAnchor: "center",
            offsetRotate: "0deg",
          }}
          initial={{
            offsetDistance: "40%",
          }}
          animate={{ offsetDistance: "140%" }}
          transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
          className="p-3 w-fit shadow-md rounded-full bg-white grid place-items-center"
        >
          <Calender />
        </motion.div>
      </div>
      <div className="absolute w-[55%] aspect-square border border-[#e5e7eb] rounded-full">
        <motion.div
          style={{
            offsetPath: "circle(50% at center)",
            offsetAnchor: "center",
            offsetRotate: "0deg",
          }}
          initial={{
            offsetDistance: "20%",
          }}
          animate={{ offsetDistance: "120%" }}
          transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
          className="p-3 w-fit shadow-md rounded-full bg-white grid place-items-center"
        >
          <Outlook />
        </motion.div>
        <motion.div
          style={{
            offsetPath: "circle(50% at center)",
            offsetAnchor: "center",
            offsetRotate: "0deg",
          }}
          initial={{
            offsetDistance: "0%",
          }}
          animate={{ offsetDistance: "100%" }}
          transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
          className="p-3 w-fit shadow-md rounded-full bg-white grid place-items-center"
        >
          <GCalender />
        </motion.div>
      </div>
      <div className="absolute w-[35%] aspect-square border border-[#e5e7eb] rounded-full"></div>
      <div className=" rounded-full p-4 border border-[#e5e7eb] shadow-md w-[25%]">
        <Logo className="w-full h-fit" />
      </div>
    </div>
  </div>
);
export default HowItWorks;
