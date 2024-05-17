"use client";

import { useQRCode } from "next-qrcode";
import { QRCodeOptions } from "next-qrcode/dist/useQRCode";
import { HTMLProps } from "react";

import logo from "@/assets/images/splitFi-logo.png";

interface QRCodeProps extends HTMLProps<HTMLCanvasElement> {
  text: string;
  options?: QRCodeOptions;
}
export default function QRCode({ text, options, ...props }: QRCodeProps) {
  const { Canvas } = useQRCode();

  return (
    <Canvas
      text={text}
      options={{
        margin: 2,
        scale: 5,
        width: 250,
        ...options,
        color: {
          dark: "#000000",
          light: "#ffffff",
          ...options?.color,
        },
      }}
      /*
      logo={{
        src: logo.src,
        options: {
          width: 35,
        },
      }}
*/
      {...props}
    />
  );
}
