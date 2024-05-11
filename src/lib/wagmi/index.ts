import { cookieStorage, createConfig, createStorage } from 'wagmi';

import { IS_DEV, WALLETCONNECT_PROJECT_ID } from '@/lib/constants';

import { chains, transports } from './chains';
import {
  coinbaseWallet,
  injected,
  metaMask,
  safe,
  walletConnect,
} from '@wagmi/connectors';
import {
  arbitrumGoerli,
  hardhat,
  localhost,
  mainnet,
  optimismGoerli,
  polygonMumbai,
  sepolia,
} from 'wagmi/chains';
import { http } from 'viem';

export const config = createConfig({
  chains: [
    mainnet,
    polygonMumbai,
    sepolia,
    arbitrumGoerli,
    optimismGoerli,
    hardhat,
    localhost,
  ],
  transports: {
    [mainnet.id]: http(),
    [polygonMumbai.id]: http(),
    [sepolia.id]: http(),
    [arbitrumGoerli.id]: http(),
    [optimismGoerli.id]: http(),
    [hardhat.id]: http(),
    [localhost.id]: http(),
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  connectors: [
    injected(),
    metaMask({ dappMetadata: { name: 'SplitFi' } }),
    coinbaseWallet({
      appName: 'SplitFi',
    }),
    walletConnect({
      projectId: WALLETCONNECT_PROJECT_ID,
    }),
    safe({ debug: IS_DEV }),
  ],
});
