import { DEFAULT_SUBGRAPH } from "@/lib/constants/env";
import { allChains } from "@/lib/wagmi/chains";

export const defaultSubgraph = DEFAULT_SUBGRAPH;

export const {
  mainnet,
  polygon,
  polygonMumbai,
  goerli,
  arbitrumGoerli,
  optimismGoerli,
  hardhat,
  localhost,
} = allChains;

export const subgraphByChainId: Record<number, string> = {
  [mainnet.id]: defaultSubgraph,
  [polygon.id]: defaultSubgraph,
  [polygonMumbai.id]: defaultSubgraph,
  [goerli.id]: defaultSubgraph,
  [arbitrumGoerli.id]: defaultSubgraph,
  [optimismGoerli.id]: defaultSubgraph,
  [hardhat.id]: defaultSubgraph,
  [localhost.id]: defaultSubgraph,
};
