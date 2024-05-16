import type { FlexProps } from "@chakra-ui/react";
import { useBreakpointValue, useUnmountEffect } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
      rounded="md"
      overflow="hidden"
      _after={{
        zIndex: 1,
        content: `""`,
        display: "block",
        position: "absolute",
        inset: "0",
        bg: "blackAlpha.400",
      }}
      zIndex={-1}
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
            width: "100%",
          },
          grow: {
            width: "calc(100% - var(--chakra-space-12))",
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
