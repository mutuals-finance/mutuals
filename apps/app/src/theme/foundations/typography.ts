import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const fontSizes = {};
export const fonts = {
  body: inter.style.fontFamily,
  heading: inter.style.fontFamily,
};
