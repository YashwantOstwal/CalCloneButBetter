import {
  Deel,
  Vercel,
  Angelist,
  Mercury,
  Lumsitry,
} from "@/components/CustomersLogo";
import StoryBlok from "@/components/CustomersLogo/StoryBlok";
import ClientShowcase from "@/components/ClientShowcase";
import Orrick from "@/components/CustomersLogo/Orrick";
import Antimetal from "@/components/CustomersLogo/Antimetal";
import Framer from "@/components/CustomersLogo/Framer";
import Coinbase from "@/components/CustomersLogo/Coinbase";
import Section from "@/components/Section";

export default function TrustedBy() {
  const clients = [
    <Deel key="deel" />,
    <Vercel key="vercel" />,
    <Coinbase key="coinbase" />,
    <Mercury key="mercury" />,
    <Angelist key="angelist" />,
    <Lumsitry key="lumsitry" />,
    <StoryBlok key="storyblok" />,
    <Framer key="framer" />,
    <Orrick key="orrick" />,
    <Antimetal key="antimetal" />,
  ];
  return (
    <Section id="trusted-by">
      <ClientShowcase>
        <ClientShowcase.Caption>
          Trusted by fast-growing companies around the world
        </ClientShowcase.Caption>
        <ClientShowcase.Clients>{clients}</ClientShowcase.Clients>
      </ClientShowcase>
    </Section>
  );
}
