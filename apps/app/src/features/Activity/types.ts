import type { PoolTransactionsQuery } from "@mutuals/graphql-client-nextjs";
import type { TableProps } from "@/components/table";

type PoolInQuery = NonNullable<PoolTransactionsQuery["pool"]>;
type ContractInQuery = Extract<PoolInQuery, { contract?: unknown }>["contract"];

export type DepositNode = NonNullable<
  NonNullable<ContractInQuery>["deposits"]
>["edges"][number]["node"];

export type WithdrawalNode = NonNullable<
  NonNullable<ContractInQuery>["withdrawals"]
>["edges"][number]["node"];

export type PoolActivityEvent = DepositNode | WithdrawalNode;

export interface ActivityTableProps
  extends Omit<TableProps<PoolActivityEvent>, "columns" | "data"> {
  events: PoolActivityEvent[];
}
