import type { Quote } from "@mutuals/graphql-client-nextjs";
import { Text, type TextProps } from "@mutuals/ui";
import type { AssetTableCellProps } from "@/features/asset/types";
import { formatUSDPrice } from "@/utils";

type AssetTableValueCellProps = AssetTableCellProps & TextProps;

export default function ValueCell({
  getValue,
  ...props
}: AssetTableValueCellProps) {
  const quotes = getValue<Quote[]>();
  const price = quotes?.[0]?.value ?? 0;

  return (
    <Text as={"span"} fontVariantNumeric={"tabular-nums"} {...props}>
      {formatUSDPrice(price)}
    </Text>
  );
}
