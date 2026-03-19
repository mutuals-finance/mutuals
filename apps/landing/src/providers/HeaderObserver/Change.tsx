"use client";

import { Box, MotionBox } from "@mutuals/ui";
import type { PropsWithChildren } from "react";
import { useHeaderObserver } from "@/providers/HeaderObserver";

interface ThemeHeaderProps extends PropsWithChildren {
  theme: "light" | "dark";
}

export default function HeaderObserverChange({
  children,
  theme,
}: ThemeHeaderProps) {
  const { setHeaderTheme } = useHeaderObserver();

  const onViewportEnter = (entry: IntersectionObserverEntry | null) => {
    console.log("onViewportEnter", { entry, theme });
    setHeaderTheme(theme);
  };

  const onViewportLeave = (entry: IntersectionObserverEntry | null) => {
    console.log("onViewportLeave", { entry, theme });
    setHeaderTheme("system");
  };

  return (
    <Box h={"full"} position={"relative"}>
      {children}

      <MotionBox
        inset={"0"}
        onViewportEnter={onViewportEnter}
        onViewportLeave={onViewportLeave}
        pointerEvents={"none"}
        position={"absolute"}
        viewport={{ margin: "-40px 0px -100% 0px" }}
      />
    </Box>
  );
}
