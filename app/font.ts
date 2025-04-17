import localFont from "next/font/local";
import { Libre_Bodoni } from "next/font/google";

// Import Libre Bodoni from Google Fonts
export const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-bodoni",
});


export const chronicleDisplay = localFont({
  src: [
    {
      path: "../public/fonts/chronicle-display/Chronicle Display Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/chronicle-display/Chronicle Display Light Italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/chronicle-display/Chronicle Display Roman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/chronicle-display/Chronicle Display Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-chronicle-display",
});
