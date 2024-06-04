import { Text, TextProps } from "@splitfi/ui";
import { formatUSDPrice } from "@/utils";
import { AssetTableCellProps } from "@/features/Asset/types";

type AssetTableValueCellProps = AssetTableCellProps & TextProps;

export default function ValueCell({
  getValue,
  ...props
}: AssetTableValueCellProps) {
  const price = getValue() ?? "";

  return (
    <Text as={"span"} {...props}>
      {formatUSDPrice(price)}
    </Text>
  );
}
