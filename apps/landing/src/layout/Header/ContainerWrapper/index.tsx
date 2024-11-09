"use client";

import { Flex, BoxProps, Container, HStack, MotionBox } from "@mutuals/ui";
import { useMotionValueEvent, useScroll } from "framer-motion";
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

  const [isTransparent, setTransparent] = useState(true);
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
      } else if (!isHidden && latest > prev) {
        setHidden(true);
      }
    },
    [isTransparent, isHidden],
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
      bgColor={!isTransparent ? "bg/80" : "transparent"}
      style={{ backdropFilter: !isTransparent ? "blur(12px)" : "none" }}
      borderBottom={"1px solid"}
      borderColor={!isTransparent ? "border" : "transparent"}
      animate={isHidden ? "invisible" : "visible"}
      variants={variants.visibility}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.3,
      }}
    >
      <Flex
        flex={"1"}
        alignItems="stretch"
        justifyContent="stretch"
        className={headerTheme}
        suppressHydrationWarning={true}
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
      </Flex>
    </MotionBox>
  );
}
