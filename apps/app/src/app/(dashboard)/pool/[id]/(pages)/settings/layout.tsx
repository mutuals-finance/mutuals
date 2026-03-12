import { PropsWithChildren } from "react";
import ShellPage from "@/features/Shell/Page";
import { Container, RouterTabs } from "@mutuals/ui";
import { getPool } from "@mutuals/graphql-client-nextjs/server";
import { notFound } from "next/navigation";

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

  if (error || !data?.pool || "message" in data?.pool) {
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
        <RouterTabs tabs={tabs} mb={"6"}>
          {children}
        </RouterTabs>
      </Container>
    </ShellPage>
  );
}
