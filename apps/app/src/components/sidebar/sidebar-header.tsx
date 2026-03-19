import { Stack, type StackProps } from "@mutuals/ui";

export function SidebarHeader({ children, ...props }: StackProps) {
  return (
    <Stack flexShrink={"0"} p={"6"} {...props}>
      {children}
    </Stack>
  );
}
