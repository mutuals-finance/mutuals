import { Text, TextProps } from "@mutuals/ui";
import { formatUSDPrice } from "@/utils";
import { AssetTableCellProps } from "@/features/Asset/types";
import { Quote } from "@mutuals/graphql-client-nextjs";

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
