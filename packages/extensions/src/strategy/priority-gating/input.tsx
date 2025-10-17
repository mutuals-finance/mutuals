import { ExtensionRenderProps } from "../../types";
import {
  createJsonTransform,
  NumberInput,
  NumberInputValueChangeDetails,
} from "@mutuals/ui";
import { defaultValue, PriorityGatingData } from "./index";

export type PriorityGatingInputProps = ExtensionRenderProps;

export function PriorityGatingInput({ id }: PriorityGatingInputProps) {
  return (
    <>
      <NumberInput
        id={`${id}.data.priority`}
        name={`${id}.data`}
        defaultValue={"0"}
        allowMouseWheel={true}
        step={1}
        min={0}
        flexBasis={"28"}
        flexShrink={"0"}
        transform={createJsonTransform<
          NumberInputValueChangeDetails,
          PriorityGatingData
        >(
          "priority",
          defaultValue,
          (data) => data.priority.toString(),
          ({ valueAsNumber }) => valueAsNumber,
        )}
      />
    </>
  );
}
