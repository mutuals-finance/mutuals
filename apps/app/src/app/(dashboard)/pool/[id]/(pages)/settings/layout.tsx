import { getPool } from "@mutuals/graphql-client-nextjs/server";
import { Container, RouterTabs } from "@mutuals/ui";
import { notFound } from "next/navigation";
import type { PropsWithChildren } from "react";
import ShellPage from "@/features/shell/page";

export default async function PoolSettingsLayout({
  children,
  params,
}: PropsWithChildren<{
  params: Promise<{
    id: string;
  }>;
}>) {
  const { data, error } = await getPool({
    variables: { slug: (await params).id },
  });

  if (error || !data?.pool || (data?.pool && "message" in data.pool)) {
    notFound();
  }

  const pool = data?.pool;

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
        <RouterTabs mb={"6"} tabs={tabs}>
          {children}
        </RouterTabs>
      </Container>
    </ShellPage>
  );
}
