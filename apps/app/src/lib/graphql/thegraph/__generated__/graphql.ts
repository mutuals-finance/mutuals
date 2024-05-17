/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigDecimal: { input: any; output: any };
  BigInt: { input: any; output: any };
  Bytes: { input: any; output: any };
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any };
};

export type BlockChangedFilter = {
  number_gte: Scalars["Int"]["input"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ContractUriUpdate = {
  __typename?: "ContractURIUpdate";
  id: Scalars["ID"]["output"];
  logIndex?: Maybe<Scalars["BigInt"]["output"]>;
  newURI: Scalars["String"]["output"];
  origin: Scalars["Bytes"]["output"];
  previousURI: Scalars["String"]["output"];
  split: Split;
  transaction: Transaction;
};

export type ContractUriUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ContractUriUpdate_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  logIndex?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  logIndex_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  newURI?: InputMaybe<Scalars["String"]["input"]>;
  newURI_contains?: InputMaybe<Scalars["String"]["input"]>;
  newURI_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  newURI_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  newURI_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  newURI_gt?: InputMaybe<Scalars["String"]["input"]>;
  newURI_gte?: InputMaybe<Scalars["String"]["input"]>;
  newURI_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  newURI_lt?: InputMaybe<Scalars["String"]["input"]>;
  newURI_lte?: InputMaybe<Scalars["String"]["input"]>;
  newURI_not?: InputMaybe<Scalars["String"]["input"]>;
  newURI_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  newURI_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  newURI_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  newURI_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  newURI_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  newURI_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  newURI_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  newURI_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  newURI_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<ContractUriUpdate_Filter>>>;
  origin?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  origin_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  previousURI?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_contains?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_gt?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_gte?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  previousURI_lt?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_lte?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_not?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  previousURI_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  previousURI_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split?: InputMaybe<Scalars["String"]["input"]>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_gt?: InputMaybe<Scalars["String"]["input"]>;
  split_gte?: InputMaybe<Scalars["String"]["input"]>;
  split_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_lt?: InputMaybe<Scalars["String"]["input"]>;
  split_lte?: InputMaybe<Scalars["String"]["input"]>;
  split_not?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction?: InputMaybe<Scalars["String"]["input"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]["input"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction_gt?: InputMaybe<Scalars["String"]["input"]>;
  transaction_gte?: InputMaybe<Scalars["String"]["input"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]["input"]>;
  transaction_lte?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum ContractUriUpdate_OrderBy {
  Id = "id",
  LogIndex = "logIndex",
  NewUri = "newURI",
  Origin = "origin",
  PreviousUri = "previousURI",
  Split = "split",
  SplitAddress = "split__address",
  SplitBlockNumber = "split__blockNumber",
  SplitId = "split__id",
  SplitMetaDataUri = "split__metaDataUri",
  SplitShareCount = "split__shareCount",
  SplitTimestamp = "split__timestamp",
  SplitTotalShares = "split__totalShares",
  SplitTxCount = "split__txCount",
  Transaction = "transaction",
  TransactionBlockNumber = "transaction__blockNumber",
  TransactionGasPrice = "transaction__gasPrice",
  TransactionGasUsed = "transaction__gasUsed",
  TransactionId = "transaction__id",
  TransactionTimestamp = "transaction__timestamp",
}

export type Deposit = TokenValue & {
  __typename?: "Deposit";
  amount: Scalars["BigInt"]["output"];
  from: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  logIndex?: Maybe<Scalars["BigInt"]["output"]>;
  origin: Scalars["Bytes"]["output"];
  split: Split;
  token: Token;
  transaction: Transaction;
  type: TokenValueType;
};

export type Deposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>;
  from?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  from_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  logIndex?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  logIndex_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>;
  origin?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  origin_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  split?: InputMaybe<Scalars["String"]["input"]>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_gt?: InputMaybe<Scalars["String"]["input"]>;
  split_gte?: InputMaybe<Scalars["String"]["input"]>;
  split_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_lt?: InputMaybe<Scalars["String"]["input"]>;
  split_lte?: InputMaybe<Scalars["String"]["input"]>;
  split_not?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction?: InputMaybe<Scalars["String"]["input"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]["input"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction_gt?: InputMaybe<Scalars["String"]["input"]>;
  transaction_gte?: InputMaybe<Scalars["String"]["input"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]["input"]>;
  transaction_lte?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<TokenValueType>;
  type_in?: InputMaybe<Array<TokenValueType>>;
  type_not?: InputMaybe<TokenValueType>;
  type_not_in?: InputMaybe<Array<TokenValueType>>;
};

export enum Deposit_OrderBy {
  Amount = "amount",
  From = "from",
  Id = "id",
  LogIndex = "logIndex",
  Origin = "origin",
  Split = "split",
  SplitAddress = "split__address",
  SplitBlockNumber = "split__blockNumber",
  SplitId = "split__id",
  SplitMetaDataUri = "split__metaDataUri",
  SplitShareCount = "split__shareCount",
  SplitTimestamp = "split__timestamp",
  SplitTotalShares = "split__totalShares",
  SplitTxCount = "split__txCount",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenTotalSupply = "token__totalSupply",
  Transaction = "transaction",
  TransactionBlockNumber = "transaction__blockNumber",
  TransactionGasPrice = "transaction__gasPrice",
  TransactionGasUsed = "transaction__gasUsed",
  TransactionId = "transaction__id",
  TransactionTimestamp = "transaction__timestamp",
  Type = "type",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  contractURIUpdate?: Maybe<ContractUriUpdate>;
  contractURIUpdates: Array<ContractUriUpdate>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  share?: Maybe<Share>;
  shares: Array<Share>;
  split?: Maybe<Split>;
  splitFactories: Array<SplitFactory>;
  splitFactory?: Maybe<SplitFactory>;
  splitMetadata: Array<SplitMetadata>;
  splits: Array<Split>;
  token?: Maybe<Token>;
  tokenDeposit?: Maybe<TokenDeposit>;
  tokenDeposits: Array<TokenDeposit>;
  tokenValue?: Maybe<TokenValue>;
  tokenValues: Array<TokenValue>;
  tokenWithdrawable?: Maybe<TokenWithdrawable>;
  tokenWithdrawables: Array<TokenWithdrawable>;
  tokenWithdrawal?: Maybe<TokenWithdrawal>;
  tokenWithdrawals: Array<TokenWithdrawal>;
  tokens: Array<Token>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  withdrawal?: Maybe<Withdrawal>;
  withdrawals: Array<Withdrawal>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryContractUriUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryContractUriUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ContractUriUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContractUriUpdate_Filter>;
};

export type QueryDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};

export type QueryShareArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySharesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Share_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Share_Filter>;
};

export type QuerySplitArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySplitFactoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<SplitFactory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitFactory_Filter>;
};

