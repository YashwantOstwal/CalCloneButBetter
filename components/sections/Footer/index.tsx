import Image from "next/image";
import Logo from "../../SVGs/Logo";
import ISO27001 from "@/public/Footer/ISO 27001.svg";
import SOC2 from "@/public/Footer/SOC2.svg";
import CCPA from "@/public/Footer/CCPA.svg";
// import PrivacyShield from "@/public/Footer/EU-US Privacy/ Shield.svg";
import GDPR from "@/public/Footer/GDPR.svg";
import HIPAA from "@/public/Footer/HIPAA.svg";
import Link from "next/link";
import {
  XLogo,
  GithubLogo,
  YoutubeLogo,
  InstagramLogo,
  DiscussionsLogo,
  ProductHuntLogo,
  YCombinatorLogo,
} from "@/public/Footer/SocialPlatforms";
import GridTemplate from "./GridTemplate";

export default function Footer() {
  const Socials = [
    {
      label: "x",
      href: "https://go.cal.com/x",
      Logo: <XLogo />,
    },
    {
      label: "github",
      href: "https://github.com/calcom",
      Logo: <GithubLogo />,
    },
    {
      label: "youtube",
      href: "https://go.cal.com/youtube",
      Logo: <YoutubeLogo />,
    },
    {
      label: "instagram",
      href: "https://go.cal.com/instagram",
      Logo: <InstagramLogo />,
    },

    {
      label: "discussions",
      href: "https://go.cal.com/discussions",
      Logo: <DiscussionsLogo />,
    },
    {
      label: "product_hunt",
      href: "https://go.cal.com/producthunt",
      Logo: <ProductHuntLogo />,
    },
    {
      label: "hacker_news",
      href: "https://go.cal.com/hackernews",
      Logo: <YCombinatorLogo />,
    },
  ];
  const data = [
    {
      listTitle: "Solutions",
      listItems: [
        { key: "Self-hosted", href: "/" },
        { key: "SaaS Hosting", href: "/" },
        { key: "Docs", href: "/" },
        { key: "Cal.ai – AI Phone Agent", href: "/" },
        { key: "Enterprise", href: "/" },
        { key: "Platform", href: "/" },
        { key: "Cal.com Atoms", href: "/" },
        { key: "Unified Calendar API", href: "/" },
        { key: "Desktop App", href: "/" },
        { key: "FAQ", href: "/" },
        { key: "Enterprise API", href: "/" },
        { key: "Github", href: "/" },
        { key: "Docker", href: "/" },
      ],
    },
    {
      listTitle: "Use Cases",
      listItems: [
        { key: "Sales", href: "/" },
        { key: "Marketing", href: "/" },
        { key: "Talent Acquisition", href: "/" },
        { key: "Customer Support", href: "/" },
        { key: "Higher Education", href: "/" },
        { key: "Telehealth", href: "/" },
        { key: "Professional Services", href: "/" },
        { key: "Hiring Marketplace", href: "/" },
        { key: "Human Resources", href: "/" },
        { key: "Tutoring API", href: "/" },
        { key: "C-suite", href: "/" },
        { key: "Law", href: "/" },
      ],
    },
    {
      listTitle: "Resources",
      listItems: [
        { key: "Blog", href: "/" },
        { key: "Teams", href: "/" },
        { key: "Embed", href: "/" },
        { key: "Recurring events", href: "/" },
        { key: "Developers", href: "/" },
        { key: "OOO", href: "/" },
        { key: "Workflows", href: "/" },
        { key: "Instant Meetings", href: "/" },
        { key: "App Store", href: "/" },
        { key: "Requires confirmation", href: "/" },
        { key: "Payments", href: "/" },
        { key: "Video Conferencing", href: "/" },
      ],
    },
    {
      listTitle: "Company",
      listItems: [
        { key: "Jobs", href: "/" },
        { key: "About", href: "/" },
        { key: "Open Startup", href: "/" },
        { key: "Support ", href: "/" },
        { key: "Privacy", href: "/" },
        { key: "Terms", href: "/" },
        { key: "License", href: "/" },
        { key: "Security", href: "/" },
        { key: "Changelog", href: "/" },
      ],
    },
  ];

  return (
    <div className="flex max-md:flex-col w-full px-4 pl-8 gap-6 md:justify-between py-14 md:py-20 font-matter text-[14px] mt-12">
      <div className="max-lg:mb-12">
        <div className="flex pb-2 lg:pb-7">
          <Logo />
          <span className="-mt-1.5 font-cal">®</span>
        </div>
        <div className=" text-[#111111] max-w-[250px]">
          Cal.com® and Cal® are a registered trademark by Cal.com, Inc. All
          rights reserved.
        </div>
        <Link href="https://cal.com/security" className="flex gap-3 mt-6">
          {[ISO27001, SOC2, CCPA, GDPR, HIPAA].map((eachLogo, i) => (
            <Image
              key={"security-logo-" + (i + 1)}
              src={eachLogo}
              alt={"security-logo-" + (i + 1)}
              height={48}
              width={48}
              className="h-12 w-fit opacity-80 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </Link>
        <nav aria-label="socials" className="flex mt-6 gap-4 items-center">
          {Socials.map((eachSocial) => (
            <Link
              key={eachSocial.label}
              className="hover:invert"
              aria-label={eachSocial.label}
              href={eachSocial.href}
            >
              {eachSocial.Logo}
            </Link>
          ))}
        </nav>
        <p className="mt-2 max-w-[350px] text-base">
          Our mission is to connect a billion people by 2031 through calendar
          scheduling.
        </p>
        <p className="mt-4">
          Need Help?&nbsp;
          <Link
            href="mailto:support@cal.com"
            className="text-[#0561A2] underline"
          >
            support@cal.com
          </Link>
          &nbsp;or&nbsp;
          <Link
            href="https://app.cal.com/support"
            className="text-[#0561A2] underline"
          >
            live chat
          </Link>
          .
        </p>
      </div>
      <div className="max-md:w-full grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {data.map((eachData) => (
          <GridTemplate key={eachData.listTitle} {...eachData} />
        ))}
      </div>
    </div>
  );
}
