import type {
  AccessList,
  Account,
  Address,
  Chain,
  Hash,
  Hex,
  PublicClient,
  TransactionType,
  Transport,
  ValueOf,
  WalletClient,
} from "viem";

export type KeyedValue<
  T extends Record<string, string> = Record<string, string>,
> = {
  [K in ValueOf<T>]: {
    key: K;
    name: string;
  };
};

interface TransactionOverrides {
  accessList?: AccessList;
  gas?: bigint;
  maxFeePerGas?: bigint;
  maxPriorityFeePerGas?: bigint;
  nonce?: number;
  value?: bigint;
}

interface TransactionOverridesDict {
  transactionOverrides?: TransactionOverrides;
}

interface ApiConfig {
  apiKey: string;
  serverURL?: string;
}

interface DataClientConfig {
  apiConfig: ApiConfig;
  ensPublicClient?: PublicClient<Transport, Chain>;
  includeEnsNames?: boolean;
  publicClient?: PublicClient<Transport, Chain>;
}

interface MutualsClientConfig {
  apiConfig?: ApiConfig;
  chainId: number;
  ensPublicClient?: PublicClient<Transport, Chain>;
  includeEnsNames?: boolean;
  publicClient?: PublicClient<Transport, Chain>;
  walletClient?: WalletClient<Transport, Chain, Account>;
}

interface TransactionConfig {
  transactionType: TransactionType;
}

interface RawAllocation {
  allocationType: bigint;
  amountOrShare: bigint;
  id: bigint;
  position: bigint;
  recipient: bigint;
  target: bigint;
  timespan: bigint;
}

type Allocation = unknown; // PoolAllocationInput;

type CreatePoolConfig = {
  allocations: Allocation[];
  ownerAddress: string;
  salt: bigint;
} & TransactionOverridesDict;

type SetPoolAllocationConfig = {
  poolAddress: Address;
  poolAllocation: Allocation[];
} & TransactionOverridesDict;

type WithdrawConfig = {
  poolAddress: Address;
  recipientAddress?: Address;
  tokenAddress: Address;
  poolAllocations: Allocation[];
  indices: number[];
  amounts: number[];
} & TransactionOverridesDict;

type TransferOwnershipConfig = {
  poolAddress: Address;
  newOwner: Address;
} & TransactionOverridesDict;

type SetPausedConfig = {
  poolAddress: Address;
  paused: boolean;
} & TransactionOverridesDict;

// TODO remove when not needed
type CalculationType = unknown;
type RecipientType = unknown;
// new types

type CreateDefaultAllocationFn = (
  calculationType: CalculationType,
  recipientType: RecipientType
) => Allocation;

interface CallData {
  address: string;
  data: Hex;
}

type TransactionFormat = Hash | bigint | CallData;

export type {
  Allocation,
  ApiConfig,
  CalculationType,
  CallData,
  CreateDefaultAllocationFn,
  CreatePoolConfig,
  DataClientConfig,
  MutualsClientConfig,
  RawAllocation,
  RecipientType,
  SetPausedConfig,
  SetPoolAllocationConfig,
  TransactionConfig,
  TransactionFormat,
  TransactionOverrides,
  TransferOwnershipConfig,
  WithdrawConfig,
};
