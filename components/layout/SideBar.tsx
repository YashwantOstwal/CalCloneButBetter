import * as motion from "motion/react-client";
const SideBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="border-t-2 border-black fixed top-12 inset-x-0 bottom-0 bg-[#f4f4f4] flex flex-col justify-center font-cal text-[22px]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        exit={{ opacity: 0 }}
        className="flex-1 overflow-y-scroll tracking-wide pb-[55px]"
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
};

export default SideBar;
