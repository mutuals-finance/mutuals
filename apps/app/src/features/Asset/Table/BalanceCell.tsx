import {
  Stack,
  type StackProps,
  Badge,
  type BadgeProps,
  Text,
  type TextProps,
} from "@mutuals/ui";

import { formatCurrencyAmount } from "@/utils";
import { AssetTableCellProps } from "@/features/Asset/types";

export type AssetTableBalanceCellProps = AssetTableCellProps &
  StackProps & {
    textProps?: TextProps;
    badgeProps?: BadgeProps;
  };

export default function AssetTableBalanceCell({
  row,
  getValue,
  textProps,
  badgeProps,
  ...props
}: AssetTableBalanceCellProps) {
  const { symbol } = row.original;
  return (
    <Stack direction={"row"} alignItems={"center"} {...props}>
      <Text as={"span"} fontVariantNumeric={"tabular-nums"} {...textProps}>
        {formatCurrencyAmount(getValue())}
      </Text>
      <Badge colorPalette={"primary"} {...badgeProps}>
        {symbol}
      </Badge>
    </Stack>
  );
}
