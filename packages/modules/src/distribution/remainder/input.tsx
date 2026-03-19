import { RecipientInput } from "../../components/recipient-input";
import type { ModuleRenderProps } from "../../types";

export type RemainderDistributionInputProps = ModuleRenderProps;

export function RemainderDistributionInput(
  props: RemainderDistributionInputProps
) {
  return <RecipientInput {...props} />;
}
