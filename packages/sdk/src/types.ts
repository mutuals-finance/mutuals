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

export type MutualsClientConfig = {
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

export type RawAllocation = {
  id: bigint;
  recipient: bigint;
  target: bigint;
  amountOrShare: bigint;
  allocationType: bigint;
  position: bigint;
  timespan: bigint;
};

export type Allocation =
  | AllocationFixed
  | AllocationPercentage
  | AllocationFixedPrioritized
  | AllocationFixedTimed
  | AllocationPercentagePrioritized
  | AllocationPercentageTimed;

export type AllocationBase = {
  value: number;
};

export type AllocationItemBase = {
  recipient: string;
} & AllocationBase;

export type AllocationFixed = {
  allocationType: AllocationType.Fixed;
} & AllocationItemBase;

export type AllocationPercentage = {
  allocationType: AllocationType.Percentage;
} & AllocationItemBase;

export type AllocationFixedPrioritized = {
  allocationType: AllocationType.FixedPrioritized;
} & AllocationBase;

export type AllocationPercentagePrioritized = {
  allocationType: AllocationType.PercentagePrioritized;
} & AllocationBase;

export type AllocationFixedTimed = {
  allocationType: AllocationType.FixedTimed;
  timespan: number;
} & AllocationBase;

export type AllocationPercentageTimed = {
  allocationType: AllocationType.PercentageTimed;
  timespan: number;
} & AllocationBase;

export type Node<TNode, TChildren = TNode> = {
  node: TNode;
  children?: Array<Node<TChildren>>;
};

export type AllocationGroup =
  | AllocationFixedPrioritized
  | AllocationPercentagePrioritized
  | AllocationFixedTimed
  | AllocationPercentageTimed;

export type AllocationItem = AllocationFixed | AllocationPercentage;

export type AllocationNode = Node<Allocation>;
export type AllocationGroupNode = Node<AllocationGroup>;
export type AllocationItemNode = Node<AllocationItem>;

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

export type CreateDefaultAllocationFn = (
  allocationType: AllocationItem["allocationType"],
) => AllocationGroupNode;

export type CallData = {
  address: string;
  data: Hex;
};

export type TransactionFormat = Hash | bigint | CallData;
