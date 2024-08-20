export class UnsupportedChainIdError extends Error {
  name = "UnsupportedChainIdError";

  constructor(invalidChainId: number, supportedChains: number[]) {
    super(
      `Unsupported chain: ${invalidChainId}. Supported chains are: ${supportedChains}`,
    );
    Object.setPrototypeOf(this, UnsupportedChainIdError.prototype);
  }
}

export class InvalidAllocationIndicesLengthError extends Error {
  name = "InvalidAllocationIndicesLengthError";

  constructor(m?: string) {
    super(m);
    Object.setPrototypeOf(this, InvalidAllocationIndicesLengthError.prototype);
  }
}

export class InvalidArgumentError extends Error {
  name = "InvalidArgumentError";

  constructor(m?: string) {
    super(m);
    Object.setPrototypeOf(this, InvalidArgumentError.prototype);
  }
}

export class InvalidAuthError extends Error {
  name = "InvalidAuthError";

  constructor(m?: string) {
    super(m);
    Object.setPrototypeOf(this, InvalidAuthError.prototype);
  }
}

export class TransactionFailedError extends Error {
  name = "TransactionFailedError";

  constructor(m?: string) {
    super(m);
    Object.setPrototypeOf(this, TransactionFailedError.prototype);
  }
}

export class MissingPublicClientError extends Error {
  name = "MissingPublicClientError";

  constructor(m?: string) {
    super(m);
    Object.setPrototypeOf(this, MissingPublicClientError.prototype);
  }
}

export class MissingDataClientError extends Error {
  name = "MissingDataClientError";

  constructor(m?: string) {
    super(m);
    Object.setPrototypeOf(this, MissingDataClientError.prototype);
  }
}

export class MissingWalletClientError extends Error {
  name = "MissingWalletClientError";

  constructor(m?: string) {
    super(m);
    Object.setPrototypeOf(this, MissingWalletClientError.prototype);
  }
}

export class InvalidConfigError extends Error {
  name = "InvalidConfigError";

  constructor(m?: string) {
    super(m);
    Object.setPrototypeOf(this, InvalidConfigError.prototype);
  }
}
