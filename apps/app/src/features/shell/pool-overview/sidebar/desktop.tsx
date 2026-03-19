import { Stack } from "@mutuals/ui";
import SidebarComponent, { type SidebarProps } from "@/components/sidebar";

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
      borderColor={{ base: "transparent", lg: "border" }}
      h={"calc(100vh - var(--chakra-sizes-16))"}
      overflow={"hidden"}
      top={"16"}
      w={sidebarWidth}
      {...props}
    >
      <Stack
        gap={"0"}
        h={"full"}
        left={"0"}
        position={"absolute"}
        top={"0"}
        w={sidebarWidth}
      >
        {children}
      </Stack>
    </SidebarComponent>
  );
}
