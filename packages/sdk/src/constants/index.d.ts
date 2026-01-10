import { Address } from "viem";
export * from "./allocation";
export declare const PERCENTAGE_SCALE: bigint;
export declare const getPoolFactoryAddress: (chainId: number) => Address;
export declare const getPoolFactoryStartBlock: (chainId: number) => bigint;
export declare enum ChainId {
    MAINNET = 1,
    SEPOLIA = 11155111,
    HOLESKY = 17000,
    POLYGON = 137,
    POLYGON_AMOY = 80002,
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
    BLAST = 81457
}
export declare const ETHEREUM_CHAIN_IDS: ChainId[];
export declare const ETHEREUM_TEST_CHAIN_IDS: ChainId[];
export declare const POLYGON_CHAIN_IDS: ChainId[];
export declare const OPTIMISM_CHAIN_IDS: ChainId[];
export declare const ARBITRUM_CHAIN_IDS: ChainId[];
export declare const GNOSIS_CHAIN_IDS: ChainId[];
export declare const BSC_CHAIN_IDS: ChainId[];
export declare const ZORA_CHAIN_IDS: ChainId[];
export declare const BASE_CHAIN_IDS: ChainId[];
export declare const BLAST_CHAIN_IDS: ChainId[];
export declare const SUPPORTED_CHAIN_IDS: number[];
export declare const SUBGRAPH_CHAIN_IDS: ChainId[];
export declare const POOL_FACTORY_CHAIN_IDS: ChainId[];
export declare const CHAIN_INFO: {
    [chainId: number]: {
        startBlock: number;
        nativeCurrency: {
            symbol: string;
        };
    };
};
export declare enum TransactionType {
    Transaction = "Transaction",
    CallData = "CallData",
    GasEstimate = "GasEstimate"
}
export declare const ZERO: bigint;
//# sourceMappingURL=index.d.ts.map