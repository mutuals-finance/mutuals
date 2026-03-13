import { Badge, Text, HStack, type TextProps } from "@mutuals/ui";
import { CellContext } from "@tanstack/react-table";
import React from "react";

import { formatCurrencyAmount } from "@/utils";
import { PoolActivityEvent } from "@/features/Activity/types";
import { formatUnits } from "viem";

type AmountCellProps = CellContext<PoolActivityEvent, string> & {
  address?: string;
};

export function AmountCell({ row }: AmountCellProps) {
  const event = row.original;
  const isDeposit = event.__typename === "Deposit";

  const floatValueStr = formatUnits(BigInt(event.amount), event.token.decimals);

  const baseProps: TextProps = {
    as: "span",
    color: "colorPalette.fg",
    whiteSpace: "nowrap",
  };

  return (
    <HStack
      colorPalette={isDeposit ? "green" : "red"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      gap={"1"}
    >
      <Text {...baseProps} fontVariantNumeric="tabular-nums">
        {isDeposit ? "+ " : "- "}
        {formatCurrencyAmount(floatValueStr)}{" "}
      </Text>
      <Badge size={"xs"}>{event.token.symbol}</Badge>
    </HStack>
  );
}
