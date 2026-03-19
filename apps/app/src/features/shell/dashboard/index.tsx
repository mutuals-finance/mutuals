import { Box, Stack } from "@mutuals/ui";
import type { PropsWithChildren } from "react";

import ShellDashboardBody from "@/features/shell/dashboard/body";
import ShellDashboardFooter from "@/features/shell/dashboard/footer";
import ShellDashboardHeader from "@/features/shell/dashboard/header";
import ShellDashboardRoot from "@/features/shell/dashboard/root";
import ShellDashboardSidebar from "@/features/shell/dashboard/sidebar";

export type ShellDashboardProps = PropsWithChildren;

export default function ShellDashboard({ children }: ShellDashboardProps) {
  return (
    <ShellDashboardRoot>
      <ShellDashboardHeader />

      <Stack direction={"row"} gap="0">
        <ShellDashboardSidebar />

        <Box flex={"1 1 auto"} minW={"0"}>
          <ShellDashboardBody>{children}</ShellDashboardBody>
        </Box>
      </Stack>
      <ShellDashboardFooter />
    </ShellDashboardRoot>
  );
}
