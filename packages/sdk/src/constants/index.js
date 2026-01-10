export * from "./allocation";
export const PERCENTAGE_SCALE = BigInt(1e6);
const POOL_FACTORY_ADDRESS = "0xbC4BFa087473C516A04D720Ac6301BF8981177FA";
const POOL_FACTORY_ADDRESS_POLYGON_AMOY = "0xbC4BFa087473C516A04D720Ac6301BF8981177FA";
const POOL_FACTORY_ADDRESS_BSC = "0x2ed6c4B5dA6378c7897AC67Ba9e43102Feb694EE";
const POOL_FACTORY_ADDRESS_HOLESKY = "0x2ed6c4B5dA6378c7897AC67Ba9e43102Feb694EE";
const POOL_FACTORY_ADDRESS_SEPOLIA = "0x2ed6c4B5dA6378c7897AC67Ba9e43102Feb694EE";
export const getPoolFactoryAddress = (chainId) => {
    if (chainId === ChainId.BSC)
        return POOL_FACTORY_ADDRESS_BSC;
    if (chainId === ChainId.HOLESKY)
        return POOL_FACTORY_ADDRESS_HOLESKY;
    if (chainId === ChainId.SEPOLIA)
        return POOL_FACTORY_ADDRESS_SEPOLIA;
    if (chainId === ChainId.POLYGON_AMOY)
        return POOL_FACTORY_ADDRESS_POLYGON_AMOY;
    return POOL_FACTORY_ADDRESS;
};
export const getPoolFactoryStartBlock = (chainId) => {
    var _a;
    if (!((_a = CHAIN_INFO[chainId]) === null || _a === void 0 ? void 0 : _a.startBlock))
        throw new Error("Chain not supported");
    return BigInt(CHAIN_INFO[chainId].startBlock);
};
export var ChainId;
(function (ChainId) {
    ChainId[ChainId["MAINNET"] = 1] = "MAINNET";
    ChainId[ChainId["SEPOLIA"] = 11155111] = "SEPOLIA";
    ChainId[ChainId["HOLESKY"] = 17000] = "HOLESKY";
    ChainId[ChainId["POLYGON"] = 137] = "POLYGON";
    ChainId[ChainId["POLYGON_AMOY"] = 80002] = "POLYGON_AMOY";
    ChainId[ChainId["OPTIMISM"] = 10] = "OPTIMISM";
    ChainId[ChainId["OPTIMISM_SEPOLIA"] = 11155420] = "OPTIMISM_SEPOLIA";
    ChainId[ChainId["ARBITRUM"] = 42161] = "ARBITRUM";
    ChainId[ChainId["GNOSIS"] = 100] = "GNOSIS";
    ChainId[ChainId["BSC"] = 56] = "BSC";
    ChainId[ChainId["ZORA"] = 7777777] = "ZORA";
    ChainId[ChainId["ZORA_SEPOLIA"] = 999999999] = "ZORA_SEPOLIA";
    ChainId[ChainId["BASE"] = 8453] = "BASE";
    ChainId[ChainId["BASE_SEPOLIA"] = 84532] = "BASE_SEPOLIA";
    ChainId[ChainId["FOUNDRY"] = 31337] = "FOUNDRY";
    ChainId[ChainId["BLAST"] = 81457] = "BLAST";
})(ChainId || (ChainId = {}));
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
export const CHAIN_INFO = {
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
    [ChainId.POLYGON_AMOY]: {
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
export var TransactionType;
(function (TransactionType) {
    TransactionType["Transaction"] = "Transaction";
    TransactionType["CallData"] = "CallData";
    TransactionType["GasEstimate"] = "GasEstimate";
})(TransactionType || (TransactionType = {}));
export const ZERO = BigInt(0);
