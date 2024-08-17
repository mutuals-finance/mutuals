import {
  getPoolFactoryAddress,
  POOL_FACTORY_CHAIN_IDS,
  TransactionType,
} from "@/constants";
import {
  CreatePoolConfig,
  PoolClientConfig,
  TransactionConfig,
  TransactionFormat,
} from "@/types";
import { BaseClientMixin, BaseTransactions } from "@/client/base";
import { decodeEventLog, encodeEventTopics, Hash, Hex, Log } from "viem";
import { poolAbi, poolFactoryAbi } from "@/constants/abi";
import { TransactionFailedError, UnsupportedChainIdError } from "@/errors";
import { getAllocationRoot } from "@/utils";
import { validateAddress, validateAllocations } from "@/utils/validation";

class PoolTransactions extends BaseTransactions {
  constructor({
    transactionType,
    chainId,
    publicClient,
    ensPublicClient,
    walletClient,
    apiConfig,
    includeEnsNames = false,
  }: PoolClientConfig & TransactionConfig) {
    super({
      transactionType,
      chainId,
      publicClient,
      ensPublicClient,
      walletClient,
      apiConfig,
      includeEnsNames,
    });
  }

  protected async _createPoolTransaction({
    owner,
    allocations,
    transactionOverrides = {},
  }: CreatePoolConfig): Promise<TransactionFormat> {
    validateAddress(owner);
    validateAllocations(allocations);
    this._requirePublicClient();
    if (!this._publicClient) throw new Error("Public client required");
    if (this._shouldRequireWalletClient) this._requireWalletClient();

    const allocationRoot = getAllocationRoot(allocations);

    const result = await this._executeContractFunction({
      contractAddress: getPoolFactoryAddress(this._chainId),
      contractAbi: poolFactoryAbi,
      functionName: "createPool",
      functionArgs: [allocationRoot],
      transactionOverrides,
    });

    return result;
  }
}

export class PoolClient extends PoolTransactions {
  readonly eventTopics: { [key: string]: Hex[] };
  readonly callData: PoolCallData;
  readonly estimateGas: PoolGasEstimates;

  constructor({
    chainId,
    publicClient,
    ensPublicClient,
    walletClient,
    apiConfig,
    includeEnsNames = false,
  }: PoolClientConfig) {
    super({
      transactionType: TransactionType.Transaction,
      chainId,
      publicClient,
      ensPublicClient,
      walletClient,
      apiConfig,
      includeEnsNames,
    });

    if (!POOL_FACTORY_CHAIN_IDS.includes(chainId))
      throw new UnsupportedChainIdError(chainId, POOL_FACTORY_CHAIN_IDS);

    this.eventTopics = {
      createPool: [
        encodeEventTopics({
          abi: poolFactoryAbi,
          eventName: "CreatePool",
        })[0],
      ],
    };

    this.callData = new PoolCallData({
      chainId,
      publicClient,
      ensPublicClient,
      walletClient,
      apiConfig,
      includeEnsNames,
    });
    this.estimateGas = new PoolGasEstimates({
      chainId,
      publicClient,
      ensPublicClient,
      walletClient,
      apiConfig,
      includeEnsNames,
    });
  }

  // Write actions
  async submitCreatePoolTransaction(createPoolArgs: CreatePoolConfig): Promise<{
    txHash: Hash;
  }> {
    const txHash = await this._createPoolTransaction(createPoolArgs);
    if (!this._isContractTransaction(txHash))
      throw new Error("Invalid response");

    return { txHash };
  }

  async createPool(createPoolArgs: CreatePoolConfig): Promise<{
    poolAddress: string;
    event: Log;
  }> {
    const { txHash } = await this.submitCreatePoolTransaction(createPoolArgs);
    const events = await this.getTransactionEvents({
      txHash,
      eventTopics: this.eventTopics.createPoolModule,
    });
    const event = events.length > 0 ? events[0] : undefined;
    if (event) {
      const log = decodeEventLog({
        abi: poolFactoryAbi,
        data: event.data,
        topics: event.topics,
      });
      return {
        poolAddress: log?.args?.pool,
        event,
      };
    }

    throw new TransactionFailedError();
  }
}

export interface PoolClient extends BaseClientMixin {}
applyMixins(PoolClient, [BaseClientMixin]);
