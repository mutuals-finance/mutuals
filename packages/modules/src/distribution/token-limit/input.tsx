import { RecipientInput } from "../../components/recipient-input";
import { TokenAddressInput } from "../../components/token-address-input";
import { ValueInput } from "../../components/value-input";
import type { ModuleRenderProps } from "../../types";

export type TokenLimitDistributionInputProps = ModuleRenderProps;

export function TokenLimitDistributionInput(
  props: TokenLimitDistributionInputProps
) {
  return (
    <>
      <RecipientInput {...props} />
      <TokenAddressInput {...props} />
      <ValueInput {...props} />
    </>
  );
}
