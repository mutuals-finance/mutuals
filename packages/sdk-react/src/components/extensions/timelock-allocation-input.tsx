import React from "react";
import {
  createJsonTransform,
  InputGroup,
  NumberInput,
  NumberInputValueChangeDetails,
} from "@mutuals/ui";
import { ExtensionRenderInputProps } from "../../types";
import {
  ValueInput,
  ValueInputData,
  defaultValue as valueInputDefaultValue,
} from "../value-input";

export type TimelockAllocationInputProps = ExtensionRenderInputProps;

export type TimelockAllocationData = ValueInputData & {
  period: number;
};

const defaultValue: TimelockAllocationData = {
  ...valueInputDefaultValue,
  period: 0,
};

export function TimelockAllocationInput(props: TimelockAllocationInputProps) {
  const id = props.id as `addClaims.rootNode`;

  return (
    <>
      <InputGroup flexBasis={"32"} flexShrink={"0"} startElement={"day(s)"}>
        <NumberInput<string>
          inputProps={{
            ps: "4.2em",
          }}
          id={`${id}.data.period`}
          name={`${id}.data`}
          allowMouseWheel={true}
          step={1}
          min={0}
          defaultValue={"0"}
          transform={createJsonTransform<
            NumberInputValueChangeDetails,
            TimelockAllocationData
          >(
            "period",
            defaultValue,
            (data) => data.period.toString(),
            (e) => (e.value ? e.valueAsNumber : undefined),
          )}
        />
      </InputGroup>

      <ValueInput {...props} />
    </>
  );
}
