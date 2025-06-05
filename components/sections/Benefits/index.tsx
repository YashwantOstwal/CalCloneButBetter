import SectionHeader from "@/components/SectionHeader";
import RevealOnHover from "./RevealOnHover";
import Label from "./BenefitsIcons/Label";
import BenefitsCard from "./BenefitsCard";
import Section from "@/components/Section";
import AvoidMeetingOverload from "./AvoidMeetingOverload";
import CustomBookingLink from "./CustomBookingLink";
import AutomatedRemainders from "./AutomatedReminders";
import StreamlineBookersExperience from "./StreamlineBookersExperience";

export default function Benefits() {
  const benefitsData = [
    {
      title: "Avoid meeting overload",
      description:
        "Only get booked when you want to. Set daily, weekly or monthly limits and add buffers around your events to allow you to focus or take a break.",
      children: <AvoidMeetingOverload />,
    },
    {
      title: "Stand out with a custom booking link",
      description:
        "Customize your booking link so it's short and easy to remember for your bookers. No more long, complicated links one can easily forget.",
      children: <CustomBookingLink />,
    },
    {
      title: "Reduce no-shows with automated reminders",
      description:
        "Easily send sms or email reminders about bookings, and send automated follow-ups to gather any relevant information before the meeting.",
      children: <AutomatedRemainders />,
    },
    {
      title: "Streamline your bookers' experience",
      description:
        "Let your bookers overlay their calendar, receive booking confirmations via text or email, get events added to their calendar, and allow them to reschedule with ease.",
      children: <StreamlineBookersExperience />,
    },
  ];
  return (
    <Section id="benefits">
      <div className="py-6 lg:py-20 px-1 ">
        <div className="flex flex-col items-center">
          <SectionHeader>
            <SectionHeader.Label Icon={<Label />}>Benefits</SectionHeader.Label>
            <SectionHeader.Title>
              Your all-purpose scheduling app
            </SectionHeader.Title>
            <SectionHeader.Description>
              Discover a variety of our advanced features. Unlimited and free
              for individuals.
            </SectionHeader.Description>
            <SectionHeader.StyledLink
              href="https://app.cal.com/signup"
              className="mt-2"
            >
              Sign up
            </SectionHeader.StyledLink>
          </SectionHeader>
        </div>
        <div className="grid md:grid-cols-2 gap-10 py-6">
          {benefitsData.map((eachCard, i) => (
            <BenefitsCard key={`benefitsData[${i}]`} {...eachCard} />
          ))}
        </div>
        <div className="text-center -mx-4">
          <SectionHeader>
            <SectionHeader.Title className="my-10">
              …and so much more!
            </SectionHeader.Title>
          </SectionHeader>
          <RevealOnHover />
        </div>
      </div>
    </Section>
  );
}
