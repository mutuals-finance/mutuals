import { createJsonTransform, Input } from "@mutuals/ui";
import type { ChangeEvent } from "react";
import type { ModuleRenderProps } from "../../types";

export interface TokenAddressInputData {
  tokenAddress: string;
}

export const defaultValue: TokenAddressInputData = {
  tokenAddress: "",
};

export type TokenAddressInputProps = ModuleRenderProps;

export function TokenAddressInput({ id }: TokenAddressInputProps) {
  return (
    <Input
      flex={"1 0 auto"}
      id={`${id}.data.tokenAddress`}
      name={`${id}.data`}
      placeholder={"Token address"}
      transform={createJsonTransform<
        ChangeEvent<HTMLInputElement>,
        TokenAddressInputData
      >(
        "tokenAddress",
        defaultValue,
        (data) => data.tokenAddress,
        (e) => e.target.value
      )}
      w={"48"}
    />
  );
}
