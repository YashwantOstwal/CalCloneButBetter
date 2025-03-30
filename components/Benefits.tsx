import React, { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import SectionTitle from "./SectionTitle";
import StackCards from "./StackCards";
import Info from "./BenefitsSVGs/Info";
import DropDownIcon from "./BenefitsSVGs/DropDownIcon";
import RevealOnHover from "./RevealOnHover";
import { Variants } from "motion/react";
import CustomButton from "./CustomButton";
function CardLogo(props: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      {...props}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="10" fill="#333333"></rect>
      <path
        d="M14.5291 26.208C11.2011 26.208 8.68906 23.616 8.68906 20.416C8.68906 17.2 11.0731 14.592 14.5291 14.592C16.3531 14.592 17.6171 15.152 18.6251 16.352L17.0411 17.728C16.3691 17.024 15.5371 16.672 14.5291 16.672C12.3691 16.672 11.0091 18.368 11.0091 20.416C11.0091 22.464 12.3691 24.128 14.5771 24.128C15.6651 24.128 16.4811 23.76 17.1371 23.04L18.7691 24.432C17.9211 25.456 16.4811 26.208 14.5291 26.208ZM22.8461 26.208C20.5581 26.208 18.7341 24.272 18.7341 21.872C18.7341 19.472 20.5581 17.504 22.8461 17.504C24.2861 17.504 25.0381 18.096 25.4861 18.992V17.68H27.6301V26H25.5341V24.64C25.0861 25.584 24.3341 26.208 22.8461 26.208ZM20.8941 21.856C20.8941 23.12 21.8221 24.256 23.1981 24.256C24.6221 24.256 25.5341 23.168 25.5341 21.872C25.5341 20.576 24.6221 19.456 23.1981 19.456C21.8221 19.456 20.8941 20.56 20.8941 21.856ZM28.9134 26V14.32H31.0734V26H28.9134Z"
        fill="#FFFFFF"
      ></path>
    </svg>
  );
}
const Benefits = () => {
  return (
    <div className="py-6 lg:py-20 px-1 ">
      <div className="flex flex-col items-center">
        <SectionTitle
          query="Benefits"
          title="Your all-purpose scheduling app"
          description="Discover a variety of our advanced features. Unlimited and free for individuals."
        />
        <CustomButton href="https://app.cal.com/signup" className="mt-2">
          Sign up
        </CustomButton>
      </div>
      <div className="grid md:grid-cols-2 gap-10 py-6">
        <BenefitsCard
          title="Avoid meeting overload"
          description="Only get booked when you want to. Set daily, weekly or monthly limits
          and add buffers around your events to allow you to focus or take a
          break."
          Demo={<Demo />}
        />

        <BenefitsCard
          title="Stand out with a custom booking link"
          description="Customize your booking link so it’s short and easy to remember for your bookers. No more long, complicated links one can easily forget."
          Demo={<Demo2 />}
        />
        <BenefitsCard
          title="Reduce no-shows with automated reminders"
          description="Easily send sms or email reminders about bookings, and send automated follow-ups to gather any relevant information before the meeting."
          Demo={<Demo3 />}
        />
        <BenefitsCard
          title="Streamline your bookers’ experience"
          description="Let your bookers overlay their calendar, receive booking confirmations via text or email, get events added to their calendar, and allow them to reschedule with ease."
          Demo={<Demo4 />}
        />
      </div>
      <div className="text-center  -mx-4">
        <div className="text-[48px] font-cal text-[#141414] my-10">
          ...and so much more!
        </div>
        <RevealOnHover />
      </div>
    </div>
  );
};
function Demo3() {
  return (
    <div className="flex-1 w-full px-5 flex items-center">
      <div className="relative w-[90%] mx-auto h-[100px] rounded-2xl">
        <div className="absolute inset-x-0 h-full top-4 scale-[0.94] rounded-2xl border border-gray bg-[#fafafa]" />
        <div className="absolute inset-x-0 h-full top-2 scale-[0.97] rounded-2xl border border-gray bg-[#fafafa]" />
        {[
          {
            title: "Payment Received",
            description: "$50.00 received for consultation call with James",
            time: "30m ago",
          },
          {
            title: "New Booking Confirmed",
            description:
              "Alen Chen booked a 30 min Discovery call for Mon, Apr 1",
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
        ].map((eachItem, index) => (
          <AutomatedRemaindersCard
            key={eachItem.title}
            {...eachItem}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
function Demo4() {
  const variants: Variants = {
    initial: {
      maskImage: "linear-gradient(to right,rgba(0,0,0,0) ,rgba(0,0,0,0))",
      y: "15px",
    },
    animate: {
      maskImage: [
        null,
        "linear-gradient(to right,rgba(0,0,0,1) ,rgba(0,0,0,1))",
        "linear-gradient(to right,rgba(0,0,0,1) ,rgba(0,0,0,1)",
        "linear-gradient(to right,rgba(0,0,0,0) ,rgba(0,0,0,0))",
      ],
      y: [null, "0px", "0px", "10px"],
    },
  };
  const format = (num: number) => (num < 10 ? "0" + num : num);

  return (
    <div className="w-full relative">
      <div className="h-[110%] max-h-[350px] -bottom-[15%] min-w-[700px] w-full absolute right-[10%]  font-matter border-r border-t rounded-tr-3xl border-gray flex flex-col">
        <div className="border-b border-gray grid-cols-7 py-2 px-4 flex justify-end items-center gap-4 ">
          <div className="flex gap-2 items-center">
            <div className="w-[34px] rounded-full bg-black p-[3px] flex justify-end">
              <div className="w-1/2 aspect-square bg-white rounded-full" />
            </div>
            <span className="text-sm text-[#111827] font-semibold tracking-wide">
              Overlay my calender
            </span>
          </div>
          <div className="p-1 flex justify-center gap-0.5 bg-[#f3f4f6] rounded-md [&>span]:px-3 [&>span]:py-1 leading-tight">
            <span className=" bg-white border border-[#e1e2e5] rounded-md">
              12h
            </span>
            <span className="text-[#cccccc]">24h</span>
          </div>
        </div>
        <div className="grid grid-cols-7 text-xs py-2 border-b border-gray font-semibold">
          {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map(
            (eachDay, index) => (
              <div className="m-auto space-x-1" key={eachDay}>
                <span
                  className={index === 4 ? "text-[#111111]" : "text-[#6b7280]"}
                >
                  {eachDay}
                </span>
                <span
                  className={
                    index === 4
                      ? "bg-black text-white rounded-lg px-1 py-0.5"
                      : "text-[#6b7280]"
                  }
                >
                  {format(index + 4)}
                </span>
              </div>
            )
          )}
        </div>
        <div className="relative h-full">
          <div className="relative z-10 grid grid-cols-7 grid-rows-3 h-full font-matter text-[11px] text-[#111111] [&>div]:rounded-lg">
            {/* staggering children with variants unable to perform infinite repeat animation, and also the "custom" prop cannot be used with variants as the component is server rendered.Hence had to manually drill the props */}
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                repeatDelay: 2,
                repeat: Infinity,
                times: [0, 0.125, 0.875, 1],
                duration: 4,
              }}
              className="col-start-3 row-start-1 row-span-3 bg-[#d9f3ff] p-2 m-auto"
              style={{ width: "calc(100% - 4px)", height: "calc(100% - 4px)" }}
            >
              <div className="opacity-80 leading-[1.3] font-semibold tracking-wide">
                Making coffee
              </div>
              <div className="text-[10px] opacity-50 leading-[1.5]">
                9:00 AM - 4PM
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                repeatDelay: 2,
                repeat: Infinity,
                times: [0, 0.125, 0.875, 1],
                duration: 4,
                delay: 0.2,
              }}
              className=" col-start-4 row-start-2 bg-[#E9DDFE] p-2 m-auto"
              style={{ width: "calc(100% - 4px)", height: "calc(100% - 4px)" }}
            >
              <div className="opacity-80 leading-[1.3] font-semibold tracking-wide">
                Breakfast
              </div>
              <div className="text-[10px] leading-[1.5] opacity-50">
                11:30 AM - 2PM
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                repeatDelay: 2,
                repeat: Infinity,
                times: [0, 0.125, 0.875, 1],
                duration: 4,
                delay: 0.4,
              }}
              className=" col-start-5 row-start-1 bg-[#E9DDFE] p-2 m-auto"
              style={{ width: "calc(100% - 4px)", height: "calc(100% - 4px)" }}
            >
              <div className="opacity-80 leading-[1.3] font-semibold tracking-wide">
                Breakfast
              </div>
              <div className="text-[10px] leading-[1.5] opacity-50">
                11:30 AM - 2PM
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                repeatDelay: 2,
                repeat: Infinity,
                times: [0, 0.125, 0.875, 1],
                duration: 4,
                delay: 0.6,
              }}
              className=" col-start-5 row-start-2 row-span-2 pt-[25%]"
            >
              <div
                className="h-[100%] bg-[#e9ddfe] w-full rounded-lg p-2 m-auto"
                style={{
                  width: "calc(100% - 4px)",
                  height: "calc(100% - 4px)",
                }}
              >
                <div className="opacity-80 leading-[1.3] font-semibold tracking-wide">
                  Design conference
                </div>
                <div className="text-[10px] leading-[1.5] opacity-50">
                  6PM - 8:30 PM
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                repeatDelay: 2,
                repeat: Infinity,
                times: [0, 0.125, 0.875, 1],
                duration: 4,
                delay: 0.8,
              }}
              className=" col-start-6 row-start-2 row-span-2 bg-[#F9d7d9] p-2 m-auto"
              style={{ width: "calc(100% - 4px)", height: "calc(100% - 4px)" }}
            >
              <div className="opacity-80 leading-[1.3] font-semibold tracking-wide">
                Hiring call
              </div>
              <div className="text-[10px] leading-[1.5] opacity-50">
                6PM - 8:30 PM
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                repeatDelay: 2,
                repeat: Infinity,
                times: [0, 0.125, 0.875, 1],
                duration: 4,
                delay: 1,
              }}
              className="col-start-7 row-start-1 row-span-3 py-[33%]"
            >
              <div
                className="bg-[#D9F3FF] h-full rounded-lg p-2 m-auto"
                style={{
                  width: "calc(100% - 4px)",
                  height: "calc(100% - 4px)",
                }}
              >
                <div className="opacity-80 leading-[1.3] font-semibold tracking-wide">
                  Full company meeting
                </div>
                <div className="text-[10px] leading-[1.5] opacity-50">
                  6PM - 8:30 PM
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute inset-0 grid grid-cols-7 grid-rows-3">
            {Array.from(
              { length: 7 * 3 },
              (_: undefined, i) => `cell-${i + 1}`
            ).map((cellId) => (
              <div
                key={cellId}
                className="w-full h-full border-l border-b border-gray"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomatedRemaindersCard({
  title,
  description,
  time,
  index,
}: {
  title: string;
  description: string;
  time: string;
  index: number;
}) {
  return (
    <>
      <motion.div
        animate={{
          opacity: [0, 1, 1, 0],
          x: ["30px", "0px", "0px", "0px"],
          y: ["0px", "0px", "0px", "-10px"],
        }} //modify these values to get the right config among benfits card
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
            <CardLogo className="my-auto size-10" />
            <div className="h-[100%] py-1 text-nowrap text text-sm sm:hidden">
              {time}
            </div>
          </div>
          <div className="h-full">
            <div className="font-semibold font-cal">{title}</div>
            <div className="text-[#8d8d8d] md:max-w-[300px]">{description}</div>
          </div>
          <div className="h-[100%] py-1 text-nowrap text text-sm hidden sm:block">
            {time}
          </div>
        </div>
      </motion.div>
    </>
  );
}

function Demo2() {
  return (
    <div className="mx-8 max-w-[350px] w-full mt-4 lg:mt-8 relative font-matter">
      <StackCards top="16px" stackCount={2} shrinkBy="10%">
        <div className="relative h-full">
          {[
            {
              caption: "Build your Youtube channel.",
              name: "Nizzy Abi",
              service: "Youtube coaching",
              imgProps: {
                src: "/benefits/nizzy.png",
                alt: "Nizzy",
              },
            },
            {
              name: "Rajiv Sahal",
              service: "Coding Tutoring",
              caption: "Level up your coding skills",
              imgProps: {
                src: "/benefits/rajiv.png",
                alt: "Rajiv",
              },
            },
            {
              name: "Keith Williams",
              service: "Spanish lessons",
              caption: "Learn to speak Spanish.",
              imgProps: {
                src: "/benefits/keith.png",
                alt: "Keith",
              },
            },
            {
              name: "Ewa Michalak",
              service: "Travel Planning",
              caption: "Let's plan your next adventure.",
              imgProps: {
                src: "/benefits/ewa.png",
                alt: "Ewa",
              },
            },
            {
              name: "Bailey Pumfleet;",
              service: "Business Consulting",
              caption: "Build a successful business.",
              imgProps: {
                src: "/benefits/bailey.png",
                alt: "Bailey",
              },
            },
            {
              name: "Peer Richalson",
              service: "German Lessons",
              caption: "Let's learn German.",
              imgProps: {
                src: "/benefits/peer.png",
                alt: "Peer",
              },
            },
          ].map((eachItem, index) => (
            <CustomBookingLinkCard
              {...eachItem}
              index={index}
              key={eachItem.name}
            />
          ))}
        </div>
      </StackCards>
    </div>
  );
}
function CustomBookingLinkCard({
  name,
  service,
  caption,
  index,
  imgProps,
}: {
  name: string;
  service: string;
  caption: string;
  index: number;
  imgProps: {
    src: string;
    alt: string;
  };
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 4,
        times: [0, 0.25, 3.75, 4].map((eachTimeStamp) => eachTimeStamp / 4),
        repeat: Infinity,
        repeatDelay: 20,
        delay: index * 4,
      }}
      className="absolute inset-x-0 top-0 bottom-4 p-6 pb-4 rounded-tl-3xl rounded-tr-3xl flex flex-col"
    >
      <Image
        src={imgProps.src}
        alt={imgProps.alt}
        width={32}
        height={32}
        className="size-8 rounded-full mb-2"
      />
      <div className="mb-1 text-base font-medium">{name}</div>
      <div className="mb-4 text-2xl font-semibold">{service}</div>
      <div className="font-medium text-sm h-full flex items-end gap-2 leading-none">
        <Info />
        <span>{caption}</span>
      </div>
      <div className="absolute top-0 inset-x-0 flex justify-center overflow-visible items-center">
        <motion.div
          initial={{ y: "-75%" }}
          animate={{ y: ["-75%", "-50%", "-50%", "-25%"] }}
          transition={{
            duration: 4,
            times: [0, 0.25, 3.75, 4].map((eachTimeStamp) => eachTimeStamp / 4),
            repeat: Infinity,
            repeatDelay: 20,
            delay: index * 4,
          }}
          className="font-cal shadow-md rounded-2xl bg-[#f7f7f7] px-5 py-3 text-xl font-bold border border-gray"
        >
          cal.com/{name.split(" ")[0].toLowerCase()}
        </motion.div>
      </div>
    </motion.div>
  );
}
function Demo() {
  return (
    <div className="max-w-[400px] relative mt-2 w-full mx-8 h-full font-matter">
      <StackCards top="16px" stackCount={3} shrinkBy="10%">
        <div className="p-4 sm:p-6">
          <h3 className="mb-4 text-md font-semibold text-[rgb(156,163,175)] tracking-wide">
            Notice and buffers
          </h3>
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
          initial={{ y: "8px" }}
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
function BenefitsCard({
  title,
  description,
  Demo,
}: {
  title: string;
  description: string;
  Demo: ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray grid grid-rows-5 font-matter gap-4 overflow-hidden">
      <div className="px-8 pt-8 space-y-4 row-span-2">
        <h3 className="text-[20px] text-[#141414] font-semibold tracking-wide">
          {title}
        </h3>
        <p className="text-[#6b7280] text-[16px] ">{description}</p>
      </div>
      <div className="row-span-3 [&>div:h-full] [&>div:w-full] flex justify-center">
        {Demo}
      </div>
    </div>
  );
}
export default Benefits;
