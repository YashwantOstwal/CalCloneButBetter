import type { Config } from "tailwindcss";
import { Angelist } from "./components/CustomersLogo";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cal: ["var(--font-cal)"],
        matter: ["var(--font-matter)"],
        inter: ["var(--font-inter)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        "primary-black": "#171717",
        "gray-700": "#898989",
        "secondary-black": "#242424",
        gray: "#C0C2C4",
      },
      borderColor: {
        primary: "#e1e2e3",
      },
      backgroundImage: {
        "65+Languages": "url('/benefits/65+languages.svg')",
        AcceptedPayments: "url('/benefits/Accept payments.svg')",
        AllYourFavoriteApps: "url('/benefits/All your favorite apps.svg')",
        BuiltInVideoConferencing:
          "url('/benefits/Built-in video conferencing.svg')",
        EasyEmbeds: "url('/benefits/Easy embeds.svg')",
        PrivacyFirst: "url('/benefits/Privacy first.svg')",
        ShortBookingLinks: "url('/benefits/Short booking links.svg')",
        SimpleCustomization: "url('/benefits/Simple customization.svg')",
        squared:
          "radial-gradient(circle at 50% 0%, rgba(255, 255, 255,0) 20%, rgba(255, 255, 255,1) 90%), linear-gradient(rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 20% ,rgba(255,255,255,0) 80%,rgba(255,255,255,0.3) 100%),url('/SquaredBackground.png')",
        hero: "linear-gradient(to right,#ffffff,rgba(255,255,255,1) 42%, rgba(255,255,255,0.6) 50%,rgba(255,255,255,0.4)),url('/SquaredBackground.png')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
