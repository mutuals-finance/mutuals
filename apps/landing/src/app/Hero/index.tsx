"use client";

import { Box, DarkMode, Stack, Button, IconButton } from "@splitfi/ui";
import { useMotionValueEvent, useScroll, MotionConfig } from "framer-motion";
import { useState } from "react";

import HomeHeroBgImage from "@/app/Hero/BgImage";
import HomeHeroHeading from "@/app/Hero/Heading";
import HomeHeroSlider from "@/app/Hero/Slider";
import NextImage from "next/image";
import heroBgImage from "@/assets/tsd-bg.webp";
import { IoArrowDown } from "react-icons/io5";
import HeaderObserverChange from "@/context/HeaderObserver/Change";

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
    <HeaderObserverChange theme={"dark"}>
      <MotionConfig transition={{ duration: 0.8, ease: [0.72, 0, 0.12, 1] }}>
        <DarkMode>
          <Box mb="32" bg={"black"} position={"relative"}>
            <Box position={"absolute"} inset={"0"}>
              <NextImage
                src={heroBgImage}
                fill
                alt={"Mutuals Hero Bg"}
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom right",
                }}
              />
            </Box>

            <Box position="relative" py="32">
              <HomeHeroBgImage animLabel={animLabel} top="0" />
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
        </DarkMode>
      </MotionConfig>{" "}
    </HeaderObserverChange>
  );
}
