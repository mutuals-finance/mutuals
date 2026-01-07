export declare class UnsupportedChainIdError extends Error {
    name: string;
    constructor(invalidChainId: number, supportedChains: number[]);
}
export declare class InvalidAllocationIndicesLengthError extends Error {
    name: string;
    constructor(m?: string);
}
export declare class InvalidArgumentError extends Error {
    name: string;
    constructor(m?: string);
}
export declare class InvalidAuthError extends Error {
    name: string;
    constructor(m?: string);
}
export declare class TransactionFailedError extends Error {
    name: string;
    constructor(m?: string);
}
export declare class MissingPublicClientError extends Error {
    name: string;
    constructor(m?: string);
}
export declare class MissingDataClientError extends Error {
    name: string;
    constructor(m?: string);
}
export declare class MissingWalletClientError extends Error {
    name: string;
    constructor(m?: string);
}
export declare class InvalidConfigError extends Error {
    name: string;
    constructor(m?: string);
}
//# sourceMappingURL=errors.d.ts.map