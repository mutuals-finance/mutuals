"use client";

import KeenSlider, {
  type KeenSliderProps,
} from "@/components/KeenSlider/KeenSlider";
import KeenSliderSlide from "@/components/KeenSlider/KeenSliderSlide";
import { Stack, Card, Heading } from "@mutuals/ui";
import NextImage, { type ImageProps } from "next/image";

const animation = { duration: 4 * 10000, easing: (t: number) => t };

interface ValueCardProps extends KeenSliderProps {
  networks: Array<{ name: string; icon: ImageProps["src"] }>;
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
        slides: { perView: 3 },
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
        <KeenSliderSlide key={network.name}>
          <Stack gap={"3"} alignItems={"center"} justifyContent={"center"}>
            <NextImage
              src={network.icon}
              alt={network.name}
              height={"64"}
              style={{ objectFit: "cover" }}
            />
            <Heading as={"h4"} size={"xs"}>
              {network.name}
            </Heading>
          </Stack>
        </KeenSliderSlide>
      ))}
    </KeenSlider>
  );
}
