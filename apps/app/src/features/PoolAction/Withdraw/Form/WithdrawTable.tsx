"use client";

import AssetIconCell from "@/features/Asset/Table/IconCell";
import AssetBalanceCell from "@/features/Asset/Table/BalanceCell";
import AssetValueCell from "@/features/Asset/Table/ValueCell";
import Table, { TableProps } from "@/components/Table";
import { createColumnHelper } from "@tanstack/react-table";
import { WithdrawFormContentProps } from "@/features/PoolAction/Withdraw/Form/Content";
import { Checkbox } from "@mutuals/ui";
import { useMemo } from "react";
import { AssetItem } from "@/features/Asset/types";

type WithdrawTableProps = WithdrawFormContentProps &
  Omit<TableProps<AssetItem>, "columns">;

const columnHelper = createColumnHelper<AssetItem>();

const IconImageProps = { size: "xs" as const, variant: "outline" as const };
const IconLabelProps = { textStyle: "xs" as const };
const BalanceTextProps = { textStyle: "xs" as const };
const BalanceBadgeProps = { size: "xs" as const };

export default function WithdrawTable({ ...props }: WithdrawTableProps) {
  const columns = useMemo(
    () => [
      columnHelper.display({
        id: "selected",
        maxSize: 40,
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllRowsSelected()
                ? true
                : table.getIsSomeRowsSelected()
                  ? "indeterminate"
                  : false
            }
            onCheckedChange={(checked) =>
              table.getToggleAllRowsSelectedHandler()({ target: { checked } })
            }
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={
              row.getIsSelected()
                ? true
                : row.getIsSomeSelected()
                  ? "indeterminate"
                  : false
            }
            disabled={!row.getCanSelect()}
            onCheckedChange={(checked) =>
              row.getToggleSelectedHandler()({ target: { checked } })
            }
          />
        ),
      }),
      columnHelper.accessor("token", {
        header: "Token",
        cell: (context) => (
          <AssetIconCell
            {...context}
            labelProps={IconLabelProps}
            imageProps={IconImageProps}
          />
        ),
      }),
      columnHelper.accessor("formattedAmount", {
        header: "Balance",
        cell: (context) => (
          <AssetBalanceCell
            badgeProps={BalanceBadgeProps}
            textProps={BalanceTextProps}
            {...context}
          />
        ),
      }),
      columnHelper.accessor("quotes", {
        header: "Value",
        cell: (context) => <AssetValueCell textStyle={"xs"} {...context} />,
      }),
    ],
    [],
  );

  return (
    <Table<AssetItem>
      tableProps={{ size: "sm" }}
      containerProps={{ w: "full" }}
      {...props}
      columns={columns}
    />
  );
}
