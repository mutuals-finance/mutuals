import {
  arbitrumGoerli,
  sepolia,
  mainnet,
  optimismGoerli,
  polygon,
  polygonMumbai,
  hardhat,
  localhost,
  arbitrum,
  optimism,
} from "wagmi/chains";
import { Chain, http } from "viem";

const prodChains = [mainnet, polygon, arbitrum, optimism];
const devChains = [
  ...prodChains,
  sepolia,
  polygonMumbai,
  arbitrumGoerli,
  optimismGoerli,
  hardhat,
  localhost,
];

const chains = ({
  production: prodChains,
  development: devChains,
  test: devChains,
}[process.env.NODE_ENV] ?? prodChains) as unknown as readonly [
  Chain,
  ...Chain[],
];

const transports = chains.reduce(
  (aggregate, chain) => ({
    ...aggregate,
    [chain.id]: http(), // `https://${chain.name}.infura.io/v3/${INFURA_KEY}`
  }),
  {},
);

export { chains, transports };
