import CrossSVG from "./CrossSVG";
import Container from "./Container";
import { ReactNode } from "react";

interface dataSchema {
  title: string;
  description: string;
  img: string;
}
export default function RevealOnHover() {
  const data: dataSchema[] = [
    {
      title: "Accepted payments",
      description:
        "You can monetize your bookings through our Stripe integration.",
      img: "bg-AcceptedPayments",
    },
    {
      title: "Built-in video conferencing",
      description: "Cal Video is our in-house video conferencing platform.",
      img: "bg-BuiltInVideoConferencing",
    },
    {
      title: "Short booking links",
      description:
        "Each booking link can be short which makes it easy to remember.",
      img: "bg-ShortBookingLinks",
    },
    {
      title: "Privacy first",
      description:
        "Our solution has been designed to keep your information private and protected.",
      img: "bg-PrivacyFirst",
    },
    {
      title: "65+ languages",
      description:
        "Talk to anyone around the world with support for 65+ languages.",
      img: "bg-65+Languages",
    },
    {
      title: "Easy embeds",
      description: "Embed your booking page anywhere with just a few clicks.",
      img: "bg-EasyEmbeds",
    },
    {
      title: "All your favorite apps",
      description: "Effortlessly integrate with your popular apps.",
      img: "bg-AllYourFavoriteApps ",
    },
    {
      title: "Simple customization",
      description: "Easily customize your booking page to fit your brand.",
      img: "bg-SimpleCustomization",
    },
  ];
  const splitArrayIntoChunks = (arr: dataSchema[], noOfSplits: number) => {
    const temp: dataSchema[][] = [];
    for (let i = 0; i < noOfSplits; i++) {
      temp.push(
        arr.slice(
          i * (arr.length / noOfSplits),
          i * (arr.length / noOfSplits) + arr.length / noOfSplits
        )
      );
    }
    return temp;
  };
  const DesktopData = splitArrayIntoChunks(data, 2);
  const MobileData = splitArrayIntoChunks(data, 4);
  return (
    <>
      <div className="sm:hidden grid grid-rows-2 border-y border-y-gray divide-y divide-[#c0c2c4] font-matter">
        {MobileData.map((chunk: dataSchema[], i: number) => (
          <div key={"Mobile-chunk-" + i} className="flex justify-around gap-4">
            {chunk.map((eachData: dataSchema) => (
              <GridWrap key={eachData.title}>
                <Container {...eachData} />
              </GridWrap>
            ))}
          </div>
        ))}
      </div>
      <div className="hidden sm:grid grid-rows-2 border-y border-y-gray divide-y divide-[#c0c2c4] font-matter">
        {DesktopData.map((chunk: dataSchema[], i) => (
          <div key={"Desktop-chunk-" + i} className="flex justify-center">
            {chunk.map((eachData: dataSchema) => (
              <GridWrap key={eachData.title}>
                <Container {...eachData} />
              </GridWrap>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

function GridWrap({ children }: { children: ReactNode }) {
  return (
    <div className="relative p-2 first:border-l border-r max-sm:border-x border-x-gray w-full max-w-[200px] flex-1 min-h-[180px]">
      <CrossSVG className="absolute -left-[14px] -bottom-[14px] rounded-full scale-[0.85]" />
      <CrossSVG className="absolute -right-[14px] -bottom-[14px] rounded-full scale-[0.85]" />
      <CrossSVG className="absolute -left-[14px] -top-[14px] rounded-full scale-[0.85]" />
      <CrossSVG className="absolute -right-[14px] -top-[14px] rounded-full scale-[0.85]" />
      {children}
    </div>
  );
}
