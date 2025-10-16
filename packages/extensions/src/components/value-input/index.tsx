"use client";

import { InputGroup, NumberInput } from "@mutuals/ui";
import { ExtensionRenderInputProps } from "../../types";
import { useWatch } from "react-hook-form";
import { PoolCreateInput } from "@mutuals/sdk-react";
import { defaultValue, transform, type ValueInputData } from "./transform";
import ValueInputSelect, { AllocationType } from "./Select";

export type ValueInputProps = ExtensionRenderInputProps;

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
      startElementProps={{ paddingInlineStart: "0" }}
      startElement={<ValueInputSelect {...props} />}
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
          ps: "12",
        }}
        transform={transform.value}
      />
    </InputGroup>
  );
}
