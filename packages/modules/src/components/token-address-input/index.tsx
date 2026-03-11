import React, { ChangeEvent } from "react";
import { createJsonTransform, Input } from "@mutuals/ui";
import { ModuleRenderProps } from "../../types";

export type TokenAddressInputData = {
  tokenAddress: string;
};

export const defaultValue: TokenAddressInputData = {
  tokenAddress: "",
};

export type TokenAddressInputProps = ModuleRenderProps;

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
        TokenAddressInputData
      >(
        "tokenAddress",
        defaultValue,
        (data) => data.tokenAddress,
        (e) => e.target.value,
      )}
    />
  );
}
