import type { TokenBalance } from "@mutuals/graphql-client-nextjs";
import type { CellContext } from "@tanstack/react-table";
import type { TableProps } from "@/components/table";

export type AssetItem = Omit<TokenBalance, "holder">;

export type AssetTableProps = {
  assets?: AssetItem[];
} & Omit<TableProps<AssetItem>, "data" | "columns">;

export type AssetTableCellProps = CellContext<
  AssetItem,
  bigint | string | number | null | undefined | unknown
>;
