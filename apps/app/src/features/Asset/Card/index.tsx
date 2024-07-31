import { Balance } from "@ankr.com/ankr.js/dist/types";
import { HStack } from "@mutuals/ui";
import React from "react";

import AssetCardBalance from "@/features/Asset/Card/Assets";
import AssetCardLogo from "@/features/Asset/Card/Image";
import AssetCardLabel from "@/features/Asset/Card/Label";

export type AssetCardProps = Balance & { selected?: boolean; active?: boolean };

function AssetCard({
  thumbnail,
  tokenName,
  balance,
  balanceUsd,
  tokenSymbol,
}: AssetCardProps) {
  return (
    <HStack
      spacing={"3"}
      alignItems={"center"}
      justifyContent={"space-between"}
      w={"100%"}
      fontSize={"sm"}
    >
      <AssetCardLogo src={thumbnail} alt={tokenName} flexShrink={"0"} />

      <AssetCardLabel
        flex={"1"}
        tokenName={tokenName}
        tokenSymbol={tokenSymbol}
      />

      <AssetCardBalance
        textAlign={"right"}
        flexShrink={"0"}
        balance={balance}
        tokenSymbol={tokenSymbol}
        balanceUsd={balanceUsd}
      />
    </HStack>
  );
}

AssetCard.Balance = AssetCardBalance;
AssetCard.Logo = AssetCardLogo;
AssetCard.Label = AssetCardLabel;

export { type AssetCardLabelProps } from "@/features/Asset/Card/Label";
export { type AssetCardLogoProps } from "@/features/Asset/Card/Image";
export { type AssetCardBalanceProps } from "@/features/Asset/Card/Assets";
export default AssetCard;
