import CalLogo from "@/components/sections/Benefits/BenefitsIcons/CalLogo";
import * as motion from "motion/react-client";

interface DropDownItem {
  href: string;
  icon: string;
  title: string;
  description?: string;
}

interface DropDownTemplateProps {
  data: DropDownItem[];
}

const DropDownTemplate = ({ data }: DropDownTemplateProps) => {
  return (
    <div className="grid grid-rows-4 gap-1 grid-flow-col-dense cursor-pointer">
      {data.map((eachItem) => (
        <motion.div
          initial="initial"
          whileHover="whileHover"
          key={eachItem.href}
          className="px-4 py-3 rounded-2xl flex items-center gap-4 hover:bg-[#f5f5f5]"
        >
          <div className="size-12 shrink-0 rounded-lg bg-[#f4f4f4] border border-gray relative grid place-items-center">
            <motion.div
              variants={{ initial: { scale: 1 }, whileHover: { scale: 0.9 } }}
              className="absolute inset-[6px] flex flex-col justify-between"
            >
              <div className="flex justify-between">
                <div className="w-1 h-1 rounded-full bg-[#C8D4DD]" />
                <div className="w-1 h-1 rounded-full bg-[#C8D4DD]" />
              </div>
              <div className="flex justify-between">
                <div className="w-1 h-1 rounded-full bg-[#C8D4DD]" />
                <div className="w-1 h-1 rounded-full bg-[#C8D4DD]" />
              </div>
            </motion.div>
            <CalLogo className="size-5" />
          </div>
          <div className="space-y-1 shrink-0">
            <div className="text-[15px] font-semibold leading-none tracking-wide">
              {eachItem.title}
            </div>
            <div className="text-[15px] leading-tight text-black/40 ">
              {eachItem?.description}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DropDownTemplate;
