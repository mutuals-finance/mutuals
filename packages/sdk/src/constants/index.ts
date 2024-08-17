import { Address } from "viem";

export const PERCENTAGE_SCALE = BigInt(1e6);

const POOL_FACTORY_ADDRESS = "0x2ed6c4B5dA6378c7897AC67Ba9e43102Feb694EE";
const POOL_FACTORY_ADDRESS_BSC = "0x2ed6c4B5dA6378c7897AC67Ba9e43102Feb694EE";
const POOL_FACTORY_ADDRESS_HOLESKY =
  "0x2ed6c4B5dA6378c7897AC67Ba9e43102Feb694EE";
const POOL_FACTORY_ADDRESS_SEPOLIA =
  "0x2ed6c4B5dA6378c7897AC67Ba9e43102Feb694EE";

export const getPoolFactoryAddress = (chainId: number): Address => {
  if (chainId === ChainId.BSC) return POOL_FACTORY_ADDRESS_BSC;
  if (chainId === ChainId.HOLESKY) return POOL_FACTORY_ADDRESS_HOLESKY;
  if (chainId === ChainId.SEPOLIA) return POOL_FACTORY_ADDRESS_SEPOLIA;
  return POOL_FACTORY_ADDRESS;
};

export const getPoolFactoryStartBlock = (chainId: number): bigint => {
  if (!CHAIN_INFO[chainId]?.startBlock) throw new Error("Chain not supported");
  return BigInt(CHAIN_INFO[chainId].startBlock as number);
};

export enum ChainId {
  MAINNET = 1,
  SEPOLIA = 11155111,
  HOLESKY = 17000,
  POLYGON = 137,
  OPTIMISM = 10,
  OPTIMISM_SEPOLIA = 11155420,
  ARBITRUM = 42161,
  GNOSIS = 100,
  BSC = 56,
  ZORA = 7777777,
  ZORA_SEPOLIA = 999999999,
  BASE = 8453,
  BASE_SEPOLIA = 84532,
  FOUNDRY = 31337,
  BLAST = 81457,
}

export const ETHEREUM_CHAIN_IDS = [ChainId.MAINNET];
export const ETHEREUM_TEST_CHAIN_IDS = [ChainId.SEPOLIA, ChainId.HOLESKY];
export const POLYGON_CHAIN_IDS = [ChainId.POLYGON];
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
export const POOL_FACTORY_CHAIN_IDS = ALL_CHAIN_IDS.slice().filter(
  (id) =>
    id !== ChainId.ZORA_SEPOLIA &&
    id !== ChainId.BASE_SEPOLIA &&
    id !== ChainId.BLAST,
);

export const SWAPPER_CHAIN_IDS = [
  ChainId.MAINNET,
  ChainId.SEPOLIA,
  ChainId.BASE,
  ChainId.POLYGON,
  ChainId.OPTIMISM,
  ChainId.ARBITRUM,
];

export const CHAIN_INFO: {
  [chainId: number]: {
    startBlock: number;
    nativeCurrency: { symbol: string };
  };
} = {
  [ChainId.MAINNET]: {
    startBlock: 14206768,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.SEPOLIA]: {
    startBlock: 4836125,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.HOLESKY]: {
    startBlock: 148241,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.POLYGON]: {
    startBlock: 25303316,
    nativeCurrency: {
      symbol: "MATIC",
    },
  },
  [ChainId.OPTIMISM]: {
    startBlock: 24704537,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.ARBITRUM]: {
    startBlock: 26082503,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.GNOSIS]: {
    startBlock: 26014830,
    nativeCurrency: {
      symbol: "xDai",
    },
  },
  [ChainId.BSC]: {
    startBlock: 24962607,
    nativeCurrency: {
      symbol: "BNB",
    },
  },
  [ChainId.ZORA]: {
    startBlock: 1860322,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.ZORA_SEPOLIA]: {
    startBlock: 2296044,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.BASE]: {
    startBlock: 2293907,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.BASE_SEPOLIA]: {
    startBlock: 3324413,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
  [ChainId.BLAST]: {
    startBlock: 220516,
    nativeCurrency: {
      symbol: "ETH",
    },
  },
};

export enum TransactionType {
  Transaction = "Transaction",
  CallData = "CallData",
  GasEstimate = "GasEstimate",
  Signature = "Signature",
}
