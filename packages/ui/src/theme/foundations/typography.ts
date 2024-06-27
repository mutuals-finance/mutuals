import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const cabinet = localFont({
  src: [
    {
      path: "../font/GeneralSans/GeneralSans-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../font/GeneralSans/GeneralSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/GeneralSans/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/GeneralSans/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/GeneralSans/GeneralSans-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../font/GeneralSans/GeneralSans-SemiBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../font/GeneralSans/GeneralSans-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

const fontSizes = {};
const fonts = {
  body: inter.style.fontFamily,
  heading: cabinet.style.fontFamily,
};

export default {
  fonts,
  fontSizes,
};
