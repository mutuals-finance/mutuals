import { ModuleRenderProps } from "../../types";
import { ValueInput } from "../../components/value-input";
import { TokenAddressInput } from "../../components/token-address-input";
import { RecipientInput } from "../../components/recipient-input";

export type TokenLimitDistributionInputProps = ModuleRenderProps;

export function TokenLimitDistributionInput(
  props: TokenLimitDistributionInputProps,
) {
  return (
    <>
      <RecipientInput {...props} />
      <TokenAddressInput {...props} />
      <ValueInput {...props} />
    </>
  );
}
