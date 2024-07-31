"use client";

import { useHeaderObserver } from "@/providers/HeaderObserver/index";
import { Box, MotionBox } from "@mutuals/ui";

import { PropsWithChildren } from "react";

interface ThemeHeaderProps extends PropsWithChildren {
  theme: "light" | "dark";
}

export default function HeaderObserverChange({
  children,
  theme,
}: ThemeHeaderProps) {
  const { setHeaderTheme } = useHeaderObserver();

  const onViewportEnter = (entry: IntersectionObserverEntry | null) => {
    console.log("onViewportEnter", entry);
    setHeaderTheme(theme);
  };

  const onViewportLeave = (entry: IntersectionObserverEntry | null) => {
    console.log("onViewportLeave", entry);
    setHeaderTheme("system");
  };

  return (
    <Box h={"full"} position={"relative"}>
      {children}

      <MotionBox
        onViewportEnter={onViewportEnter}
        onViewportLeave={onViewportLeave}
        position={"absolute"}
        inset={"0"}
        pointerEvents={"none"}
        viewport={{ margin: "-40px 0px -100% 0px" }}
      />
    </Box>
  );
}
