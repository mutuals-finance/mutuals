"use client";

import KeenSlider, {
  type KeenSliderProps,
} from "@/components/KeenSlider/KeenSlider";
import KeenSliderSlide from "@/components/KeenSlider/KeenSliderSlide";
import NextImage from "next/image";
import aboutImage from "@/assets/hero.png";
import { AspectRatio, MotionBox } from "@mutuals/ui";
import { transitionProps } from "./index";
import { useState } from "react";

const animation = { duration: 12 * 10000, easing: (t: number) => t };

interface HeroImageSliderProps extends KeenSliderProps {}

export default function HeroImageSlider({
  options,
  ...props
}: HeroImageSliderProps) {
  const [isCreated, setIsCreated] = useState(false);

  const variants = {
    hide: transitionProps.initial,
    show: transitionProps.animate,
  };

  const { breakpoints, created, updated, animationEnded, ..._options } = {
    ...options,
  };
  return (
    <MotionBox
      w="full"
      animate={isCreated ? "show" : "hide"}
      initial={"hide"}
      variants={variants}
    >
      <KeenSlider
        options={{
          loop: true,
          drag: false,
          renderMode: "performance",
          breakpoints: {
            "(min-width: 800px)": {
              slides: { perView: 2, spacing: 32 },
            },
            "(min-width: 1200px)": {
              slides: { perView: 3, spacing: 64 },
            },
            ...breakpoints,
          },
          slides: { perView: 1, spacing: 12 },
          created(s) {
            setIsCreated(true);
            s.moveToIdx(5, true, animation);
            created?.(s);
          },
          updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
            updated?.(s);
          },
          animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
            animationEnded?.(s);
          },
          ..._options,
        }}
        {...props}
      >
        {[1, 2, 3, 4, 5].map((key) => (
          <KeenSliderSlide key={key}>
            <AspectRatio position={"relative"} ratio={16 / 9} w={"full"}>
              <NextImage
                src={aboutImage}
                alt="Mutuals Dashboard"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </AspectRatio>
          </KeenSliderSlide>
        ))}
      </KeenSlider>
    </MotionBox>
  );
}
