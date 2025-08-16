import { PropsWithChildren } from "react";
import { Box, Stack } from "@mutuals/ui";

import ShellDashboardBody from "@/features/Shell/Dashboard/Body";
import ShellDashboardHeader from "@/features/Shell/Dashboard/Header";
import ShellDashboardSidebar from "@/features/Shell/Dashboard/Sidebar";
import ShellDashboardRoot from "@/features/Shell/Dashboard/Root";
import ShellDashboardFooter from "@/features/Shell/Dashboard/Footer";

export default function ShellDashboard({ children }: PropsWithChildren) {
  return (
    <ShellDashboardRoot>
      <ShellDashboardHeader />
      <Stack gap="0" direction={"row"}>
        <ShellDashboardSidebar />
        <Box flex={"1 1 auto"} minW={"0"}>
          <ShellDashboardBody>{children}</ShellDashboardBody>
        </Box>
      </Stack>
      <ShellDashboardFooter />
    </ShellDashboardRoot>
  );
}