export type QuerySplitFactoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySplitMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<SplitMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitMetadata_Filter>;
};

export type QuerySplitsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Split_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Split_Filter>;
};

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDeposit_Filter>;
};

export type QueryTokenValueArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenValuesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenValue_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenValue_Filter>;
};

export type QueryTokenWithdrawableArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenWithdrawablesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenWithdrawable_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenWithdrawable_Filter>;
};

export type QueryTokenWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenWithdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenWithdrawal_Filter>;
};

export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type QueryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type QueryWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Withdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdrawal_Filter>;
};

export type Share = {
  __typename?: "Share";
  blockNumber: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  payee: Scalars["Bytes"]["output"];
  split: Split;
  timestamp: Scalars["BigInt"]["output"];
  value: Scalars["BigDecimal"]["output"];
  valueBp: Scalars["BigInt"]["output"];
};

export type Share_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Share_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Share_Filter>>>;
  payee?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  payee_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  payee_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  split?: InputMaybe<Scalars["String"]["input"]>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_gt?: InputMaybe<Scalars["String"]["input"]>;
  split_gte?: InputMaybe<Scalars["String"]["input"]>;
  split_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_lt?: InputMaybe<Scalars["String"]["input"]>;
  split_lte?: InputMaybe<Scalars["String"]["input"]>;
  split_not?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  value?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  valueBp?: InputMaybe<Scalars["BigInt"]["input"]>;
  valueBp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  valueBp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  valueBp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  valueBp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  valueBp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  valueBp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  valueBp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
};

export enum Share_OrderBy {
  BlockNumber = "blockNumber",
  Id = "id",
  Payee = "payee",
  Split = "split",
  SplitAddress = "split__address",
  SplitBlockNumber = "split__blockNumber",
  SplitId = "split__id",
  SplitMetaDataUri = "split__metaDataUri",
  SplitShareCount = "split__shareCount",
  SplitTimestamp = "split__timestamp",
  SplitTotalShares = "split__totalShares",
  SplitTxCount = "split__txCount",
  Timestamp = "timestamp",
  Value = "value",
  ValueBp = "valueBp",
}

export type Split = {
  __typename?: "Split";
  address: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  contractURIUpdates: Array<ContractUriUpdate>;
  deposits: Array<Deposit>;
  factory: SplitFactory;
  id: Scalars["ID"]["output"];
  metaData: SplitMetadata;
  metaDataUri?: Maybe<Scalars["String"]["output"]>;
  shareCount: Scalars["BigInt"]["output"];
  shares: Array<Share>;
  timestamp: Scalars["BigInt"]["output"];
  tokenDeposits: Array<TokenDeposit>;
  tokenWithdrawals: Array<TokenWithdrawal>;
  totalShares: Scalars["BigInt"]["output"];
  transactions: Array<Transaction>;
  txCount: Scalars["BigInt"]["output"];
  withdrawableTokens: Array<TokenWithdrawable>;
  withdrawals: Array<Withdrawal>;
};

export type SplitContractUriUpdatesArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ContractUriUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ContractUriUpdate_Filter>;
};

export type SplitDepositsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type SplitSharesArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Share_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Share_Filter>;
};

export type SplitTokenDepositsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TokenDeposit_Filter>;
};

export type SplitTokenWithdrawalsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenWithdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TokenWithdrawal_Filter>;
};

export type SplitTransactionsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Transaction_Filter>;
};

export type SplitWithdrawableTokensArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenWithdrawable_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TokenWithdrawable_Filter>;
};

export type SplitWithdrawalsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Withdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Withdrawal_Filter>;
};

export type SplitFactory = {
  __typename?: "SplitFactory";
  beacon: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  owner: Scalars["Bytes"]["output"];
  splits: Array<Split>;
  splitsCount: Scalars["BigInt"]["output"];
};

export type SplitFactorySplitsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Split_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Split_Filter>;
};

export type SplitFactory_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SplitFactory_Filter>>>;
  beacon?: InputMaybe<Scalars["Bytes"]["input"]>;
  beacon_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  beacon_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  beacon_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  beacon_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  beacon_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  beacon_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  beacon_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  beacon_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  beacon_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<SplitFactory_Filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  splitsCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  splitsCount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  splitsCount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  splitsCount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  splitsCount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  splitsCount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  splitsCount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  splitsCount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  splits_?: InputMaybe<Split_Filter>;
};

export enum SplitFactory_OrderBy {
  Beacon = "beacon",
  Id = "id",
  Owner = "owner",
  Splits = "splits",
  SplitsCount = "splitsCount",
}

