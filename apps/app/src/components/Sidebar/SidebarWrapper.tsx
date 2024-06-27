import { BoxProps, DrawerProps, VStack, MotionBox } from "@splitfi/ui";
import React from "react";

export interface SidebarWrapperProps extends BoxProps {
  isOpen?: boolean;
  placement?: DrawerProps["placement"];
}

export function SidebarWrapper({
  isOpen = true,
  children,
  width,
  w,
  placement = "left",
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
      bg={"bg.1"}
      borderRight={placement === "left" ? "1px" : "0px"}
      borderLeft={placement === "right" ? "1px" : "0px"}
      borderTop={placement === "bottom" ? "1px" : "0px"}
      borderBottom={placement === "top" ? "1px" : "0px"}
      borderColor={"border.1"}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: {
          width: width || w,
        },
        closed: {
          width: 0,
        },
      }}
      {...props}
    >
      <VStack flex="1" alignItems={"stretch"} overflow={"hidden"} gap={"0"}>
        {children}
      </VStack>
    </MotionBox>
  );
}
