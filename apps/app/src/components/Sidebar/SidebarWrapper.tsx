import { BoxProps, VStack, MotionBox, DrawerRootProps } from "@mutuals/ui";
import React from "react";

export interface SidebarWrapperProps extends BoxProps {
  open?: boolean;
  placement?: DrawerRootProps["placement"];
}

export function SidebarWrapper({
  open = true,
  children,
  width,
  w,
  placement = "start",
  onExitComplete,
  ...props
}: SidebarWrapperProps) {
  return (
    <MotionBox
      position={{ base: "fixed", lg: "sticky" }}
      top={"0"}
      left={"0"}
      h={"100vh"}
      display={"flex"}
      flex={"0 0 auto"}
      overflow={"hidden"}
      borderRightWidth={placement === "start" ? "1px" : "0px"}
      borderLeftWidth={placement === "end" ? "1px" : "0px"}
      borderTopWidth={placement === "bottom" ? "1px" : "0px"}
      borderBottomWidth={placement === "top" ? "1px" : "0px"}
      borderColor={"border"}
      animate={open ? "open" : "closed"}
      variants={{
        open: {
          width: width || w,
        },
        closed: {
          width: 0,
        },
      }}
      onChange={(open) => !open && onExitComplete()}
      {...props}
    >
      <VStack flex="1" alignItems={"stretch"} overflow={"hidden"} gap={"0"}>
        {children}
      </VStack>
    </MotionBox>
  );
}
