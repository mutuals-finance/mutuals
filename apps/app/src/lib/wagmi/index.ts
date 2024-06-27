import { cookieStorage, createConfig, createStorage } from "wagmi";

import { chains, transports, connectors } from "./config";

export const config = createConfig({
  chains,
  transports,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  connectors,
});
