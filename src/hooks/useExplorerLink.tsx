import * as chainsObject from 'viem/chains'

import { shortenAddress } from '@/lib/utils';
import {Chain} from "wagmi";

type UseExplorerLinkProps = {
  address?: string | `0x${string}`;
  chainId?: number;
  chain?: Chain;
};

const chains = Object.values(chainsObject);

export default function useExplorerLink({
  address = '',
  chainId,
  chain,
}: UseExplorerLinkProps) {
  const _chain = !!chainId
    ? chains.find((c) => c?.id === chainId)
    : !!chain
      ? chain
        : chains[0];

  const baseUrl = _chain?.blockExplorers?.default.url || '';
  const href = `${baseUrl}/address/${address}`;
  const shortAddress = shortenAddress(address);

  return { baseUrl, href, address, shortAddress };
}
