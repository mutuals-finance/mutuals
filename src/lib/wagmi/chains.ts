import {
  arbitrumGoerli,
  sepolia,
  mainnet,
  optimismGoerli,
  polygon,
  polygonMumbai,
  hardhat,
  localhost,
} from 'wagmi/chains';
import { Chain, http } from 'viem';
import { INFURA_KEY } from '@/lib/constants';

const defaultChains = [mainnet, polygon];
const devChains = [polygonMumbai, sepolia, arbitrumGoerli, optimismGoerli];
const localDevChains = [...defaultChains, ...devChains, hardhat, localhost];

const chainByEnv = {
  production: defaultChains,
  development: localDevChains,
  test: localDevChains,
};

export const chains = (chainByEnv['development'] ||
  defaultChains) as readonly Chain[];

export const transports = chains.reduce(
  (aggregate, chain) => ({
    ...aggregate,
    [chain.id]: http(), // `https://${chain.name}.infura.io/v3/${INFURA_KEY}`
  }),
  {},
);

export const allChains = {
  mainnet,
  polygonMumbai,
  sepolia,
  arbitrumGoerli,
  optimismGoerli,
  hardhat,
  localhost,
};
