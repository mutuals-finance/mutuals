import { Text, TextProps } from "@splitfi/ui";
import React from "react";

import { formatUSDPrice } from "src/utils";
import { AssetCellProps } from "@/components/AssetTable/types";

type AssetValueCellProps = AssetCellProps & TextProps;

export default function AssetValueCell({
  getValue,
  ...props
}: AssetValueCellProps) {
  return (
    <Text as={"span"} {...props}>
      {formatUSDPrice(getValue() ?? "")}
    </Text>
  );
}
