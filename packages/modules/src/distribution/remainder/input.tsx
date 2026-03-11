import { ModuleRenderProps } from "../../types";
import { RecipientInput } from "../../components/recipient-input";

export type RemainderDistributionInputProps = ModuleRenderProps;

export function RemainderDistributionInput(
  props: RemainderDistributionInputProps,
) {
  return <RecipientInput {...props} />;
}
