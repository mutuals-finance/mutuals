"use client";

import {
  Flex,
  Theme,
  BoxProps,
  Container,
  HStack,
  MotionBox,
} from "@mutuals/ui";
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

  const isLargerLg = true;
  const [isTransparent, setTransparent] = useState(true);
  const [isHidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState<number | null>(null);
  const { headerTheme } = useHeaderObserver();

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
    [isLargerLg, isTransparent, isHidden],
  );

  useEffect(() => onUpdate(0, null), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    onUpdate(latest, prevScroll);
    setPrevScroll(latest);
  });

  return (
    <Theme appearance={headerTheme as "light" | "dark"}>
      <MotionBox
        display={"flex"}
        position="fixed"
        top="0"
        left="0"
        zIndex={10}
        suppressHydrationWarning={true}
        w="full"
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
          bgColor={{
            base: !isTransparent ? "bg/90" : "transparent",
            lg: "transparent",
          }}
          css={{
            backdropFilter: {
              base: !isTransparent ? "blur(6px)" : "none",
              lg: "none",
            },
          }}
          borderBottom={{
            base: "1px solid",
            lg: "none",
          }}
          borderColor={{
            base: !isTransparent ? "border" : "transparent",
            lg: "transparent",
          }}
          color={"fg"}
          roundedBottom={"lg"}
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
        </Flex>
      </MotionBox>
    </Theme>
  );
}
