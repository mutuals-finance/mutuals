import {
  mainnet,
  polygon,
  polygonMumbai,
  goerli,
  arbitrumGoerli,
  optimismGoerli,
  hardhat,
  localhost,
} from 'wagmi/chains';
import { NODE_ENV } from '@/lib/constants';
import { Chain } from 'wagmi';

const defaultChains = [mainnet, polygon];
const devChains = [polygonMumbai, goerli, arbitrumGoerli, optimismGoerli];
const localDevChains = [...defaultChains, ...devChains, hardhat, localhost];

const chainByEnv = {
  production: defaultChains,
  development: localDevChains,
  test: defaultChains,
};

export const availableChains = (chainByEnv[NODE_ENV] ||
  defaultChains) as Chain[];

export const allChains = {
  mainnet,
  polygon,
  polygonMumbai,
  goerli,
  arbitrumGoerli,
  optimismGoerli,
  hardhat,
  localhost,
};
