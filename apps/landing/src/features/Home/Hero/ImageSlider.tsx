"use client";

import NextImage from "next/image";
import aboutImage from "@/assets/hero.png";
import { AspectRatio, MotionBox } from "@mutuals/ui";
import { transitionProps } from "./index";
import { useState } from "react";
import ImageSlider, { ImageSliderProps } from "@/components/ImageSlider";

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
        {[1, 2, 3, 4, 5].map((key) => (
          <AspectRatio
            position={"relative"}
            ratio={16 / 9}
            w={"full"}
            key={"hero-images-" + key}
          >
            <NextImage
              src={aboutImage}
              alt="Mutuals Dashboard Hero"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </AspectRatio>
        ))}
      </ImageSlider>
    </MotionBox>
  );
}
