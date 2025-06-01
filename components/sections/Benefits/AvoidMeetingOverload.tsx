import StackCards from "@/components/StackCards";
import * as motion from "motion/react-client";
import DropDownIcon from "./BenefitsIcons/DropDownIcon";
export default function Demo() {
  return (
    <div
      aria-hidden={true}
      role="presentation"
      className="max-w-[400px] relative mt-2 w-full mx-8 h-full font-matter"
    >
      <StackCards top="16px" stackCount={3} shrinkBy="10%">
        <div className="p-4 sm:p-6">
          <div className="mb-4 text-md font-semibold text-[rgb(156,163,175)] tracking-wide">
            Notice and buffers
          </div>
          <DropDown
            label="Minimum notice"
            values={["24 hours", "25 mins", "45 mins"]}
          />
          <div className="grid sm:grid-cols-2 gap-3 ">
            <DropDown
              label="Buffer before event"
              values={["2 days", "1 hour", "1 hour"]}
            />
            <DropDown
              label="Buffer after event"
              values={["3 hours", "24 hours", "2 days"]}
            />
          </div>
        </div>
      </StackCards>
    </div>
  );
}
const DropDown = ({ values, label }: { values: string[]; label: string }) => (
  <div>
    <div className="mb-2 block text-sm font-semibold leading-none tracking-wide">
      {label}
    </div>
    <div className="relative mb-3">
      {values.map((eachValue, i) => (
        <motion.div
          key={label + eachValue + (i + 1)}
          initial={{ y: "8px", opacity: 0 }}
          animate={{
            opacity: [null, 1, 1, 0],
            y: [null, "0px", "0px", "-8px"],
          }}
          transition={{
            delay: i * 2,
            duration: 2,
            times: [0, 0.125, 0.875, 1],
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 4,
          }}
          className="font-matter text-sm flex justify-between border border-gray rounded-md first:static absolute inset-0 py-2 px-3"
        >
          <span>{eachValue}</span>
          <DropDownIcon />
        </motion.div>
      ))}
    </div>
  </div>
);
