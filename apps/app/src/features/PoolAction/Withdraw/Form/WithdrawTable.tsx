"use client";
import React from "react";
import { Balance } from "@ankr.com/ankr.js/dist/types";
import { WithdrawFormInnerProps } from "@/app/(dashboard)/pool/[id]/(overview)/withdraw/WithdrawForm/WithdrawFormInner";
import AssetIconCell from "@/features/Asset/Table/IconCell";
import AssetBalanceCell from "@/features/Asset/Table/BalanceCell";
import AssetValueCell from "@/features/Asset/Table/ValueCell";
import Table, { TableProps } from "@/components/Table";
import { createColumnHelper } from "@tanstack/react-table";

type WithdrawTableProps = WithdrawFormInnerProps &
  Omit<TableProps<Balance>, "data" | "columns">;

const columnHelper = createColumnHelper<Balance>();

export default function WithdrawTable({
  balance,
  ...props
}: WithdrawTableProps) {
  const columns = [
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
  ];

  return (
    <Table<Balance>
      data={balance?.assets ?? []}
      columns={columns}
      size={"sm"}
      containerProps={{ w: "full" }}
      {...props}
    />
  );
}
