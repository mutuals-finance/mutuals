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
import { CALCULATION_TYPE_KEY, RECIPIENT_TYPE_KEY } from "./constants";

export type ValueOf<T> = T[keyof T];

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
  Fixed = "0",
  Percentage = "1",
  FixedPrioritized = "2",
  FixedTimed = "3",
  PercentagePrioritized = "4",
  PercentageTimed = "5",
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

export type Allocation = {
  value: number;
  calculationType: CalculationType[];
  recipientType: RecipientType[];
  recipient?: string;
  timespan?: number;
  children?: Allocation[];
};

export type RecipientType = ValueOf<typeof RECIPIENT_TYPE_KEY>;
export type CalculationType = ValueOf<typeof CALCULATION_TYPE_KEY>;

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
  calculationType: CalculationType,
  recipientType: RecipientType,
) => Allocation;

export type CallData = {
  address: string;
  data: Hex;
};

export type TransactionFormat = Hash | bigint | CallData;
