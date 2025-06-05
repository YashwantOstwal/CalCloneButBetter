"use client";
import { useMemo } from "react";
import useToggleState from "@/hooks/useToggleState";
import { AnimatePresence, motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import CrossSVG from "@/components/CrossSVG";
import AppleCalenderLogo from "@/public/AppStore/AppleCalenderLogo.png";
import GoogleCalenderLogo from "@/public/AppStore/GoogleCalenderLogo.png";
import GoogleMeetLogo from "@/public/AppStore/GoogleMeetLogo.png";
import MicrosoftOutlookLogo from "@/public/AppStore/MicrosoftOutlookLogo.png";
import StripeLogo from "@/public/AppStore/StripeLogo.png";
import PayPalLogo from "@/public/AppStore/PayPalLogo.png";
import PostHogLogo from "@/public/AppStore/PostHogLogo.png";
import MetaLogo from "@/public/AppStore/MetaLogo.png";
import MicrosoftTeamsLogo from "@/public/AppStore/MicrosoftTeamsLogo.png";
import SalesForceLogo from "@/public/AppStore/SalesForceLogo.png";
import ZapierLogo from "@/public/AppStore/ZapierLogo.png";
import ZoomLogo from "@/public/AppStore/ZoomLogo.png";
import HubSpotLogo from "@/public/AppStore/HubSpotLogo.png";
import LinearLogo from "@/public/AppStore/LinearLogo.png";
import FrayCastLogo from "@/public/AppStore/FrayCastLogo.png";
import GoogleAnalyticsLogo from "@/public/AppStore/GoogleAnalyticsLogo.png";

interface imgPropsType {
  width: number;
  height: number;
  alt: string;
  src: StaticImageData;
}
const imgProps: imgPropsType[] = [
  { width: 40, height: 40, alt: "Linear Logo", src: LinearLogo },
  { width: 65, height: 65, alt: "Fray Cast Logo", src: FrayCastLogo },

  {
    width: 40,
    height: 40,
    alt: "Google Calendar Logo",
    src: GoogleCalenderLogo,
  },
  { width: 45, height: 45, alt: "Google Meet Logo", src: GoogleMeetLogo },
  { width: 40, height: 40, alt: "Outlook Logo", src: MicrosoftOutlookLogo },
  { width: 60, height: 60, alt: "SalesForce Logo", src: SalesForceLogo },
  { width: 35, height: 35, alt: "HubSpot Logo", src: HubSpotLogo },
  { width: 35, height: 35, alt: "PayPal Logo", src: PayPalLogo },
  { width: 35, height: 35, alt: "Stripe Logo", src: StripeLogo },
  { width: 45, height: 45, alt: "Zapier Logo", src: ZapierLogo },
  {
    width: 40,
    height: 40,
    alt: "Apple Calendar Logo",
    src: AppleCalenderLogo,
  },
  {
    width: 50,
    height: 50,
    alt: "Google Analytics Logo",
    src: GoogleAnalyticsLogo,
  },
  { width: 45, height: 45, alt: "Zoom Logo", src: ZoomLogo },
  { width: 55, height: 55, alt: "PostHog Logo", src: PostHogLogo },
  {
    width: 55,
    height: 55,
    alt: "Microsoft Teams Logo",
    src: MicrosoftTeamsLogo,
  },
  { width: 55, height: 55, alt: "Meta Logo", src: MetaLogo },
];
export default function AppStoreSlideShow() {
  const { ref, state } = useToggleState<HTMLDivElement>(
    {
      from: 0,
      to: imgProps.length,
    },
    3500
  );

  const filteredImageProps = useMemo(() => {
    const temp: imgPropsType[] = [];
    let i = state;
    while (temp.length < 8) {
      temp.unshift(imgProps[i]);
      i = (i + 1) % imgProps.length;
    }
    return temp;
  }, [state]);
  return (
    <div
      ref={ref}
      aria-hidden
      role="presentation"
      className="[clip-path:inset(2px)] relative grid grid-cols-4 grid-rows-2 divide-x divide-y divide-gray w-full max-w-[450px] aspect-[2] m-10  bg-white overflow-hidden"
    >
      <CrossSVG
        className="absolute rounded-full size-6 border-none"
        style={{
          left: "calc(25% - 12px)",
          top: "calc(50% - 12px)",
        }}
        fill="#ffffff"
      />
      <CrossSVG
        className="absolute rounded-full size-6 border-none"
        style={{ left: "calc(50% - 12px)", top: "calc(50% - 12px)" }}
        fill="#ffffff"
      />
      <CrossSVG
        className="absolute rounded-full size-6 border-none"
        style={{ left: "calc(75% - 12px)", top: "calc(50% - 12px)" }}
        fill="#ffffff"
      />
      <AnimatePresence mode="popLayout">
        {filteredImageProps.map(({ width, height, src, alt }: imgPropsType) => (
          <div key={alt} className="grid place-items-center">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              layoutId={alt}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ ease: "linear" }}
              className="relative z-20"
            >
              <Image width={width} alt={alt} src={src} height={height} />
            </motion.div>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
