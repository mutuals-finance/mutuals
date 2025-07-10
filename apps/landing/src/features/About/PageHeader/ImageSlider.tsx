"use client";

import NextImage from "next/image";
import aboutImage from "@/assets/about.jpg";
import { AspectRatio } from "@mutuals/ui";
import ImageSlider, { ImageSliderProps } from "@/components/ImageSlider";

export default function PageHeaderImageSlider({ options }: ImageSliderProps) {
  return (
    <ImageSlider options={options}>
      {[1, 2, 3, 4, 5].map((key) => (
        <AspectRatio
          position={"relative"}
          ratio={4 / 3}
          w={"full"}
          key={"about-images-" + key}
          rounded={"lg"}
          overflow={"hidden"}
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
  );
}
