import type { Metadata } from "next";
import Benefits from "@/components/sections/Benefits";
import HowItWorks from "@/components/sections/HowItWorks";
import WallOfLove from "@/components/sections/WallOfLove";
import Testimonials from "@/components/sections/Testimonials";
import Business from "@/components/sections/Business/Business";
import GetStarted from "@/components/sections/GetStarted/GetStarted";
import Footer from "@/components/sections/Footer";
import AppStore from "@/components/sections/AppStore";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import SchedulingFor from "@/components/sections/SchedulingFor";
import WhatsBetter from "@/components/WhatsBetter";

export const metadata: Metadata = {
  title: "CalCloneButBetter.com | Landing Page clone",
  description: "To be done in CN classes",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: ["./opengraph-image.png"],
  },
  metadataBase: new URL("https://calclonebutbetter.com"),
};
export default async function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <AppStore />
      <Business />
      <WallOfLove />
      <SchedulingFor className="[&>:last-child]:md:gap-y-14" />
      <GetStarted />
      <Footer />
      <WhatsBetter />
    </main>
  );
}
