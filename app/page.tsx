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
