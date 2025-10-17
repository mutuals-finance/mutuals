import React, { ChangeEvent } from "react";
import { createJsonTransform, Input } from "@mutuals/ui";
import { ExtensionRenderProps } from "../../types";

export type TokenAddressData = {
  tokenAddress: string;
};

export const defaultValue: TokenAddressData = {
  tokenAddress: "",
};

export type TokenAddressInputProps = ExtensionRenderProps;

export function TokenAddressInput({ id }: TokenAddressInputProps) {
  return (
    <Input
      placeholder={"Token address"}
      id={`${id}.data.tokenAddress`}
      name={`${id}.data`}
      w={"48"}
      flex={"1 0 auto"}
      transform={createJsonTransform<
        ChangeEvent<HTMLInputElement>,
        TokenAddressData
      >(
        "tokenAddress",
        defaultValue,
        (data) => data.tokenAddress,
        (e) => e.target.value,
      )}
    />
  );
}
