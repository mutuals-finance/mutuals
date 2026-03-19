import {
  Badge,
  type BadgeProps,
  Stack,
  type StackProps,
  Text,
  type TextProps,
} from "@mutuals/ui";
import type { AssetTableCellProps } from "@/features/asset/types";
import { formatCurrencyAmount } from "@/utils";

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
  const { symbol } = row.original.token;
  const amount = getValue<number>();

  return (
    <Stack alignItems={"center"} direction={"row"} {...props}>
      <Text as={"span"} fontVariantNumeric={"tabular-nums"} {...textProps}>
        {formatCurrencyAmount(amount)}
      </Text>
      <Badge colorPalette={"primary"} {...badgeProps}>
        {symbol}
      </Badge>
    </Stack>
  );
}
