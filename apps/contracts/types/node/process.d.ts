/* eslint-disable @typescript-eslint/naming-convention -- this file overwrites many predefined types */
// biome-ignore lint/style/noNamespace: NodeJS namespace augmentation is required for ProcessEnv typing
declare namespace NodeJS {
  interface ProcessEnv {
    ALCHEMY_API_KEY?: string;
    AMOY_RPC_URL?: string;
    CI: boolean;
    DEFENDER_API_KEY?: string;
    DEFENDER_API_SECRET?: string;
    ETHEREUM_RPC_URL?: string;
    ETHERNAL: boolean;
    ETHERNAL_EMAIL?: string;
    ETHERNAL_PASSWORD?: string;
    ETHERSCAN_API_KEY?: string;
    FORCE_PROXY_DEPLOYMENT: boolean;
    GITHUB_PERSONAL_ACCESS_TOKEN?: string;
    LOG_HARDHAT_NETWORK: boolean;
    MNEMONIC?: string;
    OPTIMIZER: boolean;
    OPTIMIZER_RUNS: number;
    POLYGON_RPC_URL?: string;
    POLYGONSCAN_API_KEY?: string;
    SOLC_PROFILE: "default" | "production" | "test";
    TRACE: boolean;
    VIA_IR: boolean;
  }
}
