import { TokenTransfer } from "@ankr.com/ankr.js/dist/types";
import { Text, useColorModeValue } from "@splitfi/ui";
import { CellContext } from "@tanstack/react-table";
import React from "react";

import { EventType } from "@/features/Activity/types";
import useActivityEvent from "@/features/Activity/useActivityEvent";
import { formatCurrencyAmount } from "@/utils";

type AmountCellProps = CellContext<TokenTransfer, string> & {
  address?: string;
};

export function AmountCell({ address = "", row, getValue }: AmountCellProps) {
  const { getEventType } = useActivityEvent({ address });

  const type = getEventType(row.original);
  const isDeposit = type === EventType.Deposit;
  const text = `${formatCurrencyAmount(getValue())} ${
    row.original.tokenSymbol
  }`;

  return (
    <>
      <Text
        color={useColorModeValue(
          isDeposit ? "green.700" : "red.700",
          isDeposit ? "green.400" : "red.400",
        )}
      >
        {isDeposit ? "+ " : "- "}
        {text}
      </Text>
    </>
  );
}
