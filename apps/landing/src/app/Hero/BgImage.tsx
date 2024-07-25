import { type FlexProps, Box } from "@splitfi/ui";

import type { HomeHeroAnimBaseType } from "@/app/Hero";
import NextImage from "next/image";
import heroLeftImage from "@/assets/bg-hero-top-left.png";
import heroRightImage from "@/assets/bg-hero-bottom-right.png";
type HomeHeroBgImageProps = HomeHeroAnimBaseType & FlexProps;

export default function HomeHeroBgImage({
  animLabel,
  ...props
}: HomeHeroBgImageProps) {
  return (
    <>
      <Box
        position="absolute"
        top="0"
        left={"0"}
        w={"full"}
        maxW={{ base: "40", lg: "xs" }}
        opacity={"0.5"}
        h="full"
        overflow="hidden"
      >
        <NextImage
          src={heroLeftImage}
          alt={"SplitFi"}
          fill={true}
          style={{
            objectFit: "contain",
            objectPosition: "top left",
          }}
        />
      </Box>
      <Box
        position="absolute"
        bottom="0"
        right={"0"}
        opacity={"0.5"}
        w={"full"}
        maxW={{ base: "sm", lg: "xl" }}
        h="full"
        overflow="hidden"
      >
        <NextImage
          src={heroRightImage}
          alt={"SplitFi right"}
          fill={true}
          style={{
            objectFit: "contain",
            objectPosition: "bottom right",
          }}
        />
      </Box>
    </>
  );
}
