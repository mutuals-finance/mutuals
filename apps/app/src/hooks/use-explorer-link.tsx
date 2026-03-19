import { CHAINS } from "src/constants";
import { shortenAddress } from "src/utils";
import type { Chain } from "viem";

interface UseExplorerLinkProps {
  address?: string | `0x${string}`;
  chain?: Chain;
  chainId?: number;
}

export default function useExplorerLink({
  address = "",
  chainId,
  chain,
}: UseExplorerLinkProps) {
  let _chain: Chain | undefined;
  if (chainId) {
    _chain = CHAINS.find((c) => c?.id === chainId);
  } else if (chain) {
    _chain = chain;
  } else {
    _chain = CHAINS[0];
  }

  const baseUrl = _chain?.blockExplorers?.default.url || "";
  const href = `${baseUrl}/address/${address}`;
  const shortAddress = shortenAddress(address);

  return { baseUrl, href, address, shortAddress };
}
