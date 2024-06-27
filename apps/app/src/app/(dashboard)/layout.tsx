import React, { PropsWithChildren } from "react";
import ShellDashboard from "@/features/Shell/Dashboard";

export default async function DashboardLayout({ children }: PropsWithChildren) {
  return <ShellDashboard>{children}</ShellDashboard>;
}
