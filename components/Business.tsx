import SectionTitle from "./SectionTitle";
import BusinessSlideShow from "./BusinessSlideShow";
import CustomButton from "./CustomButton";
const Business = () => {
  return (
    <div className="py-6 lg:py-20 md:grid md:grid-cols-2 md:gap-10 space-y-6">
      <div className="flex flex-col justify-end items-center">
        <SectionTitle
          query="Business"
          title="Scheduling for teams simplified"
          description="Unlock effortless collaboration with our advanced group meeting capabilities. Use our routing forms and round-robin features to enhance your team’s efficiency. From last-minute huddles to sales demos, and recurring meetings, your team deserves a simple scheduling solution that can handle life's complexities."
          className="md:text-left md:items-start"
        />
        <CustomButton href="https://cal.com/signup">Sign Up</CustomButton>
      </div>
      <BusinessSlideShow />
    </div>
  );
};
export default Business;
