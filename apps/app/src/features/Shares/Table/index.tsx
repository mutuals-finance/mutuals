import { Text } from "@mutuals/ui";
import { type CellContext, createColumnHelper } from "@tanstack/react-table";
import Table, { type TableProps } from "@/components/table";
import SharesTableCell from "@/features/shares/table/cell";
import { formatPercentage } from "@/utils";
import type { ActiveShare, ShareTableProps } from "../types";

export default function SharesTable({
  shares: data = [],
  ...props
}: ShareTableProps & Omit<TableProps<ActiveShare>, "data" | "columns">) {
  const columnHelper = createColumnHelper<ActiveShare>();

  const columns = [
    columnHelper.accessor("payee", {
      cell: (context: CellContext<ActiveShare, string>) => (
        <SharesTableCell {...context} />
      ),
    }),
    columnHelper.accessor("value", {
      cell: ({ getValue }) => (
        <Text as={"span"}>
          {formatPercentage((Number(getValue()) * 100).toString())}
        </Text>
      ),
    }),
  ];

  return (
    <Table<ActiveShare>
      columns={columns}
      data={data}
      tableProps={{ fontSize: "sm" }}
      {...props}
    />
  );
}