export type SplitMetadata = {
  __typename?: "SplitMetadata";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type SplitMetadata_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SplitMetadata_Filter>>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  description_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_gt?: InputMaybe<Scalars["String"]["input"]>;
  description_gte?: InputMaybe<Scalars["String"]["input"]>;
  description_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_lt?: InputMaybe<Scalars["String"]["input"]>;
  description_lte?: InputMaybe<Scalars["String"]["input"]>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  description_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  description_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  description_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  image_contains?: InputMaybe<Scalars["String"]["input"]>;
  image_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  image_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_gt?: InputMaybe<Scalars["String"]["input"]>;
  image_gte?: InputMaybe<Scalars["String"]["input"]>;
  image_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  image_lt?: InputMaybe<Scalars["String"]["input"]>;
  image_lte?: InputMaybe<Scalars["String"]["input"]>;
  image_not?: InputMaybe<Scalars["String"]["input"]>;
  image_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  image_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  image_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  image_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  image_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  image_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  image_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<SplitMetadata_Filter>>>;
};

export enum SplitMetadata_OrderBy {
  Description = "description",
  Id = "id",
  Image = "image",
  Name = "name",
}

export type Split_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  address_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Split_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  contractURIUpdates_?: InputMaybe<ContractUriUpdate_Filter>;
  deposits_?: InputMaybe<Deposit_Filter>;
  factory?: InputMaybe<Scalars["String"]["input"]>;
  factory_?: InputMaybe<SplitFactory_Filter>;
  factory_contains?: InputMaybe<Scalars["String"]["input"]>;
  factory_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  factory_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  factory_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  factory_gt?: InputMaybe<Scalars["String"]["input"]>;
  factory_gte?: InputMaybe<Scalars["String"]["input"]>;
  factory_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  factory_lt?: InputMaybe<Scalars["String"]["input"]>;
  factory_lte?: InputMaybe<Scalars["String"]["input"]>;
  factory_not?: InputMaybe<Scalars["String"]["input"]>;
  factory_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  factory_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  factory_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  factory_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  factory_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  factory_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  factory_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  metaData?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_gt?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_gte?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  metaDataUri_lt?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_lte?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_not?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  metaDataUri_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  metaDataUri_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metaData_?: InputMaybe<SplitMetadata_Filter>;
  metaData_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaData_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metaData_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  metaData_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metaData_gt?: InputMaybe<Scalars["String"]["input"]>;
  metaData_gte?: InputMaybe<Scalars["String"]["input"]>;
  metaData_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  metaData_lt?: InputMaybe<Scalars["String"]["input"]>;
  metaData_lte?: InputMaybe<Scalars["String"]["input"]>;
  metaData_not?: InputMaybe<Scalars["String"]["input"]>;
  metaData_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  metaData_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metaData_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  metaData_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metaData_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  metaData_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  metaData_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  metaData_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  metaData_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Split_Filter>>>;
  shareCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  shareCount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shareCount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shareCount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  shareCount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shareCount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shareCount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  shareCount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  shares_?: InputMaybe<Share_Filter>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenDeposits_?: InputMaybe<TokenDeposit_Filter>;
  tokenWithdrawals_?: InputMaybe<TokenWithdrawal_Filter>;
  totalShares?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalShares_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalShares_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalShares_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalShares_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalShares_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalShares_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalShares_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactions_?: InputMaybe<Transaction_Filter>;
  txCount?: InputMaybe<Scalars["BigInt"]["input"]>;
  txCount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  txCount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  txCount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  txCount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  txCount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  txCount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  txCount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  withdrawableTokens_?: InputMaybe<TokenWithdrawable_Filter>;
  withdrawals_?: InputMaybe<Withdrawal_Filter>;
};

export enum Split_OrderBy {
  Address = "address",
  BlockNumber = "blockNumber",
  ContractUriUpdates = "contractURIUpdates",
  Deposits = "deposits",
  Factory = "factory",
  FactoryBeacon = "factory__beacon",
  FactoryId = "factory__id",
  FactoryOwner = "factory__owner",
  FactorySplitsCount = "factory__splitsCount",
  Id = "id",
  MetaData = "metaData",
  MetaDataUri = "metaDataUri",
  MetaDataDescription = "metaData__description",
  MetaDataId = "metaData__id",
  MetaDataImage = "metaData__image",
  MetaDataName = "metaData__name",
  ShareCount = "shareCount",
  Shares = "shares",
  Timestamp = "timestamp",
  TokenDeposits = "tokenDeposits",
  TokenWithdrawals = "tokenWithdrawals",
  TotalShares = "totalShares",
  Transactions = "transactions",
  TxCount = "txCount",
  WithdrawableTokens = "withdrawableTokens",
  Withdrawals = "withdrawals",
}

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  contractURIUpdate?: Maybe<ContractUriUpdate>;
  contractURIUpdates: Array<ContractUriUpdate>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  share?: Maybe<Share>;
  shares: Array<Share>;
  split?: Maybe<Split>;
  splitFactories: Array<SplitFactory>;
  splitFactory?: Maybe<SplitFactory>;
  splitMetadata: Array<SplitMetadata>;
  splits: Array<Split>;
  token?: Maybe<Token>;
  tokenDeposit?: Maybe<TokenDeposit>;
  tokenDeposits: Array<TokenDeposit>;
  tokenValue?: Maybe<TokenValue>;
  tokenValues: Array<TokenValue>;
  tokenWithdrawable?: Maybe<TokenWithdrawable>;
  tokenWithdrawables: Array<TokenWithdrawable>;
  tokenWithdrawal?: Maybe<TokenWithdrawal>;
  tokenWithdrawals: Array<TokenWithdrawal>;
  tokens: Array<Token>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  withdrawal?: Maybe<Withdrawal>;
  withdrawals: Array<Withdrawal>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionContractUriUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionContractUriUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ContractUriUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContractUriUpdate_Filter>;
};

