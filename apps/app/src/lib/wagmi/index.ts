import { cookieStorage, createStorage } from "wagmi";
import { createConfig } from "@privy-io/wagmi";

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

export { connectors, chains, transports };
