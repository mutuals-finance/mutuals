"use client";

import { Box, BoxProps } from "@mutuals/ui";
import { useHeaderObserver } from "@/providers/HeaderObserver";

export default function HeaderContainerWrapperBgBox({ children }: BoxProps) {
  const { headerTheme } = useHeaderObserver();

  return (
    <Box className={headerTheme} suppressHydrationWarning={true}>
      {children}
    </Box>
  );
}
