import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import HowItWorksCard from "./HIWCard";
import ConnectYourCalender from "./ConnectYourCalender";
import SetYourAvailability from "./SetYourAvailability";
import ChooseHowToMeet from "./ChooseHowToMeet";
import Label from "./HIWIcons/Label";

const HowItWorks = () => {
  const cards = [
    {
      title: "Connect your calendar",
      description:
        "We'll handle all the cross-referencing, so you don't have to worry about double bookings.",
      children: <ConnectYourCalender />,
    },
    {
      title: "Set your availability",
      description:
        "Want to block off weekends? Set up any buffers? We make that easy.",
      children: <SetYourAvailability />,
    },
    {
      title: "Choose how to meet",
      description:
        "It could be a video chat, phone call, or a walk in the park!",
      children: <ChooseHowToMeet />,
    },
  ];

  return (
    <Section id="how-it-works">
      <div className="py-6 lg:py-20 px-1">
        <SectionHeader>
          <SectionHeader.Label Icon={<Label />}>
            How it works
          </SectionHeader.Label>
          <SectionHeader.Title>
            With us, appointment scheduling is easy
          </SectionHeader.Title>
          <SectionHeader.Description>
            Effortless scheduling for individuals, powerful solutions for
            fast-growing modern companies.
          </SectionHeader.Description>
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((eachCard, i) => (
            <HowItWorksCard
              key={`cards[${i}]`}
              sNo={`0${i + 1}`}
              {...eachCard}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
