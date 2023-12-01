import { configureChains, createConfig } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';

import { INFURA_KEY, WALLETCONNECT_PROJECT_ID } from '@/lib/constants';

import { availableChains } from './chains';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  availableChains,
  [infuraProvider({ apiKey: INFURA_KEY }), publicProvider()],
);

export function useWagmi() {
  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: 'SplitFi',
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          projectId: WALLETCONNECT_PROJECT_ID,
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true,
        },
      }),
    ],
  });

  return config as never;
}
