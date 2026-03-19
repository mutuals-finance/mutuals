import { Box } from "@mutuals/ui";
import ShellDashboardSidebarDesktop from "@/features/shell/dashboard/sidebar/desktop";
import ShellDashboardSidebarMobile from "@/features/shell/dashboard/sidebar/mobile";

export default function ShellDashboardSidebar() {
  return (
    <>
      <Box hideBelow={"lg"}>
        <ShellDashboardSidebarDesktop />
      </Box>
      <Box hideFrom={"lg"}>
        <ShellDashboardSidebarMobile />
      </Box>
    </>
  );
}
