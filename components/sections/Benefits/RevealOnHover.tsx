"use client";
import GridItem from "./GridItem";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import GridItemCover from "./GridItemCover";
interface dataSchema {
  title: string;
  description: string;
  img: string;
}
export default function RevealOnHover() {
  const [data] = useState([
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
  ]);
  const mediaQuery = useMediaQuery<"base" | "sm">(["base", "sm"]);
  const breakPointsMappedToRows = {
    base: 4,
    sm: 2,
  };

  if (typeof mediaQuery != "string") {
    return null;
  }
  const formattedData: dataSchema[][] = Array.from(
    { length: breakPointsMappedToRows[mediaQuery] },
    (_, i) =>
      data.slice(
        i * (data.length / breakPointsMappedToRows[mediaQuery]),
        i * (data.length / breakPointsMappedToRows[mediaQuery]) +
          data.length / breakPointsMappedToRows[mediaQuery]
      )
  );

  return (
    <div className="grid grid-rows-2 border-y border-y-gray divide-y divide-[#c0c2c4] font-matter">
      {formattedData.map((chunk: dataSchema[], i: number) => (
        <div
          key={"chunk-" + i}
          className="flex justify-around max-sm:gap-4 sm:justify-center"
        >
          {chunk.map((eachData: dataSchema) => (
            <GridItemCover key={eachData.title}>
              <GridItem {...eachData} />
            </GridItemCover>
          ))}
        </div>
      ))}
    </div>
  );
}
