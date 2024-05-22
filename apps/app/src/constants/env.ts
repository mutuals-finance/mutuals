export const INFURA_KEY = process.env.NEXT_PUBLIC_INFURA_KEY || "";
if (INFURA_KEY === "") {
  throw new Error(
    `NEXT_PUBLIC_INFURA_KEY must be a defined environment variable`,
  );
}
export const NFT_STORAGE_TOKEN =
  process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN || "";
if (NFT_STORAGE_TOKEN === "") {
  throw new Error("NFT_STORAGE_TOKEN must be a defined environment variable");
}

export const NODE_ENV = process.env.NODE_ENV || "";

export const IS_DEV = process.env.NODE_ENV !== "production";

export const DEFAULT_SUBGRAPH = process.env.NEXT_PUBLIC_DEFAULT_SUBGRAPH || "";
export const COVALENT_KEY = process.env.NEXT_PUBLIC_COVALENT_KEY || "";
export const WALLETCONNECT_PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "";
export const ANKR_URL = process.env.NEXT_PUBLIC_ANKR_URL || "";
export const ANKR_API_KEY = process.env.NEXT_PUBLIC_ANKR_API_KEY || "";
