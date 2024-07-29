import { StackProps, VStack } from "@mutuals/ui";
import React from "react";

export function SidebarContent({ children, ...props }: StackProps) {
  return (
    <VStack
      flex={"1 0 auto"}
      p={"6"}
      spacing={3}
      overflowY={"auto"}
      overflowX={"hidden"}
      justifyContent={"space-between"}
      alignItems={"stretch"}
      {...props}
    >
      {children}
    </VStack>
  );
}
