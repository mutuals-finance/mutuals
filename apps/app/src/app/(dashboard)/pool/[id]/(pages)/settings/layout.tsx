import { PropsWithChildren } from "react";
import ShellPage from "@/features/Shell/Page";
import { getPoolDetailsFromRouteParams } from "@/lib/split";
import { Container, RouterTabs } from "@mutuals/ui";

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
      href: `/pool/${pool?.slug}/settings`,
    },
    {
      title: "Security",
      value: "security",
      href: `/pool/${pool?.slug}/settings/security`,
    },
    {
      title: "Notifications",
      value: "notifications",
      href: `/pool/${pool?.slug}/settings/notifications`,
    },
  ];

  return (
    <ShellPage breadcrumbsEnabled={false} title={"Payment Pool Settings"}>
      <Container maxW={"7xl"}>
        <RouterTabs tabs={tabs} mb={"6"}>
          {children}
        </RouterTabs>
      </Container>
    </ShellPage>
  );
}
