"use client";

import {
  DrawerRootProps,
  useBreakpointValue,
  RouterTabs,
  type RouterTabProps,
} from "@mutuals/ui";
import { useParams, usePathname, useRouter } from "next/navigation";
import ShellPoolOverviewSidebarMobile from "@/features/Shell/PoolOverview/Sidebar/Mobile";
import ShellPoolOverviewSidebarDesktop from "@/features/Shell/PoolOverview/Sidebar/Desktop";

export interface ShellPoolOverviewSidebarProps extends DrawerRootProps {
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

  const index = tabs.findIndex((t) => pathname == t.href?.toString());

  const wrapperProps: DrawerRootProps = {
    open: index >= 0,
    onOpenChange: ({ open }) => {
      if (!open) {
        router.push(`/pool/${decodeURIComponent(params.id)}`, {
          scroll: false,
        });
      }
    },
    placement: { base: "bottom", lg: "end" },
    skipAnimationOnMount: true,
    children: <RouterTabs tabs={tabs}>{children}</RouterTabs>,
    ...props,
  };

  return (
    <>
      {!isLargerLg ? (
        <ShellPoolOverviewSidebarMobile {...wrapperProps} />
      ) : (
        <ShellPoolOverviewSidebarDesktop {...wrapperProps} />
      )}
    </>
  );
}
