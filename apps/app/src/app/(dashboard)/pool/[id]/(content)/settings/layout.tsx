import { PropsWithChildren } from "react";
import RouterTabs from "@/components/RouterTabs";
import ShellPage from "src/features/Shell/Page";
import { getPoolDetailsFromRouteParams } from "@/lib/split";

interface PoolSettingsLayoutProps {
  params: { id: string };
}

export default async function PoolSettingsLayout({
  children,
  params,
}: PropsWithChildren<PoolSettingsLayoutProps>) {
  const pool = await getPoolDetailsFromRouteParams(params);

  const tabs = [
    {
      title: "General",
      href: `/pool/maticmum:${pool?.address}/settings`,
    },
    {
      title: "Security",
      href: `/pool/maticmum:${pool?.address}/settings/security`,
    },
    {
      title: "Notifications",
      href: `/pool/maticmum:${pool?.address}/settings/notifications`,
    },
  ];

  return (
    <ShellPage breadcrumbsEnabled={false} title={"Settings"}>
      <RouterTabs tabs={tabs} mb={"6"}>
        {children}
      </RouterTabs>
    </ShellPage>
  );
}
