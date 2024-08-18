import {
  AccessList,
  Account,
  Address,
  Chain,
  Hash,
  Hex,
  PublicClient,
  TransactionType,
  Transport,
  WalletClient,
} from "viem";

export type TransactionOverrides = {
  accessList?: AccessList;
  gas?: bigint;
  maxFeePerGas?: bigint;
  maxPriorityFeePerGas?: bigint;
  nonce?: number;
  value?: bigint;
};

interface TransactionOverridesDict {
  transactionOverrides?: TransactionOverrides;
}

export type ApiConfig = {
  apiKey: string;
  serverURL?: string;
};

export type DataClientConfig = {
  publicClient?: PublicClient<Transport, Chain>;
  apiConfig: ApiConfig;
  includeEnsNames?: boolean;
  ensPublicClient?: PublicClient<Transport, Chain>;
};

export type PoolClientConfig = {
  chainId: number;
  publicClient?: PublicClient<Transport, Chain>;
  walletClient?: WalletClient<Transport, Chain, Account>;
  apiConfig?: ApiConfig;
  includeEnsNames?: boolean;
  ensPublicClient?: PublicClient<Transport, Chain>;
};

export type TransactionConfig = {
  transactionType: TransactionType;
};

export enum AllocationType {
  Fixed = 0,
  Percentage = 1,
  FixedPrioritized = 2,
  FixedTimed = 3,
  PercentagePrioritized = 4,
  PercentageTimed = 5,
}

export type Allocation =
  | AllocationFixed
  | AllocationPercentage
  | AllocationFixedPrioritized
  | AllocationFixedTimed
  | AllocationPercentagePrioritized
  | AllocationPercentageTimed;

type AllocationBase =
  | ({
      id: bigint;
      version: string;
    } & {
      recipient: Address;
    })
  | { target: bigint };

export type AllocationFixedBase = {
  amount: bigint;
} & AllocationBase;

export type AllocationPercentageBase = {
  share: bigint;
} & AllocationBase;

export type AllocationFixed = {
  allocationType: AllocationType.Fixed;
} & AllocationFixedBase;

export type AllocationPercentage = {
  allocationType: AllocationType.Percentage;
} & AllocationPercentageBase;

export type AllocationFixedPrioritized = {
  allocationType: AllocationType.FixedPrioritized;
  position: number;
} & AllocationFixedBase;

export type AllocationPercentagePrioritized = {
  allocationType: AllocationType.PercentagePrioritized;
  position: number;
} & AllocationPercentageBase;

export type AllocationFixedTimed = {
  allocationType: AllocationType.FixedTimed;
  timespan: number;
} & AllocationFixedBase;

export type AllocationPercentageTimed = {
  allocationType: AllocationType.PercentageTimed;
  timespan: number;
} & AllocationPercentageBase;

export type CreatePoolConfig = {
  allocations: Allocation[];
  ownerAddress: string;
  salt: bigint;
} & TransactionOverridesDict;

export type SetPoolAllocationConfig = {
  poolAddress: Address;
  poolAllocation: Allocation[];
} & TransactionOverridesDict;

export type WithdrawConfig = {
  poolAddress: Address;
  recipientAddress?: Address;
  tokenAddress: Address;
  poolAllocations: Allocation[];
  indices: number[];
  amounts: number[];
} & TransactionOverridesDict;

export type TransferOwnershipConfig = {
  poolAddress: Address;
  newOwner: Address;
} & TransactionOverridesDict;

export type SetPausedConfig = {
  poolAddress: Address;
  paused: boolean;
} & TransactionOverridesDict;

export type CallData = {
  address: string;
  data: Hex;
};

export type TransactionFormat = Hash | bigint | CallData;
