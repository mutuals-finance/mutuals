import { DEFAULT_SUBGRAPH } from '@/lib/constants/env';
import { allChains } from '@/lib/wagmi/chains';

export const defaultSubgraph = DEFAULT_SUBGRAPH;

export const { mainnet, polygonMumbai } = allChains;

export const subgraphByChainId: Record<number, string> = {
  [mainnet.id]: defaultSubgraph,
  [polygonMumbai.id]: defaultSubgraph,
};
