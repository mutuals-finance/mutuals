"use client";

import { Box, Stack, Button, IconButton } from "@splitfi/ui";
import { useMotionValueEvent, useScroll, MotionConfig } from "framer-motion";
import { useState } from "react";

import HomeHeroBgImage from "@/app/Hero/BgImage";
import HomeHeroHeading from "@/app/Hero/Heading";
import HomeHeroSlider from "@/app/Hero/Slider";
import { IoArrowDown } from "react-icons/io5";

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
      <Box position={"relative"}>
        <HomeHeroBgImage animLabel={animLabel} top="0" />

        <Box position="relative" py="32">
          <HomeHeroHeading
            animLabel={animLabel}
            zIndex={"2"}
            position="relative"
          />
        </Box>

        <HomeHeroSlider animLabel={animLabel} />

        <Stack
          position={"sticky"}
          top={"50vh"}
          left={"0"}
          w={"full"}
          align={"center"}
          p={"12"}
          mt={"6"}
        >
          <Button
            variant={"unstyled"}
            color={"color.1"}
            size={"lg"}
            rightIcon={
              <IconButton
                as={Box}
                rounded={"full"}
                variant={"outline"}
                aria-label={"Scroll down for more"}
                icon={<IoArrowDown />}
              >
                Scroll down for more
              </IconButton>
            }
          >
            Scroll down for more
          </Button>
        </Stack>
      </Box>
    </MotionConfig>
  );
}
