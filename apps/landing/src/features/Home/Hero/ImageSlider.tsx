"use client";

import NextImage from "next/image";
import dashboardImage from "@/assets/hero.png";
import metricsImage from "@/assets/hero-2.png";
import mockSigninImage from "@/assets/mock-signin.png";
import { AspectRatio, MotionBox } from "@mutuals/ui";
import { transitionProps } from "./index";
import { useState } from "react";
import ImageSlider, { ImageSliderProps } from "@/components/ImageSlider";

const images = [
  { key: "dashboard", src: dashboardImage, ratio: 16 / 9 },
  { key: "metrics", src: metricsImage, ratio: 16 / 9 },
  { key: "mocksignin", src: mockSigninImage, ratio: 9 / 16 },
  { key: "metrics", src: metricsImage, ratio: 16 / 9 },
];
export default function HeroImageSlider({ options }: ImageSliderProps) {
  const [isCreated, setIsCreated] = useState(false);

  const variants = {
    hide: transitionProps.initial,
    show: transitionProps.animate,
  };

  const { created, ..._options } = {
    ...options,
  };

  return (
    <MotionBox
      w="full"
      animate={isCreated ? "show" : "hide"}
      initial={"hide"}
      variants={variants}
    >
      <ImageSlider
        options={{
          created: (s) => {
            setIsCreated(true);
            created?.(s);
          },
          ..._options,
        }}
      >
        {images.map(({ key, src, ratio }, index) => (
          <AspectRatio
            position={"relative"}
            ratio={ratio}
            w={"full"}
            maxH={"64"}
            key={"hero-image-" + key}
            rounded={"2xl"}
            overflow={"hidden"}
          >
            <NextImage
              src={src}
              alt={"Mutuals Dashboard Hero " + index}
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </AspectRatio>
        ))}
      </ImageSlider>
    </MotionBox>
  );
}
