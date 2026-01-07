export class UnsupportedChainIdError extends Error {
    constructor(invalidChainId, supportedChains) {
        super(`Unsupported chain: ${invalidChainId}. Supported chains are: ${supportedChains}`);
        this.name = "UnsupportedChainIdError";
        Object.setPrototypeOf(this, UnsupportedChainIdError.prototype);
    }
}
export class InvalidAllocationIndicesLengthError extends Error {
    constructor(m) {
        super(m);
        this.name = "InvalidAllocationIndicesLengthError";
        Object.setPrototypeOf(this, InvalidAllocationIndicesLengthError.prototype);
    }
}
export class InvalidArgumentError extends Error {
    constructor(m) {
        super(m);
        this.name = "InvalidArgumentError";
        Object.setPrototypeOf(this, InvalidArgumentError.prototype);
    }
}
export class InvalidAuthError extends Error {
    constructor(m) {
        super(m);
        this.name = "InvalidAuthError";
        Object.setPrototypeOf(this, InvalidAuthError.prototype);
    }
}
export class TransactionFailedError extends Error {
    constructor(m) {
        super(m);
        this.name = "TransactionFailedError";
        Object.setPrototypeOf(this, TransactionFailedError.prototype);
    }
}
export class MissingPublicClientError extends Error {
    constructor(m) {
        super(m);
        this.name = "MissingPublicClientError";
        Object.setPrototypeOf(this, MissingPublicClientError.prototype);
    }
}
export class MissingDataClientError extends Error {
    constructor(m) {
        super(m);
        this.name = "MissingDataClientError";
        Object.setPrototypeOf(this, MissingDataClientError.prototype);
    }
}
export class MissingWalletClientError extends Error {
    constructor(m) {
        super(m);
        this.name = "MissingWalletClientError";
        Object.setPrototypeOf(this, MissingWalletClientError.prototype);
    }
}
export class InvalidConfigError extends Error {
    constructor(m) {
        super(m);
        this.name = "InvalidConfigError";
        Object.setPrototypeOf(this, InvalidConfigError.prototype);
    }
}
