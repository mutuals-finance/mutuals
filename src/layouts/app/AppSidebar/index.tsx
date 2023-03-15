import React from "react";
import AppSidebarBody from "@/layouts/app/AppSidebar/AppSidebarBody";
import AppSidebarFooter from "@/layouts/app/AppSidebar/AppSidebarFooter";
import { useToggle } from "react-use";

export default function AppSidebar() {
  const [collapsed, toggle] = useToggle(false);

  return (
    <div
      className={`hidden md:sticky top-0 pt-32 left-0 md:flex flex-col flex-shrink-0 bg-default h-screen duration-200`}
    >
      <AppSidebarBody collapsed={collapsed} />
      <AppSidebarFooter collapsed={collapsed} onToggle={() => toggle()} />
    </div>
  );
}
