import type { Metadata } from "next";
import "./globals.css";
import { chronicleDisplay, gotham, libreBodoni } from "./font";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "CORDROS",
  description: "Growth and Excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` font-gotham ${gotham.variable} ${chronicleDisplay.variable} ${libreBodoni.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
