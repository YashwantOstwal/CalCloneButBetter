import SectionHeader from "../../SectionHeader";
import AppStoreSlideShow from "./AppStoreSlideShow";
import Section from "../../Section";
import Label from "./AppStoreIcons/Label";
export default function AppStore() {
  return (
    <Section id="app-store">
      <div className="card-shadow py-6 md:py-10 px-1 md:px-8 bg-white mb-1 rounded-xl border border-gray flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <div>
          <SectionHeader className="md:text-left md:items-start">
            <SectionHeader.Label Icon={<Label />}>
              App store
            </SectionHeader.Label>
            <SectionHeader.Title>
              Connect your favorite apps
            </SectionHeader.Title>
            <SectionHeader.Description>
              Cal.com has built-in integrations for all the apps you already
              know and love.
            </SectionHeader.Description>
            <SectionHeader.StyledLink
              variant="light"
              href="https://app.cal.com/apps"
              className="mt-4 w-fit py-1 max-md:mx-auto rounded-[16px] bg-gradient-to-b from-[rgba(255,255,255,0.9)]"
            >
              Explore our apps
            </SectionHeader.StyledLink>
          </SectionHeader>
        </div>
        <AppStoreSlideShow />
      </div>
    </Section>
  );
}
