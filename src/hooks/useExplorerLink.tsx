import { Chain, useNetwork } from 'wagmi';

import { shortenAddress } from '@/lib/utils';

type UseExplorerLinkProps = {
  address?: string | `0x${string}`;
  chainId?: number;
  chain?: Chain;
};

export default function useExplorerLink({
  address = '',
  chainId,
  chain,
}: UseExplorerLinkProps) {
  const net = useNetwork();
  const _chain = !!chainId
    ? net.chains.find((c) => c?.id === chainId)
    : !!chain
    ? chain
    : !!net.chain
    ? net.chain
    : net.chains[0];

  const baseUrl = _chain?.blockExplorers?.default.url || '';
  const href = `${baseUrl}/address/${address}`;
  const shortAddress = shortenAddress(address);

  return { baseUrl, href, address, shortAddress };
}
