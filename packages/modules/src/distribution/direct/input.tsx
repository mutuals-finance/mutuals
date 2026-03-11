import { ModuleRenderProps } from "../../types";
import { ValueInput } from "../../components/value-input";
import { RecipientInput } from "../../components/recipient-input";

export type DirectDistributionInputProps = ModuleRenderProps;

export function DirectDistributionInput(props: DirectDistributionInputProps) {
  return (
    <>
      <RecipientInput {...props} />
      <ValueInput {...props} />
    </>
  );
}
