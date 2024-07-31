"use client";

import { BoxProps, useBreakpointValue, type DrawerProps } from "@mutuals/ui";

import RouterTabs, { RouterTabProps } from "@/components/RouterTabs";
import { useParams, usePathname, useRouter } from "next/navigation";
import ShellPoolOverviewSidebarMobile from "@/features/Shell/PoolOverview/Sidebar/Mobile";
import ShellPoolOverviewSidebarDesktop from "@/features/Shell/PoolOverview/Sidebar/Desktop";

export interface ShellPoolOverviewSidebarProps extends BoxProps {
  defaultOpen?: boolean;
  tabs: RouterTabProps[];
}

export default function ShellPoolOverviewSidebar({
  children,
  tabs,
  ...props
}: ShellPoolOverviewSidebarProps) {
  const isLargerLg = useBreakpointValue(
    {
      base: false,
      lg: true,
    },
    {
      fallback: "false",
    },
  );

  const pathname = usePathname();
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const index = tabs.findIndex((t) => pathname == t.href.toString());

  const isClosed = index < 0;

  const wrapperProps: DrawerProps = {
    isOpen: !isClosed,
    onClose: () => router.push(`/pool/${decodeURIComponent(params.id)}`),
    placement: "right" as DrawerProps["placement"],
    children: <RouterTabs tabs={tabs}>{children}</RouterTabs>,
    ...props,
  };

  return !isLargerLg ? (
    <ShellPoolOverviewSidebarMobile {...wrapperProps}>
      {wrapperProps.children}
    </ShellPoolOverviewSidebarMobile>
  ) : (
    <ShellPoolOverviewSidebarDesktop w={"27rem"} {...wrapperProps} />
  );
}
