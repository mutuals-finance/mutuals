import { Balance } from "@ankr.com/ankr.js/dist/types";
import { HStack, Text, TextProps } from "@splitfi/ui";
import { CellContext } from "@tanstack/react-table";
import React from "react";

import TokenImage from "@/components/Token/Image";
import TokenLabel from "@/components/Token/Label";
import { formatCurrencyAmount, formatUSDPrice } from "@/lib/utils";
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
