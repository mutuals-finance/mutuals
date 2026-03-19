import {
  createJsonTransform,
  InputGroup,
  NumberInput,
  type NumberInputValueChangeDetails,
} from "@mutuals/ui";
import { LuArrowUp01 } from "react-icons/lu";
import { RecipientInput } from "../../components/recipient-input";
import type { ModuleRenderProps } from "../../types";
import { defaultValue, type PriorityDistributionData } from "./index";

export type PriorityDistributionInputProps = ModuleRenderProps;

export function PriorityDistributionInput(
  props: PriorityDistributionInputProps
) {
  const { id } = props;

  const transform = createJsonTransform<
    NumberInputValueChangeDetails,
    PriorityDistributionData
  >(
    "priority",
    defaultValue,
    (data) => data.priority?.toString(),
    ({ valueAsNumber }) => valueAsNumber
  );

  return (
    <>
      <RecipientInput {...props} />
      <InputGroup
        flexBasis={"28"}
        flexShrink={"0"}
        startElement={<LuArrowUp01 />}
      >
        <NumberInput
          allowMouseWheel={true}
          id={`${id}.data.priority`}
          inputProps={{ placeholder: "Order", ps: "10" }}
          name={`${id}.data`}
          step={1}
          transform={transform}
        />
      </InputGroup>
    </>
  );
}
