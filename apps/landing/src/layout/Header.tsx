import type { BoxProps } from "@splitfi/ui";
import {
  Box,
  Container,
  Flex,
  HStack,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@splitfi/ui";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import AnimationBox from "@/components/Animation/Box";
import Navigation from "@/layout/Navigation";

export type HeaderProps = Omit<BoxProps, "children">;

export default function Header(props: HeaderProps) {
  const { scrollY } = useScroll();

  const [animLabel, setAnimLabel] = useState<"grow" | "shrink">("grow");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (animLabel === "shrink" && latest <= 10) {
      setAnimLabel("grow");
    } else if (animLabel === "grow" && latest > 10) {
      setAnimLabel("shrink");
    }
  });

  return (
    <Flex as="header" w="full" {...props}>
      <Box
        top="0"
        left="0"
        position="absolute"
        zIndex={10}
        display="flex"
        alignItems="stretch"
        justifyContent="stretch"
        w="full"
        h="24"
      >
        <Container
          as={HStack}
          maxW="container.xl"
          align="center"
          px={{ base: 6, sm: 12 }}
          spacing="12"
          position="relative"
        >
          <Navigation />
        </Container>
      </Box>

      <AnimationBox
        top="0"
        left="0"
        position="fixed"
        zIndex={10}
        display="flex"
        alignItems="stretch"
        justifyContent="stretch"
        w="full"
        h="16"
        shadow="sm"
        roundedBottom="md"
        bg="bg.1"
        animate={animLabel}
        transition={{ duration: 0.8, ease: [0.72, 0, 0.12, 1] }}
        variants={{
          grow: {
            transform: "translateY(-100%)",
          },
          shrink: {
            transform: "translateY(0)",
          },
        }}
      >
        <Container
          maxW="container.xl"
          as={HStack}
          px={{ base: 6, sm: 12 }}
          spacing="12"
          position="relative"
        >
          <Navigation />
        </Container>
      </AnimationBox>
    </Flex>
  );
}
