// Neu: Importiere den Fetcher und die Typen
import { getPoolTransactions } from "@mutuals/graphql-client-nextjs/server";
import { Bleed, Container } from "@mutuals/ui";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ActivityTable from "@/features/activity/table";
import type { PoolActivityEvent } from "@/features/activity/types";
import ShellPage from "@/features/shell/page";

export const metadata: Metadata = {
  title: "Activity",
};

// Next.js 15: params ist ein Promise
export interface PoolActivityPageProps {
  params: Promise<{ id: string }>;
}

export default async function PoolActivityPage({
  params,
}: PoolActivityPageProps) {
  const { id: slug } = await params;

  const { data: pool, error } = await getPoolTransactions({
    variables: { slug },
  });

  if (error || !pool) {
    notFound();
  }

  const deposits = pool.contract?.deposits.edges.map((edge) => edge.node);
  const withdrawals = pool.contract?.withdrawals.edges.map((edge) => edge.node);

  const events: PoolActivityEvent[] = [
    ...(deposits ?? []),
    ...(withdrawals ?? []),
  ].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <ShellPage
      breadcrumbsEnabled={false}
      description={
        "Your activity contains all withdrawals and deposits associated with your payment pool. Currently, ERC20 Token Transfers are tracked."
      }
      title={"Activity"}
    >
      <Container as={"section"} maxW={"7xl"}>
        <Bleed inline={{ mdDown: "6" }}>
          <ActivityTable events={events} />
        </Bleed>
      </Container>
    </ShellPage>
  );
}
