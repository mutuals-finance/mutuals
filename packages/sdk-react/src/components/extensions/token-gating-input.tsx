import React from "react";
import {
  createJsonTransform,
  NumberInput,
  NumberInputValueChangeDetails,
} from "@mutuals/ui";
import { ExtensionRenderInputProps } from "../../types";
import {
  defaultValue as tokenAddressInputDefaultValue,
  TokenAddressData,
  TokenAddressInput,
} from "../token-address-input";

export type TokenGatingData = { value: number } & TokenAddressData;

export const defaultValue = {
  ...tokenAddressInputDefaultValue,
  value: 0,
};

export type TokenGatingInputProps = ExtensionRenderInputProps;

export function TokenGatingInput(props: TokenGatingInputProps) {
  const id = props.id as `addClaims.rootNode`;

  return (
    <>
      <TokenAddressInput {...props} />

      <NumberInput
        id={`${id}.data.value`}
        name={`${id}.data`}
        allowMouseWheel={true}
        step={1}
        min={0}
        defaultValue={"0"}
        flexBasis={"28"}
        flexShrink={"0"}
        transform={createJsonTransform<
          NumberInputValueChangeDetails,
          TokenGatingData
        >(
          "value",
          defaultValue,
          (data) => data.value?.toString(),
          (e) => (e.value ? e.valueAsNumber : undefined),
        )}
      />
    </>
  );
}
