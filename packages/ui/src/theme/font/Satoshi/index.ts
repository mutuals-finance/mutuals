import localFont from "next/font/local";

const font = localFont({
  variable: "--font-satoshi",
  src: [
    {
      path: "./src/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./src/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./src/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./src/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./src/Satoshi-Black.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export default font;
