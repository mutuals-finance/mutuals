import { ExtensionRenderProps } from "../../types";
import { ValueInput } from "../../components/value-input";

export type DefaultAllocationInputProps = ExtensionRenderProps;

export function DefaultAllocationInput(props: DefaultAllocationInputProps) {
  return <ValueInput {...props} />;
}
