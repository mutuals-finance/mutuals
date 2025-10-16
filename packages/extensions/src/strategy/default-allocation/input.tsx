import { ExtensionRenderInputProps } from "../../types";
import { ValueInput } from "../../components/value-input";

export type DefaultAllocationInputProps = ExtensionRenderInputProps;

export function DefaultAllocationInput(props: DefaultAllocationInputProps) {
  return <ValueInput {...props} />;
}
