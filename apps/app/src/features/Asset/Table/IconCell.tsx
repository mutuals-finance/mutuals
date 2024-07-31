import { HStack, StackProps } from "@mutuals/ui";

import AssetCard, {
  AssetCardLabelProps,
  AssetCardLogoProps,
} from "@/features/Asset/Card";
import { AssetTableCellProps } from "@/features/Asset/types";

export type AssetTableIconCellProps = AssetTableCellProps &
  StackProps & {
    onlyImage?: boolean;
    onlyLabel?: boolean;
    imageProps?: AssetCardLogoProps;
    labelProps?: AssetCardLabelProps;
  };

export default function AssetTableIconCell({
  row,
  labelProps,
  imageProps,
  spacing = "3",
  onlyImage = false,
  onlyLabel = false,
  ...props
}: AssetTableIconCellProps) {
  const { thumbnail, tokenName, tokenSymbol } = row.original;
  return (
    <HStack
      alignItems={"center"}
      justifyContent={"flex-start"}
      spacing={spacing}
      {...props}
    >
      {!onlyLabel && (
        <AssetCard.Logo
          src={thumbnail}
          alt={tokenName}
          flexShrink={"0"}
          {...imageProps}
        />
      )}
      {!onlyImage && (
        <AssetCard.Label
          tokenName={tokenName}
          tokenSymbol={tokenSymbol}
          {...labelProps}
        />
      )}
    </HStack>
  );
}
