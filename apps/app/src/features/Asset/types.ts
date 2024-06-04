import { Balance, GetAccountBalanceReply } from "@ankr.com/ankr.js/dist/types";
import { CellContext } from "@tanstack/react-table";
import type { TableProps } from "@/components/Table";

export type AssetTableProps = Partial<
  Omit<GetAccountBalanceReply, "totalBalanceUsd">
> &
  Omit<TableProps<Balance>, "data" | "columns">;

export type AssetTableCellProps = CellContext<Balance, string | undefined>;
