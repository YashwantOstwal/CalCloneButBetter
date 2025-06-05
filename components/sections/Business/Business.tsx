import BusinessSlideShow from "./BusinessSlideShow";
import CustomButton from "@/components/StyledLink";
import SectionHeader from "@/components/SectionHeader";
import Section from "@/components/Section";
import Label from "./BusinessIcons/Label";
const Business = () => {
  return (
    <Section id="business">
      <div className="py-6 lg:py-20 md:grid md:grid-cols-2 md:gap-10 space-y-6">
        <div className="flex flex-col justify-end max-lg:items-center">
          <SectionHeader className="md:text-left md:items-start">
            <SectionHeader.Label Icon={<Label />}>Business</SectionHeader.Label>
            <SectionHeader.Title>
              Scheduling for teams simplified
            </SectionHeader.Title>
            <SectionHeader.Description>
              {
                "Unlock effortless collaboration with our advanced group meeting capabilities. Use our routing forms and round-robin features to enhance your team's efficiency. From last-minute huddles to sales demos, and recurring meetings, your team deserves a simple scheduling solution that can handle life's complexities."
              }
            </SectionHeader.Description>
          </SectionHeader>
          <CustomButton className="w-fit" href="https://cal.com/signup">
            Sign Up
          </CustomButton>
        </div>
        <BusinessSlideShow />
      </div>
    </Section>
  );
};
export default Business;
