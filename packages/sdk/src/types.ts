import {
  AccessList,
  Account,
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

export type AllocationInput =
  | AllocationInputFixed
  | AllocationInputPercentage
  | AllocationInputFixedPrioritized
  | AllocationInputFixedTimed
  | AllocationInputPercentagePrioritized
  | AllocationInputPercentageTimed;

export type Allocation = {
  id: bigint;
  version: bigint;
  allocationType: bigint;
  target: bigint;
  recipient: bigint;
  amountOrShare: bigint;
  position: bigint;
  timespan: bigint;
};

type AllocationInputBase = {
  id: string;
  version: string;
  recipient: string;
  target: string;
};

export type AllocationInputFixedBase = {
  amount: bigint;
};

export type AllocationInputPercentageBase = {
  share: bigint;
};

export type AllocationInputFixed = {
  allocationType: AllocationType.Fixed;
} & AllocationInputFixedBase &
  AllocationInputBase;

export type AllocationInputPercentage = {
  allocationType: AllocationType.Percentage;
} & AllocationInputPercentageBase &
  AllocationInputBase;

export type AllocationInputFixedPrioritized = {
  allocationType: AllocationType.FixedPrioritized;
  position: number;
} & AllocationInputFixedBase &
  AllocationInputBase;

export type AllocationInputPercentagePrioritized = {
  allocationType: AllocationType.PercentagePrioritized;
  position: number;
} & AllocationInputPercentageBase &
  AllocationInputBase;

export type AllocationInputFixedTimed = {
  allocationType: AllocationType.FixedTimed;
  timespan: number;
} & AllocationInputFixedBase &
  AllocationInputBase;

export type AllocationInputPercentageTimed = {
  allocationType: AllocationType.PercentageTimed;
  timespan: number;
} & AllocationInputPercentageBase &
  AllocationInputBase;

export type CreatePoolConfig = {
  allocations: AllocationInput[];
  owner: string;
} & TransactionOverridesDict;

export type StorePoolConfig = {
  title: string;
  description: string;
  allocations: AllocationInput[];
  owner: string;
};

export type CallData = {
  address: string;
  data: Hex;
};

export type TransactionFormat = Hash | bigint | CallData;
