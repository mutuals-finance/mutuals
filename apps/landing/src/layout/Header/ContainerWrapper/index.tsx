"use client";

import { Box, BoxProps, MotionBox } from "@mutuals/ui";
import { DarkMode, LightMode, useBreakpointValue } from "@mutuals/ui";
import { MotionConfig, useMotionValueEvent, useScroll } from "framer-motion";
import { Fragment, useCallback, useEffect, useState } from "react";

import { useHeaderObserver } from "@/providers/HeaderObserver";

const variants = {
  visibility: {
    visible: { y: 0 },
    invisible: { y: "-100%" },
  },
};

export default function HeaderContainerWrapper({
  children,
  ...props
}: BoxProps) {
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
        backdropFilter={"auto"}
        backdropBlur={"12px"}
        shadow={"sm"}
        animate={isHidden ? "invisible" : "visible"}
        variants={variants.visibility}
        {...props}
      >
        <ThemeComponent>
          <Box
            flex={"1"}
            display="flex"
            alignItems="stretch"
            justifyContent="stretch"
            bg={"bgAlpha.2"}
          >
            {children}
          </Box>
        </ThemeComponent>
      </MotionBox>
    </MotionConfig>
  );
}
