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
import Supabase from "@/components/CustomersLogo/Supabase";
import Okteto from "@/components/CustomersLogo/Okteto";
import Section from "@/components/Section";
import { cn } from "@/utils/cn";

export default function SchedulingFor({ className }: { className?: string }) {
  const clients = [
    <Deel key="deel" />,
    <Vercel key="vercel" />,
    <Mercury key="mercury" />,
    <Angelist key="angelist" />,
    <Lumsitry key="lumsitry" />,
    <StoryBlok key="storyblok" />,
    <Orrick key="orrick" />,
    <Antimetal key="antimetal" />,
    <Supabase key="supabase" />,
    <Okteto key="okteto" />,
  ];
  return (
    <Section id="client-showcase">
      <ClientShowcase className={cn(className)}>
        <ClientShowcase.Caption>
          Trusted by fast-growing companies around the world
        </ClientShowcase.Caption>
        <ClientShowcase.Clients>{clients}</ClientShowcase.Clients>
      </ClientShowcase>
    </Section>
  );
}
