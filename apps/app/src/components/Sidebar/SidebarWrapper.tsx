"use client";

import { Box, BoxProps, VStack, DrawerRootProps } from "@mutuals/ui";
import React from "react";
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

  const shouldAnimate = !skipAnimationOnMount || !isFirstMount;

  return (
    <Box
      position={{ base: "fixed", lg: "sticky" }}
      top={"0"}
      left={placement === "start" ? "0" : "auto"}
      right={placement === "end" ? "0" : "auto"}
      h={"100vh"}
      display={"flex"}
      flex={"0 0 auto"}
      overflow={"hidden"}
      data-state={open ? "open" : "closed"}
      _open={{
        width: width || w,
        transition: shouldAnimate ? "width 0.2s ease-in-out" : "none",
      }}
      _closed={{
        width: 0,
        transition: shouldAnimate ? "width 0.2s ease-in-out" : "none",
      }}
      {...props}
    >
      <VStack flex="1" alignItems={"stretch"} overflow={"hidden"} gap={"0"}>
        {children}
      </VStack>
    </Box>
  );
}
