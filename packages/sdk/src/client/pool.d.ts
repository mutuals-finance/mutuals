import { Address, Chain, GetContractReturnType, Hash, Hex, Log, PublicClient, Transport } from "viem";
import { poolAbi, poolFactoryAbi } from "../constants/abi";
import { CreatePoolConfig, WithdrawConfig, TransactionConfig, TransactionFormat, MutualsClientConfig, TransferOwnershipConfig, SetPausedConfig, SetPoolAllocationConfig } from "../types";
import { BaseClientMixin, BaseTransactions } from "./base";
type PoolFactoryABI = typeof poolFactoryAbi;
type PoolABI = typeof poolAbi;
declare class PoolTransactions extends BaseTransactions {
    constructor({ transactionType, chainId, publicClient, ensPublicClient, walletClient, apiConfig, includeEnsNames, }: MutualsClientConfig & TransactionConfig);
    protected _createPool({ allocations, ownerAddress, salt, transactionOverrides, }: CreatePoolConfig): Promise<TransactionFormat>;
    protected _transferOwnership({ poolAddress, newOwner: newController, transactionOverrides, }: TransferOwnershipConfig): Promise<TransactionFormat>;
    protected _setPaused({ poolAddress, paused, transactionOverrides, }: SetPausedConfig): Promise<TransactionFormat>;
    protected _setPoolAllocation({ poolAddress, poolAllocation, transactionOverrides, }: SetPoolAllocationConfig): Promise<TransactionFormat>;
    protected _withdraw({ poolAddress, recipientAddress, tokenAddress, poolAllocations, indices, amounts, transactionOverrides, }: WithdrawConfig): Promise<TransactionFormat>;
    _paused(poolAddress: Address): Promise<boolean>;
    _owner(poolAddress: Address): Promise<`0x${string}`>;
    protected _getPoolContract(poolAddress: Address): GetContractReturnType<PoolABI, PublicClient<Transport, Chain>>;
    protected _getPoolFactoryContract(): GetContractReturnType<PoolFactoryABI, PublicClient<Transport, Chain>>;
    protected _requireOwner(poolAddress: Address): Promise<void>;
}
export declare class PoolClient extends PoolTransactions {
    readonly eventTopics: {
        [key: string]: Hex[];
    };
    readonly callData: PoolCallData;
    readonly estimateGas: PoolGasEstimates;
    constructor({ chainId, publicClient, ensPublicClient, walletClient, apiConfig, includeEnsNames, }: MutualsClientConfig);
    submitCreatePoolTransaction(createPoolArgs: CreatePoolConfig): Promise<{
        txHash: Hash;
    }>;
    createPool(createPoolArgs: CreatePoolConfig): Promise<{
        poolAddress: Address;
        event: Log;
    }>;
    submitTransferOwnershipTransaction(transferOwnershipArgs: TransferOwnershipConfig): Promise<{
        txHash: Hash;
    }>;
    transferOwnership(transferOwnershipArgs: TransferOwnershipConfig): Promise<{
        event: Log;
    }>;
    submitSetPauseTransaction(setPausedArgs: SetPausedConfig): Promise<{
        txHash: Hash;
    }>;
    setPause(setPausedArgs: SetPausedConfig): Promise<{
        event: Log;
    }>;
    submitWithdrawTransaction(withdrawArgs: WithdrawConfig): Promise<{
        txHash: Hash;
    }>;
    withdraw(withdrawArgs: WithdrawConfig): Promise<{
        event: Log;
    }>;
    submitSetPoolAllocationTransaction(setPoolAllocationArgs: SetPoolAllocationConfig): Promise<{
        txHash: Hash;
    }>;
    setPoolAllocation(setPoolAllocationArgs: SetPoolAllocationConfig): Promise<{
        event: Log;
    }>;
    getAddress(createPoolArgs: CreatePoolConfig): Promise<{
        poolAddress: Address;
    }>;
    paused({ poolAddress }: {
        poolAddress: Address;
    }): Promise<{
        paused: boolean;
    }>;
    owner({ poolAddress }: {
        poolAddress: Address;
    }): Promise<{
        ownerAddress: Address;
    }>;
}
export interface PoolClient extends BaseClientMixin {
}
declare class PoolGasEstimates extends PoolTransactions {
    constructor({ chainId, publicClient, ensPublicClient, walletClient, apiConfig, includeEnsNames, }: MutualsClientConfig);
    createPool(createPoolArgs: CreatePoolConfig): Promise<bigint>;
    transferOwnership(transferOwnershipArgs: TransferOwnershipConfig): Promise<bigint>;
    setPaused(setPausedArgs: SetPausedConfig): Promise<bigint>;
    withdraw(withdrawArgs: WithdrawConfig): Promise<bigint>;
    setPoolAllocation(setPoolAllocationArgs: SetPoolAllocationConfig): Promise<bigint>;
}
declare class PoolCallData extends PoolTransactions {
    constructor({ chainId, publicClient, ensPublicClient, walletClient, apiConfig, includeEnsNames, }: MutualsClientConfig);
    createPool(createPoolArgs: CreatePoolConfig): Promise<TransactionFormat>;
    transferOwnership(transferOwnershipArgs: TransferOwnershipConfig): Promise<TransactionFormat>;
    setPaused(setPausedArgs: SetPausedConfig): Promise<TransactionFormat>;
    withdraw(withdrawArgs: WithdrawConfig): Promise<TransactionFormat>;
    setPoolAllocation(setPoolAllocationArgs: SetPoolAllocationConfig): Promise<TransactionFormat>;
}
export {};
//# sourceMappingURL=pool.d.ts.map