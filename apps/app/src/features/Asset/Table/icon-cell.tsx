import { HStack, type StackProps } from "@mutuals/ui";
import AssetCard, {
  type AssetCardLabelProps,
  type AssetCardLogoProps,
} from "@/features/asset/card";
import type { AssetTableCellProps } from "@/features/asset/types";

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
  const { logo, name, symbol } = row.original.token;

  return (
    <HStack
      alignItems={"center"}
      gap={gap}
      justifyContent={"flex-start"}
      {...props}
    >
      {!onlyLabel && (
        <AssetCard.Logo
          alt={name}
          flexShrink={"0"}
          src={logo ?? ""}
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
