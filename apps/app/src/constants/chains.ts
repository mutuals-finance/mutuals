import {
  arbitrum,
  arbitrumGoerli,
  hardhat,
  localhost,
  mainnet,
  optimism,
  optimismGoerli,
  polygon,
  polygonAmoy,
  polygonMumbai,
  sepolia,
} from "wagmi/chains";
import type { Chain, ChainExt } from "#/chain";
import ARBITRUM_LOGO from "@/assets/svg/arbitrum-logo.svg";
import ETH_LOGO from "@/assets/svg/ethereum-logo.svg";
import OPTIMISM_LOGO from "@/assets/svg/optimism-logo.svg";
import MATIC_LOGO from "@/assets/svg/polygonMatic-logo.svg";

export * as ARBITRUM_LOGO from "@/assets/svg/arbitrum-logo.svg";
export * as ETH_LOGO from "@/assets/svg/ethereum-logo.svg";
export * as OPTIMISM_LOGO from "@/assets/svg/optimism-logo.svg";
export * as MATIC_LOGO from "@/assets/svg/polygonMatic-logo.svg";

const _chains = {
  arbitrumGoerli,
  sepolia,
  mainnet,
  optimismGoerli,
  polygon,
  polygonMumbai,
  polygonAmoy,
  hardhat,
  localhost,
  arbitrum,
  optimism,
};

export const CHAIN_LOGO_URI_MAP: Record<number, typeof import("*.svg")> = {
  [mainnet.id]: ETH_LOGO, // mainnet
  [polygon.id]: MATIC_LOGO, // polygon
  [polygonAmoy.id]: MATIC_LOGO, // polygon amoy
  [polygonMumbai.id]: MATIC_LOGO, // polygon mumbai
  [arbitrum.id]: ARBITRUM_LOGO, // Arbitrum One
  [optimism.id]: OPTIMISM_LOGO, // Optimism
  [sepolia.id]: ETH_LOGO, // sepolia
  [arbitrumGoerli.id]: ARBITRUM_LOGO, // arbitrumGoerli
  [optimismGoerli.id]: OPTIMISM_LOGO, // optimismGoerli
  [hardhat.id]: ETH_LOGO, // hardhat
  [localhost.id]: ETH_LOGO, // localhost
};

export const CHAIN_SHORT_NAME_MAP: Record<number, string> = {
  [mainnet.id]: "eth", // mainnet
  [polygon.id]: "matic", // polygon
  [polygonAmoy.id]: "amoy", // polygon mumbai
  [polygonMumbai.id]: "maticmum", // polygon mumbai
  [arbitrum.id]: "arb1", // Arbitrum One
  [optimism.id]: "o", // Optimism
  [sepolia.id]: "sep", // sepolia
  [arbitrumGoerli.id]: "arb-goerli", // arbitrumGoerli
  [optimismGoerli.id]: "ogor", // optimismGoerli
  [hardhat.id]: "local", // hardhat
  [localhost.id]: "local", // localhost
};

export const CHAINS: Chain[] = Object.entries(_chains).map(([key, chain]) => ({
  ...chain,
  ...({
    key,
    shortName: CHAIN_SHORT_NAME_MAP[chain.id],
    logo: CHAIN_LOGO_URI_MAP[chain.id],
  } as ChainExt),
}));

export const CHAINS_MAP: Record<string, ChainExt> = Object.fromEntries(
  CHAINS.map((chain) => [chain.key, chain])
);
