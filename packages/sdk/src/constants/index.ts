import type { Address } from "viem";

export * from "./allocation";

export const PERCENTAGE_SCALE = BigInt(1e6);

const POOL_FACTORY_ADDRESS = "0xbC4BFa087473C516A04D720Ac6301BF8981177FA";
const POOL_FACTORY_ADDRESS_POLYGON_AMOY =
  "0xbC4BFa087473C516A04D720Ac6301BF8981177FA";
const POOL_FACTORY_ADDRESS_BSC = "0x2ed6c4B5dA6378c7897AC67Ba9e43102Feb694EE";
const POOL_FACTORY_ADDRESS_HOLESKY =
  "0x2ed6c4B5dA6378c7897AC67Ba9e43102Feb694EE";
const POOL_FACTORY_ADDRESS_SEPOLIA =
  "0x2ed6c4B5dA6378c7897AC67Ba9e43102Feb694EE";

export const getPoolFactoryAddress = (chainId: number): Address => {
  if (chainId === ChainId.BSC) {
    return POOL_FACTORY_ADDRESS_BSC;
  }
  if (chainId === ChainId.HOLESKY) {
    return POOL_FACTORY_ADDRESS_HOLESKY;
  }
  if (chainId === ChainId.SEPOLIA) {
    return POOL_FACTORY_ADDRESS_SEPOLIA;
  }
  if (chainId === ChainId.POLYGON_AMOY) {
    return POOL_FACTORY_ADDRESS_POLYGON_AMOY;
  }
  return POOL_FACTORY_ADDRESS;
};

export const getPoolFactoryStartBlock = (chainId: number): bigint => {
  if (!CHAIN_INFO[chainId]?.startBlock) {
    throw new Error("Chain not supported");
  }
  return BigInt(CHAIN_INFO[chainId].startBlock as number);
};

export const ChainId = {
  MAINNET: 1,
  SEPOLIA: 11_155_111,
  HOLESKY: 17_000,
  POLYGON: 137,
  POLYGON_AMOY: 80_002,
  OPTIMISM: 10,
  OPTIMISM_SEPOLIA: 11_155_420,
  ARBITRUM: 42_161,
  GNOSIS: 100,
  BSC: 56,
  ZORA: 7_777_777,
  ZORA_SEPOLIA: 999_999_999,
  BASE: 8453,
  BASE_SEPOLIA: 84_532,
  FOUNDRY: 31_337,
  BLAST: 81_457,
} as const;
export type ChainId = (typeof ChainId)[keyof typeof ChainId];

export const ETHEREUM_CHAIN_IDS = [ChainId.MAINNET];
export const ETHEREUM_TEST_CHAIN_IDS = [ChainId.SEPOLIA, ChainId.HOLESKY];
export const POLYGON_CHAIN_IDS = [ChainId.POLYGON, ChainId.POLYGON_AMOY];
export const OPTIMISM_CHAIN_IDS = [ChainId.OPTIMISM, ChainId.OPTIMISM_SEPOLIA];
export const ARBITRUM_CHAIN_IDS = [ChainId.ARBITRUM];
export const GNOSIS_CHAIN_IDS = [ChainId.GNOSIS];
export const BSC_CHAIN_IDS = [ChainId.BSC];
export const ZORA_CHAIN_IDS = [ChainId.ZORA, ChainId.ZORA_SEPOLIA];
export const BASE_CHAIN_IDS = [ChainId.BASE, ChainId.BASE_SEPOLIA];
export const BLAST_CHAIN_IDS = [ChainId.BLAST];

const ALL_CHAIN_IDS = [
  ...ETHEREUM_CHAIN_IDS,
  ...ETHEREUM_TEST_CHAIN_IDS,
  ...POLYGON_CHAIN_IDS,
  ...OPTIMISM_CHAIN_IDS,
  ...ARBITRUM_CHAIN_IDS,
  ...GNOSIS_CHAIN_IDS,
  ...BSC_CHAIN_IDS,
  ...ZORA_CHAIN_IDS,
  ...BASE_CHAIN_IDS,
  ...BLAST_CHAIN_IDS,
];

export const SUPPORTED_CHAIN_IDS = [3, 4, 42, ...ALL_CHAIN_IDS];

export const SUBGRAPH_CHAIN_IDS = ALL_CHAIN_IDS.slice();
export const POOL_FACTORY_CHAIN_IDS = ALL_CHAIN_IDS.slice();

export const CHAIN_INFO: {
  [chainId: number]: {
    startBlock: number;
    nativeCurrency: { symbol: string };
  };
} = {
  [ChainId.MAINNET]: {
    startBlock: 14_206_768,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.SEPOLIA]: {
    startBlock: 4_836_125,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.HOLESKY]: {
    startBlock: 148_241,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.POLYGON]: {
    startBlock: 25_303_316,
    nativeCurrency: {
      symbol: "MATIC",
    },
  },
  [ChainId.POLYGON_AMOY]: {
    startBlock: 25_303_316,
    nativeCurrency: {
      symbol: "MATIC",
    },
  },
  [ChainId.OPTIMISM]: {
    startBlock: 24_704_537,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.ARBITRUM]: {
    startBlock: 26_082_503,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.GNOSIS]: {
    startBlock: 26_014_830,
    nativeCurrency: {
      symbol: "xDai",
    },
  },
  [ChainId.BSC]: {
    startBlock: 24_962_607,
    nativeCurrency: {
      symbol: "BNB",
    },
  },
  [ChainId.ZORA]: {
    startBlock: 1_860_322,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.ZORA_SEPOLIA]: {
    startBlock: 2_296_044,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.BASE]: {
    startBlock: 2_293_907,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.BASE_SEPOLIA]: {
    startBlock: 3_324_413,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.BLAST]: {
    startBlock: 220_516,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
};

export const TransactionType = {
  Transaction: "Transaction",
  CallData: "CallData",
  GasEstimate: "GasEstimate",
} as const;
export type TransactionType =
  (typeof TransactionType)[keyof typeof TransactionType];

export const ZERO = BigInt(0);
