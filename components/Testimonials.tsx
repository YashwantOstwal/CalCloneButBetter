import React from "react";
import SectionTitle from "./SectionTitle";
import * as motion from "motion/react-client";
import CrossSVG from "./CrossSVG";
import Image from "next/image";

// import AriaMinaei from "../public/testimonials/Aria Minaei.png";
// import Rauch from "../public/testimonials/Guillermo Rauch.png";
// import Kent from "../public/testimonials/Kent C. Dodds.png";
// import Ant from "../public/testimonials/Ant Wilson.png";
// import Supabase from "../public/testimonials/SupaBaseLogo.png";
// import TheatreJS from "../public/testimonials/TheatreJSLogo.svg";
// import Vercel from "../public/testimonials/VercelLogo.svg";
// import EpicWeb from "../public/testimonials/EpicWebLogo.svg";

interface Testimonial {
  testimonial: string;
  name: string;
  occupation: string;
  profilePicture: string;
  brandLogo: string;
}
const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      testimonial:
        "Just gave it a go and it's definitely the easiest meeting I've ever scheduled!",
      name: "Aria Minaei",
      occupation: "CEO, Theatre.JS",
      profilePicture: "/testimonials/Aria Minaei.png",
      brandLogo: "/testimonials/TheatreJSLogo.svg",
    },
    {
      testimonial:
        "I finally made the move to Cal after I couldn't find how to edit events in the Calendly dashboard.",
      name: "Ant Wilson",
      occupation: "Co-Founder & CTO, Supabase",
      profilePicture: "/testimonials/Ant Wilson.png",
      brandLogo: "/testimonials/SupaBaseLogo.png",
    },
    {
      testimonial: "I just migrated from Calendly to Cal.com",
      name: "Kent C. Dodds",
      occupation: "Founder of EpicWeb.dev",
      profilePicture: "/testimonials/Kent C. Dodds.png",
      brandLogo: "/testimonials/EpicWebLogo.png",
    },
    {
      testimonial:
        "I think Cal.com has a very good chance of creating a new category around being both great and well designed.",
      name: "Guillermo Rauch",
      occupation: "CEO, Vercel",
      profilePicture: "/testimonials/Guillermo Rauch.png",
      brandLogo: "/testimonials/VercelLogo.svg",
    },
  ];
  const xKeyframes = ["0%", "0%", "100%", "100%", "0%", "0%", "-100%", "-100%"];

  const initialX = ["-100%", "0%", "100%", "0%"];
  const initialMaskImage = [
    "linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
    "linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,0))",
    "linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
    "linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,1))",
  ];
  const maskImageKeyframes = [
    "linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,0))",
    "linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,0))",
    "linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
    "linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
    "linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,1))",
    "linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,1))",
    "linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
    "linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
  ];
  const animateX: string[][] = [];
  const animateMaskImage: string[][] = [];

  for (let i = 0; i < testimonials.length; i++) {
    const xTemp: string[] = [initialX[i]];
    const maskImageTemp: string[] = [initialMaskImage[i]];

    let j = i * 2;
    do {
      xTemp.push(xKeyframes[j]);
      maskImageTemp.push(maskImageKeyframes[j]);
      j = (j + 1) % xKeyframes.length;
    } while (j != i * 2);

    animateX.push(xTemp);
    animateMaskImage.push(maskImageTemp);
  }

  return (
    <div className="pt-20 pb-28 space-y-10">
      <SectionTitle
        query="Testimonials"
        title="Don’t take our word for it"
        description="Our users are our best ambassadors. Discover why we're the top choice for scheduling meetings."
      />
      <div className="mx-1 h-[360px] sm:h-[270px] border-y border-y-gray flex justify-center overflow-x-clip">
        <div className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-[50%] h-full relative">
          {testimonials.map((testimonial, k) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              x={animateX[k]}
              maskImage={animateMaskImage[k]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
function TestimonialCard({
  testimonial,
  maskImage,
  x,
}: {
  testimonial: Testimonial;
  maskImage: string[];
  x: string[];
}) {
  return (
    <>
      <motion.div
        className="absolute inset-0 border-r-gray border-r p-3"
        initial={{ x: x[0] }}
        animate={{
          x,
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          times: [0, 1, 5, 6, 10, 11, 15, 16, 20].map(
            (eachTimeStamp) => eachTimeStamp / 20
          ),
        }}
      >
        <CrossSVG className="absolute -left-[14px] -bottom-[14px] rounded-full scale-[0.85]" />
        <CrossSVG className="absolute -right-[14px] -bottom-[14px] rounded-full scale-[0.85]" />
        <CrossSVG className="absolute -left-[14px] -top-[14px] rounded-full scale-[0.85]" />
        <CrossSVG className="absolute -right-[14px] -top-[14px] rounded-full scale-[0.85]" />
        <motion.div
          initial={{
            maskImage: maskImage[0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            times: [0, 1, 5, 6, 10, 11, 15, 16, 20].map(
              (eachTimeStamp) => eachTimeStamp / 20
            ),
          }}
          //animating opacity with server side "motion" showing unexpected behavior.
          animate={{
            maskImage,
          }}
          className="border border-gray rounded-2xl bg-white h-full flex flex-col justify-between p-4 lg:p-6 font-matter"
        >
          <p className="text-[20px] lg:text-[24px] text-[#141414] [text-indent:-6px] lg:[text-indent:-7px] font-semibold">
            &quot;{testimonial.testimonial}&quot;
          </p>
          <div className="flex gap-3 items-center">
            <Image
              src={testimonial.profilePicture}
              width={44}
              height={44}
              className="size-[44px] rounded-lg"
              alt={testimonial.name}
            />
            <div className="text-[14px]">
              <p className="text-[#111827] font-medium">{testimonial.name}</p>
              <p className="text-[#6b7280]">{testimonial.occupation}</p>
            </div>

            <Image
              src={testimonial.brandLogo}
              alt="Brand Logo"
              width={50}
              height={50}
              className="w-[50px] h-fit ml-4"
            ></Image>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Testimonials;
