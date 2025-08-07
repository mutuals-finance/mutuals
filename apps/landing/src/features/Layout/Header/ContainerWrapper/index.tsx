"use client";

import { BoxProps, Container, HStack, MotionBox } from "@mutuals/ui";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

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

  const [isTransparent, setTransparent] = useState(true);
  const [prevScroll, setPrevScroll] = useState<number | null>(null);

  const transparentThreshold = 1;

  const onUpdate = useCallback(
    (latest: number) => {
      if (!isTransparent && latest <= transparentThreshold) {
        setTransparent(true);
      } else if (isTransparent && latest > transparentThreshold) {
        setTransparent(false);
      }
    },
    [isTransparent],
  );

  useEffect(() => onUpdate(0), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    onUpdate(latest);
    setPrevScroll(latest);
  });

  return (
    <MotionBox
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 0.3 }}
      display={"flex"}
      position="fixed"
      top="0"
      left="0"
      zIndex={10}
      w="full"
      flex={"1"}
      alignItems="stretch"
      justifyContent="stretch"
      bgColor={!isTransparent ? "bg/75" : "transparent"}
      css={{
        backdropFilter: "blur(12px)",
      }}
      borderBottom={"1px solid"}
      borderColor={!isTransparent ? "border" : "transparent"}
      color={"fg"}
    >
      <Container
        as={HStack}
        alignItems="center"
        position="relative"
        gap="6"
        px={0}
      >
        {children}
      </Container>
    </MotionBox>
  );
}
