import * as motion from "motion/react-client";
import Camera from "@/components/sections/HowItWorks/HIWIcons/Camera";
import Chat from "@/components/sections/HowItWorks/HIWIcons/Chat";
import Microphone from "@/components/sections/HowItWorks/HIWIcons/Microphone";
import Profile from "@/components/sections/HowItWorks/HIWIcons/Profile";
import Recording from "@/components/sections/HowItWorks/HIWIcons/Recording";
import ShareScreen from "@/components/sections/HowItWorks/HIWIcons/ShareScreen";

export default function ChooseHowToMeet() {
  const toolBar = [
    <Camera key="camera" />,
    <Microphone key="microphone" />,
    <Chat key="chat" />,
    <ShareScreen key="shareScreen" />,
    <Recording key="recording" />,
  ];
  return (
    <div
      aria-hidden={true}
      role="presentation"
      className="h-full border-t border-l border-gray rounded-tl-3xl flex flex-col items-center"
      style={{ transform: "translateX(10%)" }}
    >
      <div className="w-full border-b border-gray py-3 px-5 flex [&>span]:p-1 [&>span]:rounded-full [&>span]:bg-[#9ca3af] gap-1">
        <span />
        <span />
        <span />
      </div>
      <div className="w-full grid grid-cols-2 flex-1 divide-x divide-gray">
        {Array.from({ length: 2 }, (_, i) => (
          <div
            key={`profiles[${i}]`}
            className="flex justify-center items-center relative py-4"
          >
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
            />
            <Profile />
          </div>
        ))}
      </div>
      <div className="py-3 px-5 flex gap-4 border border-b-0 border-gray rounded-tl-2xl rounded-tr-2xl">
        {toolBar}
      </div>
    </div>
  );
}
