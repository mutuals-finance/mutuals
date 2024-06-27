import AssetIconCell from "@/features/Asset/Table/IconCell";
import AssetBalanceCell from "@/features/Asset/Table/BalanceCell";
import AssetValueCell from "@/features/Asset/Table/ValueCell";
import Table, { TableProps } from "@/components/Table";
import { createColumnHelper } from "@tanstack/react-table";
import { WithdrawFormContentProps } from "@/features/PoolAction/Withdraw/Form/Content";
import { Checkbox } from "@splitfi/ui";
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
              isChecked: table.getIsAllRowsSelected(),
              isIndeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            {...{
              isChecked: row.getIsSelected(),
              isDisabled: !row.getCanSelect(),
              isIndeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
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
      columns={columns}
      tableProps={{ size: "sm" }}
      containerProps={{ w: "full" }}
      {...props}
    />
  );
}
