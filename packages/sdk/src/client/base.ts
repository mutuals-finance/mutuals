import {
  PublicClient,
  WalletClient,
  Address,
  Abi,
  Hash,
  encodeFunctionData,
  Log,
  Hex,
  Transport,
  Chain,
  Account,
  TransactionType,
} from "viem";

import {
  InvalidConfigError,
  MissingPublicClientError,
  MissingWalletClientError,
} from "../errors";
import type {
  ApiConfig,
  CallData,
  MutualsClientConfig,
  TransactionConfig,
  TransactionFormat,
  TransactionOverrides,
} from "../types";
import { TransactionType as MutualsTransactionType } from "../constants";

class BaseClient {
  readonly _chainId: number;
  readonly _ensPublicClient: PublicClient<Transport, Chain> | undefined;
  readonly _walletClient: WalletClient<Transport, Chain, Account> | undefined;
  readonly _publicClient: PublicClient<Transport, Chain> | undefined;
  readonly _apiConfig: ApiConfig | undefined;
  readonly _includeEnsNames: boolean;

  constructor({
    chainId,
    publicClient,
    ensPublicClient,
    walletClient,
    apiConfig,
    includeEnsNames = false,
  }: MutualsClientConfig) {
    if (includeEnsNames && !publicClient && !ensPublicClient)
      throw new InvalidConfigError(
        "Must include a mainnet public client if includeEnsNames is set to true",
      );
    this._ensPublicClient = ensPublicClient ?? publicClient;
    this._publicClient = publicClient;
    this._chainId = chainId;
    this._walletClient = walletClient;
    this._includeEnsNames = includeEnsNames;
    this._apiConfig = apiConfig;
  }

  protected _requirePublicClient() {
    if (!this._publicClient)
      throw new MissingPublicClientError(
        "Public client required to perform this action, please update your call to the constructor",
      );
  }

  protected _requireWalletClient() {
    this._requirePublicClient();
    if (!this._walletClient)
      throw new MissingWalletClientError(
        "Wallet client required to perform this action, please update your call to the constructor",
      );
    if (!this._walletClient.account)
      throw new MissingWalletClientError(
        "Wallet client must have an account attached to it to perform this action, please update your wallet client passed into the constructor",
      );
  }
}

export class BaseTransactions extends BaseClient {
  protected readonly _transactionType: TransactionType;
  protected readonly _shouldRequireWalletClient: boolean;

  constructor({
    transactionType,
    chainId,
    publicClient,
    ensPublicClient,
    walletClient,
    apiConfig,
    includeEnsNames = false,
  }: MutualsClientConfig & TransactionConfig) {
    super({
      chainId,
      publicClient,
      ensPublicClient,
      walletClient,
      apiConfig,
      includeEnsNames,
    });

    this._transactionType = transactionType;
    this._shouldRequireWalletClient = [
      MutualsTransactionType.GasEstimate,
      MutualsTransactionType.Transaction,
    ].includes(transactionType as MutualsTransactionType);
  }

  protected async _executeContractFunction({
    contractAddress,
    contractAbi,
    functionName,
    functionArgs,
    transactionOverrides,
    value,
  }: {
    contractAddress: Address;
    contractAbi: Abi;
    functionName: string;
    functionArgs?: unknown[];
    transactionOverrides: TransactionOverrides;
    value?: bigint;
  }) {
    this._requirePublicClient();
    if (!this._publicClient) throw new Error();
    if (this._shouldRequireWalletClient) {
      this._requireWalletClient();
    }

    if (this._transactionType === MutualsTransactionType.CallData) {
      const calldata = encodeFunctionData({
        abi: contractAbi,
        functionName,
        args: functionArgs ?? [],
      });

      return {
        address: contractAddress,
        data: calldata,
        value,
      };
    } else if (this._transactionType === MutualsTransactionType.Transaction) {
      if (!this._walletClient?.account) throw new Error();
      const { request } = await this._publicClient.simulateContract({
        address: contractAddress,
        abi: contractAbi,
        functionName,
        account: this._walletClient.account,
        args: functionArgs ?? [],
        value,
        ...transactionOverrides,
      });
      const txHash = await this._walletClient.writeContract(request);
      return txHash;
    } else
      throw new Error(`Unknown transaction type: ${this._transactionType}`);
  }

  protected _isContractTransaction(txHash: TransactionFormat): txHash is Hash {
    return typeof txHash === "string";
  }

  protected _isBigInt(gasEstimate: TransactionFormat): gasEstimate is bigint {
    return typeof gasEstimate === "bigint";
  }

  protected _isCallData(callData: TransactionFormat): callData is CallData {
    if (callData instanceof BigInt) return false;
    if (typeof callData === "string") return false;

    return true;
  }
}

export class BaseClientMixin extends BaseTransactions {
  async getTransactionEvents({
    txHash,
    eventTopics,
    includeAll,
  }: {
    txHash: Hash;
    eventTopics: Hex[] | undefined;
    includeAll?: boolean;
  }): Promise<Log[]> {
    if (!this._publicClient)
      throw new Error("Public client required to get transaction events");

    const transaction = await this._publicClient.waitForTransactionReceipt({
      hash: txHash,
    });
    if (transaction.status === "success") {
      const events = transaction.logs?.filter((log) => {
        if (includeAll) return true;
        if (log.topics[0]) return eventTopics?.includes(log.topics[0]);

        return false;
      });

      return events;
    }

    return [];
  }
}
