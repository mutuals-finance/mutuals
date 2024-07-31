import { Balance } from "@ankr.com/ankr.js/dist/types";
import { Box, BoxProps, Text } from "@mutuals/ui";
import React from "react";

import { formatCurrencyAmount, formatUSDPrice } from "@/utils";

export interface AssetCardBalanceProps
  extends BoxProps,
    Partial<Pick<Balance, "balance" | "tokenSymbol" | "balanceUsd">> {}

export default function AssetCardBalance({
  balance = "-1",
  tokenSymbol = "NONE",
  balanceUsd = "-1",
  ...props
}: AssetCardBalanceProps) {
  return (
    <Box fontSize={"sm"} {...props}>
      <Box>
        <Text variant={"slashed-zero"} as={"span"}>
          {formatCurrencyAmount(balance)}
        </Text>{" "}
        {tokenSymbol}
      </Box>

      <Text variant={"slashed-zero"} as={"span"} display={"block"}>
        {formatUSDPrice(balanceUsd)}
      </Text>
    </Box>
  );
}
