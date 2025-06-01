import * as motion from "motion/react-client";
import CalLogo from "./BenefitsIcons/CalLogo";

const notifications = [
  {
    title: "Payment Received",
    description: "$50.00 received for consultation call with James",
    time: "30m ago",
  },
  {
    title: "New Booking Confirmed",
    description: "Alen Chen booked a 30 min Discovery call for Mon, Apr 1",
    time: "Just now",
  },
  {
    title: "Google Calendar Connected",
    description: "Your Calender is now synching with Google Calender",
    time: "12m ago",
  },
  {
    title: "Booking Rescheduled",
    description: "Sarah moved meeting to Thu, Dec 28 at 2:00 PM",
    time: "5m ago",
  },
  {
    title: "Booking Cancelled",
    description: "Michael cancelled the product demo for Fri,Mar 29",
    time: "15m ago",
  },
];

export default function AutomatedRemainders() {
  return (
    <div
      className="flex-1 w-full px-5 flex items-center"
      aria-hidden={true}
      role="presentation"
    >
      <div className="relative w-[90%] mx-auto h-[100px] rounded-2xl">
        <div className="absolute inset-x-0 h-full top-4 scale-[0.94] rounded-2xl border border-gray bg-[#fafafa]" />
        <div className="absolute inset-x-0 h-full top-2 scale-[0.97] rounded-2xl border border-gray bg-[#fafafa]" />
        {notifications.map(({ title, description, time }, index) => (
          <motion.div
            key={`notifications[${index}]`}
            animate={{
              opacity: [0, 1, 1, 0],
              x: ["30px", "0px", "0px", "0px"],
              y: ["0px", "0px", "0px", "-10px"],
            }}
            transition={{
              duration: 4,
              times: [0, 0.5, 3.5, 4].map((eachTimeStamp) => eachTimeStamp / 4),
              repeat: Infinity,
              repeatDelay: 13.5,
              delay: index * 3.5,
            }}
            className="absolute inset-0 flex justify-center items-end"
          >
            <div className="bg-[#f7f7f7] w-full min-h-full rounded-2xl border border-gray flex sm:flex-row flex-col justify-between p-3 font-matter text-[#141414] gap-3">
              <div className="flex justify-between">
                <CalLogo className="my-auto size-10" />
                <div className="h-[100%] py-1 text-nowrap text text-sm sm:hidden">
                  {time}
                </div>
              </div>
              <div className="h-full">
                <div className="font-semibold font-cal">{title}</div>
                <div className="text-[#8d8d8d] md:max-w-[300px]">
                  {description}
                </div>
              </div>
              <div className="h-[100%] py-1 text-nowrap text text-sm hidden sm:block">
                {time}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
