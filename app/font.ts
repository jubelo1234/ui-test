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

// Define the Gotham font family with all variants
export const gotham = localFont({
  src: [
    {
      path: "../public/fonts/Gotham-fonts/GothamRounded.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-Ultra.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-UltraItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-XLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-XLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-Black.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-BlackItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-BookItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-fonts/Gotham-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-gotham",
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
