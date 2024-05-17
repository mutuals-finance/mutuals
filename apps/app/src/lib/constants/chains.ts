import * as ARBITRUM_LOGO from "@/assets/svg/arbitrum-logo.svg";
import * as ETH_LOGO from "@/assets/svg/ethereum-logo.svg";
import * as OPTIMISM_LOGO from "@/assets/svg/optimism-logo.svg";
import * as MATIC_LOGO from "@/assets/svg/polygonMatic-logo.svg";

import { Chain, ChainExt } from "#/chain";
import { chains } from "@/lib/wagmi/chains";

export { ARBITRUM_LOGO, ETH_LOGO, MATIC_LOGO };

export const CHAIN_LOGO_URI_MAP: Record<number, typeof import("*.svg")> = {
  1: ETH_LOGO, // mainnet
  137: MATIC_LOGO, // polygon
  80001: MATIC_LOGO, // polygon mumbai
  42161: ARBITRUM_LOGO, // Arbitrum One
  10: OPTIMISM_LOGO, // Optimism
  5: ETH_LOGO, // goerli
  421613: ARBITRUM_LOGO, // arbitrumGoerli
  420: OPTIMISM_LOGO, // optimismGoerli
  1337: ETH_LOGO, // hardhat + localhost
  31337: ETH_LOGO,
};

export const CHAIN_SHORT_NAME_MAP: Record<number, string> = {
  1: "eth", // mainnet
  137: "matic", // polygon
  80001: "maticmum", // polygon mumbai
  42161: "arb1", // Arbitrum One
  10: "o", // Optimism
  5: "gor", // goerli
  421613: "arb-goerli", // arbitrumGoerli
  420: "ogor", // optimismGoerli
  1337: "local", // localhost
  31337: "local", // hardhat
};

/*
const AVAILABLE_CHAINS_INNER = (
  IS_DEV ? _DEFAULT_CHAINS : _LOCAL_DEV_CHAINS
) as WagmiChain[];
*/

export const AVAILABLE_CHAINS: Array<Chain> = chains.map((chain) => ({
  ...chain,
  ...({
    shortName: CHAIN_SHORT_NAME_MAP[chain.id],
    logo: CHAIN_LOGO_URI_MAP[chain.id],
  } as ChainExt),
}));
