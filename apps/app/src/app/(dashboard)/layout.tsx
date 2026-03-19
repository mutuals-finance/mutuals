import type { PropsWithChildren } from "react";
import ShellDashboard from "@/features/shell/dashboard";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return <ShellDashboard>{children}</ShellDashboard>;
}
