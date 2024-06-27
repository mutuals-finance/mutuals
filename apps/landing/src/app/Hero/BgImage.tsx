import { type FlexProps, useColorModeValue, Box } from "@splitfi/ui";

import type { HomeHeroAnimBaseType } from "@/app/Hero";
import NextImage from "next/image";
import heroLeftImage from "@/assets/bg-hero-left.webp";
type HomeHeroBgImageProps = HomeHeroAnimBaseType & FlexProps;

export default function HomeHeroBgImage({
  animLabel,
  ...props
}: HomeHeroBgImageProps) {
  return (
    <Box
      position="absolute"
      inset="0"
      overflow="hidden"
      _after={{
        zIndex: -1,
        content: `""`,
        display: "block",
        position: "absolute",
        inset: "0",
        bg: useColorModeValue("blackAlpha.0", "blackAlpha.600"),
        /*
                   bgGradient:
                     "linear(to-b, blackAlpha.500, blackAlpha.700, blackAlpha.900)",
           */
      }}
    >
      <NextImage
        src={heroLeftImage}
        fill
        alt={"SplitFi"}
        style={{
          objectFit: "contain",
          objectPosition: "top left",
        }}
      />
      {/*
      <NextImage
        src={heroRightImage}
        fill
        alt={"SplitFi right"}
        style={{
          objectFit: "contain",
          objectPosition: "top right",
        }}
      />
*/}
    </Box>
  );
}
