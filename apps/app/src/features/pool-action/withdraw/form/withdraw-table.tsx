"use client";

import { Checkbox } from "@mutuals/ui";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import Table, { type TableProps } from "@/components/table";
import AssetBalanceCell from "@/features/asset/table/balance-cell";
import AssetIconCell from "@/features/asset/table/icon-cell";
import AssetValueCell from "@/features/asset/table/value-cell";
import type { AssetItem } from "@/features/asset/types";
import type { WithdrawFormContentProps } from "@/features/pool-action/withdraw/form/content";

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
        header: ({ table }) => {
          let checkedState: boolean | "indeterminate" = false;
          if (table.getIsAllRowsSelected()) {
            checkedState = true;
          } else if (table.getIsSomeRowsSelected()) {
            checkedState = "indeterminate";
          }

          return (
            <Checkbox
              checked={checkedState}
              onCheckedChange={(checked) =>
                table.getToggleAllRowsSelectedHandler()({ target: { checked } })
              }
            />
          );
        },
        cell: ({ row }) => {
          let checkedState: boolean | "indeterminate" = false;
          if (row.getIsSelected()) {
            checkedState = true;
          } else if (row.getIsSomeSelected()) {
            checkedState = "indeterminate";
          }

          return (
            <Checkbox
              checked={checkedState}
              disabled={!row.getCanSelect()}
              onCheckedChange={(checked) =>
                row.getToggleSelectedHandler()({ target: { checked } })
              }
            />
          );
        },
      }),
      columnHelper.accessor("token", {
        header: "Token",
        cell: (context) => (
          <AssetIconCell
            {...context}
            imageProps={IconImageProps}
            labelProps={IconLabelProps}
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
    []
  );

  return (
    <Table<AssetItem>
      containerProps={{ w: "full" }}
      tableProps={{ size: "sm" }}
      {...props}
      columns={columns}
    />
  );
}
