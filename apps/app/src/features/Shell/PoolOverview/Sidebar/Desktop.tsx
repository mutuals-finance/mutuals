import { Stack } from "@mutuals/ui";
import SidebarComponent, { type SidebarProps } from "@/components/Sidebar";

export type ShellPoolOverviewSidebarDesktopProps = SidebarProps;

export default function ShellPoolOverviewSidebarDesktop({
  children,
  w = "27rem",
  width,
  ...props
}: ShellPoolOverviewSidebarDesktopProps) {
  const sidebarWidth = width ?? w;

  return (
    <SidebarComponent
      top={"16"}
      h={"calc(100vh - var(--chakra-sizes-16))"}
      borderColor={{ base: "transparent", lg: "border" }}
      w={sidebarWidth}
      overflow={"hidden"}
      {...props}
    >
      <Stack
        position={"absolute"}
        top={"0"}
        left={"0"}
        h={"full"}
        w={sidebarWidth}
        gap={"0"}
      >
        {children}
      </Stack>
    </SidebarComponent>
  );
}
