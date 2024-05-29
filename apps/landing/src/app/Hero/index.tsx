"use client";

import { Box } from "@splitfi/ui";
import { useMotionValueEvent, useScroll, MotionConfig } from "framer-motion";
import { useState } from "react";

import HomeHeroBgImage from "@/app/Hero/BgImage";
import HomeHeroHeading from "@/app/Hero/Heading";
import HomeHeroSlider from "@/app/Hero/Slider";
import HomeHeroFooter from "@/app/Hero/Footer";
import { DarkMode } from "@splitfi/ui";

export type HomeHeroAnimBaseType = {
  animLabel: "grow" | "shrink";
};

export default function HomeHero() {
  const { scrollY } = useScroll();

  const [animLabel, setAnimLabel] = useState<"grow" | "shrink">("grow");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (animLabel === "shrink" && latest <= 10) {
      setAnimLabel("grow");
    }
    if (animLabel === "grow" && latest > 10) {
      setAnimLabel("shrink");
    }
  });

  return (
    <MotionConfig transition={{ duration: 0.8, ease: [0.72, 0, 0.12, 1] }}>
      <DarkMode>
        <Box bg={"bg.1"}>
          <Box position="relative" py="24">
            <HomeHeroBgImage animLabel={animLabel} top="24" />
            <HomeHeroHeading
              animLabel={animLabel}
              zIndex={"2"}
              position="relative"
            />
          </Box>
          <HomeHeroSlider animLabel={animLabel} />
          <HomeHeroFooter />
        </Box>
      </DarkMode>
    </MotionConfig>
  );
}
