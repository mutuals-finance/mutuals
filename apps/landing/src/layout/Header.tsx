import { BoxProps, MotionBox } from "@splitfi/ui";
import {
  Container,
  DarkMode,
  Box,
  HStack,
  LightMode,
  useBreakpointValue,
} from "@splitfi/ui";
import { MotionConfig, useMotionValueEvent, useScroll } from "framer-motion";
import { Fragment, useCallback, useEffect, useState } from "react";

import Navigation from "@/layout/Navigation";
import { useHeaderObserver } from "@/context/HeaderObserver";

export type HeaderProps = Omit<BoxProps, "children">;

const variants = {
  visibility: {
    visible: { y: 0 },
    invisible: { y: "-100%" },
  },
  transparency: {
    transparent: {
      background: "transparent",
    },
    opaque: { background: "var(--chakra-colors-bg-1)" },
  },
};

export default function Header(props: HeaderProps) {
  const { scrollY } = useScroll();

  const isLargerLg = useBreakpointValue({ base: false, lg: true });
  const [isTransparent, setTransparent] = useState(false);
  const [isHidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState<number | null>(null);

  const onUpdate = useCallback(
    (latest: number, prev: number | null) => {
      if (!isTransparent && latest <= 100) {
        setTransparent(true);
      } else if (isTransparent && latest > 100) {
        setTransparent(false);
      }

      if (!prev || (isHidden && latest <= prev)) {
        setHidden(false);
      } else if (!isLargerLg && !isHidden && latest > prev) {
        setHidden(true);
      }
    },
    [isTransparent, isHidden, isLargerLg],
  );

  useEffect(() => onUpdate(0, null), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    onUpdate(latest, prevScroll);
    setPrevScroll(latest);
  });

  const { headerTheme } = useHeaderObserver();

  const ThemeComponent =
    headerTheme === "dark"
      ? DarkMode
      : headerTheme === "light"
        ? LightMode
        : Fragment;

  return (
    <Box as="header" {...props}>
      <MotionConfig
        transition={{
          ease: "easeInOut",
          duration: 0.2,
        }}
      >
        <MotionBox
          display={"flex"}
          position="fixed"
          top="0"
          left="0"
          zIndex={10}
          w="full"
          h={"20"}
          animate={isHidden ? "invisible" : "visible"}
          variants={variants.visibility}
        >
          <ThemeComponent>
            <MotionBox
              flex={"1"}
              display="flex"
              alignItems="stretch"
              justifyContent="stretch"
              animate={isTransparent ? "transparent" : "opaque"}
              variants={variants.transparency}
              transition={{
                duration: 0.1,
              }}
            >
              <Container
                as={HStack}
                size="2xl"
                align="center"
                position="relative"
                spacing="12"
                px={{ base: "6", lg: "12" }}
              >
                <Navigation />
              </Container>
            </MotionBox>
          </ThemeComponent>
        </MotionBox>
      </MotionConfig>
    </Box>
  );
}
