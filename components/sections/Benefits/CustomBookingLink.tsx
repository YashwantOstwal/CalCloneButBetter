import Image from "next/image";
import * as motion from "motion/react-client";
import StackCards from "@/components/StackCards";
import Info from "@/components/sections/Benefits/BenefitsIcons/Info";

export default function CustomBookingLink() {
  const bookingLinks = [
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
  ];

  return (
    <div
      aria-hidden={true}
      role="presentation"
      className="mx-8 max-w-[350px] w-full mt-4 lg:mt-8 relative font-matter"
    >
      <StackCards top="16px" stackCount={2} shrinkBy="10%">
        <div className="relative h-full">
          {bookingLinks.map(
            ({ name, service, caption, imgProps: { src, alt } }, i) => (
              <motion.div
                key={`bookingLinks[${i}]`}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 4,
                  times: [0, 0.25, 3.75, 4].map(
                    (eachTimeStamp) => eachTimeStamp / 4
                  ),
                  repeat: Infinity,
                  repeatDelay: 20,
                  delay: i * 4,
                }}
                className="absolute inset-x-0 top-0 bottom-4 p-6 pb-4 rounded-tl-3xl rounded-tr-3xl flex flex-col"
              >
                <Image
                  src={src}
                  alt={alt}
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
                      times: [0, 0.25, 3.75, 4].map(
                        (eachTimeStamp) => eachTimeStamp / 4
                      ),
                      repeat: Infinity,
                      repeatDelay: 20,
                      delay: i * 4,
                    }}
                    className="font-cal shadow-md rounded-2xl bg-[#f7f7f7] px-5 py-3 text-xl font-bold border border-gray"
                  >
                    cal.com/{name.split(" ")[0].toLowerCase()}
                  </motion.div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </StackCards>
    </div>
  );
}
