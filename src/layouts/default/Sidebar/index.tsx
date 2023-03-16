import React from "react";
import SidebarBody from "@/layouts/default/Sidebar/SidebarBody";
import SidebarFooter from "@/layouts/default/Sidebar/SidebarFooter";
import { useToggle } from "react-use";

export default function Sidebar() {
  const [collapsed, toggle] = useToggle(false);

  return (
    <div
      className={`hidden md:sticky top-0 pt-32 left-0 md:flex flex-col flex-shrink-0 bg-default h-screen duration-200`}
    >
      <SidebarBody collapsed={collapsed} />
      <SidebarFooter collapsed={collapsed} onToggle={() => toggle()} />
    </div>
  );
}
