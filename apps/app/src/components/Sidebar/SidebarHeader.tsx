import { Stack, StackProps } from "@mutuals/ui";
import React from "react";

export function SidebarHeader({ children, ...props }: StackProps) {
  return (
    <Stack flexShrink={"0"} p={"6"} {...props}>
      {children}
    </Stack>
  );
}
