import { Balance } from "@ankr.com/ankr.js/dist/types";
import { HStack, StackProps } from "@splitfi/ui";
import React from "react";

import TokenImage, { TokenImageProps } from "@/components/Token/Image";
import TokenLabel, { TokenLabelProps } from "@/components/Token/Label";
import { AssetCellProps } from "@/components/AssetTable/types";

type AssetIconCellProps = AssetCellProps &
  StackProps & {
    onlyImage?: boolean;
    onlyLabel?: boolean;
    imageProps?: TokenImageProps;
    labelProps?: TokenLabelProps;
  };

export default function AssetIconCell({
  row,
  labelProps,
  imageProps,
  spacing = "3",
  onlyImage = false,
  onlyLabel = false,
  ...props
}: AssetIconCellProps) {
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
