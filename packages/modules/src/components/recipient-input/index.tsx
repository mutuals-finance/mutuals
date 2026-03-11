import React, { ChangeEvent } from "react";
import { createJsonTransform, Input, Presence } from "@mutuals/ui";
import { ModuleRenderProps } from "../../types";

export type RecipientInputData = {
  recipient: string;
};

export const defaultValue: RecipientInputData = {
  recipient: "",
};

export type RecipientInputProps = ModuleRenderProps;

export function RecipientInput({ id, isBranch }: RecipientInputProps) {
  return (
    <Presence present={!isBranch}>
      <Input
        placeholder={"Recipient"}
        id={`${id}.data.recipient`}
        name={`${id}.data`}
        w={"64"}
        flex={"1 0 auto"}
        transform={createJsonTransform<
          ChangeEvent<HTMLInputElement>,
          RecipientInputData
        >(
          "recipient",
          defaultValue,
          (data) => data.recipient,
          (e) => e.target.value,
        )}
      />
    </Presence>
  );
}
