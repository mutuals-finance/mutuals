import type { FlexProps } from "@splitfi/ui";
import { useBreakpointValue } from "@splitfi/ui";
import { useEffect, useRef } from "react";

import type { HomeHeroAnimBaseType } from "@/app/Hero/index";
import heroVideo from "@/assets/home-hero.mp4";
import AnimationBox from "@/components/Animation/Box";

type HomeHeroBgImageProps = HomeHeroAnimBaseType & FlexProps;

export default function HomeHeroBgImage({
  animLabel,
  ...props
}: HomeHeroBgImageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <AnimationBox
      position="absolute"
      bottom="0"
      left="50%"
      w={{ base: "full", lg: "calc(100% - var(--chakra-space-12))" }}
      transform="translateX(-50%)"
      roundedBottom="lg"
      overflow="hidden"
      _after={{
        zIndex: 1,
        content: `""`,
        display: "block",
        position: "absolute",
        inset: "0",
        bg: "blackAlpha.700",
        /*
        bgGradient:
          "linear(to-b, blackAlpha.500, blackAlpha.700, blackAlpha.900)",
*/
      }}
      animate={animLabel}
      variants={useBreakpointValue({
        base: {
          shrink: {
            width: "100%",
          },
          grow: {
            width: "100%",
          },
        },
        lg: {
          shrink: {
            width: "calc(100% - var(--chakra-space-12))",
          },
          grow: {
            width: "100%",
          },
        },
      })}
      {...props}
    >
      <video
        autoPlay
        muted
        loop
        ref={videoRef}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
    </AnimationBox>
  );
}
