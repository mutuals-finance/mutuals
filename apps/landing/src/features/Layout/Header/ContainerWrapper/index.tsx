"use client";

import { Flex, BoxProps, Container, HStack, Presence } from "@mutuals/ui";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useHeaderObserver } from "@/providers/HeaderObserver";
import ClientTheme from "./ClientTheme";

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

  const { initialized, headerTheme } = useHeaderObserver();

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
    <ClientTheme appearance={headerTheme as "light" | "dark"}>
      <Presence
        present={initialized}
        animationName={{ _open: "fade-in" }}
        animationDuration={"300ms"}
      >
        <Flex
          position="fixed"
          top="0"
          left="0"
          zIndex={10}
          w="full"
          flex={"1"}
          alignItems="stretch"
          justifyContent="stretch"
          bgColor={{
            base: !isTransparent ? "bg/90" : "transparent",
            lg: "transparent",
          }}
          css={{
            backdropFilter: {
              base: !isTransparent ? "blur(4px)" : "none",
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
          roundedBottom={"xl"}
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
      </Presence>
    </ClientTheme>
  );
}
