import React from "react";
import { IoChevronBack, IoChevronForward, IoSettings } from "react-icons/io5";
import { ButtonOutline } from "@/components/Button";
import AppSidebarLink from "@/layouts/app/AppSidebar/AppSidebarLink";

interface AppSidebarFooterProps {
  onToggle: () => void;
  collapsed: boolean;
}

export default function AppSidebarFooter({
  onToggle,
  collapsed,
}: AppSidebarFooterProps) {
  return (
    <div className={"flex-shrink-0 flex flex-col p-2 lg:pb-6 space-y-2"}>
      <div className={"ml-auto translate-x-7"}>
        <ButtonOutline
          icon={collapsed ? <IoChevronForward /> : <IoChevronBack />}
          onClick={onToggle}
        />
      </div>

      <AppSidebarLink
        dense={collapsed}
        href={"/settings"}
        icon={<IoSettings />}
      >
        Settings
      </AppSidebarLink>
    </div>
  );
}
