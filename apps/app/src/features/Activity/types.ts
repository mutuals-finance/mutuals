import type { TableProps } from "@/components/Table";
import type { Balance, TokenTransfer } from "@ankr.com/ankr.js";
import type { Share } from "@splitfi/sdk/thegraph";

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
  extends Omit<TableProps<Balance>, "data" | "columns">,
    Pick<Share, "payee"> {
  transfers?: TokenTransfer[];
}
