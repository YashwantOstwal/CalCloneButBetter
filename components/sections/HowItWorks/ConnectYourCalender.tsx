import * as motion from "motion/react-client";
import GoogleCal from "@/components/Intergrations/GoogleCal";
import Calender from "@/components/Intergrations/Calender";
import Outlook from "@/components/Intergrations/Outlook";
import Logo from "@/components/SVGs/Logo";

export default function ConnectYourCalender() {
  return (
    <div aria-hidden={true} role="presentation" className="h-full relative">
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
            <GoogleCal />
          </motion.div>
        </div>
        <div className="absolute w-[35%] aspect-square border border-[#e5e7eb] rounded-full"></div>
        <div className=" rounded-full p-4 border border-[#e5e7eb] shadow-md w-[25%]">
          <Logo className="w-full h-fit" />
        </div>
      </div>
    </div>
  );
}
