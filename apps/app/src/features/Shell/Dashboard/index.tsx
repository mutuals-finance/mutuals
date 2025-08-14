import ShellDashboardBody from "@/features/Shell/Dashboard/Body";
import ShellDashboardFooter from "@/features/Shell/Dashboard/Footer";
import ShellDashboardHeader from "@/features/Shell/Dashboard/Header";
import ShellDashboardSidebar from "@/features/Shell/Dashboard/Sidebar";
import { PropsWithChildren } from "react";

export default function ShellDashboard({ children }: PropsWithChildren) {
  return (
    <ShellDashboardSidebar>
      <ShellDashboardHeader />
      <ShellDashboardBody>{children}</ShellDashboardBody>
      <ShellDashboardFooter />
    </ShellDashboardSidebar>
  );
}
