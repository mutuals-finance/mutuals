import React from "react";
import { IoAnalytics, IoGitNetwork } from "react-icons/io5";
import AppSidebarLink from "@/layouts/app/AppSidebar/AppSidebarLink";

interface AppSidebarBodyNavProps {
  collapsed: boolean;
}
function AppSidebarBodyNav({ collapsed }: AppSidebarBodyNavProps) {
  return (
    <ul className={"flex flex-col space-y-3 p-3"}>
      <li>
        <AppSidebarLink
          dense={collapsed}
          href={"/splits"}
          icon={<IoGitNetwork />}
        >
          Splits
        </AppSidebarLink>
      </li>
      <li>
        <AppSidebarLink
          dense={collapsed}
          href={"/settings"}
          icon={<IoAnalytics />}
        >
          Activity
        </AppSidebarLink>
      </li>
    </ul>
  );
}

export default function AppSidebarBody(props: AppSidebarBodyNavProps) {
  return (
    <div className={`flex-1 overflow-y-auto`}>
      <AppSidebarBodyNav {...props} />
    </div>
  );
}
