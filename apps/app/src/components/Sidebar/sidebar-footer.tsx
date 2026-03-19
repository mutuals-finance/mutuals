import { Stack, type StackProps } from "@mutuals/ui";

export function SidebarFooter({ children, ...props }: StackProps) {
  return (
    <Stack
      borderColor={"border"}
      borderTopWidth={"1px"}
      flexShrink={"0"}
      p={"6"}
      {...props}
    >
      {children}
    </Stack>
  );
}
