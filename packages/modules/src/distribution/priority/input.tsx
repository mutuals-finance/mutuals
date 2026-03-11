import { ModuleRenderProps } from "../../types";
import {
  createJsonTransform,
  InputGroup,
  NumberInput,
  NumberInputValueChangeDetails,
} from "@mutuals/ui";
import { defaultValue, PriorityDistributionData } from "./index";
import { RecipientInput } from "../../components/recipient-input";
import { LuArrowUp01 } from "react-icons/lu";

export type PriorityDistributionInputProps = ModuleRenderProps;

export function PriorityDistributionInput(
  props: PriorityDistributionInputProps,
) {
  const { id } = props;

  const transform = createJsonTransform<
    NumberInputValueChangeDetails,
    PriorityDistributionData
  >(
    "priority",
    defaultValue,
    (data) => data.priority?.toString(),
    ({ valueAsNumber }) => valueAsNumber,
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
          id={`${id}.data.priority`}
          name={`${id}.data`}
          allowMouseWheel={true}
          step={1}
          inputProps={{ placeholder: "Order", ps: "10" }}
          transform={transform}
        />
      </InputGroup>
    </>
  );
}
