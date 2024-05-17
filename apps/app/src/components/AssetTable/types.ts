import { Balance, GetAccountBalanceReply } from "@ankr.com/ankr.js/dist/types";
import { CellContext } from "@tanstack/react-table";

export type AssetTableProps = Partial<
  Omit<GetAccountBalanceReply, "totalBalanceUsd">
>;

export type AssetCellProps = CellContext<Balance, string | undefined>;
