import { type FlexProps, Box } from "@mutuals/ui";

import type { HomeHeroAnimBaseType } from "@/app/_components/Hero";
import NextImage from "next/image";
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
