import { Chain as ViemChain } from "viem";

export interface ChainExt {
  key: string;
  shortName: string;
  logo: typeof import("*.svg");
}

export type Chain = ViemChain & ChainExt;
