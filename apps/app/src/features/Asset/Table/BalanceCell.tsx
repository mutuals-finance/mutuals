import { Stack, Tag, TagLabel, Text, TextProps } from "@mutuals/ui";

import { formatCurrencyAmount } from "@/utils";
import { AssetTableCellProps } from "@/features/Asset/types";

export type AssetTableBalanceCellProps = AssetTableCellProps & TextProps;

export default function AssetTableBalanceCell({
  row,
  getValue,
  ...props
}: AssetTableBalanceCellProps) {
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
