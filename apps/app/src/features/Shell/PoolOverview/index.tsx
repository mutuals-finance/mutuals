import { Container, Stack, type StackProps } from "@mutuals/ui";
import ShellPool, { ShellPoolProps } from "@/features/Shell/Pool";
import ShellPoolOverviewSidebar, {
  ShellPoolOverviewSidebarProps,
} from "@/features/Shell/PoolOverview/Sidebar";
import { ReactNode } from "react";

interface ShellPoolOverviewProps extends Omit<StackProps, "content"> {
  content?: ReactNode;
  contentProps?: ShellPoolProps;
  sidebarProps: Omit<ShellPoolOverviewSidebarProps, "children">;
}

export default function ShellPoolOverview({
  children,
  content,
  contentProps,
  sidebarProps,
  ...props
}: ShellPoolOverviewProps) {
  return (
    <Stack direction={"row"} gap={"0"} w={"full"} {...props}>
      <ShellPool flex={"1"} minWidth={"0"} {...contentProps}>
        <Container maxW={"7xl"}>{content}</Container>
      </ShellPool>

      <ShellPoolOverviewSidebar {...sidebarProps}>
        {children}
      </ShellPoolOverviewSidebar>
    </Stack>
  );
}
