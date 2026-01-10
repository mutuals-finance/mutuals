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
  gap = "2",
  onlyImage = false,
  onlyLabel = false,
  ...props
}: AssetTableIconCellProps) {
  const { logo, name, symbol } = row.original;
  return (
    <HStack
      alignItems={"center"}
      justifyContent={"flex-start"}
      gap={gap}
      {...props}
    >
      {!onlyLabel && (
        <AssetCard.Logo
          src={logo ?? ""}
          alt={name}
          flexShrink={"0"}
          {...imageProps}
        />
      )}
      {!onlyImage && (
        <AssetCard.Label
          tokenName={name}
          tokenSymbol={symbol}
          {...labelProps}
        />
      )}
    </HStack>
  );
}
