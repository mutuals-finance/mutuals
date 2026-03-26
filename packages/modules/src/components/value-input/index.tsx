"use client";

import type { PoolCreateInput } from "@mutuals/sdk-react";
import { InputGroup, NumberInput } from "@mutuals/ui";
import { useWatch } from "react-hook-form";
import type { ModuleRenderProps } from "../../types";
import ValueInputSelect, { type AllocationType } from "./Select";
import { defaultValue, transform } from "./transform";

export {
  defaultArgs,
  defaultValue,
  transform,
  type ValueInputArgs,
  type ValueInputData,
} from "./transform";

export type ValueInputProps = ModuleRenderProps;

export function ValueInput(props: ValueInputProps) {
  const id = props.id as `addClaims.rootNode`;

  // @ts-expect-error: TypeScript is not able to infer the type correctly because its encoded JSON
  const allocationType = useWatch<AllocationType, PoolCreateInput>({
    name: `${id}.data`,
    compute: (data: string) => {
      const decoded = transform.allocationType.input(data);
      if (Array.isArray(decoded) && decoded.length > 0) {
        return decoded[0] as AllocationType;
      }

      return defaultValue.allocationType;
    },
  });

  const fixed = allocationType === "fixed";

  return (
    <InputGroup
      flexBasis={"28"}
      flexShrink={"0"}
      gap={"0"}
      startElement={<ValueInputSelect {...props} />}
      startElementProps={{ paddingInline: "1" }}
    >
      <NumberInput
        allowMouseWheel={true}
        defaultValue={"0"}
        id={`${id}.data.value`}
        inputProps={{
          ps: "10",
        }}
        max={fixed ? 99_999 : 100}
        min={0}
        name={`${id}.data`}
        step={fixed ? 1 : 0.1}
        transform={transform.value}
      />
    </InputGroup>
  );
}
