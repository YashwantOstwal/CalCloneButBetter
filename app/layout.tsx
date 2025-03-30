import { calSemibold, matter, inter, robotoMono } from "../public/fonts";
import "./globals.css";
// import Providers from "./providers";
import NavBar from "@/components/NavBar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${calSemibold.variable} ${matter.variable} ${inter.variable} ${robotoMono.variable} overflow-x-hidden selection:bg-[#151819] selection:text-white`}
      >
        {children}
        <NavBar />
      </body>
    </html>
  );
}
