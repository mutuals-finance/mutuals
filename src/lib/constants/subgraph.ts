import { DEFAULT_SUBGRAPH } from '@/lib/constants/env';
import { chains } from '@/lib/wagmi/chains';

export const defaultSubgraph = DEFAULT_SUBGRAPH;

export const subgraphByChainId: Record<number, string> = chains.reduce(
  (aggregate, chain) => ({
    ...aggregate,
    [chain.id]: defaultSubgraph,
  }),
  {},
);
