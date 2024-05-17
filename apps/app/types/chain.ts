import { Chain as WagmiChain } from "wagmi";

export interface ChainExt {
  shortName: string;
  logo: typeof import("*.svg");
}

export type Chain = WagmiChain & ChainExt;
