"use client";

import { Box, BoxProps, Container, HStack, MotionBox } from "@mutuals/ui";
import { useBreakpointValue } from "@mutuals/ui";
import { MotionConfig, useMotionValueEvent, useScroll } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import { useHeaderObserver } from "@/providers/HeaderObserver";

const variants = {
  visibility: {
    visible: { y: 0 },
    invisible: { y: "-100%" },
  },
};

export default function HeaderContainerWrapper({
  children,
  transition: _,
  ...props
}: BoxProps) {
  const { scrollY } = useScroll();

  const isLargerLg = useBreakpointValue({ base: false, lg: true });
  const [isTransparent, setTransparent] = useState(false);
  const [isHidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState<number | null>(null);

  const transparentThreshold = 1;

  const onUpdate = useCallback(
    (latest: number, prev: number | null) => {
      if (!isTransparent && latest <= transparentThreshold) {
        setTransparent(true);
      } else if (isTransparent && latest > transparentThreshold) {
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

  return (
    <MotionBox
      display={"flex"}
      position="fixed"
      top="0"
      left="0"
      zIndex={10}
      w="full"
      bgColor={isTransparent ? "transparent" : "bg"}
      borderBottom={"1px solid"}
      borderColor={isTransparent ? "transparent" : "border"}
      animate={isHidden ? "invisible" : "visible"}
      variants={variants.visibility}
      transition={{
        ease: "easeInOut",
        duration: 0.2,
      }}
    >
      <Box
        flex={"1"}
        display="flex"
        alignItems="stretch"
        justifyContent="stretch"
        className={headerTheme}
      >
        <Container
          as={HStack}
          size="2xl"
          alignItems="center"
          position="relative"
          gap="12"
          px={0}
        >
          {children}
        </Container>
      </Box>
    </MotionBox>
  );
}
