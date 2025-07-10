"use client";

import KeenSlider, {
  type KeenSliderProps,
} from "@/components/KeenSlider/KeenSlider";
import KeenSliderSlide from "@/components/KeenSlider/KeenSliderSlide";

const animation = { duration: 12 * 10000, easing: (t: number) => t };

export type ImageSliderProps = Omit<KeenSliderProps, "children"> & {
  children?: React.ReactNode[];
};

export default function HeroImageSlider({
  options,
  children = [],
  ...props
}: ImageSliderProps) {
  const { breakpoints, created, updated, animationEnded, ..._options } = {
    ...options,
  };

  return (
    <KeenSlider
      overflow={"hidden"}
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
      {children.map((node, i) => (
        <KeenSliderSlide key={i}>{node}</KeenSliderSlide>
      ))}
    </KeenSlider>
  );
}
