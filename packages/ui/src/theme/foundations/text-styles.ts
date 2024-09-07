import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { defineTextStyles } from "@chakra-ui/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const cabinet = localFont({
  src: [
    {
      path: "../font/GeneralSans/GeneralSans-Extralight.woff2",
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
      path: "../font/GeneralSans/GeneralSans-Semibold.woff2",
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

const textStyles = defineTextStyles({
  body: {
    description: "The body text style - used in paragraphs",
    value: {
      fontFamily: inter.style.fontFamily,
    },
  },
  heading: {
    description: "The heading text style - used in heading",
    value: {
      fontFamily: cabinet.style.fontFamily,
    },
  },
}) as Record<string, Object>;

export default textStyles;
