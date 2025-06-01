import React from "react";
import StackCards from "../../StackCards";
import * as motion from "motion/react-client";
interface ItemProps {
  delay?: number;
  from: string;
  to: string;
}

interface TransitionProps {
  delay: number;
  duration: number;
  repeat: number;
  repeatDelay: number;
  repeatType: "reverse" | "loop" | "mirror";
}

export default function SetYourAvailability() {
  return (
    <div
      aria-hidden={true}
      role="presentation"
      className="h-full justify-center relative [transform:translateX(10%)] w-[110%]"
    >
      <StackCards top="15px" shrinkBy="10%" stackCount={3}>
        <div className="p-5 w-[81%] space-y-4">
          <Item from="8:30 am" to="5:00 pm" />
          <Item delay={0.3} from="9:00 am" to="6:00 pm" />
          <Item from="10:00 am" to="6:00 pm" />
        </div>
      </StackCards>
    </div>
  );
}

function Item({ delay = 0, from, to }: ItemProps) {
  const transitionProps: TransitionProps = {
    delay,
    duration: 0.1,
    repeat: Infinity,
    repeatDelay: 2,
    repeatType: "reverse",
  };

  return (
    <div className="flex items-center gap-2">
      <motion.div
        initial={{ backgroundColor: "rgba(0,0,0,0.1)" }}
        animate={{ backgroundColor: "rgba(0,0,0,1)" }}
        transition={transitionProps}
        className="w-[34px] rounded-full bg-black p-[3px] shrink-0"
      >
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
          transition={transitionProps}
          className="w-1/2 aspect-square bg-white rounded-full"
        />
      </motion.div>
      <motion.div
        className="flex text-nowrap flex-1 items-center gap-2 text-sm"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={transitionProps}
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
