"use client";

import KeenSlider, {
  type KeenSliderProps,
} from "@/components/KeenSlider/KeenSlider";
import KeenSliderSlide from "@/components/KeenSlider/KeenSliderSlide";
import { Box } from "@mutuals/ui";
import NextImage, { type ImageProps } from "next/image";

const animation = { duration: 4 * 10000, easing: (t: number) => t };

interface ValueCardProps extends KeenSliderProps {
  networks: Array<{
    name: string;
    base: ImageProps["src"];
    dark: ImageProps["src"];
  }>;
}

export default function ChainSlider({
  options,
  networks,
  ...props
}: ValueCardProps) {
  return (
    <KeenSlider
      options={{
        loop: true,
        drag: false,
        breakpoints: {
          "(min-width: 800px)": {
            slides: { perView: 4, spacing: 6 },
          },
          "(min-width: 1200px)": {
            slides: { perView: 6, spacing: 12 },
          },
        },
        slides: { perView: 3, spacing: 6 },
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
      {networks.map((network) => (
        <KeenSliderSlide
          display="flex"
          alignItems="center"
          justifyContent="center"
          key={network.name}
        >
          <Box display={{ _dark: "none" }}>
            <NextImage
              src={network.base}
              alt={network.name}
              width={102}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box display={{ base: "none", _dark: "block" }}>
            <NextImage
              src={network.dark}
              alt={`${network.name} dark mode`}
              width={102}
              style={{ objectFit: "contain" }}
            />
          </Box>
        </KeenSliderSlide>
      ))}
    </KeenSlider>
  );
}
