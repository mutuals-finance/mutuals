import {
  type GetPoolTransactionsOptions,
  getPoolTransactions,
} from "@mutuals/graphql-client-nextjs/server";
import {
  Button,
  Center,
  type ConditionalValue,
  EmptyState,
  Icon,
  Link,
  Wrap,
} from "@mutuals/ui";
import { GrTransaction } from "react-icons/gr";
import ContentCard, { type ContentCardProps } from "@/components/content-card";
import ActivityTable from "@/features/activity/table";
import type {
  ActivityTableProps,
  PoolActivityEvent,
} from "@/features/activity/types";

export interface ActivityTableCardProps
  extends Omit<ActivityTableProps, "events"> {
  cardProps?: ContentCardProps;
  queryOptions?: GetPoolTransactionsOptions;
  size?: ConditionalValue<"sm" | "md" | "lg" | undefined>;
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
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <ContentCard
      {...cardProps}
      bodyProps={{ p: "0", ...cardProps.bodyProps }}
      title={cardProps.title}
    >
      {events.length > 0 ? (
        <ActivityTable
          events={events}
          tableProps={{ size, ...tableProps }}
          {...props}
        />
      ) : (
        <EmptyState
          description="Start by depositing assets into your payment pool"
          icon={
            <Center bg={"bg.muted"} color={"fg"} p={"4"} rounded={"l3"}>
              <Icon size={"md"}>
                <GrTransaction />
              </Icon>
            </Center>
          }
          p={"12"}
          size={"sm"}
          title="No activity found"
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
