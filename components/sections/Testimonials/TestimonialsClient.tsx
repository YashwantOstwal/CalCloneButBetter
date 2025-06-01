"use client";
import useToggleState from "@/hooks/useToggleState";
import { useMemo } from "react";
import { motion } from "motion/react";
import CrossSVG from "@/components/CrossSVG";
import Image from "next/image";
interface Testimonial {
  testimonial: string;
  name: string;
  occupation: string;
  profilePicture: string;
  brandLogo: string;
}

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
export default function TestimonialsClient() {
  const { state } = useToggleState<HTMLDivElement>(
    { from: 0, to: testimonials.length },
    5000
  );
  const orderedTestimonials: Testimonial[] = useMemo(() => {
    let i = state;
    const orderedTestimonials: Testimonial[] = [];
    do {
      orderedTestimonials.push(testimonials[i]);
      i = (i + 1) % testimonials.length;
    } while (i != state);
    return orderedTestimonials;
  }, [state]);
  return (
    <div className="px-1 h-[360px] sm:h-[270px] border-y border-y-gray flex justify-center relative overflow-x-clip">
      {orderedTestimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.name}
          layoutId={testimonial.name}
          initial={{
            opacity: index == 2 ? 0 : index == 0 ? 1 : 0.5,
          }}
          style={{
            position: index == 2 ? "absolute" : "relative",
            display: index == 2 ? "hidden" : "block",
            zIndex: index == 2 ? 1 : 2,
            order: index == 0 ? 2 : index,
          }}
          animate={{
            opacity: index == 2 ? 0 : index == 0 ? 1 : 0.5,
          }}
          transition={{
            layout: { duration: 0.8 },
            opacity: { duration: 0.8 },
          }}
          className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-[50%] h-full shrink-0 relative p-3 border-r-gray border-r"
        >
          <CrossSVG className="absolute -left-[14px] -bottom-[14px] rounded-full scale-[0.85]" />
          <CrossSVG className="absolute -right-[14px] -bottom-[14px] rounded-full scale-[0.85]" />
          <CrossSVG className="absolute -left-[14px] -top-[14px] rounded-full scale-[0.85]" />
          <CrossSVG className="absolute -right-[14px] -top-[14px] rounded-full scale-[0.85]" />
          <motion.div className="border border-gray rounded-2xl bg-white h-full flex flex-col justify-between p-4 lg:p-6 font-matter">
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
              />
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
