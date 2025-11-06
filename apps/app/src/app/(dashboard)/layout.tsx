import React, { PropsWithChildren } from "react";
import ShellDashboard from "@/features/Shell/Dashboard";
import { me } from "@/lib/privy";

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const user = me();

  return <ShellDashboard user={user}>{children}</ShellDashboard>;
}
