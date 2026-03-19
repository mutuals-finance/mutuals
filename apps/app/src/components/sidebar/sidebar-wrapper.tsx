"use client";

import { Box, type BoxProps, type DrawerRootProps, VStack } from "@mutuals/ui";
import { useFirstMountState } from "react-use";

export type SidebarWrapperProps = Omit<BoxProps, "transition"> &
  Pick<DrawerRootProps, "open" | "placement" | "skipAnimationOnMount">;

export function SidebarWrapper({
  open = true,
  children,
  width,
  w,
  placement = "start",
  skipAnimationOnMount,
  ...props
}: SidebarWrapperProps) {
  const isFirstMount = useFirstMountState();

  const shouldAnimate = !(skipAnimationOnMount && isFirstMount);

  return (
    <Box
      _closed={{
        width: 0,
        transition: shouldAnimate ? "width 0.2s ease-in-out" : "none",
      }}
      _open={{
        width: width || w,
        transition: shouldAnimate ? "width 0.2s ease-in-out" : "none",
      }}
      data-state={open ? "open" : "closed"}
      display={"flex"}
      flex={"0 0 auto"}
      h={"100vh"}
      left={placement === "start" ? "0" : "auto"}
      overflow={"hidden"}
      position={{ base: "fixed", lg: "sticky" }}
      right={placement === "end" ? "0" : "auto"}
      top={"0"}
      {...props}
    >
      <VStack alignItems={"stretch"} flex="1" gap={"0"} overflow={"hidden"}>
        {children}
      </VStack>
    </Box>
  );
}
