import { Badge, HStack, Text, type TextProps } from "@mutuals/ui";
import type { CellContext } from "@tanstack/react-table";
import { formatUnits } from "viem";
import type { PoolActivityEvent } from "@/features/activity/types";
import { formatCurrencyAmount } from "@/utils";

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
      alignItems={"center"}
      colorPalette={isDeposit ? "green" : "red"}
      gap={"1"}
      justifyContent={"flex-start"}
    >
      <Text {...baseProps} fontVariantNumeric="tabular-nums">
        {isDeposit ? "+ " : "- "}
        {formatCurrencyAmount(floatValueStr)}{" "}
      </Text>
      <Badge size={"xs"}>{event.token.symbol}</Badge>
    </HStack>
  );
}
