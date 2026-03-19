import {
  createJsonTransform,
  Input,
  type JsonObject,
  Presence,
} from "@mutuals/ui";
import type { ChangeEvent } from "react";
import type { ModuleRenderProps } from "../../types";

export interface RecipientInputData extends JsonObject {
  recipient: string;
}

export const defaultValue: RecipientInputData = {
  recipient: "",
};

export type RecipientInputProps = ModuleRenderProps;

export function RecipientInput({ id, isBranch }: RecipientInputProps) {
  return (
    <Presence present={!isBranch}>
      <Input
        flex={"1 0 auto"}
        id={`${id}.data.recipient`}
        name={`${id}.data`}
        placeholder={"Recipient"}
        transform={createJsonTransform<
          ChangeEvent<HTMLInputElement>,
          RecipientInputData
        >(
          "recipient",
          defaultValue,
          (data) => data.recipient,
          (e) => e.target.value
        )}
        w={"64"}
      />
    </Presence>
  );
}
