import { Stack, StackProps } from "@mutuals/ui";
import React from "react";

export function SidebarFooter({ children, ...props }: StackProps) {
  return (
    <Stack
      flexShrink={"0"}
      p={"6"}
      borderTopWidth={"1px"}
      borderColor={"border"}
      {...props}
    >
      {children}
    </Stack>
  );
}
