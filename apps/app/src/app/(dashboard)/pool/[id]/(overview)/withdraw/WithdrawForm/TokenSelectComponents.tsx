import {
  chakraComponents,
  GroupBase,
  MultiValueGenericProps,
  OptionProps,
  ValueContainerProps,
} from "chakra-react-select";
import { Balance } from "@ankr.com/ankr.js/dist/types";
import React from "react";
import AssetCardHorizontal from "@/app/(dashboard)/pool/[id]/(overview)/withdraw/WithdrawForm/AssetCardHorizontal";
import { Box } from "@splitfi/ui";

export function TokenSelectOption({
  ...props
}: OptionProps<Balance, true, GroupBase<Balance>>) {
  return (
    <chakraComponents.Option {...props}>
      <AssetCardHorizontal
        {...props.data}
        selected={props.isSelected}
        active={props.isSelected}
      />
    </chakraComponents.Option>
  );
}

export function TokenSelectLabel({
  ...props
}: MultiValueGenericProps<Balance, true, GroupBase<Balance>>) {
  return (
    <chakraComponents.MultiValueLabel {...props}>
      {props.data.tokenSymbol}
    </chakraComponents.MultiValueLabel>
  );
}

export function TokenSelectValueContainer({
  children,
  ...props
}: ValueContainerProps<Balance, true, GroupBase<Balance>>) {
  const assets = props.getValue();

  return (
    <chakraComponents.ValueContainer {...props}>
      <Box w={"100%"} flex={"1"}>
        {assets.length ?? 0}
      </Box>
    </chakraComponents.ValueContainer>
  );
}
