import { type CreateConnectorFn } from "wagmi";
import { coinbaseWallet, metaMask, walletConnect } from "wagmi/connectors";
import { dedicatedWalletConnector } from "@magiclabs/wagmi-connector";
import { Chain, http } from "viem";
import {
  MAGIC_PUBLISHABLE_API_KEY,
  CHAINS_MAP,
  WALLETCONNECT_PROJECT_ID,
} from "@/constants";
import { isSSR } from "@/utils";

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

const chains = ({
  production: prodChains,
  development: devChains,
  test: devChains,
}[process.env.NODE_ENV] ?? prodChains) as unknown as readonly [
  Chain,
  ...Chain[],
];

const connectors = [
  metaMask({ dappMetadata: { name: appName } }),
  // NOTE: @magiclabs/wagmi-connector is not compatible with SSR
  // https://github.com/magiclabs/wagmi-magic-connector/issues/42#issuecomment-2771613002
  ...(isSSR()
    ? []
    : [
        dedicatedWalletConnector({
          chains,
          options: {
            apiKey: MAGIC_PUBLISHABLE_API_KEY,
            oauthOptions: {
              providers: ["google"],
            },
            magicSdkConfiguration: {},
          },
        }),
        coinbaseWallet({
          appName: appName,
        }),
        walletConnect({
          projectId: WALLETCONNECT_PROJECT_ID,
        }),
      ]),
] as CreateConnectorFn[];

const transports = chains.reduce(
  (all, chain) => ({
    ...all,
    [chain.id]: http(), // `https://${chain.name}.infura.io/v3/${INFURA_KEY}`
  }),
  {},
);

export { connectors, chains, transports };
