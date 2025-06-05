import { Metadata } from "next";
import { calSemibold, matter, inter, robotoMono } from "../public/fonts";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";

export const metadata: Metadata = {
  title: "CalCloneButBetter.com | Landing Page clone",
  description: "Clone of Cal.com Landing page",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: ["./opengraph-image.png"],
  },
  metadataBase: new URL("https://calclonebutbetter.com"),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${calSemibold.variable} ${matter.variable} ${inter.variable} ${robotoMono.variable} selection:bg-[#151819] selection:text-white overflow-x-hidden`}
      >
        {children}
        <NavBar />
      </body>
    </html>
  );
}
