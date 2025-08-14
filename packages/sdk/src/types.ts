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

import {
  CalculationType,
  PoolAllocationInput,
  RecipientType,
} from "@mutuals/graphql-client-nextjs";

type TransactionOverrides = {
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

type ApiConfig = {
  apiKey: string;
  serverURL?: string;
};

type DataClientConfig = {
  publicClient?: PublicClient<Transport, Chain>;
  apiConfig: ApiConfig;
  includeEnsNames?: boolean;
  ensPublicClient?: PublicClient<Transport, Chain>;
};

type MutualsClientConfig = {
  chainId: number;
  publicClient?: PublicClient<Transport, Chain>;
  walletClient?: WalletClient<Transport, Chain, Account>;
  apiConfig?: ApiConfig;
  includeEnsNames?: boolean;
  ensPublicClient?: PublicClient<Transport, Chain>;
};

type TransactionConfig = {
  transactionType: TransactionType;
};

type RawAllocation = {
  id: bigint;
  recipient: bigint;
  target: bigint;
  amountOrShare: bigint;
  allocationType: bigint;
  position: bigint;
  timespan: bigint;
};

type Allocation = PoolAllocationInput;

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

type CreateDefaultAllocationFn = (
  calculationType: CalculationType,
  recipientType: RecipientType,
) => Allocation;

type CallData = {
  address: string;
  data: Hex;
};

type TransactionFormat = Hash | bigint | CallData;

export { CalculationType, RecipientType };

export type {
  TransactionOverrides,
  ApiConfig,
  DataClientConfig,
  MutualsClientConfig,
  TransactionConfig,
  RawAllocation,
  Allocation,
  CreatePoolConfig,
  SetPoolAllocationConfig,
  WithdrawConfig,
  TransferOwnershipConfig,
  SetPausedConfig,
  CreateDefaultAllocationFn,
  CallData,
  TransactionFormat,
};
