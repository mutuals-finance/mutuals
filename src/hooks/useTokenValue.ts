import { useMemo } from "react";
import { useTokenList } from "@/hooks/useTokenList";
import { formatAmount, getDefaultTokenLogoURI } from "@/lib/utils/token";
import { Token, TokenValue } from "@/lib/graphql/__generated__/graphql";
import { isNativeTokenAddress } from "@/lib/utils";
import { useNetwork } from "wagmi";

function useTokenLogoURI(token: Token) {
  const tokenList = useTokenList();
  const { chain } = useNetwork();

  return useMemo(() => {
    if (isNativeTokenAddress(token.id)) {
      return getDefaultTokenLogoURI(chain?.id);
    } else {
      const logoURI = tokenList?.find(
        ({ address }) => address === token.id
      )?.logoURI;
      return logoURI && logoURI !== "" ? logoURI : "";
    }
  }, [chain, tokenList, token]);
}

/**
 * Returns a WrappedTokenInfo from the active token lists when possible,
 * or the passed token otherwise. */
export function useTokenValue({ amount, token }: TokenValue) {
  const logoURI = useTokenLogoURI(token);
  return useMemo(() => {
    const amountFormatted = formatAmount(amount, token.decimals);
    return {
      token,
      amount,
      amountFormatted,
      logoURI,
      isNative: isNativeTokenAddress(token.id),
    };
  }, [amount, token]);
}
