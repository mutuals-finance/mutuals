import localFont from "next/font/local";

const font = localFont({
  variable: "--font-public-sans",
  display: "swap",
  src: [
    {
      path: "./src/PublicSans-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./src/PublicSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./src/PublicSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./src/PublicSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./src/PublicSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./src/PublicSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default font;
