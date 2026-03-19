import type { Balance } from "@ankr.com/ankr.js/dist/types";
import { Box, type BoxProps, Text } from "@mutuals/ui";

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
        <Text as={"span"} fontVariantNumeric={"slashed-zero"}>
          {formatCurrencyAmount(balance)}
        </Text>{" "}
        {tokenSymbol}
      </Box>

      <Text as={"span"} display={"block"} fontVariantNumeric={"slashed-zero"}>
        {formatUSDPrice(balanceUsd)}
      </Text>
    </Box>
  );
}
