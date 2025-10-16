import { ExtensionRenderInputProps } from "../../types";
import {
  createJsonTransform,
  NumberInput,
  NumberInputValueChangeDetails,
} from "@mutuals/ui";
import { defaultValue, PriorityGatingData } from "./index";

export type PriorityGatingInputProps = ExtensionRenderInputProps;

export function PriorityGatingInput(props: PriorityGatingInputProps) {
  const id = props.id as `addClaims.rootNode`;

  return (
    <>
      <NumberInput
        id={`${id}.data.value`}
        name={`${id}.data`}
        allowMouseWheel={true}
        step={1}
        min={0}
        defaultValue={"0"}
        flexBasis={"28"}
        flexShrink={"0"}
        transform={createJsonTransform<
          NumberInputValueChangeDetails,
          PriorityGatingData
        >(
          "priority",
          defaultValue,
          (data) => data.priority.toString(),
          (e) => (e.value ? e.valueAsNumber : undefined),
        )}
      />
    </>
  );
}
