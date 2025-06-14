import { type CreateConnectorFn } from "wagmi";
import {
  coinbaseWallet,
  injected,
  metaMask,
  safe,
  walletConnect,
} from "wagmi/connectors";

import { Chain, http } from "viem";

import { CHAINS_MAP, IS_DEV, WALLETCONNECT_PROJECT_ID } from "@/constants";

const prodChains = [
  CHAINS_MAP.mainnet,
  CHAINS_MAP.polygon,
  CHAINS_MAP.arbitrum,
  CHAINS_MAP.optimism,
];

const devChains = [
  ...prodChains,
  CHAINS_MAP.sepolia,
  CHAINS_MAP.polygonAmoy,
  CHAINS_MAP.polygonMumbai,
  CHAINS_MAP.arbitrumGoerli,
  CHAINS_MAP.optimismGoerli,
  CHAINS_MAP.hardhat,
  CHAINS_MAP.localhost,
];

const appName = "Mutuals";

const connectors = [
  injected(),
  metaMask({ dappMetadata: { name: appName } }),
  coinbaseWallet({
    appName: appName,
  }),
  walletConnect({
    projectId: WALLETCONNECT_PROJECT_ID,
  }),
  safe({ debug: IS_DEV }),
] as CreateConnectorFn[];

const chains = ({
  production: prodChains,
  development: devChains,
  test: devChains,
}[process.env.NODE_ENV] ?? prodChains) as unknown as readonly [
  Chain,
  ...Chain[],
];

const transports = chains.reduce(
  (all, chain) => ({
    ...all,
    [chain.id]: http(), // `https://${chain.name}.infura.io/v3/${INFURA_KEY}`
  }),
  {},
);

export { connectors, chains, transports };
