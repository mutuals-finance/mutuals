import { ExtensionRenderInputProps } from "../../types";
import { ValueInput } from "../../components/value-input";
import { TokenAddressInput } from "../../components/token-address-input";

export type TokenAllocationInputProps = ExtensionRenderInputProps;

export function TokenAllocationInput(props: TokenAllocationInputProps) {
  return (
    <>
      <TokenAddressInput {...props} />
      <ValueInput {...props} />
    </>
  );
}
