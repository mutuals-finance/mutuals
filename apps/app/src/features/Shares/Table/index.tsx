import { Text } from "@splitfi/ui";
import { createColumnHelper } from "@tanstack/react-table";

import { formatPercentage } from "@/utils";

import Table, { type TableProps } from "@/components/Table";

import SharesTableCell from "@/features/Shares/Table/Cell";
import { type ActiveShare, type ShareTableProps } from "../types";

export default function SharesTable({
  shares: data = [],
  ...props
}: ShareTableProps & Omit<TableProps<ActiveShare>, "data" | "columns">) {
  const columnHelper = createColumnHelper<ActiveShare>();

  const columns = [
    columnHelper.accessor("payee", {
      cell: (context) => <SharesTableCell {...context} />,
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
      data={data}
      columns={columns}
      tableProps={{ fontSize: "sm" }}
      {...props}
    />
  );
}
