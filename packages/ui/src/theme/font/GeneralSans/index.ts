import localFont from "next/font/local";

const font = localFont({
  src: [
    {
      path: "./src/GeneralSans-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./src/GeneralSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./src/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./src/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./src/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./src/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default font;
