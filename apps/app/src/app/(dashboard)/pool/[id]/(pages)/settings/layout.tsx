import { getPool } from "@mutuals/graphql-client-nextjs/server";
import { Container, RouterTabs } from "@mutuals/ui";
import { notFound } from "next/navigation";
import ShellPage from "@/features/shell/page";

export default async function PoolSettingsLayout({
  children,
  params,
}: LayoutProps<"/pool/[id]/settings">) {
  const { id: slug } = await params;

  const { data: pool, error } = await getPool({
    variables: { slug },
  });

  if (error || !pool) {
    notFound();
  }

  const tabs = [
    {
      title: "General",
      value: "general",
      href: `/pool/${pool.slug}/settings`,
    },
    {
      title: "Security",
      value: "security",
      href: `/pool/${pool.slug}/settings/security`,
    },
    {
      title: "Notifications",
      value: "notifications",
      href: `/pool/${pool.slug}/settings/notifications`,
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
