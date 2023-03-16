import {TransactionDetailsFragmentFragment} from "@/graphql/__generated__/graphql";

export enum EventType {
  ContractURIUpdate = "ContractURIUpdate",
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

export interface ActivityTableProps {
  transactions: readonly TransactionDetailsFragmentFragment[];
}
