"use client";

import { StackProps, Container, Stack } from "@mutuals/ui";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export default function HeaderContainerWrapper({
  children,
  transition: _,
  ...props
}: StackProps) {
  const { scrollY } = useScroll();

  const [isTransparent, setTransparent] = useState(true);

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
  });

  return (
    <Stack
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
      {...props}
    >
      <Container alignItems="center" position="relative" px={0}>
        <Stack gap="6">{children}</Stack>
      </Container>
    </Stack>
  );
}
