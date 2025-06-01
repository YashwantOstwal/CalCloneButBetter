import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import TestimonialsClient from "./TestimonialsClient";
import Label from "./TestimonialsIcons/Label";

export default function Testimonials() {
  return (
    <Section>
      <div className="pt-20 pb-28 space-y-10">
        <SectionHeader>
          <SectionHeader.Label Icon={<Label />}>
            Testimonials
          </SectionHeader.Label>
          <SectionHeader.Title>
            {"Don’t take our word for it"}
          </SectionHeader.Title>
          <SectionHeader.Description>
            {
              "Our users are our best ambassadors. Discover why we're the top choice for scheduling meetings."
            }
          </SectionHeader.Description>
        </SectionHeader>
        <TestimonialsClient />
      </div>
    </Section>
  );
}
