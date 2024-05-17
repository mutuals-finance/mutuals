import { cookieStorage, createConfig, createStorage } from "wagmi";

import { IS_DEV, WALLETCONNECT_PROJECT_ID } from "@/lib/constants";

import { chains, transports } from "./chains";
import {
  coinbaseWallet,
  metaMask,
  safe,
  walletConnect,
} from "@wagmi/connectors";

export const config = createConfig({
  chains,
  transports,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  connectors: [
    //injected(),
    metaMask({ dappMetadata: { name: "SplitFi" } }),
    coinbaseWallet({
      appName: "SplitFi",
    }),
    walletConnect({
      projectId: WALLETCONNECT_PROJECT_ID,
    }),
    safe({ debug: IS_DEV }),
  ],
});
