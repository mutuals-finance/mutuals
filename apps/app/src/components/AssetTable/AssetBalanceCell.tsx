import { Stack, Tag, TagLabel, Text, TextProps } from "@splitfi/ui";
import React from "react";

import { formatCurrencyAmount } from "src/utils";
import { AssetCellProps } from "@/components/AssetTable/types";

type AssetBalanceCellProps = AssetCellProps & TextProps;

export default function AssetBalanceCell({
  row,
  getValue,
  ...props
}: AssetBalanceCellProps) {
  const { tokenSymbol } = row.original;
  return (
    <Stack direction={"row"} align={"center"}>
      <Text as={"span"} {...props}>
        {formatCurrencyAmount(getValue())}
      </Text>{" "}
      <Tag size="sm" rounded={"md"} colorScheme={"primary"}>
        <TagLabel fontSize={"2xs"}>{tokenSymbol}</TagLabel>
      </Tag>
    </Stack>
  );
}
