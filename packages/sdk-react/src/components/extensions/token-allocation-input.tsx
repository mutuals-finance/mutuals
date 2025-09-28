import React from "react";
import { ExtensionRenderInputProps } from "../../types";
import {
  ValueInput,
  ValueInputData,
  defaultValue as valueInputDefaultValue,
} from "../value-input";
import {
  TokenAddressData,
  TokenAddressInput,
  defaultValue as tokenAddressInputDefaultValue,
} from "../token-address-input";

export type TokenAllocationData = TokenAddressData & ValueInputData;

export const defaultValue = {
  ...tokenAddressInputDefaultValue,
  ...valueInputDefaultValue,
};

export type TokenAllocationInputProps = ExtensionRenderInputProps;

export function TokenAllocationInput(props: TokenAllocationInputProps) {
  return (
    <>
      <TokenAddressInput {...props} />
      <ValueInput {...props} />
    </>
  );
}
