import AssetIconCell from "@/features/Asset/Table/IconCell";
import AssetBalanceCell from "@/features/Asset/Table/BalanceCell";
import AssetValueCell from "@/features/Asset/Table/ValueCell";
import Table, { TableProps } from "@/components/Table";
import { createColumnHelper } from "@tanstack/react-table";
import { WithdrawFormContentProps } from "@/features/PoolAction/Withdraw/Form/Content";
import { Checkbox } from "@mutuals/ui";
import { Balance } from "@ankr.com/ankr.js/dist/types";
import { useMemo } from "react";

type WithdrawTableProps = WithdrawFormContentProps &
  Omit<TableProps<Balance>, "columns">;

const columnHelper = createColumnHelper<Balance>();

export default function WithdrawTable({ ...props }: WithdrawTableProps) {
  const columns = useMemo(
    () => [
      columnHelper.display({
        id: "selected",
        header: ({ table }) => (
          <Checkbox
            {...{
              checked: table.getIsSomeRowsSelected()
                ? "indeterminate"
                : table.getIsAllRowsSelected(),
              onCheckedChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            {...{
              checked: row.getIsSomeSelected()
                ? "indeterminate"
                : row.getIsSelected(),
              disabled: !row.getCanSelect(),
              onCheckedChange: row.getToggleSelectedHandler(),
            }}
          />
        ),
      }),
      columnHelper.accessor("contractAddress", {
        header: "Token",
        cell: (context) => (
          <AssetIconCell
            {...context}
            imageProps={{ size: "xs" }}
            onlyImage={true}
          />
        ),
      }),
      columnHelper.accessor("balance", {
        header: "",
        cell: (context) => <AssetBalanceCell {...context} />,
      }),
      columnHelper.accessor("balanceUsd", {
        header: "",
        cell: (context) => <AssetValueCell {...context} />,
      }),
    ],
    [],
  );

  return (
    <Table<Balance>
      tableProps={{ size: "sm" }}
      containerProps={{ w: "full" }}
      columns={columns}
      {...props}
    />
  );
}
