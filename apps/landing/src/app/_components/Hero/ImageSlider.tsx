"use client";

import KeenSlider, {
  type KeenSliderProps,
} from "@/components/KeenSlider/KeenSlider";
import KeenSliderSlide from "@/components/KeenSlider/KeenSliderSlide";
import NextImage from "next/image";
import aboutImage from "@/assets/hero.png";

const animation = { duration: 7 * 10000, easing: (t: number) => t };

interface HeroImageSliderProps extends KeenSliderProps {}

export default function HeroImageSlider({
  options,
  ...props
}: HeroImageSliderProps) {
  return (
    <KeenSlider
      options={{
        loop: true,
        drag: false,
        breakpoints: {
          "(min-width: 800px)": {
            slides: { perView: 2, spacing: 12 },
          },
          "(min-width: 1200px)": {
            slides: { perView: 2, spacing: 12 },
          },
        },
        slides: { perView: 1, spacing: 12 },
        created(s) {
          s.moveToIdx(5, true, animation);
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        ...options,
      }}
      {...props}
    >
      {[1, 2, 3, 4, 5].map((key) => (
        <KeenSliderSlide key={key}>
          <NextImage src={aboutImage} alt="SplitFi Dashboard" />
        </KeenSliderSlide>
      ))}
    </KeenSlider>
  );
}
