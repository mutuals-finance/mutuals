import type { Chain as ViemChain } from "viem";

export interface ChainExt {
  key: string;
  logo: typeof import("*.svg");
  shortName: string;
}

export type Chain = ViemChain & ChainExt;
