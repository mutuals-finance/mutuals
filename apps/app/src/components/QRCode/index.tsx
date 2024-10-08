"use client";

import { useQRCode } from "next-qrcode";
import { QRCodeOptions } from "next-qrcode/dist/useQRCode";
import { HTMLProps } from "react";

interface QRCodeProps extends HTMLProps<HTMLCanvasElement> {
  text?: string;
  options?: QRCodeOptions;
}
export default function QRCode({ text, options, ...props }: QRCodeProps) {
  const { Canvas } = useQRCode();

  return (
    <Canvas
      text={text ?? "undefined"}
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
