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
      borderRightWidth={{ lg: placement === "start" ? "1px" : "0px" }}
      borderLeftWidth={{ lg: placement === "end" ? "1px" : "0px" }}
      borderTopWidth={{ lg: placement === "bottom" ? "1px" : "0px" }}
      borderBottomWidth={{ lg: placement === "top" ? "1px" : "0px" }}
      borderColor={{ lg: "border" }}
      animate={open ? "open" : "closed"}
      variants={{
        open: {
          width: (width || w) as string,
        },
        closed: {
          width: 0,
        },
      }}
      onChange={(open) => !open}
    >
      <VStack flex="1" alignItems={"stretch"} overflow={"hidden"} gap={"0"}>
        {children}
      </VStack>
    </MotionBox>
  );
}
