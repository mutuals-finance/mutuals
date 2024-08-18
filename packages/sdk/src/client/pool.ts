import {
  Address,
  Chain,
  GetContractReturnType,
  Hash,
  Hex,
  Log,
  PublicClient,
  Transport,
  decodeEventLog,
  encodeEventTopics,
  getContract,
  zeroAddress,
} from "viem";
import {
  SUPPORTED_CHAIN_IDS,
  TransactionType,
  getPoolFactoryAddress,
  ZERO,
} from "@/constants";
import { poolAbi, poolFactoryAbi } from "@/constants/abi";
import {
  InvalidAuthError,
  TransactionFailedError,
  UnsupportedChainIdError,
} from "@/errors";
import {
  CallData,
  CreatePoolConfig,
  WithdrawConfig,
  TransactionConfig,
  TransactionFormat,
  PoolClientConfig,
  TransferOwnershipConfig,
  SetPausedConfig,
  SetPoolAllocationConfig,
} from "@/types";
import { getAllocationConfig, getAllocationRoot } from "@/utils";
import {
  BaseClientMixin,
  BaseGasEstimatesMixin,
  BaseTransactions,
} from "./base";
import { applyMixins } from "./mixin";
import { validateAddress } from "@/utils/validation";

type PoolFactoryABI = typeof poolFactoryAbi;
type PoolABI = typeof poolAbi;

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

  protected async _createPool({
    allocations,
    ownerAddress = zeroAddress,
    salt,
    transactionOverrides = {},
  }: CreatePoolConfig): Promise<TransactionFormat> {
    validateAddress(ownerAddress);

    const allocationRoot = getAllocationRoot(allocations);

    this._requirePublicClient();
    if (this._shouldRequireWalletClient) this._requireWalletClient();

    const functionName = "createPool";
    const functionArgs = [ownerAddress, allocationRoot, salt];

    return this._executeContractFunction({
      contractAddress: getPoolFactoryAddress(this._chainId),
      contractAbi: poolFactoryAbi,
      functionName,
      functionArgs,
      transactionOverrides,
    });
  }

  protected async _transferOwnership({
    poolAddress,
    newOwner: newController,
    transactionOverrides = {},
  }: TransferOwnershipConfig): Promise<TransactionFormat> {
    validateAddress(poolAddress);
    validateAddress(newController);

    this._requirePublicClient();
    if (this._shouldRequireWalletClient) this._requireWalletClient();
    await this._requireOwner(poolAddress);

    return this._executeContractFunction({
      contractAddress: poolAddress,
      contractAbi: poolAbi,
      functionName: "transferOwnership",
      functionArgs: [newController],
      transactionOverrides,
    });
  }

  protected async _setPaused({
    poolAddress,
    paused,
    transactionOverrides = {},
  }: SetPausedConfig): Promise<TransactionFormat> {
    validateAddress(poolAddress);

    this._requirePublicClient();
    if (this._shouldRequireWalletClient) this._requireWalletClient();
    await this._requireOwner(poolAddress);

    return this._executeContractFunction({
      contractAddress: poolAddress,
      contractAbi: poolAbi,
      functionName: "setPaused",
      functionArgs: [paused],
      transactionOverrides,
    });
  }

  protected async _setPoolAllocation({
    poolAddress,
    poolAllocation,
    transactionOverrides = {},
  }: SetPoolAllocationConfig): Promise<TransactionFormat> {
    const newAllocationRoot = getAllocationRoot(poolAllocation);

    validateAddress(poolAddress);

    this._requirePublicClient();
    if (this._shouldRequireWalletClient) this._requireWalletClient();
    await this._requireOwner(poolAddress);

    return this._executeContractFunction({
      contractAddress: poolAddress,
      contractAbi: poolAbi,
      functionName: "setAllocationRoot",
      functionArgs: [newAllocationRoot],
      transactionOverrides,
    });
  }

  protected async _withdraw({
    poolAddress,
    recipientAddress = this._walletClient?.account.address as Address,
    tokenAddress,
    poolAllocations,
    indices,
    amounts,
    transactionOverrides = {},
  }: WithdrawConfig): Promise<TransactionFormat> {
    validateAddress(poolAddress);
    validateAddress(recipientAddress);
    validateAddress(tokenAddress);

    this._requirePublicClient();
    if (this._shouldRequireWalletClient) this._requireWalletClient();

    const { allocations, proof } = getAllocationConfig(
      poolAllocations,
      indices,
    );

    return this._executeContractFunction({
      contractAddress: poolAddress,
      contractAbi: poolAbi,
      functionName: "withdraw",
      functionArgs: [
        recipientAddress,
        tokenAddress,
        {
          allocations,
          amounts,
          proof,
        },
      ],
      transactionOverrides,
      value: ZERO,
    });
  }

  async _paused(poolAddress: Address) {
    this._requirePublicClient();
    return (await this._getPoolContract(poolAddress).read.paused!()) as boolean;
  }

  async _owner(poolAddress: Address) {
    this._requirePublicClient();
    return (await this._getPoolContract(poolAddress).read.owner!()) as Address;
  }

  protected _getPoolContract(
    poolAddress: Address,
  ): GetContractReturnType<PoolABI, PublicClient<Transport, Chain>> {
    validateAddress(poolAddress);

    return getContract({
      address: poolAddress,
      abi: poolAbi,
      client: { public: this._publicClient!, wallet: this._walletClient! },
    });
  }

  protected _getPoolFactoryContract(): GetContractReturnType<
    PoolFactoryABI,
    PublicClient<Transport, Chain>
  > {
    return getContract({
      address: getPoolFactoryAddress(this._chainId),
      abi: poolFactoryAbi,
      client: { public: this._publicClient!, wallet: this._walletClient! },
    });
  }

  protected async _requireOwner(poolAddress: Address) {
    const ownerAddress = await this._owner(poolAddress);

    const walletAddress = this._walletClient!.account.address;

    if (ownerAddress.toLowerCase() !== walletAddress.toLowerCase())
      throw new InvalidAuthError(
        `Action only available to the pool controller. Pool id: ${poolAddress}, pool controller: ${ownerAddress}, wallet address: ${walletAddress}`,
      );
  }
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
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

    if (!SUPPORTED_CHAIN_IDS.includes(chainId))
      throw new UnsupportedChainIdError(chainId, SUPPORTED_CHAIN_IDS);

    this.eventTopics = {
      poolCreated: [
        encodeEventTopics({
          abi: poolFactoryAbi,
          eventName: "PoolCreated",
        })[0],
      ],
      allocationUpdated: [
        encodeEventTopics({
          abi: poolAbi,
          eventName: "AllocationUpdated",
        })[0],
      ],
      withdraw: [
        encodeEventTopics({
          abi: poolAbi,
          eventName: "Withdraw",
        })[0],
      ],
      ownershipTransferred: [
        encodeEventTopics({
          abi: poolAbi,
          eventName: "OwnershipTransferred",
        })[0],
      ],
      setPaused: [
        encodeEventTopics({
          abi: poolAbi,
          eventName: "SetPaused",
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

  async submitCreatePoolTransaction(createPoolArgs: CreatePoolConfig): Promise<{
    txHash: Hash;
  }> {
    const txHash = await this._createPool(createPoolArgs);
    if (!this._isContractTransaction(txHash))
      throw new Error("Invalid response");

    return { txHash };
  }

  async createPool(createPoolArgs: CreatePoolConfig): Promise<{
    poolAddress: Address;
    event: Log;
  }> {
    const { txHash } = await this.submitCreatePoolTransaction(createPoolArgs);
    const events = await this.getTransactionEvents({
      txHash,
      eventTopics: this.eventTopics.poolCreated,
    });
    if (events.length > 0 && !!events[0]) {
      const event = events[0];

      const log = decodeEventLog({
        abi: poolFactoryAbi,
        data: event.data,
        topics: event.topics,
      });
      if (log.args) {
        return {
          poolAddress: log.args[0] as Address,
          event,
        };
      }
    }

    throw new TransactionFailedError();
  }

  async submitTransferOwnershipTransaction(
    transferOwnershipArgs: TransferOwnershipConfig,
  ): Promise<{
    txHash: Hash;
  }> {
    const txHash = await this._transferOwnership(transferOwnershipArgs);
    if (!this._isContractTransaction(txHash))
      throw new Error("Invalid response");

    return { txHash };
  }

  async transferOwnership(
    transferOwnershipArgs: TransferOwnershipConfig,
  ): Promise<{
    event: Log;
  }> {
    const { txHash } = await this.submitTransferOwnershipTransaction(
      transferOwnershipArgs,
    );

    const events = await this.getTransactionEvents({
      txHash,
      eventTopics: this.eventTopics.ownershipTransferred,
    });
    const event = events.length > 0 ? events[0] : undefined;
    if (event) {
      return {
        event,
      };
    }

    throw new TransactionFailedError();
  }

  async submitSetPauseTransaction(setPausedArgs: SetPausedConfig): Promise<{
    txHash: Hash;
  }> {
    const txHash = await this._setPaused(setPausedArgs);
    if (!this._isContractTransaction(txHash))
      throw new Error("Invalid response");

    return { txHash };
  }

  async setPause(setPausedArgs: SetPausedConfig): Promise<{
    event: Log;
  }> {
    const { txHash } = await this.submitSetPauseTransaction(setPausedArgs);

    const events = await this.getTransactionEvents({
      txHash,
      eventTopics: this.eventTopics.setPaused,
    });
    const event = events.length > 0 ? events[0] : undefined;
    if (event) {
      return {
        event,
      };
    }

    throw new TransactionFailedError();
  }

  async submitWithdrawTransaction(withdrawArgs: WithdrawConfig): Promise<{
    txHash: Hash;
  }> {
    const txHash = await this._withdraw(withdrawArgs);
    if (!this._isContractTransaction(txHash))
      throw new Error("Invalid response");

    return { txHash };
  }

  async withdraw(withdrawArgs: WithdrawConfig): Promise<{
    event: Log;
  }> {
    const { txHash } = await this.submitWithdrawTransaction(withdrawArgs);

    const events = await this.getTransactionEvents({
      txHash,
      eventTopics: this.eventTopics.withdraw,
    });
    const event = events.length > 0 ? events[0] : undefined;
    if (event) {
      return {
        event,
      };
    }

    throw new TransactionFailedError();
  }

  async submitSetPoolAllocationTransaction(
    setPoolAllocationArgs: SetPoolAllocationConfig,
  ): Promise<{
    txHash: Hash;
  }> {
    const txHash = await this._setPoolAllocation(setPoolAllocationArgs);
    if (!this._isContractTransaction(txHash))
      throw new Error("Invalid response");

    return { txHash };
  }

  async setPoolAllocation(
    setPoolAllocationArgs: SetPoolAllocationConfig,
  ): Promise<{
    event: Log;
  }> {
    const { txHash } = await this.submitSetPoolAllocationTransaction(
      setPoolAllocationArgs,
    );

    const events = await this.getTransactionEvents({
      txHash,
      eventTopics: this.eventTopics.poolUpdated,
    });
    const event = events.length > 0 ? events[0] : undefined;
    if (event) {
      return {
        event,
      };
    }

    throw new TransactionFailedError();
  }

  async getAddress(createPoolArgs: CreatePoolConfig): Promise<{
    poolAddress: Address;
  }> {
    if (!createPoolArgs.ownerAddress) createPoolArgs.ownerAddress = zeroAddress;
    if (!createPoolArgs.allocations) createPoolArgs.allocations = [];

    const allocationRoot = getAllocationRoot(createPoolArgs.allocations);

    validateAddress(createPoolArgs.ownerAddress);

    this._requirePublicClient();

    const factory = this._getPoolFactoryContract();

    const poolAddress = (await factory.read.getAddress!([
      allocationRoot,
      createPoolArgs.ownerAddress,
      createPoolArgs.salt,
    ])) as Address;

    return {
      poolAddress,
    };
  }

  async paused({ poolAddress }: { poolAddress: Address }): Promise<{
    paused: boolean;
  }> {
    const paused = await this._paused(poolAddress);
    return { paused };
  }

  async owner({ poolAddress }: { poolAddress: Address }): Promise<{
    ownerAddress: Address;
  }> {
    const ownerAddress = await this._owner(poolAddress);
    return { ownerAddress };
  }
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface PoolClient extends BaseClientMixin {}
applyMixins(PoolClient, [BaseClientMixin]);

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class PoolGasEstimates extends PoolTransactions {
  constructor({
    chainId,
    publicClient,
    ensPublicClient,
    walletClient,
    apiConfig,
    includeEnsNames = false,
  }: PoolClientConfig) {
    super({
      transactionType: TransactionType.GasEstimate,
      chainId,
      publicClient,
      ensPublicClient,
      walletClient,
      apiConfig,
      includeEnsNames,
    });
  }

  async createPool(createPoolArgs: CreatePoolConfig): Promise<bigint> {
    const gasEstimate = await this._createPool(createPoolArgs);
    if (!this._isBigInt(gasEstimate)) throw new Error("Invalid response");

    return gasEstimate;
  }

  async transferOwnership(
    transferOwnershipArgs: TransferOwnershipConfig,
  ): Promise<bigint> {
    const gasEstimate = await this._transferOwnership(transferOwnershipArgs);
    if (!this._isBigInt(gasEstimate)) throw new Error("Invalid response");

    return gasEstimate;
  }

  async setPaused(setPausedArgs: SetPausedConfig): Promise<bigint> {
    const gasEstimate = await this._setPaused(setPausedArgs);
    if (!this._isBigInt(gasEstimate)) throw new Error("Invalid response");

    return gasEstimate;
  }

  async withdraw(withdrawArgs: WithdrawConfig): Promise<bigint> {
    const gasEstimate = await this._withdraw(withdrawArgs);
    if (!this._isBigInt(gasEstimate)) throw new Error("Invalid response");

    return gasEstimate;
  }

  async setPoolAllocation(
    setPoolAllocationArgs: SetPoolAllocationConfig,
  ): Promise<bigint> {
    const gasEstimate = await this._setPoolAllocation(setPoolAllocationArgs);
    if (!this._isBigInt(gasEstimate)) throw new Error("Invalid response");

    return gasEstimate;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
interface PoolGasEstimates extends BaseGasEstimatesMixin {}
applyMixins(PoolGasEstimates, [BaseGasEstimatesMixin]);

class PoolCallData extends PoolTransactions {
  constructor({
    chainId,
    publicClient,
    ensPublicClient,
    walletClient,
    apiConfig,
    includeEnsNames = false,
  }: PoolClientConfig) {
    super({
      transactionType: TransactionType.CallData,
      chainId,
      publicClient,
      ensPublicClient,
      walletClient,
      apiConfig,
      includeEnsNames,
    });
  }

  async createPool(createPoolArgs: CreatePoolConfig): Promise<CallData> {
    const callData = await this._createPool(createPoolArgs);
    if (!this._isCallData(callData)) throw new Error("Invalid response");

    return callData;
  }

  async transferOwnership(
    transferOwnershipArgs: TransferOwnershipConfig,
  ): Promise<CallData> {
    const callData = await this._transferOwnership(transferOwnershipArgs);
    if (!this._isCallData(callData)) throw new Error("Invalid response");

    return callData;
  }

  async setPaused(setPausedArgs: SetPausedConfig): Promise<CallData> {
    const callData = await this._setPaused(setPausedArgs);
    if (!this._isCallData(callData)) throw new Error("Invalid response");

    return callData;
  }

  async withdraw(withdrawArgs: WithdrawConfig): Promise<CallData> {
    const callData = await this._withdraw(withdrawArgs);
    if (!this._isCallData(callData)) throw new Error("Invalid response");

    return callData;
  }

  async setPoolAllocation(
    setPoolAllocationArgs: SetPoolAllocationConfig,
  ): Promise<CallData> {
    const callData = await this._setPoolAllocation(setPoolAllocationArgs);
    if (!this._isCallData(callData)) throw new Error("Invalid response");

    return callData;
  }
}

const poolUpdatedEvent = poolAbi[28];

const poolCreatedEvent = poolFactoryAbi[8];
