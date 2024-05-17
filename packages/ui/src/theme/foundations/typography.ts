import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const fontSizes = {};
const fonts = {
  body: inter.style.fontFamily,
  heading: inter.style.fontFamily,
};

export default {
  fonts,
  fontSizes,
};
