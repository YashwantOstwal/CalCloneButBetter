import * as motion from "motion/react-client";
import Image from "next/image";
import CustomButton from "@/components/StyledLink";
import Section from "@/components/Section";
import Google from "@/components/SVGs/Hero/Google";
import HeroClient from "./HeroClient";
import HeroBackground from "./Herobackground";

interface imgPropProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}
const imgProps: imgPropProps[] = [
  {
    src: "/achievements/Cal.comOnTrustPilot.svg",
    alt: "Cal.com Featured on Trust Pilot",
    width: 120,
    height: 54,
  },
  {
    src: "/achievements/Cal.comOnProductHunt.svg",
    alt: "Cal.com Featured on Product Hunt",
    width: 116,
    height: 54,
  },
  {
    src: "/achievements/Cal.comOnG2.svg",
    alt: "Cal.com Featured on G2",
    width: 112,
    height: 54,
  },
];
export default function Hero() {
  return (
    <Section>
      <div className="card-shadow px-2 lg:p-20 lg:pb-10 mt-[84px] grid max-lg:grid-rows-[auto_1fr] gap-4 lg:grid-cols-2 lg:gap-10 bg-white rounded-xl border border-gray font-matter overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, y: "30px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ ease: "easeOut" }}
          className="relative z-10 max-lg:p-4 max-lg:pt-[64px] flex flex-col gap-4 lg:gap-7 max-lg:items-center max-lg:text-center"
        >
          <p className="rounded-full bg-[#f5f5f5] border border-gray font-matter text-[12px] py-1 px-[14px] shadow-md w-fit text-[#242424] max-lg:mx-auto">
            Cal.com lauches new v5.1
          </p>
          <h1 className=" text-[40px] md:text-[55px] xl:text-[70px] font-cal text-primary-black leading-none text-balance">
            The better way to schedule your meetings
          </h1>
          <p className="text-[#898989] text-[16px] lg:text-[18px] max-w-md lg:max-w-2xl">
            A fully customizable scheduling experience for individuals,
            businesses taking calls and developers building scheduling platforms
            where users meet users.
          </p>
          <div className="w-[90%] space-y-4 md:max-w-[600px] max-w-[400px] lg:max-w-[400px] max-lg:mx-auto max-lg:px-2">
            <div className="flex gap-4 md:flex-row flex-col lg:flex-col">
              <CustomButton
                href="https://app.cal.com/auth/sso/google"
                className="flex-1"
              >
                <Google /> <span>Sign up with google</span>
              </CustomButton>
              <CustomButton
                variant="light"
                href="https://app.cal.com/signup"
                className="flex-1 shadow-none"
              >
                Sign up with email
              </CustomButton>
            </div>
            <p className="text-center text-[#898989] text-[14px]">
              No credit card required
            </p>
          </div>
        </motion.div>
        <div className="relative z-30">
          <HeroClient />
          <div className="hidden lg:flex items-center flex-nowrap gap-12 mt-8 mx-2">
            {imgProps.map(({ src, width, height, alt }) => (
              <Image
                unoptimized
                key={alt}
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{
                  width,
                  height,
                }}
              />
            ))}
          </div>
        </div>
        <HeroBackground />
      </div>
    </Section>
  );
}
