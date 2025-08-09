import { Balance } from "@ankr.com/ankr.js/dist/types";
import { Stack, Text, TextProps } from "@mutuals/ui";
import React from "react";

export interface AssetCardLabelProps
  extends TextProps,
    Partial<Pick<Balance, "tokenName" | "tokenSymbol">> {}

export default function AssetCardLabel({
  tokenName = "Unknown",
  fontSize = "sm",
  lineClamp = 2,
  ...props
}: AssetCardLabelProps) {
  return (
    <Stack alignItems={"flex-start"} gap={"1"}>
      <Text fontSize={fontSize} lineClamp={lineClamp} {...props}>
        {tokenName}
      </Text>
    </Stack>
  );
}
