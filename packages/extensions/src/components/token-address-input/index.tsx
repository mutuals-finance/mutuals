import React, { ChangeEvent } from "react";
import { createJsonTransform, Input } from "@mutuals/ui";
import { ExtensionRenderInputProps } from "../../types";

export type TokenAddressData = {
  tokenAddress: string;
};

export const defaultValue: TokenAddressData = {
  tokenAddress: "",
};

export type TokenAddressInputProps = ExtensionRenderInputProps;

export function TokenAddressInput({ id: _id }: TokenAddressInputProps) {
  const id = _id as `addClaims.rootNode`;

  return (
    <>
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
          (e) => (e.target.value ? e.target.value : undefined),
        )}
      />
    </>
  );
}
