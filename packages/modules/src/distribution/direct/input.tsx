import { RecipientInput } from "../../components/recipient-input";
import { ValueInput } from "../../components/value-input";
import type { ModuleRenderProps } from "../../types";

export type DirectDistributionInputProps = ModuleRenderProps;

export function DirectDistributionInput(props: DirectDistributionInputProps) {
  return (
    <>
      <RecipientInput {...props} />
      <ValueInput {...props} />
    </>
  );
}
