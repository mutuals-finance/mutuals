import { ExtensionRenderProps } from "../../types";
import { ValueInput } from "../../components/value-input";
import { TokenAddressInput } from "../../components/token-address-input";

export type TokenAllocationInputProps = ExtensionRenderProps;

export function TokenAllocationInput(props: TokenAllocationInputProps) {
  return (
    <>
      <TokenAddressInput {...props} />
      <ValueInput {...props} />
    </>
  );
}
