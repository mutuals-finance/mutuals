import { ExtensionRenderProps } from "../../types";
import { ValueInput } from "../../components/value-input";
import {
  createJsonTransform,
  InputGroup,
  NumberInput,
  NumberInputValueChangeDetails,
} from "@mutuals/ui";
import { type TimelockAllocationData, defaultValue } from "./index";

export type TimelockAllocationInputProps = ExtensionRenderProps;

export function TimelockAllocationInput(props: TimelockAllocationInputProps) {
  const { id } = props;

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
