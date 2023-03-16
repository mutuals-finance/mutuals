import { createClient, configureChains, type Client } from 'wagmi';

import { publicProvider } from 'wagmi/providers/public';
import { infuraProvider } from 'wagmi/providers/infura';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { BaseProvider, WebSocketProvider } from '@ethersproject/providers';
import { availableChains } from './chains';
import { INFURA_KEY } from '@/lib/constants';

const { chains, provider, webSocketProvider } = configureChains(
  availableChains,
  [
    infuraProvider({ apiKey: INFURA_KEY, priority: 0 }),
    publicProvider({ priority: 1 }),
  ]
);

export function useWagmi() {
  return createClient({
    autoConnect: true,
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
          qrcode: true,
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
    provider,
    webSocketProvider,
  }) as Client<BaseProvider, WebSocketProvider>;
}
