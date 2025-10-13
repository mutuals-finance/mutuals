import localFont from "next/font/local";

const font = localFont({
  variable: "--font-switzer",
  src: [
    {
      path: "./src/Switzer-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./src/Switzer-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./src/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./src/Switzer-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./src/Switzer-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./src/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default font;
