import { HStack, StackProps } from "@splitfi/ui";
import React from "react";

import TokenImage, { TokenImageProps } from "@/components/Token/Image";
import TokenLabel, { TokenLabelProps } from "@/components/Token/Label";
import { AssetTableCellProps } from "@/features/Asset/types";

export type AssetTableIconCellProps = AssetTableCellProps &
  StackProps & {
    onlyImage?: boolean;
    onlyLabel?: boolean;
    imageProps?: TokenImageProps;
    labelProps?: TokenLabelProps;
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
        <TokenImage
          src={thumbnail}
          alt={tokenName}
          flexShrink={"0"}
          {...imageProps}
        />
      )}
      {!onlyImage && (
        <TokenLabel
          tokenName={tokenName}
          tokenSymbol={tokenSymbol}
          {...labelProps}
        />
      )}
    </HStack>
  );
}