export type SubscriptionDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};

export type SubscriptionShareArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSharesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Share_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Share_Filter>;
};

export type SubscriptionSplitArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSplitFactoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<SplitFactory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitFactory_Filter>;
};

export type SubscriptionSplitFactoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSplitMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<SplitMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitMetadata_Filter>;
};

export type SubscriptionSplitsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Split_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Split_Filter>;
};

export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDeposit_Filter>;
};

export type SubscriptionTokenValueArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenValuesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenValue_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenValue_Filter>;
};

export type SubscriptionTokenWithdrawableArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenWithdrawablesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenWithdrawable_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenWithdrawable_Filter>;
};

export type SubscriptionTokenWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenWithdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenWithdrawal_Filter>;
};

export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type SubscriptionTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type SubscriptionWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Withdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdrawal_Filter>;
};

export type Token = {
  __typename?: "Token";
  decimals: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  symbol: Scalars["String"]["output"];
  totalSupply?: Maybe<Scalars["BigInt"]["output"]>;
};

export type TokenDeposit = TokenValue & {
  __typename?: "TokenDeposit";
  amount: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  split: Split;
  token: Token;
  type: TokenValueType;
};

export type TokenDeposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<TokenDeposit_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TokenDeposit_Filter>>>;
  split?: InputMaybe<Scalars["String"]["input"]>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_gt?: InputMaybe<Scalars["String"]["input"]>;
  split_gte?: InputMaybe<Scalars["String"]["input"]>;
  split_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_lt?: InputMaybe<Scalars["String"]["input"]>;
  split_lte?: InputMaybe<Scalars["String"]["input"]>;
  split_not?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<TokenValueType>;
  type_in?: InputMaybe<Array<TokenValueType>>;
  type_not?: InputMaybe<TokenValueType>;
  type_not_in?: InputMaybe<Array<TokenValueType>>;
};

export enum TokenDeposit_OrderBy {
  Amount = "amount",
  Id = "id",
  Split = "split",
  SplitAddress = "split__address",
  SplitBlockNumber = "split__blockNumber",
  SplitId = "split__id",
  SplitMetaDataUri = "split__metaDataUri",
  SplitShareCount = "split__shareCount",
  SplitTimestamp = "split__timestamp",
  SplitTotalShares = "split__totalShares",
  SplitTxCount = "split__txCount",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenTotalSupply = "token__totalSupply",
  Type = "type",
}

export type TokenValue = {
  amount: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  token: Token;
  type: TokenValueType;
};

export enum TokenValueType {
  Deposit = "Deposit",
  Withdrawable = "Withdrawable",
  Withdrawal = "Withdrawal",
}

export type TokenValue_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<TokenValue_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TokenValue_Filter>>>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<TokenValueType>;
  type_in?: InputMaybe<Array<TokenValueType>>;
  type_not?: InputMaybe<TokenValueType>;
  type_not_in?: InputMaybe<Array<TokenValueType>>;
};

export enum TokenValue_OrderBy {
  Amount = "amount",
  Id = "id",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenTotalSupply = "token__totalSupply",
  Type = "type",
}

export type TokenWithdrawable = TokenValue & {
  __typename?: "TokenWithdrawable";
  amount: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  split: Split;
  token: Token;
  type: TokenValueType;
};

export type TokenWithdrawable_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<TokenWithdrawable_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TokenWithdrawable_Filter>>>;
  split?: InputMaybe<Scalars["String"]["input"]>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_gt?: InputMaybe<Scalars["String"]["input"]>;
  split_gte?: InputMaybe<Scalars["String"]["input"]>;
  split_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_lt?: InputMaybe<Scalars["String"]["input"]>;
  split_lte?: InputMaybe<Scalars["String"]["input"]>;
  split_not?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<TokenValueType>;
  type_in?: InputMaybe<Array<TokenValueType>>;
  type_not?: InputMaybe<TokenValueType>;
  type_not_in?: InputMaybe<Array<TokenValueType>>;
};

export enum TokenWithdrawable_OrderBy {
  Amount = "amount",
  Id = "id",
  Split = "split",
  SplitAddress = "split__address",
  SplitBlockNumber = "split__blockNumber",
  SplitId = "split__id",
  SplitMetaDataUri = "split__metaDataUri",
  SplitShareCount = "split__shareCount",
  SplitTimestamp = "split__timestamp",
  SplitTotalShares = "split__totalShares",
  SplitTxCount = "split__txCount",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenTotalSupply = "token__totalSupply",
  Type = "type",
}

export type TokenWithdrawal = TokenValue & {
  __typename?: "TokenWithdrawal";
  amount: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  split: Split;
  token: Token;
  type: TokenValueType;
};

export type TokenWithdrawal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<TokenWithdrawal_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TokenWithdrawal_Filter>>>;
  split?: InputMaybe<Scalars["String"]["input"]>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_gt?: InputMaybe<Scalars["String"]["input"]>;
  split_gte?: InputMaybe<Scalars["String"]["input"]>;
  split_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_lt?: InputMaybe<Scalars["String"]["input"]>;
  split_lte?: InputMaybe<Scalars["String"]["input"]>;
  split_not?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<TokenValueType>;
  type_in?: InputMaybe<Array<TokenValueType>>;
  type_not?: InputMaybe<TokenValueType>;
  type_not_in?: InputMaybe<Array<TokenValueType>>;
};

