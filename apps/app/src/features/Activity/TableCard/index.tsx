import ActivityTable from "@/features/Activity/Table";
import ContentCard, { type ContentCardProps } from "@/components/ContentCard";

import {
  Button,
  Center,
  ConditionalValue,
  EmptyState,
  Icon,
  Link,
  Wrap,
} from "@mutuals/ui";
import {
  ActivityTableProps,
  PoolActivityEvent,
} from "@/features/Activity/types";
import React from "react";
import { GrTransaction } from "react-icons/gr";
import {
  getPoolTransactions,
  GetPoolTransactionsOptions,
} from "@mutuals/graphql-client-nextjs/server";

export interface ActivityTableCardProps extends Omit<
  ActivityTableProps,
  "events"
> {
  cardProps?: ContentCardProps;
  size?: ConditionalValue<"sm" | "md" | "lg" | undefined>;
  queryOptions?: GetPoolTransactionsOptions;
}

export default async function ActivityTableCard({
  cardProps = { title: "Activity" },
  size = "sm",
  tableProps,
  queryOptions,
  ...props
}: ActivityTableCardProps) {
  const { data, error } = await getPoolTransactions(queryOptions);

  if (error || !data?.pool || "message" in data.pool) {
    return null;
  }

  const pool = data.pool;
  const contract = pool.contract;

  const deposits = contract?.deposits?.edges?.map((edge) => edge.node) ?? [];
  const withdrawals =
    contract?.withdrawals?.edges?.map((edge) => edge.node) ?? [];

  const events: PoolActivityEvent[] = [...deposits, ...withdrawals].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <ContentCard
      {...cardProps}
      title={cardProps.title}
      bodyProps={{ p: "0", ...cardProps.bodyProps }}
    >
      {events.length > 0 ? (
        <ActivityTable
          tableProps={{ size, ...tableProps }}
          events={events}
          {...props}
        />
      ) : (
        <EmptyState
          p={"12"}
          icon={
            <Center bg={"bg.muted"} color={"fg"} p={"4"} rounded={"l3"}>
              <Icon size={"md"}>
                <GrTransaction />
              </Icon>
            </Center>
          }
          title="No activity found"
          description="Start by depositing assets into your payment pool"
          size={"sm"}
        >
          <Wrap justify={"center"}>
            <Link asChild={true} href={`/pool/${pool.slug}/deposit`}>
              <Button size={"sm"} variant={"solid"}>
                Deposit to Payment Pool
              </Button>
            </Link>
            <Link asChild={true} href={`/pool/${pool.slug}/deposit`}>
              <Button size={"sm"} variant={"subtle"}>
                View on Etherscan
              </Button>
            </Link>
          </Wrap>
        </EmptyState>
      )}
    </ContentCard>
  );
}
