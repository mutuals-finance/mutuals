import { TokenTransfer } from "@ankr.com/ankr.js/dist/types";
import { Share } from "@splitfi/sdk/thegraph";

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

export interface ActivityTableProps extends Pick<Share, "payee"> {
  transfers?: TokenTransfer[];
}
