import type { Metadata } from "next";
import Benefits from "@/components/Benefits";
import SectionWrap from "@/components/SectionWrap";
import HowItWorks from "@/components/HowItWorks";
import WallOfLove from "@/components/WallOfLove";
import {
  Deel,
  Vercel,
  Angelist,
  Mercury,
  Lumsitry,
} from "@/components/CustomersLogo";
import Testimonials from "@/components/Testimonials";
import StoryBlok from "@/components/CustomersLogo/StoryBlok";
import Business from "@/components/Business";
import Customers from "@/components/Customers";
import Orrick from "@/components/CustomersLogo/Orrick";
import Antimetal from "@/components/CustomersLogo/Antimetal";
import Supabase from "@/components/CustomersLogo/Supabase";
import Framer from "@/components/CustomersLogo/Framer";
import Coinbase from "@/components/CustomersLogo/Coinbase";
import Okteto from "@/components/CustomersLogo/Okteto";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import AppStore from "@/components/AppStore";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "CalCloneButBetter.com | Landing Page clone",
  description: "To be done in CN classes",
  twitter: {
    card: "summary_large_image",
  },
};
export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <HeroSection />
        <SectionWrap>
          <Customers title="Trusted by fast-growing companies around the world">
            {[
              <Deel key="deel-logo" />,
              <Vercel key="vercel-logo" />,
              <Coinbase key="coinbase-logo" />,
              <Mercury key="mercury-logo" />,
              <Angelist key="angelist-logo" />,
              <Lumsitry key="lumistry-logo" />,
              <StoryBlok key="storyblok-logo" />,
              <Framer key="framer-logo" />,
              <Orrick key="orrick-logo" />,
              <Antimetal key="antimetal-logo" />,
            ]}
          </Customers>
        </SectionWrap>
        <HowItWorks />
        <SectionWrap>
          <Benefits />
        </SectionWrap>
        <SectionWrap>
          <Testimonials />
        </SectionWrap>
        <SectionWrap>
          <AppStore />
        </SectionWrap>
        <SectionWrap>
          <Business />
        </SectionWrap>
        <SectionWrap>
          <WallOfLove />
        </SectionWrap>
        <SectionWrap>
          <Customers
            title="Scheduling for companies and employees of"
            className="md:gap-y-14"
          >
            {[
              <Deel key="deel-logo" />,
              <Vercel key="vercel-logo" />,
              <Mercury key="mercury-logo" />,
              <Angelist key="angelist-logo" />,
              <Lumsitry key="lumistry-logo" />,
              <StoryBlok key="storyblok-logo" />,
              <Orrick key="orrick-logo" />,
              <Antimetal key="antimetal-logo" />,
              <Supabase key="supabase-logo" />,
              <Okteto key="okteto-logo" />,
            ]}
          </Customers>
        </SectionWrap>
        <SectionWrap>
          <GetStarted />
        </SectionWrap>
        <Footer />
      </div>
    </>
  );
}
