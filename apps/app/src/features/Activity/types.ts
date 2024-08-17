import type { TableProps } from "@/components/Table";
import type { TokenTransfer } from "@ankr.com/ankr.js";
import type { Share } from "@mutuals/graphql-client-nextjs/thegraph";

export enum EventType {
  Deposit = "Deposit",
  Withdrawal = "Withdrawal",
}

export interface SplitEvent {
  event: EventType;
  price: string;
  by: string;
  to: string;
  timestamp: string;
}

export interface ActivityTableProps
  extends Omit<TableProps<TokenTransfer>, "data" | "columns">,
    Pick<Share, "payee"> {
  transfers?: TokenTransfer[];
}
