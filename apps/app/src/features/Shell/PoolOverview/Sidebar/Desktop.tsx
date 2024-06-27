import { Stack } from "@splitfi/ui";
import SidebarComponent, { type SidebarProps } from "@/components/Sidebar";

export type ShellPoolOverviewSidebarDesktopProps = SidebarProps;

export default function ShellPoolOverviewSidebarDesktop({
  children,
  w = "26rem",
  width,
  ...props
}: ShellPoolOverviewSidebarDesktopProps) {
  const sidebarWidth = width || w;

  return (
    <SidebarComponent
      top={{ base: "5rem", md: "3.4rem" }}
      h={{ base: "calc(100vh - 5rem)", md: "calc(100vh - 3.4rem)" }}
      borderColor={{ base: "transparent", lg: "border.1" }}
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
