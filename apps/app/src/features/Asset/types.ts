import { CellContext } from "@tanstack/react-table";
import type { TableProps } from "@/components/Table";
import { ERC20TokenBalance } from "@/lib/moralis";

export type AssetTableProps = {
  assets?: ERC20TokenBalance[];
} & Omit<TableProps<ERC20TokenBalance>, "data" | "columns">;

export type AssetTableCellProps = CellContext<
  ERC20TokenBalance,
  bigint | string | number | null | undefined
>;
