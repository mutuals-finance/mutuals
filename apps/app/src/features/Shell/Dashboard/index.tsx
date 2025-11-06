import { PropsWithChildren } from "react";
import { Box, Stack } from "@mutuals/ui";

import ShellDashboardBody from "@/features/Shell/Dashboard/Body";
import ShellDashboardHeader from "@/features/Shell/Dashboard/Header";
import ShellDashboardSidebar from "@/features/Shell/Dashboard/Sidebar";
import ShellDashboardRoot from "@/features/Shell/Dashboard/Root";
import ShellDashboardFooter from "@/features/Shell/Dashboard/Footer";
import { User } from "@privy-io/node";

export type ShellDashboardProps = PropsWithChildren<{ user?: User }>;

export default function ShellDashboard({
  user,
  children,
}: ShellDashboardProps) {
  return (
    <ShellDashboardRoot>
      <ShellDashboardHeader user={user} />
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
