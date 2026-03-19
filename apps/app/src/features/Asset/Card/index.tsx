import type { Balance } from "@ankr.com/ankr.js/dist/types";
import { HStack } from "@mutuals/ui";

import AssetCardBalance from "@/features/asset/card/assets";
import AssetCardLogo from "@/features/asset/card/image";
import AssetCardLabel from "@/features/asset/card/label";

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
      alignItems={"center"}
      fontSize={"sm"}
      gap={"3"}
      justifyContent={"space-between"}
      w={"100%"}
    >
      <AssetCardLogo alt={tokenName} flexShrink={"0"} src={thumbnail} />

      <AssetCardLabel
        flex={"1"}
        tokenName={tokenName}
        tokenSymbol={tokenSymbol}
      />

      <AssetCardBalance
        balance={balance}
        balanceUsd={balanceUsd}
        flexShrink={"0"}
        textAlign={"right"}
        tokenSymbol={tokenSymbol}
      />
    </HStack>
  );
}

AssetCard.Balance = AssetCardBalance;
AssetCard.Logo = AssetCardLogo;
AssetCard.Label = AssetCardLabel;

export type { AssetCardBalanceProps } from "@/features/asset/card/assets";
export type { AssetCardLogoProps } from "@/features/asset/card/image";
export type { AssetCardLabelProps } from "@/features/asset/card/label";
export default AssetCard;
