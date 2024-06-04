import { Container, Stack, type StackProps } from "@splitfi/ui";
import ShellPool, { ShellPoolProps } from "@/features/Shell/Pool";
import ShellPoolOverviewSidebar, {
  ShellPoolOverviewSidebarProps,
} from "@/features/Shell/PoolOverview/Sidebar";
import { ReactNode } from "react";

interface ShellPoolOverviewProps extends Omit<StackProps, "content"> {
  content?: ReactNode;
  contentProps?: ShellPoolProps;
  sidebarProps: ShellPoolOverviewSidebarProps;
}

export default async function ShellPoolOverview({
  children,
  content,
  contentProps,
  sidebarProps,
  ...props
}: ShellPoolOverviewProps) {
  const isDefaultOpen = sidebarProps.tabs.some(({ href }) =>
    href.toString().includes((children as any)?.props?.childPropSegment ?? ""),
  );

  return (
    <Stack direction={"row"} gap={"0"} w={"full"} {...props}>
      <ShellPool flex={"1"} minWidth={"0"} {...contentProps}>
        <Container as={Stack} gap={"6"} variant={"shell"}>
          {content}
        </Container>
      </ShellPool>

      <ShellPoolOverviewSidebar defaultOpen={isDefaultOpen} {...sidebarProps}>
        {children}
      </ShellPoolOverviewSidebar>
    </Stack>
  );
}
