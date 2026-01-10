import AssetIconCell from "@/features/Asset/Table/IconCell";
import AssetBalanceCell from "@/features/Asset/Table/BalanceCell";
import AssetValueCell from "@/features/Asset/Table/ValueCell";
import Table, { TableProps } from "@/components/Table";
import { createColumnHelper } from "@tanstack/react-table";
import { WithdrawFormContentProps } from "@/features/PoolAction/Withdraw/Form/Content";
import { Checkbox } from "@mutuals/ui";
import { useMemo } from "react";
import { ERC20TokenBalance } from "@/lib/moralis";

type WithdrawTableProps = WithdrawFormContentProps &
  Omit<TableProps<ERC20TokenBalance>, "columns">;

const columnHelper = createColumnHelper<ERC20TokenBalance>();

export default function WithdrawTable({ ...props }: WithdrawTableProps) {
  const columns = useMemo(
    () => [
      columnHelper.display({
        id: "selected",
        maxSize: 40,
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
      columnHelper.accessor("tokenAddress", {
        header: "Token",
        cell: (context) => (
          <AssetIconCell
            {...context}
            labelProps={{ textStyle: "xs" }}
            imageProps={{ size: "xs", variant: "outline" }}
          />
        ),
      }),
      columnHelper.accessor("usdValue", {
        header: "",
        cell: (context) => (
          <AssetBalanceCell
            badgeProps={{ size: "xs" }}
            textProps={{ textStyle: "xs" }}
            {...context}
          />
        ),
      }),
      columnHelper.accessor("balance", {
        header: "",
        cell: (context) => <AssetValueCell textStyle={"xs"} {...context} />,
      }),
    ],
    [],
  );

  return (
    <Table<ERC20TokenBalance>
      tableProps={{ size: "sm" }}
      containerProps={{ w: "full" }}
      {...props}
      columns={columns}
    />
  );
}
