import { Address, Log } from "viem";
import { CreatePoolConfig, TransferOwnershipConfig, SetPausedConfig, WithdrawConfig, SetPoolAllocationConfig } from "@mutuals/sdk";
import { ContractExecutionStatus, RequestError } from "../types";
export declare const useCreatePool: () => {
    createPool: (arg0: CreatePoolConfig) => Promise<Log[] | undefined>;
    poolAddress?: Address;
    status?: ContractExecutionStatus;
    txHash?: string;
    error?: RequestError;
};
export declare const useSetPoolAllocation: () => {
    updatePool: (arg0: SetPoolAllocationConfig) => Promise<Log[] | undefined>;
    status?: ContractExecutionStatus;
    txHash?: string;
    error?: RequestError;
};
export declare const useWithdraw: () => {
    withdraw: (arg0: WithdrawConfig) => Promise<Log[] | undefined>;
    status?: ContractExecutionStatus;
    txHash?: string;
    error?: RequestError;
};
export declare const useTransferOwnership: () => {
    transferOwnership: (arg0: TransferOwnershipConfig) => Promise<Log[] | undefined>;
    status?: ContractExecutionStatus;
    txHash?: string;
    error?: RequestError;
};
export declare const useSetPause: () => {
    setPause: (arg0: SetPausedConfig) => Promise<Log[] | undefined>;
    status?: ContractExecutionStatus;
    txHash?: string;
    error?: RequestError;
};
//# sourceMappingURL=pool.d.ts.map