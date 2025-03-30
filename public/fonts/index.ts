import localFont from "next/font/local";
import { Inter, Roboto_Mono } from "next/font/google";

const calSemibold = localFont({
  src: "./CalSans-SemiBold.woff2",
  weight: "700",
  variable: "--font-cal",
});

const matter = localFont({
  src: "./Matter.woff2",
  variable: "--font-matter",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
export { inter, robotoMono, calSemibold, matter };
