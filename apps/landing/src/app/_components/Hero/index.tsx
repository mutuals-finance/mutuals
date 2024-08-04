"use client";

import {
  Box,
  Stack,
  Button,
  Container,
  DarkMode,
  useColorModeValue,
} from "@mutuals/ui";
import { useMotionValueEvent, useScroll, MotionConfig } from "framer-motion";
import { useState } from "react";

import HomeHeroHeading from "@/app/_components/Hero/Heading";
import HomeHeroSlider from "@/app/_components/Hero/Slider";
import { IoPlayCircleOutline, IoPlayOutline } from "react-icons/io5";

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
        <Box position="relative" pt={{ base: "12", lg: "32" }} pb={"32"}>
          <HomeHeroHeading
            animLabel={animLabel}
            zIndex={"2"}
            position="relative"
          />
        </Box>

        <HomeHeroSlider animLabel={animLabel} />

        <Container maxW="container.xl" mt={"12"} px={{ base: 3, md: 12 }}>
          <Stack
            w={"full"}
            shadow={"sm"}
            align={"center"}
            p={"1.5"}
            bgGradient={useColorModeValue(
              "linear(to-r, bg.3, primary.300, bg.3)",
              "linear(to-r, bg.3, color.primary, bg.3)",
            )}
            rounded={"lg"}
          >
            <DarkMode>
              <Button rightIcon={<IoPlayOutline />} variant="ghost">
                Explore The Demo
              </Button>
            </DarkMode>
          </Stack>
        </Container>
      </Box>
    </MotionConfig>
  );
}
