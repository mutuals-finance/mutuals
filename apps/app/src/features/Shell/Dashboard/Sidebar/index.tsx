import ShellDashboardSidebarDesktop from "@/features/Shell/Dashboard/Sidebar/Desktop";
import ShellDashboardSidebarMobile from "@/features/Shell/Dashboard/Sidebar/Mobile";
import { Box } from "@mutuals/ui";

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
