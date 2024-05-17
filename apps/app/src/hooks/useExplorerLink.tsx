import { shortenAddress } from "@/lib/utils";
import { Chain } from "wagmi";
import { AVAILABLE_CHAINS } from "@/lib/constants";

type UseExplorerLinkProps = {
  address?: string | `0x${string}`;
  chainId?: number;
  chain?: Chain;
};

export default function useExplorerLink({
  address = "",
  chainId,
  chain,
}: UseExplorerLinkProps) {
  const _chain = chainId
    ? AVAILABLE_CHAINS.find((c) => c?.id === chainId)
    : chain
      ? chain
      : AVAILABLE_CHAINS[0];

  const baseUrl = _chain?.blockExplorers?.default.url || "";
  const href = `${baseUrl}/address/${address}`;
  const shortAddress = shortenAddress(address);

  return { baseUrl, href, address, shortAddress };
}