export enum TokenWithdrawal_OrderBy {
  Amount = "amount",
  Id = "id",
  Split = "split",
  SplitAddress = "split__address",
  SplitBlockNumber = "split__blockNumber",
  SplitId = "split__id",
  SplitMetaDataUri = "split__metaDataUri",
  SplitShareCount = "split__shareCount",
  SplitTimestamp = "split__timestamp",
  SplitTotalShares = "split__totalShares",
  SplitTxCount = "split__txCount",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenTotalSupply = "token__totalSupply",
  Type = "type",
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  decimals?: InputMaybe<Scalars["BigInt"]["input"]>;
  decimals_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  decimals_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  decimals_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  decimals_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  decimals_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  decimals_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  symbol?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_lte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  totalSupply?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalSupply_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum Token_OrderBy {
  Decimals = "decimals",
  Id = "id",
  Name = "name",
  Symbol = "symbol",
  TotalSupply = "totalSupply",
}

export type Transaction = {
  __typename?: "Transaction";
  blockNumber: Scalars["BigInt"]["output"];
  contractURIUpdates: Array<ContractUriUpdate>;
  deposits: Array<Deposit>;
  gasPrice: Scalars["BigInt"]["output"];
  gasUsed: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  split: Split;
  timestamp: Scalars["BigInt"]["output"];
  withdrawals: Array<Withdrawal>;
};

export type TransactionContractUriUpdatesArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ContractUriUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ContractUriUpdate_Filter>;
};

export type TransactionDepositsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type TransactionWithdrawalsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Withdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Withdrawal_Filter>;
};

export type Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  contractURIUpdates_?: InputMaybe<ContractUriUpdate_Filter>;
  deposits_?: InputMaybe<Deposit_Filter>;
  gasPrice?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasPrice_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasPrice_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasPrice_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  gasPrice_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasPrice_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasPrice_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  gasUsed?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasUsed_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasUsed_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasUsed_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  gasUsed_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasUsed_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasUsed_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  gasUsed_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  split?: InputMaybe<Scalars["String"]["input"]>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_gt?: InputMaybe<Scalars["String"]["input"]>;
  split_gte?: InputMaybe<Scalars["String"]["input"]>;
  split_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_lt?: InputMaybe<Scalars["String"]["input"]>;
  split_lte?: InputMaybe<Scalars["String"]["input"]>;
  split_not?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  withdrawals_?: InputMaybe<Withdrawal_Filter>;
};

export enum Transaction_OrderBy {
  BlockNumber = "blockNumber",
  ContractUriUpdates = "contractURIUpdates",
  Deposits = "deposits",
  GasPrice = "gasPrice",
  GasUsed = "gasUsed",
  Id = "id",
  Split = "split",
  SplitAddress = "split__address",
  SplitBlockNumber = "split__blockNumber",
  SplitId = "split__id",
  SplitMetaDataUri = "split__metaDataUri",
  SplitShareCount = "split__shareCount",
  SplitTimestamp = "split__timestamp",
  SplitTotalShares = "split__totalShares",
  SplitTxCount = "split__txCount",
  Timestamp = "timestamp",
  Withdrawals = "withdrawals",
}

export type Withdrawal = TokenValue & {
  __typename?: "Withdrawal";
  amount: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  logIndex?: Maybe<Scalars["BigInt"]["output"]>;
  origin: Scalars["Bytes"]["output"];
  split: Split;
  to: Scalars["Bytes"]["output"];
  token: Token;
  transaction: Transaction;
  type: TokenValueType;
};

export type Withdrawal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Withdrawal_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  logIndex?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  logIndex_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  logIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Withdrawal_Filter>>>;
  origin?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  origin_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  origin_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  split?: InputMaybe<Scalars["String"]["input"]>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_gt?: InputMaybe<Scalars["String"]["input"]>;
  split_gte?: InputMaybe<Scalars["String"]["input"]>;
  split_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_lt?: InputMaybe<Scalars["String"]["input"]>;
  split_lte?: InputMaybe<Scalars["String"]["input"]>;
  split_not?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  split_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  split_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  split_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  to?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction?: InputMaybe<Scalars["String"]["input"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]["input"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction_gt?: InputMaybe<Scalars["String"]["input"]>;
  transaction_gte?: InputMaybe<Scalars["String"]["input"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]["input"]>;
  transaction_lte?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<TokenValueType>;
  type_in?: InputMaybe<Array<TokenValueType>>;
  type_not?: InputMaybe<TokenValueType>;
  type_not_in?: InputMaybe<Array<TokenValueType>>;
};

