import React from "react";
import SectionTitle from "./SectionTitle";
import AppStoreSlideShow from "./AppStoreSlideShow";
import CustomButton from "./CustomButton";

const AppStore = () => {
  return (
    <>
      <div className="py-6 md:py-10 px-1 md:px-8 bg-white mb-1 rounded-xl border border-gray flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <div>
          <SectionTitle
            query="App store"
            title="Connect your favorite apps"
            description="Cal.com has built-in integrations for all the apps you already know and love."
            className="md:text-left md:items-start"
          />
          <CustomButton
            variant="light"
            href="https://app.cal.com/apps"
            className="mt-4 w-fit py-[4px] rounded-[16px] bg-gradient-to-b from-[rgba(255,255,255,0.9)]"
          >
            Explore our apps
          </CustomButton>
        </div>
        <AppStoreSlideShow />
      </div>
    </>
  );
};

export default AppStore;
