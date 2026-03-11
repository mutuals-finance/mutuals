"use client";

import { InputGroup, NumberInput } from "@mutuals/ui";
import { useWatch } from "react-hook-form";
import { PoolCreateInput } from "@mutuals/sdk-react";
import { defaultValue, transform, type ValueInputData } from "./transform";
import ValueInputSelect, { AllocationType } from "./Select";
import { ModuleRenderProps } from "../../types";

export type ValueInputProps = ModuleRenderProps;

export { defaultValue, type ValueInputData };

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
      startElementProps={{ paddingInline: "1" }}
      startElement={<ValueInputSelect {...props} />}
      gap={"0"}
    >
      <NumberInput
        id={`${id}.data.value`}
        name={`${id}.data`}
        defaultValue={"0"}
        allowMouseWheel={true}
        step={!fixed ? 0.1 : 1}
        max={!fixed ? 100 : 99999}
        min={0}
        inputProps={{
          ps: "10",
        }}
        transform={transform.value}
      />
    </InputGroup>
  );
}
