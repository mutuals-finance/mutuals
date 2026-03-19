import {
  createJsonTransform,
  InputGroup,
  NumberInput,
  type NumberInputValueChangeDetails,
} from "@mutuals/ui";
import { RecipientInput } from "../../components/recipient-input";
import { ValueInput } from "../../components/value-input";
import type { ModuleRenderProps } from "../../types";
import { defaultValue, type VestingDistributionData } from "./index";

export type VestingDistributionInputProps = ModuleRenderProps;

export function VestingDistributionInput(props: VestingDistributionInputProps) {
  const { id } = props;

  return (
    <>
      <RecipientInput {...props} />
      <InputGroup flexBasis={"32"} flexShrink={"0"} startElement={"day(s)"}>
        <NumberInput<string>
          allowMouseWheel={true}
          defaultValue={"0"}
          id={`${id}.data.period`}
          inputProps={{
            ps: "4.2em",
          }}
          min={0}
          name={`${id}.data`}
          step={1}
          transform={createJsonTransform<
            NumberInputValueChangeDetails,
            VestingDistributionData
          >(
            "period",
            defaultValue,
            (data) => data.period.toString(),
            (e) => (e.value ? e.valueAsNumber : undefined)
          )}
        />
      </InputGroup>

      <ValueInput {...props} />
    </>
  );
}
