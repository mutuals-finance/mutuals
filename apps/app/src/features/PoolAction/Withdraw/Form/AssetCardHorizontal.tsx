import { Balance } from "@ankr.com/ankr.js/dist/types";
import { HStack } from "@splitfi/ui";
import React, { HTMLProps } from "react";

import TokenAssets from "@/components/Token/Assets";
import TokenImage from "@/components/Token/Image";
import TokenLabel from "@/components/Token/Label";

type AssetCardHorizontalProps = Balance &
  HTMLProps<HTMLDivElement> & { selected?: boolean; active?: boolean };

export default function AssetCardHorizontal({
  thumbnail,
  tokenName,
  balance,
  balanceUsd,
  tokenSymbol,
}: AssetCardHorizontalProps) {
  return (
    <HStack
      spacing={"3"}
      alignItems={"center"}
      justifyContent={"space-between"}
      w={"100%"}
      fontSize={"sm"}
    >
      <TokenImage src={thumbnail} alt={tokenName} flexShrink={"0"} />

      <TokenLabel flex={"1"} tokenName={tokenName} tokenSymbol={tokenSymbol} />

      <TokenAssets
        textAlign={"right"}
        flexShrink={"0"}
        balance={balance}
        tokenSymbol={tokenSymbol}
        balanceUsd={balanceUsd}
      />
    </HStack>
  );
}
