import { calSemibold, matter, inter, robotoMono } from "../public/fonts";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
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
