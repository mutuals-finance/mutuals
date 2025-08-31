import { PropsWithChildren } from "react";
import RouterTabs from "@/components/RouterTabs";
import ShellPage from "@/features/Shell/Page";
import { getPoolDetailsFromRouteParams } from "@/lib/split";
import { Container } from "@mutuals/ui";

export default async function PoolSettingsLayout({
  children,
  params,
}: PropsWithChildren<{
  params: Promise<{
    id: string;
  }>;
}>) {
  const pool = await getPoolDetailsFromRouteParams(await params);

  const tabs = [
    {
      title: "General",
      value: "general",
      href: `/pool/maticmum:${pool?.contract?.address}/settings`,
    },
    {
      title: "Security",
      value: "security",
      href: `/pool/maticmum:${pool?.contract?.address}/settings/security`,
    },
    {
      title: "Notifications",
      value: "notifications",
      href: `/pool/maticmum:${pool?.contract?.address}/settings/notifications`,
    },
  ];

  return (
    <ShellPage breadcrumbsEnabled={false} title={"Settings"}>
      <RouterTabs tabs={tabs} mb={"6"}>
        <Container maxW={"7xl"}>{children}</Container>
      </RouterTabs>
    </ShellPage>
  );
}
