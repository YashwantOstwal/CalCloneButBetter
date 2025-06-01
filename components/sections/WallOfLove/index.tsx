import React, { Suspense } from "react";
import Reviews from "./ServerFetchReviews";
import SectionHeader from "@/components/SectionHeader";
import Label from "./WOLIcons/Label";
import Section from "@/components/Section";
import Loader from "./WOLIcons/Loader";

export default function WallOfLove() {
  return (
    <Section>
      <div className="py-6 lg:py-20 px-1">
        <SectionHeader>
          <SectionHeader.Label Icon={<Label />}>
            Wall of love
          </SectionHeader.Label>
          <SectionHeader.Title>
            See why our users love Cal.com
          </SectionHeader.Title>
          <SectionHeader.Description>
            {
              "Read the impact we've had from those who matter most - our customers."
            }
          </SectionHeader.Description>
        </SectionHeader>
        <Suspense
          fallback={
            <div className="h-[500px] bg-gradient-to-b from-transparent to-[#F4F4F4] grid place-items-center">
              <div className=" px-4 py-2 text-sm bg-[#F4F4F4] rounded-xl font-inter flex gap-1 items-center">
                <span>Fetching...</span>
                <Loader />
              </div>
            </div>
          }
        >
          <Reviews />
        </Suspense>
      </div>
    </Section>
  );
}