export enum Withdrawal_OrderBy {
  Amount = "amount",
  Id = "id",
  LogIndex = "logIndex",
  Origin = "origin",
  Split = "split",
  SplitAddress = "split__address",
  SplitBlockNumber = "split__blockNumber",
  SplitId = "split__id",
  SplitMetaDataUri = "split__metaDataUri",
  SplitShareCount = "split__shareCount",
  SplitTimestamp = "split__timestamp",
  SplitTotalShares = "split__totalShares",
  SplitTxCount = "split__txCount",
  To = "to",
  Token = "token",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenTotalSupply = "token__totalSupply",
  Transaction = "transaction",
  TransactionBlockNumber = "transaction__blockNumber",
  TransactionGasPrice = "transaction__gasPrice",
  TransactionGasUsed = "transaction__gasUsed",
  TransactionId = "transaction__id",
  TransactionTimestamp = "transaction__timestamp",
  Type = "type",
}

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]["output"]>;
  /** The block number */
  number: Scalars["Int"]["output"];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]["output"]>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"]["output"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"]["output"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type TokenFragmentFragment = {
  __typename?: "Token";
  id: string;
  symbol: string;
  name: string;
  decimals: any;
  totalSupply?: any | null;
} & { " $fragmentName"?: "TokenFragmentFragment" };

type TokenValueFragment_Deposit_Fragment = {
  __typename?: "Deposit";
  amount: any;
  token: { __typename?: "Token" } & {
    " $fragmentRefs"?: { TokenFragmentFragment: TokenFragmentFragment };
  };
} & { " $fragmentName"?: "TokenValueFragment_Deposit_Fragment" };

type TokenValueFragment_TokenDeposit_Fragment = {
  __typename?: "TokenDeposit";
  amount: any;
  token: { __typename?: "Token" } & {
    " $fragmentRefs"?: { TokenFragmentFragment: TokenFragmentFragment };
  };
} & { " $fragmentName"?: "TokenValueFragment_TokenDeposit_Fragment" };

type TokenValueFragment_TokenWithdrawable_Fragment = {
  __typename?: "TokenWithdrawable";
  amount: any;
  token: { __typename?: "Token" } & {
    " $fragmentRefs"?: { TokenFragmentFragment: TokenFragmentFragment };
  };
} & { " $fragmentName"?: "TokenValueFragment_TokenWithdrawable_Fragment" };

type TokenValueFragment_TokenWithdrawal_Fragment = {
  __typename?: "TokenWithdrawal";
  amount: any;
  token: { __typename?: "Token" } & {
    " $fragmentRefs"?: { TokenFragmentFragment: TokenFragmentFragment };
  };
} & { " $fragmentName"?: "TokenValueFragment_TokenWithdrawal_Fragment" };

type TokenValueFragment_Withdrawal_Fragment = {
  __typename?: "Withdrawal";
  amount: any;
  token: { __typename?: "Token" } & {
    " $fragmentRefs"?: { TokenFragmentFragment: TokenFragmentFragment };
  };
} & { " $fragmentName"?: "TokenValueFragment_Withdrawal_Fragment" };

export type TokenValueFragmentFragment =
  | TokenValueFragment_Deposit_Fragment
  | TokenValueFragment_TokenDeposit_Fragment
  | TokenValueFragment_TokenWithdrawable_Fragment
  | TokenValueFragment_TokenWithdrawal_Fragment
  | TokenValueFragment_Withdrawal_Fragment;

export type ShareFragmentFragment = {
  __typename?: "Share";
  id: string;
  payee: any;
  timestamp: any;
  value: any;
} & { " $fragmentName"?: "ShareFragmentFragment" };

export type TransactionBaseFragmentFragment = {
  __typename?: "Transaction";
  id: string;
  blockNumber: any;
  timestamp: any;
  gasUsed: any;
  gasPrice: any;
  split: { __typename?: "Split" } & {
    " $fragmentRefs"?: { SplitBaseFragmentFragment: SplitBaseFragmentFragment };
  };
} & { " $fragmentName"?: "TransactionBaseFragmentFragment" };

export type TransactionDetailsFragmentFragment = {
  __typename?: "Transaction";
  id: string;
  blockNumber: any;
  timestamp: any;
  gasUsed: any;
  gasPrice: any;
  split: { __typename?: "Split" } & {
    " $fragmentRefs"?: { SplitBaseFragmentFragment: SplitBaseFragmentFragment };
  };
  withdrawals: Array<
    { __typename?: "Withdrawal" } & {
      " $fragmentRefs"?: {
        WithdrawalFragmentFragment: WithdrawalFragmentFragment;
      };
    }
  >;
  deposits: Array<
    { __typename?: "Deposit" } & {
      " $fragmentRefs"?: { DepositFragmentFragment: DepositFragmentFragment };
    }
  >;
  contractURIUpdates: Array<
    { __typename?: "ContractURIUpdate" } & {
      " $fragmentRefs"?: {
        ContractUriUpdateFragmentFragment: ContractUriUpdateFragmentFragment;
      };
    }
  >;
} & { " $fragmentName"?: "TransactionDetailsFragmentFragment" };

export type WithdrawalFragmentFragment = {
  __typename?: "Withdrawal";
  amount: any;
  id: string;
  origin: any;
  logIndex?: any | null;
  to: any;
  token: {
    __typename?: "Token";
    id: string;
    symbol: string;
    name: string;
    decimals: any;
    totalSupply?: any | null;
  };
  transaction: { __typename?: "Transaction" } & {
    " $fragmentRefs"?: {
      TransactionBaseFragmentFragment: TransactionBaseFragmentFragment;
    };
  };
  split: { __typename?: "Split" } & {
    " $fragmentRefs"?: { SplitBaseFragmentFragment: SplitBaseFragmentFragment };
  };
} & { " $fragmentName"?: "WithdrawalFragmentFragment" };

export type DepositFragmentFragment = {
  __typename?: "Deposit";
  amount: any;
  id: string;
  origin: any;
  logIndex?: any | null;
  from: any;
  token: { __typename?: "Token" } & {
    " $fragmentRefs"?: { TokenFragmentFragment: TokenFragmentFragment };
  };
  transaction: { __typename?: "Transaction" } & {
    " $fragmentRefs"?: {
      TransactionBaseFragmentFragment: TransactionBaseFragmentFragment;
    };
  };
  split: { __typename?: "Split" } & {
    " $fragmentRefs"?: { SplitBaseFragmentFragment: SplitBaseFragmentFragment };
  };
} & { " $fragmentName"?: "DepositFragmentFragment" };

export type ContractUriUpdateFragmentFragment = {
  __typename?: "ContractURIUpdate";
  id: string;
  origin: any;
  logIndex?: any | null;
  previousURI: string;
  newURI: string;
  transaction: { __typename?: "Transaction" } & {
    " $fragmentRefs"?: {
      TransactionBaseFragmentFragment: TransactionBaseFragmentFragment;
    };
  };
  split: { __typename?: "Split" } & {
    " $fragmentRefs"?: { SplitBaseFragmentFragment: SplitBaseFragmentFragment };
  };
} & { " $fragmentName"?: "ContractUriUpdateFragmentFragment" };

export type SplitBaseFragmentFragment = {
  __typename?: "Split";
  id: string;
  address: any;
  blockNumber: any;
  timestamp: any;
  metaDataUri?: string | null;
  totalShares: any;
  txCount: any;
  metaData: {
    __typename?: "SplitMetadata";
    name?: string | null;
    description?: string | null;
    image?: string | null;
  };
} & { " $fragmentName"?: "SplitBaseFragmentFragment" };

export type SplitsByPayeeQueryVariables = Exact<{
  payee?: InputMaybe<Scalars["Bytes"]["input"]>;
}>;

export type SplitsByPayeeQuery = {
  __typename?: "Query";
  splits: Array<
    { __typename?: "Split" } & {
      " $fragmentRefs"?: {
        SplitBaseFragmentFragment: SplitBaseFragmentFragment;
      };
    }
  >;
};

export type PoolQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type PoolQuery = {
  __typename?: "Query";
  split?:
    | ({ __typename?: "Split" } & {
        " $fragmentRefs"?: {
          SplitBaseFragmentFragment: SplitBaseFragmentFragment;
        };
      })
    | null;
};

export type TransactionsBySplitQueryVariables = Exact<{
  split: Scalars["String"]["input"];
}>;

export type TransactionsBySplitQuery = {
  __typename?: "Query";
  transactions: Array<
    { __typename?: "Transaction" } & {
      " $fragmentRefs"?: {
        TransactionDetailsFragmentFragment: TransactionDetailsFragmentFragment;
      };
    }
  >;
};

export type SharesByPoolQueryVariables = Exact<{
  pool: Scalars["String"]["input"];
}>;

export type SharesByPoolQuery = {
  __typename?: "Query";
  shares: Array<
    { __typename?: "Share" } & {
      " $fragmentRefs"?: { ShareFragmentFragment: ShareFragmentFragment };
    }
  >;
};

export type PoolWithSharesQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type PoolWithSharesQuery = {
  __typename?: "Query";
  split?:
    | ({
        __typename?: "Split";
        shares: Array<
          { __typename?: "Share" } & {
            " $fragmentRefs"?: { ShareFragmentFragment: ShareFragmentFragment };
          }
        >;
      } & {
        " $fragmentRefs"?: {
          SplitBaseFragmentFragment: SplitBaseFragmentFragment;
        };
      })
    | null;
};

export const TokenFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TokenFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Token" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "symbol" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "decimals" } },
          { kind: "Field", name: { kind: "Name", value: "totalSupply" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TokenFragmentFragment, unknown>;
export const TokenValueFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TokenValueFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TokenValue" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "token" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TokenFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TokenFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Token" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "symbol" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "decimals" } },
          { kind: "Field", name: { kind: "Name", value: "totalSupply" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TokenValueFragmentFragment, unknown>;
export const ShareFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ShareFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Share" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "payee" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ShareFragmentFragment, unknown>;
export const SplitBaseFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SplitBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Split" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "metaData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "metaDataUri" } },
          { kind: "Field", name: { kind: "Name", value: "totalShares" } },
          { kind: "Field", name: { kind: "Name", value: "txCount" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SplitBaseFragmentFragment, unknown>;
export const TransactionBaseFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TransactionBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Transaction" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          { kind: "Field", name: { kind: "Name", value: "gasUsed" } },
          { kind: "Field", name: { kind: "Name", value: "gasPrice" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SplitBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Split" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "metaData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "metaDataUri" } },
          { kind: "Field", name: { kind: "Name", value: "totalShares" } },
          { kind: "Field", name: { kind: "Name", value: "txCount" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TransactionBaseFragmentFragment, unknown>;
export const WithdrawalFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WithdrawalFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Withdrawal" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "token" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "symbol" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "decimals" } },
                { kind: "Field", name: { kind: "Name", value: "totalSupply" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "transaction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TransactionBaseFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "origin" } },
          { kind: "Field", name: { kind: "Name", value: "logIndex" } },
          { kind: "Field", name: { kind: "Name", value: "to" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SplitBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Split" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "metaData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "metaDataUri" } },
          { kind: "Field", name: { kind: "Name", value: "totalShares" } },
          { kind: "Field", name: { kind: "Name", value: "txCount" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TransactionBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Transaction" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          { kind: "Field", name: { kind: "Name", value: "gasUsed" } },
          { kind: "Field", name: { kind: "Name", value: "gasPrice" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<WithdrawalFragmentFragment, unknown>;
export const DepositFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DepositFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Deposit" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "token" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TokenFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "transaction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TransactionBaseFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "origin" } },
          { kind: "Field", name: { kind: "Name", value: "logIndex" } },
          { kind: "Field", name: { kind: "Name", value: "from" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SplitBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Split" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "metaData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "metaDataUri" } },
          { kind: "Field", name: { kind: "Name", value: "totalShares" } },
          { kind: "Field", name: { kind: "Name", value: "txCount" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TokenFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Token" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "symbol" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "decimals" } },
          { kind: "Field", name: { kind: "Name", value: "totalSupply" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TransactionBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Transaction" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          { kind: "Field", name: { kind: "Name", value: "gasUsed" } },
          { kind: "Field", name: { kind: "Name", value: "gasPrice" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DepositFragmentFragment, unknown>;
export const ContractUriUpdateFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContractURIUpdateFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContractURIUpdate" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "transaction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TransactionBaseFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "origin" } },
          { kind: "Field", name: { kind: "Name", value: "logIndex" } },
          { kind: "Field", name: { kind: "Name", value: "previousURI" } },
          { kind: "Field", name: { kind: "Name", value: "newURI" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SplitBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Split" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "metaData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "metaDataUri" } },
          { kind: "Field", name: { kind: "Name", value: "totalShares" } },
          { kind: "Field", name: { kind: "Name", value: "txCount" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TransactionBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Transaction" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          { kind: "Field", name: { kind: "Name", value: "gasUsed" } },
          { kind: "Field", name: { kind: "Name", value: "gasPrice" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ContractUriUpdateFragmentFragment, unknown>;
export const TransactionDetailsFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TransactionDetailsFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Transaction" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          { kind: "Field", name: { kind: "Name", value: "gasUsed" } },
          { kind: "Field", name: { kind: "Name", value: "gasPrice" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "withdrawals" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "WithdrawalFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "deposits" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "DepositFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "contractURIUpdates" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ContractURIUpdateFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SplitBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Split" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "metaData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "metaDataUri" } },
          { kind: "Field", name: { kind: "Name", value: "totalShares" } },
          { kind: "Field", name: { kind: "Name", value: "txCount" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TransactionBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Transaction" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          { kind: "Field", name: { kind: "Name", value: "gasUsed" } },
          { kind: "Field", name: { kind: "Name", value: "gasPrice" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TokenFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Token" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "symbol" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "decimals" } },
          { kind: "Field", name: { kind: "Name", value: "totalSupply" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WithdrawalFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Withdrawal" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "token" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "symbol" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "decimals" } },
                { kind: "Field", name: { kind: "Name", value: "totalSupply" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "transaction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TransactionBaseFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "origin" } },
          { kind: "Field", name: { kind: "Name", value: "logIndex" } },
          { kind: "Field", name: { kind: "Name", value: "to" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DepositFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Deposit" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "token" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TokenFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "transaction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TransactionBaseFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "origin" } },
          { kind: "Field", name: { kind: "Name", value: "logIndex" } },
          { kind: "Field", name: { kind: "Name", value: "from" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContractURIUpdateFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContractURIUpdate" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "transaction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TransactionBaseFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "origin" } },
          { kind: "Field", name: { kind: "Name", value: "logIndex" } },
          { kind: "Field", name: { kind: "Name", value: "previousURI" } },
          { kind: "Field", name: { kind: "Name", value: "newURI" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TransactionDetailsFragmentFragment, unknown>;
export const SplitsByPayeeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "SplitsByPayee" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "payee" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Bytes" } },
          defaultValue: { kind: "StringValue", value: "", block: false },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "splits" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "shares_" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "payee" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "payee" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SplitBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Split" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "metaData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "metaDataUri" } },
          { kind: "Field", name: { kind: "Name", value: "totalShares" } },
          { kind: "Field", name: { kind: "Name", value: "txCount" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SplitsByPayeeQuery, SplitsByPayeeQueryVariables>;
export const PoolDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Pool" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SplitBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Split" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "metaData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "metaDataUri" } },
          { kind: "Field", name: { kind: "Name", value: "totalShares" } },
          { kind: "Field", name: { kind: "Name", value: "txCount" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PoolQuery, PoolQueryVariables>;
export const TransactionsBySplitDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "TransactionsBySplit" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "split" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "transactions" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "split" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "split" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TransactionDetailsFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SplitBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Split" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "metaData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "metaDataUri" } },
          { kind: "Field", name: { kind: "Name", value: "totalShares" } },
          { kind: "Field", name: { kind: "Name", value: "txCount" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TransactionBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Transaction" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          { kind: "Field", name: { kind: "Name", value: "gasUsed" } },
          { kind: "Field", name: { kind: "Name", value: "gasPrice" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WithdrawalFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Withdrawal" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "token" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "symbol" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "decimals" } },
                { kind: "Field", name: { kind: "Name", value: "totalSupply" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "transaction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TransactionBaseFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "origin" } },
          { kind: "Field", name: { kind: "Name", value: "logIndex" } },
          { kind: "Field", name: { kind: "Name", value: "to" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TokenFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Token" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "symbol" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "decimals" } },
          { kind: "Field", name: { kind: "Name", value: "totalSupply" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DepositFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Deposit" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "token" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TokenFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "transaction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TransactionBaseFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "origin" } },
          { kind: "Field", name: { kind: "Name", value: "logIndex" } },
          { kind: "Field", name: { kind: "Name", value: "from" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContractURIUpdateFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContractURIUpdate" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "transaction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TransactionBaseFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "origin" } },
          { kind: "Field", name: { kind: "Name", value: "logIndex" } },
          { kind: "Field", name: { kind: "Name", value: "previousURI" } },
          { kind: "Field", name: { kind: "Name", value: "newURI" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TransactionDetailsFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Transaction" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          { kind: "Field", name: { kind: "Name", value: "gasUsed" } },
          { kind: "Field", name: { kind: "Name", value: "gasPrice" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "withdrawals" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "WithdrawalFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "deposits" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "DepositFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "contractURIUpdates" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ContractURIUpdateFragment" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  TransactionsBySplitQuery,
  TransactionsBySplitQueryVariables
>;
export const SharesByPoolDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "SharesByPool" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "pool" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "shares" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "split" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pool" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ShareFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ShareFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Share" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "payee" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SharesByPoolQuery, SharesByPoolQueryVariables>;
export const PoolWithSharesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "PoolWithShares" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "split" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SplitBaseFragment" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "shares" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ShareFragment" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SplitBaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Split" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "metaData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "metaDataUri" } },
          { kind: "Field", name: { kind: "Name", value: "totalShares" } },
          { kind: "Field", name: { kind: "Name", value: "txCount" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ShareFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Share" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "payee" } },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PoolWithSharesQuery, PoolWithSharesQueryVariables>;
