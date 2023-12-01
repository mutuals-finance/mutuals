/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type ContractUriUpdate = {
  __typename?: 'ContractURIUpdate';
  id: Scalars['ID'];
  logIndex?: Maybe<Scalars['BigInt']>;
  newURI: Scalars['String'];
  origin: Scalars['Bytes'];
  previousURI: Scalars['String'];
  split: Split;
  transaction: Transaction;
};

export type ContractUriUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ContractUriUpdate_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newURI?: InputMaybe<Scalars['String']>;
  newURI_contains?: InputMaybe<Scalars['String']>;
  newURI_contains_nocase?: InputMaybe<Scalars['String']>;
  newURI_ends_with?: InputMaybe<Scalars['String']>;
  newURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newURI_gt?: InputMaybe<Scalars['String']>;
  newURI_gte?: InputMaybe<Scalars['String']>;
  newURI_in?: InputMaybe<Array<Scalars['String']>>;
  newURI_lt?: InputMaybe<Scalars['String']>;
  newURI_lte?: InputMaybe<Scalars['String']>;
  newURI_not?: InputMaybe<Scalars['String']>;
  newURI_not_contains?: InputMaybe<Scalars['String']>;
  newURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  newURI_not_ends_with?: InputMaybe<Scalars['String']>;
  newURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  newURI_not_starts_with?: InputMaybe<Scalars['String']>;
  newURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newURI_starts_with?: InputMaybe<Scalars['String']>;
  newURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<ContractUriUpdate_Filter>>>;
  origin?: InputMaybe<Scalars['Bytes']>;
  origin_contains?: InputMaybe<Scalars['Bytes']>;
  origin_gt?: InputMaybe<Scalars['Bytes']>;
  origin_gte?: InputMaybe<Scalars['Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  origin_lt?: InputMaybe<Scalars['Bytes']>;
  origin_lte?: InputMaybe<Scalars['Bytes']>;
  origin_not?: InputMaybe<Scalars['Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['Bytes']>;
  origin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousURI?: InputMaybe<Scalars['String']>;
  previousURI_contains?: InputMaybe<Scalars['String']>;
  previousURI_contains_nocase?: InputMaybe<Scalars['String']>;
  previousURI_ends_with?: InputMaybe<Scalars['String']>;
  previousURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousURI_gt?: InputMaybe<Scalars['String']>;
  previousURI_gte?: InputMaybe<Scalars['String']>;
  previousURI_in?: InputMaybe<Array<Scalars['String']>>;
  previousURI_lt?: InputMaybe<Scalars['String']>;
  previousURI_lte?: InputMaybe<Scalars['String']>;
  previousURI_not?: InputMaybe<Scalars['String']>;
  previousURI_not_contains?: InputMaybe<Scalars['String']>;
  previousURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  previousURI_not_ends_with?: InputMaybe<Scalars['String']>;
  previousURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  previousURI_not_starts_with?: InputMaybe<Scalars['String']>;
  previousURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  previousURI_starts_with?: InputMaybe<Scalars['String']>;
  previousURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  split?: InputMaybe<Scalars['String']>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars['String']>;
  split_contains_nocase?: InputMaybe<Scalars['String']>;
  split_ends_with?: InputMaybe<Scalars['String']>;
  split_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_gt?: InputMaybe<Scalars['String']>;
  split_gte?: InputMaybe<Scalars['String']>;
  split_in?: InputMaybe<Array<Scalars['String']>>;
  split_lt?: InputMaybe<Scalars['String']>;
  split_lte?: InputMaybe<Scalars['String']>;
  split_not?: InputMaybe<Scalars['String']>;
  split_not_contains?: InputMaybe<Scalars['String']>;
  split_not_contains_nocase?: InputMaybe<Scalars['String']>;
  split_not_ends_with?: InputMaybe<Scalars['String']>;
  split_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_not_in?: InputMaybe<Array<Scalars['String']>>;
  split_not_starts_with?: InputMaybe<Scalars['String']>;
  split_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  split_starts_with?: InputMaybe<Scalars['String']>;
  split_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ContractUriUpdate_OrderBy {
  Id = 'id',
  LogIndex = 'logIndex',
  NewUri = 'newURI',
  Origin = 'origin',
  PreviousUri = 'previousURI',
  Split = 'split',
  SplitAddress = 'split__address',
  SplitBlockNumber = 'split__blockNumber',
  SplitId = 'split__id',
  SplitMetaDataUri = 'split__metaDataUri',
  SplitShareCount = 'split__shareCount',
  SplitTimestamp = 'split__timestamp',
  SplitTotalShares = 'split__totalShares',
  SplitTxCount = 'split__txCount',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp',
}

export type Deposit = TokenValue & {
  __typename?: 'Deposit';
  amount: Scalars['BigInt'];
  from: Scalars['Bytes'];
  id: Scalars['ID'];
  logIndex?: Maybe<Scalars['BigInt']>;
  origin: Scalars['Bytes'];
  split: Split;
  token: Token;
  transaction: Transaction;
  type: TokenValueType;
};

export type Deposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>;
  origin?: InputMaybe<Scalars['Bytes']>;
  origin_contains?: InputMaybe<Scalars['Bytes']>;
  origin_gt?: InputMaybe<Scalars['Bytes']>;
  origin_gte?: InputMaybe<Scalars['Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  origin_lt?: InputMaybe<Scalars['Bytes']>;
  origin_lte?: InputMaybe<Scalars['Bytes']>;
  origin_not?: InputMaybe<Scalars['Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['Bytes']>;
  origin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  split?: InputMaybe<Scalars['String']>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars['String']>;
  split_contains_nocase?: InputMaybe<Scalars['String']>;
  split_ends_with?: InputMaybe<Scalars['String']>;
  split_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_gt?: InputMaybe<Scalars['String']>;
  split_gte?: InputMaybe<Scalars['String']>;
  split_in?: InputMaybe<Array<Scalars['String']>>;
  split_lt?: InputMaybe<Scalars['String']>;
  split_lte?: InputMaybe<Scalars['String']>;
  split_not?: InputMaybe<Scalars['String']>;
  split_not_contains?: InputMaybe<Scalars['String']>;
  split_not_contains_nocase?: InputMaybe<Scalars['String']>;
  split_not_ends_with?: InputMaybe<Scalars['String']>;
  split_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_not_in?: InputMaybe<Array<Scalars['String']>>;
  split_not_starts_with?: InputMaybe<Scalars['String']>;
  split_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  split_starts_with?: InputMaybe<Scalars['String']>;
  split_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TokenValueType>;
  type_in?: InputMaybe<Array<TokenValueType>>;
  type_not?: InputMaybe<TokenValueType>;
  type_not_in?: InputMaybe<Array<TokenValueType>>;
};

export enum Deposit_OrderBy {
  Amount = 'amount',
  From = 'from',
  Id = 'id',
  LogIndex = 'logIndex',
  Origin = 'origin',
  Split = 'split',
  SplitAddress = 'split__address',
  SplitBlockNumber = 'split__blockNumber',
  SplitId = 'split__id',
  SplitMetaDataUri = 'split__metaDataUri',
  SplitShareCount = 'split__shareCount',
  SplitTimestamp = 'split__timestamp',
  SplitTotalShares = 'split__totalShares',
  SplitTxCount = 'split__txCount',
  Token = 'token',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenTotalSupply = 'token__totalSupply',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp',
  Type = 'type',
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Query = {
  __typename?: 'Query';
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
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryContractUriUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContractUriUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContractUriUpdate_Filter>;
};

export type QueryDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};

export type QueryShareArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySharesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Share_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Share_Filter>;
};

export type QuerySplitArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySplitFactoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SplitFactory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitFactory_Filter>;
};

export type QuerySplitFactoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySplitMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SplitMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitMetadata_Filter>;
};

export type QuerySplitsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Split_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Split_Filter>;
};

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDeposit_Filter>;
};

export type QueryTokenValueArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenValuesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenValue_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenValue_Filter>;
};

export type QueryTokenWithdrawableArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenWithdrawablesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenWithdrawable_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenWithdrawable_Filter>;
};

export type QueryTokenWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenWithdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenWithdrawal_Filter>;
};

export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type QueryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type QueryWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdrawal_Filter>;
};

export type Share = {
  __typename?: 'Share';
  blockNumber: Scalars['BigInt'];
  id: Scalars['ID'];
  payee: Scalars['Bytes'];
  split: Split;
  timestamp: Scalars['BigInt'];
  value: Scalars['BigDecimal'];
  valueBp: Scalars['BigInt'];
};

export type Share_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Share_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<Share_Filter>>>;
  payee?: InputMaybe<Scalars['Bytes']>;
  payee_contains?: InputMaybe<Scalars['Bytes']>;
  payee_gt?: InputMaybe<Scalars['Bytes']>;
  payee_gte?: InputMaybe<Scalars['Bytes']>;
  payee_in?: InputMaybe<Array<Scalars['Bytes']>>;
  payee_lt?: InputMaybe<Scalars['Bytes']>;
  payee_lte?: InputMaybe<Scalars['Bytes']>;
  payee_not?: InputMaybe<Scalars['Bytes']>;
  payee_not_contains?: InputMaybe<Scalars['Bytes']>;
  payee_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  split?: InputMaybe<Scalars['String']>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars['String']>;
  split_contains_nocase?: InputMaybe<Scalars['String']>;
  split_ends_with?: InputMaybe<Scalars['String']>;
  split_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_gt?: InputMaybe<Scalars['String']>;
  split_gte?: InputMaybe<Scalars['String']>;
  split_in?: InputMaybe<Array<Scalars['String']>>;
  split_lt?: InputMaybe<Scalars['String']>;
  split_lte?: InputMaybe<Scalars['String']>;
  split_not?: InputMaybe<Scalars['String']>;
  split_not_contains?: InputMaybe<Scalars['String']>;
  split_not_contains_nocase?: InputMaybe<Scalars['String']>;
  split_not_ends_with?: InputMaybe<Scalars['String']>;
  split_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_not_in?: InputMaybe<Array<Scalars['String']>>;
  split_not_starts_with?: InputMaybe<Scalars['String']>;
  split_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  split_starts_with?: InputMaybe<Scalars['String']>;
  split_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value?: InputMaybe<Scalars['BigDecimal']>;
  valueBp?: InputMaybe<Scalars['BigInt']>;
  valueBp_gt?: InputMaybe<Scalars['BigInt']>;
  valueBp_gte?: InputMaybe<Scalars['BigInt']>;
  valueBp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  valueBp_lt?: InputMaybe<Scalars['BigInt']>;
  valueBp_lte?: InputMaybe<Scalars['BigInt']>;
  valueBp_not?: InputMaybe<Scalars['BigInt']>;
  valueBp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_gt?: InputMaybe<Scalars['BigDecimal']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  value_lt?: InputMaybe<Scalars['BigDecimal']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']>;
  value_not?: InputMaybe<Scalars['BigDecimal']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum Share_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  Payee = 'payee',
  Split = 'split',
  SplitAddress = 'split__address',
  SplitBlockNumber = 'split__blockNumber',
  SplitId = 'split__id',
  SplitMetaDataUri = 'split__metaDataUri',
  SplitShareCount = 'split__shareCount',
  SplitTimestamp = 'split__timestamp',
  SplitTotalShares = 'split__totalShares',
  SplitTxCount = 'split__txCount',
  Timestamp = 'timestamp',
  Value = 'value',
  ValueBp = 'valueBp',
}

export type Split = {
  __typename?: 'Split';
  address: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  contractURIUpdates: Array<ContractUriUpdate>;
  deposits: Array<Deposit>;
  factory: SplitFactory;
  id: Scalars['ID'];
  metaData: SplitMetadata;
  metaDataUri?: Maybe<Scalars['String']>;
  shareCount: Scalars['BigInt'];
  shares: Array<Share>;
  timestamp: Scalars['BigInt'];
  tokenDeposits: Array<TokenDeposit>;
  tokenWithdrawals: Array<TokenWithdrawal>;
  totalShares: Scalars['BigInt'];
  transactions: Array<Transaction>;
  txCount: Scalars['BigInt'];
  withdrawableTokens: Array<TokenWithdrawable>;
  withdrawals: Array<Withdrawal>;
};

export type SplitContractUriUpdatesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContractUriUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContractUriUpdate_Filter>;
};

export type SplitDepositsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Deposit_Filter>;
};

export type SplitSharesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Share_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Share_Filter>;
};

export type SplitTokenDepositsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenDeposit_Filter>;
};

export type SplitTokenWithdrawalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenWithdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenWithdrawal_Filter>;
};

export type SplitTransactionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Transaction_Filter>;
};

export type SplitWithdrawableTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenWithdrawable_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenWithdrawable_Filter>;
};

export type SplitWithdrawalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Withdrawal_Filter>;
};

export type SplitFactory = {
  __typename?: 'SplitFactory';
  beacon: Scalars['Bytes'];
  id: Scalars['ID'];
  owner: Scalars['Bytes'];
  splits: Array<Split>;
  splitsCount: Scalars['BigInt'];
};

export type SplitFactorySplitsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Split_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Split_Filter>;
};

export type SplitFactory_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SplitFactory_Filter>>>;
  beacon?: InputMaybe<Scalars['Bytes']>;
  beacon_contains?: InputMaybe<Scalars['Bytes']>;
  beacon_gt?: InputMaybe<Scalars['Bytes']>;
  beacon_gte?: InputMaybe<Scalars['Bytes']>;
  beacon_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beacon_lt?: InputMaybe<Scalars['Bytes']>;
  beacon_lte?: InputMaybe<Scalars['Bytes']>;
  beacon_not?: InputMaybe<Scalars['Bytes']>;
  beacon_not_contains?: InputMaybe<Scalars['Bytes']>;
  beacon_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<SplitFactory_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  splitsCount?: InputMaybe<Scalars['BigInt']>;
  splitsCount_gt?: InputMaybe<Scalars['BigInt']>;
  splitsCount_gte?: InputMaybe<Scalars['BigInt']>;
  splitsCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  splitsCount_lt?: InputMaybe<Scalars['BigInt']>;
  splitsCount_lte?: InputMaybe<Scalars['BigInt']>;
  splitsCount_not?: InputMaybe<Scalars['BigInt']>;
  splitsCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  splits_?: InputMaybe<Split_Filter>;
};

export enum SplitFactory_OrderBy {
  Beacon = 'beacon',
  Id = 'id',
  Owner = 'owner',
  Splits = 'splits',
  SplitsCount = 'splitsCount',
}

export type SplitMetadata = {
  __typename?: 'SplitMetadata';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SplitMetadata_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SplitMetadata_Filter>>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  image?: InputMaybe<Scalars['String']>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<SplitMetadata_Filter>>>;
};

export enum SplitMetadata_OrderBy {
  Description = 'description',
  Id = 'id',
  Image = 'image',
  Name = 'name',
}

export type Split_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_gt?: InputMaybe<Scalars['Bytes']>;
  address_gte?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_lt?: InputMaybe<Scalars['Bytes']>;
  address_lte?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<Split_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contractURIUpdates_?: InputMaybe<ContractUriUpdate_Filter>;
  deposits_?: InputMaybe<Deposit_Filter>;
  factory?: InputMaybe<Scalars['String']>;
  factory_?: InputMaybe<SplitFactory_Filter>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  metaData?: InputMaybe<Scalars['String']>;
  metaDataUri?: InputMaybe<Scalars['String']>;
  metaDataUri_contains?: InputMaybe<Scalars['String']>;
  metaDataUri_contains_nocase?: InputMaybe<Scalars['String']>;
  metaDataUri_ends_with?: InputMaybe<Scalars['String']>;
  metaDataUri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metaDataUri_gt?: InputMaybe<Scalars['String']>;
  metaDataUri_gte?: InputMaybe<Scalars['String']>;
  metaDataUri_in?: InputMaybe<Array<Scalars['String']>>;
  metaDataUri_lt?: InputMaybe<Scalars['String']>;
  metaDataUri_lte?: InputMaybe<Scalars['String']>;
  metaDataUri_not?: InputMaybe<Scalars['String']>;
  metaDataUri_not_contains?: InputMaybe<Scalars['String']>;
  metaDataUri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metaDataUri_not_ends_with?: InputMaybe<Scalars['String']>;
  metaDataUri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metaDataUri_not_in?: InputMaybe<Array<Scalars['String']>>;
  metaDataUri_not_starts_with?: InputMaybe<Scalars['String']>;
  metaDataUri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metaDataUri_starts_with?: InputMaybe<Scalars['String']>;
  metaDataUri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metaData_?: InputMaybe<SplitMetadata_Filter>;
  metaData_contains?: InputMaybe<Scalars['String']>;
  metaData_contains_nocase?: InputMaybe<Scalars['String']>;
  metaData_ends_with?: InputMaybe<Scalars['String']>;
  metaData_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metaData_gt?: InputMaybe<Scalars['String']>;
  metaData_gte?: InputMaybe<Scalars['String']>;
  metaData_in?: InputMaybe<Array<Scalars['String']>>;
  metaData_lt?: InputMaybe<Scalars['String']>;
  metaData_lte?: InputMaybe<Scalars['String']>;
  metaData_not?: InputMaybe<Scalars['String']>;
  metaData_not_contains?: InputMaybe<Scalars['String']>;
  metaData_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metaData_not_ends_with?: InputMaybe<Scalars['String']>;
  metaData_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metaData_not_in?: InputMaybe<Array<Scalars['String']>>;
  metaData_not_starts_with?: InputMaybe<Scalars['String']>;
  metaData_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metaData_starts_with?: InputMaybe<Scalars['String']>;
  metaData_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Split_Filter>>>;
  shareCount?: InputMaybe<Scalars['BigInt']>;
  shareCount_gt?: InputMaybe<Scalars['BigInt']>;
  shareCount_gte?: InputMaybe<Scalars['BigInt']>;
  shareCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shareCount_lt?: InputMaybe<Scalars['BigInt']>;
  shareCount_lte?: InputMaybe<Scalars['BigInt']>;
  shareCount_not?: InputMaybe<Scalars['BigInt']>;
  shareCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shares_?: InputMaybe<Share_Filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenDeposits_?: InputMaybe<TokenDeposit_Filter>;
  tokenWithdrawals_?: InputMaybe<TokenWithdrawal_Filter>;
  totalShares?: InputMaybe<Scalars['BigInt']>;
  totalShares_gt?: InputMaybe<Scalars['BigInt']>;
  totalShares_gte?: InputMaybe<Scalars['BigInt']>;
  totalShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalShares_lt?: InputMaybe<Scalars['BigInt']>;
  totalShares_lte?: InputMaybe<Scalars['BigInt']>;
  totalShares_not?: InputMaybe<Scalars['BigInt']>;
  totalShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactions_?: InputMaybe<Transaction_Filter>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawableTokens_?: InputMaybe<TokenWithdrawable_Filter>;
  withdrawals_?: InputMaybe<Withdrawal_Filter>;
};

export enum Split_OrderBy {
  Address = 'address',
  BlockNumber = 'blockNumber',
  ContractUriUpdates = 'contractURIUpdates',
  Deposits = 'deposits',
  Factory = 'factory',
  FactoryBeacon = 'factory__beacon',
  FactoryId = 'factory__id',
  FactoryOwner = 'factory__owner',
  FactorySplitsCount = 'factory__splitsCount',
  Id = 'id',
  MetaData = 'metaData',
  MetaDataUri = 'metaDataUri',
  MetaDataDescription = 'metaData__description',
  MetaDataId = 'metaData__id',
  MetaDataImage = 'metaData__image',
  MetaDataName = 'metaData__name',
  ShareCount = 'shareCount',
  Shares = 'shares',
  Timestamp = 'timestamp',
  TokenDeposits = 'tokenDeposits',
  TokenWithdrawals = 'tokenWithdrawals',
  TotalShares = 'totalShares',
  Transactions = 'transactions',
  TxCount = 'txCount',
  WithdrawableTokens = 'withdrawableTokens',
  Withdrawals = 'withdrawals',
}

export type Subscription = {
  __typename?: 'Subscription';
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
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionContractUriUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContractUriUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContractUriUpdate_Filter>;
};

export type SubscriptionDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};

export type SubscriptionShareArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSharesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Share_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Share_Filter>;
};

export type SubscriptionSplitArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSplitFactoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SplitFactory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitFactory_Filter>;
};

export type SubscriptionSplitFactoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSplitMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SplitMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitMetadata_Filter>;
};

export type SubscriptionSplitsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Split_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Split_Filter>;
};

export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDeposit_Filter>;
};

export type SubscriptionTokenValueArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenValuesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenValue_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenValue_Filter>;
};

export type SubscriptionTokenWithdrawableArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenWithdrawablesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenWithdrawable_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenWithdrawable_Filter>;
};

export type SubscriptionTokenWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenWithdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenWithdrawal_Filter>;
};

export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type SubscriptionTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type SubscriptionWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdrawal_Filter>;
};

export type Token = {
  __typename?: 'Token';
  decimals: Scalars['BigInt'];
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  totalSupply?: Maybe<Scalars['BigInt']>;
};

export type TokenDeposit = TokenValue & {
  __typename?: 'TokenDeposit';
  amount: Scalars['BigInt'];
  id: Scalars['ID'];
  split: Split;
  token: Token;
  type: TokenValueType;
};

export type TokenDeposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<TokenDeposit_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<TokenDeposit_Filter>>>;
  split?: InputMaybe<Scalars['String']>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars['String']>;
  split_contains_nocase?: InputMaybe<Scalars['String']>;
  split_ends_with?: InputMaybe<Scalars['String']>;
  split_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_gt?: InputMaybe<Scalars['String']>;
  split_gte?: InputMaybe<Scalars['String']>;
  split_in?: InputMaybe<Array<Scalars['String']>>;
  split_lt?: InputMaybe<Scalars['String']>;
  split_lte?: InputMaybe<Scalars['String']>;
  split_not?: InputMaybe<Scalars['String']>;
  split_not_contains?: InputMaybe<Scalars['String']>;
  split_not_contains_nocase?: InputMaybe<Scalars['String']>;
  split_not_ends_with?: InputMaybe<Scalars['String']>;
  split_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_not_in?: InputMaybe<Array<Scalars['String']>>;
  split_not_starts_with?: InputMaybe<Scalars['String']>;
  split_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  split_starts_with?: InputMaybe<Scalars['String']>;
  split_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TokenValueType>;
  type_in?: InputMaybe<Array<TokenValueType>>;
  type_not?: InputMaybe<TokenValueType>;
  type_not_in?: InputMaybe<Array<TokenValueType>>;
};

export enum TokenDeposit_OrderBy {
  Amount = 'amount',
  Id = 'id',
  Split = 'split',
  SplitAddress = 'split__address',
  SplitBlockNumber = 'split__blockNumber',
  SplitId = 'split__id',
  SplitMetaDataUri = 'split__metaDataUri',
  SplitShareCount = 'split__shareCount',
  SplitTimestamp = 'split__timestamp',
  SplitTotalShares = 'split__totalShares',
  SplitTxCount = 'split__txCount',
  Token = 'token',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenTotalSupply = 'token__totalSupply',
  Type = 'type',
}

export type TokenValue = {
  amount: Scalars['BigInt'];
  id: Scalars['ID'];
  token: Token;
  type: TokenValueType;
};

export enum TokenValueType {
  Deposit = 'Deposit',
  Withdrawable = 'Withdrawable',
  Withdrawal = 'Withdrawal',
}

export type TokenValue_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<TokenValue_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<TokenValue_Filter>>>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TokenValueType>;
  type_in?: InputMaybe<Array<TokenValueType>>;
  type_not?: InputMaybe<TokenValueType>;
  type_not_in?: InputMaybe<Array<TokenValueType>>;
};

export enum TokenValue_OrderBy {
  Amount = 'amount',
  Id = 'id',
  Token = 'token',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenTotalSupply = 'token__totalSupply',
  Type = 'type',
}

export type TokenWithdrawable = TokenValue & {
  __typename?: 'TokenWithdrawable';
  amount: Scalars['BigInt'];
  id: Scalars['ID'];
  split: Split;
  token: Token;
  type: TokenValueType;
};

export type TokenWithdrawable_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<TokenWithdrawable_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<TokenWithdrawable_Filter>>>;
  split?: InputMaybe<Scalars['String']>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars['String']>;
  split_contains_nocase?: InputMaybe<Scalars['String']>;
  split_ends_with?: InputMaybe<Scalars['String']>;
  split_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_gt?: InputMaybe<Scalars['String']>;
  split_gte?: InputMaybe<Scalars['String']>;
  split_in?: InputMaybe<Array<Scalars['String']>>;
  split_lt?: InputMaybe<Scalars['String']>;
  split_lte?: InputMaybe<Scalars['String']>;
  split_not?: InputMaybe<Scalars['String']>;
  split_not_contains?: InputMaybe<Scalars['String']>;
  split_not_contains_nocase?: InputMaybe<Scalars['String']>;
  split_not_ends_with?: InputMaybe<Scalars['String']>;
  split_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_not_in?: InputMaybe<Array<Scalars['String']>>;
  split_not_starts_with?: InputMaybe<Scalars['String']>;
  split_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  split_starts_with?: InputMaybe<Scalars['String']>;
  split_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TokenValueType>;
  type_in?: InputMaybe<Array<TokenValueType>>;
  type_not?: InputMaybe<TokenValueType>;
  type_not_in?: InputMaybe<Array<TokenValueType>>;
};

export enum TokenWithdrawable_OrderBy {
  Amount = 'amount',
  Id = 'id',
  Split = 'split',
  SplitAddress = 'split__address',
  SplitBlockNumber = 'split__blockNumber',
  SplitId = 'split__id',
  SplitMetaDataUri = 'split__metaDataUri',
  SplitShareCount = 'split__shareCount',
  SplitTimestamp = 'split__timestamp',
  SplitTotalShares = 'split__totalShares',
  SplitTxCount = 'split__txCount',
  Token = 'token',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenTotalSupply = 'token__totalSupply',
  Type = 'type',
}

export type TokenWithdrawal = TokenValue & {
  __typename?: 'TokenWithdrawal';
  amount: Scalars['BigInt'];
  id: Scalars['ID'];
  split: Split;
  token: Token;
  type: TokenValueType;
};

export type TokenWithdrawal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<TokenWithdrawal_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<TokenWithdrawal_Filter>>>;
  split?: InputMaybe<Scalars['String']>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars['String']>;
  split_contains_nocase?: InputMaybe<Scalars['String']>;
  split_ends_with?: InputMaybe<Scalars['String']>;
  split_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_gt?: InputMaybe<Scalars['String']>;
  split_gte?: InputMaybe<Scalars['String']>;
  split_in?: InputMaybe<Array<Scalars['String']>>;
  split_lt?: InputMaybe<Scalars['String']>;
  split_lte?: InputMaybe<Scalars['String']>;
  split_not?: InputMaybe<Scalars['String']>;
  split_not_contains?: InputMaybe<Scalars['String']>;
  split_not_contains_nocase?: InputMaybe<Scalars['String']>;
  split_not_ends_with?: InputMaybe<Scalars['String']>;
  split_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_not_in?: InputMaybe<Array<Scalars['String']>>;
  split_not_starts_with?: InputMaybe<Scalars['String']>;
  split_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  split_starts_with?: InputMaybe<Scalars['String']>;
  split_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TokenValueType>;
  type_in?: InputMaybe<Array<TokenValueType>>;
  type_not?: InputMaybe<TokenValueType>;
  type_not_in?: InputMaybe<Array<TokenValueType>>;
};

export enum TokenWithdrawal_OrderBy {
  Amount = 'amount',
  Id = 'id',
  Split = 'split',
  SplitAddress = 'split__address',
  SplitBlockNumber = 'split__blockNumber',
  SplitId = 'split__id',
  SplitMetaDataUri = 'split__metaDataUri',
  SplitShareCount = 'split__shareCount',
  SplitTimestamp = 'split__timestamp',
  SplitTotalShares = 'split__totalShares',
  SplitTxCount = 'split__txCount',
  Token = 'token',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenTotalSupply = 'token__totalSupply',
  Type = 'type',
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Token_OrderBy {
  Decimals = 'decimals',
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  TotalSupply = 'totalSupply',
}

export type Transaction = {
  __typename?: 'Transaction';
  blockNumber: Scalars['BigInt'];
  contractURIUpdates: Array<ContractUriUpdate>;
  deposits: Array<Deposit>;
  gasPrice: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  id: Scalars['ID'];
  split: Split;
  timestamp: Scalars['BigInt'];
  withdrawals: Array<Withdrawal>;
};

export type TransactionContractUriUpdatesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContractUriUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContractUriUpdate_Filter>;
};

export type TransactionDepositsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Deposit_Filter>;
};

export type TransactionWithdrawalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Withdrawal_Filter>;
};

export type Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contractURIUpdates_?: InputMaybe<ContractUriUpdate_Filter>;
  deposits_?: InputMaybe<Deposit_Filter>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  split?: InputMaybe<Scalars['String']>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars['String']>;
  split_contains_nocase?: InputMaybe<Scalars['String']>;
  split_ends_with?: InputMaybe<Scalars['String']>;
  split_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_gt?: InputMaybe<Scalars['String']>;
  split_gte?: InputMaybe<Scalars['String']>;
  split_in?: InputMaybe<Array<Scalars['String']>>;
  split_lt?: InputMaybe<Scalars['String']>;
  split_lte?: InputMaybe<Scalars['String']>;
  split_not?: InputMaybe<Scalars['String']>;
  split_not_contains?: InputMaybe<Scalars['String']>;
  split_not_contains_nocase?: InputMaybe<Scalars['String']>;
  split_not_ends_with?: InputMaybe<Scalars['String']>;
  split_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_not_in?: InputMaybe<Array<Scalars['String']>>;
  split_not_starts_with?: InputMaybe<Scalars['String']>;
  split_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  split_starts_with?: InputMaybe<Scalars['String']>;
  split_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawals_?: InputMaybe<Withdrawal_Filter>;
};

export enum Transaction_OrderBy {
  BlockNumber = 'blockNumber',
  ContractUriUpdates = 'contractURIUpdates',
  Deposits = 'deposits',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  Split = 'split',
  SplitAddress = 'split__address',
  SplitBlockNumber = 'split__blockNumber',
  SplitId = 'split__id',
  SplitMetaDataUri = 'split__metaDataUri',
  SplitShareCount = 'split__shareCount',
  SplitTimestamp = 'split__timestamp',
  SplitTotalShares = 'split__totalShares',
  SplitTxCount = 'split__txCount',
  Timestamp = 'timestamp',
  Withdrawals = 'withdrawals',
}

export type Withdrawal = TokenValue & {
  __typename?: 'Withdrawal';
  amount: Scalars['BigInt'];
  id: Scalars['ID'];
  logIndex?: Maybe<Scalars['BigInt']>;
  origin: Scalars['Bytes'];
  split: Split;
  to: Scalars['Bytes'];
  token: Token;
  transaction: Transaction;
  type: TokenValueType;
};

export type Withdrawal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<Withdrawal_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<Withdrawal_Filter>>>;
  origin?: InputMaybe<Scalars['Bytes']>;
  origin_contains?: InputMaybe<Scalars['Bytes']>;
  origin_gt?: InputMaybe<Scalars['Bytes']>;
  origin_gte?: InputMaybe<Scalars['Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  origin_lt?: InputMaybe<Scalars['Bytes']>;
  origin_lte?: InputMaybe<Scalars['Bytes']>;
  origin_not?: InputMaybe<Scalars['Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['Bytes']>;
  origin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  split?: InputMaybe<Scalars['String']>;
  split_?: InputMaybe<Split_Filter>;
  split_contains?: InputMaybe<Scalars['String']>;
  split_contains_nocase?: InputMaybe<Scalars['String']>;
  split_ends_with?: InputMaybe<Scalars['String']>;
  split_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_gt?: InputMaybe<Scalars['String']>;
  split_gte?: InputMaybe<Scalars['String']>;
  split_in?: InputMaybe<Array<Scalars['String']>>;
  split_lt?: InputMaybe<Scalars['String']>;
  split_lte?: InputMaybe<Scalars['String']>;
  split_not?: InputMaybe<Scalars['String']>;
  split_not_contains?: InputMaybe<Scalars['String']>;
  split_not_contains_nocase?: InputMaybe<Scalars['String']>;
  split_not_ends_with?: InputMaybe<Scalars['String']>;
  split_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  split_not_in?: InputMaybe<Array<Scalars['String']>>;
  split_not_starts_with?: InputMaybe<Scalars['String']>;
  split_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  split_starts_with?: InputMaybe<Scalars['String']>;
  split_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TokenValueType>;
  type_in?: InputMaybe<Array<TokenValueType>>;
  type_not?: InputMaybe<TokenValueType>;
  type_not_in?: InputMaybe<Array<TokenValueType>>;
};

export enum Withdrawal_OrderBy {
  Amount = 'amount',
  Id = 'id',
  LogIndex = 'logIndex',
  Origin = 'origin',
  Split = 'split',
  SplitAddress = 'split__address',
  SplitBlockNumber = 'split__blockNumber',
  SplitId = 'split__id',
  SplitMetaDataUri = 'split__metaDataUri',
  SplitShareCount = 'split__shareCount',
  SplitTimestamp = 'split__timestamp',
  SplitTotalShares = 'split__totalShares',
  SplitTxCount = 'split__txCount',
  To = 'to',
  Token = 'token',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenTotalSupply = 'token__totalSupply',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp',
  Type = 'type',
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny',
}

export type TokenFragmentFragment = {
  __typename?: 'Token';
  id: string;
  symbol: string;
  name: string;
  decimals: any;
  totalSupply?: any | null;
} & { ' $fragmentName'?: 'TokenFragmentFragment' };

type TokenValueFragment_Deposit_Fragment = {
  __typename?: 'Deposit';
  amount: any;
  token: { __typename?: 'Token' } & {
    ' $fragmentRefs'?: { TokenFragmentFragment: TokenFragmentFragment };
  };
} & { ' $fragmentName'?: 'TokenValueFragment_Deposit_Fragment' };

type TokenValueFragment_TokenDeposit_Fragment = {
  __typename?: 'TokenDeposit';
  amount: any;
  token: { __typename?: 'Token' } & {
    ' $fragmentRefs'?: { TokenFragmentFragment: TokenFragmentFragment };
  };
} & { ' $fragmentName'?: 'TokenValueFragment_TokenDeposit_Fragment' };

type TokenValueFragment_TokenWithdrawable_Fragment = {
  __typename?: 'TokenWithdrawable';
  amount: any;
  token: { __typename?: 'Token' } & {
    ' $fragmentRefs'?: { TokenFragmentFragment: TokenFragmentFragment };
  };
} & { ' $fragmentName'?: 'TokenValueFragment_TokenWithdrawable_Fragment' };

type TokenValueFragment_TokenWithdrawal_Fragment = {
  __typename?: 'TokenWithdrawal';
  amount: any;
  token: { __typename?: 'Token' } & {
    ' $fragmentRefs'?: { TokenFragmentFragment: TokenFragmentFragment };
  };
} & { ' $fragmentName'?: 'TokenValueFragment_TokenWithdrawal_Fragment' };

type TokenValueFragment_Withdrawal_Fragment = {
  __typename?: 'Withdrawal';
  amount: any;
  token: { __typename?: 'Token' } & {
    ' $fragmentRefs'?: { TokenFragmentFragment: TokenFragmentFragment };
  };
} & { ' $fragmentName'?: 'TokenValueFragment_Withdrawal_Fragment' };

export type TokenValueFragmentFragment =
  | TokenValueFragment_Deposit_Fragment
  | TokenValueFragment_TokenDeposit_Fragment
  | TokenValueFragment_TokenWithdrawable_Fragment
  | TokenValueFragment_TokenWithdrawal_Fragment
  | TokenValueFragment_Withdrawal_Fragment;

export type ShareFragmentFragment = {
  __typename?: 'Share';
  id: string;
  payee: any;
  timestamp: any;
  value: any;
} & { ' $fragmentName'?: 'ShareFragmentFragment' };

export type TransactionBaseFragmentFragment = {
  __typename?: 'Transaction';
  id: string;
  blockNumber: any;
  timestamp: any;
  gasUsed: any;
  gasPrice: any;
  split: { __typename?: 'Split' } & {
    ' $fragmentRefs'?: { SplitBaseFragmentFragment: SplitBaseFragmentFragment };
  };
} & { ' $fragmentName'?: 'TransactionBaseFragmentFragment' };

export type TransactionDetailsFragmentFragment = {
  __typename?: 'Transaction';
  id: string;
  blockNumber: any;
  timestamp: any;
  gasUsed: any;
  gasPrice: any;
  split: { __typename?: 'Split' } & {
    ' $fragmentRefs'?: { SplitBaseFragmentFragment: SplitBaseFragmentFragment };
  };
  withdrawals: Array<
    { __typename?: 'Withdrawal' } & {
      ' $fragmentRefs'?: {
        WithdrawalFragmentFragment: WithdrawalFragmentFragment;
      };
    }
  >;
  deposits: Array<
    { __typename?: 'Deposit' } & {
      ' $fragmentRefs'?: { DepositFragmentFragment: DepositFragmentFragment };
    }
  >;
  contractURIUpdates: Array<
    { __typename?: 'ContractURIUpdate' } & {
      ' $fragmentRefs'?: {
        ContractUriUpdateFragmentFragment: ContractUriUpdateFragmentFragment;
      };
    }
  >;
} & { ' $fragmentName'?: 'TransactionDetailsFragmentFragment' };

export type WithdrawalFragmentFragment = {
  __typename?: 'Withdrawal';
  amount: any;
  id: string;
  origin: any;
  logIndex?: any | null;
  to: any;
  token: {
    __typename?: 'Token';
    id: string;
    symbol: string;
    name: string;
    decimals: any;
    totalSupply?: any | null;
  };
  transaction: { __typename?: 'Transaction' } & {
    ' $fragmentRefs'?: {
      TransactionBaseFragmentFragment: TransactionBaseFragmentFragment;
    };
  };
  split: { __typename?: 'Split' } & {
    ' $fragmentRefs'?: { SplitBaseFragmentFragment: SplitBaseFragmentFragment };
  };
} & { ' $fragmentName'?: 'WithdrawalFragmentFragment' };

export type DepositFragmentFragment = {
  __typename?: 'Deposit';
  amount: any;
  id: string;
  origin: any;
  logIndex?: any | null;
  from: any;
  token: { __typename?: 'Token' } & {
    ' $fragmentRefs'?: { TokenFragmentFragment: TokenFragmentFragment };
  };
  transaction: { __typename?: 'Transaction' } & {
    ' $fragmentRefs'?: {
      TransactionBaseFragmentFragment: TransactionBaseFragmentFragment;
    };
  };
  split: { __typename?: 'Split' } & {
    ' $fragmentRefs'?: { SplitBaseFragmentFragment: SplitBaseFragmentFragment };
  };
} & { ' $fragmentName'?: 'DepositFragmentFragment' };

export type ContractUriUpdateFragmentFragment = {
  __typename?: 'ContractURIUpdate';
  id: string;
  origin: any;
  logIndex?: any | null;
  previousURI: string;
  newURI: string;
  transaction: { __typename?: 'Transaction' } & {
    ' $fragmentRefs'?: {
      TransactionBaseFragmentFragment: TransactionBaseFragmentFragment;
    };
  };
  split: { __typename?: 'Split' } & {
    ' $fragmentRefs'?: { SplitBaseFragmentFragment: SplitBaseFragmentFragment };
  };
} & { ' $fragmentName'?: 'ContractUriUpdateFragmentFragment' };

export type SplitBaseFragmentFragment = {
  __typename?: 'Split';
  id: string;
  address: any;
  blockNumber: any;
  timestamp: any;
  metaDataUri?: string | null;
  totalShares: any;
  txCount: any;
  metaData: {
    __typename?: 'SplitMetadata';
    name?: string | null;
    description?: string | null;
    image?: string | null;
  };
} & { ' $fragmentName'?: 'SplitBaseFragmentFragment' };

export type SplitDetailsFragmentFragment = {
  __typename?: 'Split';
  id: string;
  address: any;
  blockNumber: any;
  timestamp: any;
  metaDataUri?: string | null;
  totalShares: any;
  txCount: any;
  metaData: {
    __typename?: 'SplitMetadata';
    name?: string | null;
    description?: string | null;
    image?: string | null;
  };
  shares: Array<{
    __typename?: 'Share';
    id: string;
    payee: any;
    timestamp: any;
    value: any;
  }>;
  tokenWithdrawals: Array<{
    __typename?: 'TokenWithdrawal';
    amount: any;
    token: {
      __typename?: 'Token';
      id: string;
      symbol: string;
      name: string;
      decimals: any;
      totalSupply?: any | null;
    };
  }>;
  tokenDeposits: Array<{
    __typename?: 'TokenDeposit';
    amount: any;
    token: {
      __typename?: 'Token';
      id: string;
      symbol: string;
      name: string;
      decimals: any;
      totalSupply?: any | null;
    };
  }>;
  withdrawableTokens: Array<{
    __typename?: 'TokenWithdrawable';
    amount: any;
    token: {
      __typename?: 'Token';
      id: string;
      symbol: string;
      name: string;
      decimals: any;
      totalSupply?: any | null;
    };
  }>;
} & { ' $fragmentName'?: 'SplitDetailsFragmentFragment' };

export type SplitsByPayeeQueryVariables = Exact<{
  payee?: InputMaybe<Scalars['Bytes']>;
}>;

export type SplitsByPayeeQuery = {
  __typename?: 'Query';
  splits: Array<
    { __typename?: 'Split' } & {
      ' $fragmentRefs'?: {
        SplitBaseFragmentFragment: SplitBaseFragmentFragment;
      };
    }
  >;
};

export type SplitQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type SplitQuery = {
  __typename?: 'Query';
  split?:
    | ({ __typename?: 'Split' } & {
        ' $fragmentRefs'?: {
          SplitDetailsFragmentFragment: SplitDetailsFragmentFragment;
        };
      })
    | null;
};

export type TransactionsBySplitQueryVariables = Exact<{
  split: Scalars['String'];
}>;

export type TransactionsBySplitQuery = {
  __typename?: 'Query';
  transactions: Array<
    { __typename?: 'Transaction' } & {
      ' $fragmentRefs'?: {
        TransactionDetailsFragmentFragment: TransactionDetailsFragmentFragment;
      };
    }
  >;
};

export const TokenFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TokenFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Token' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'decimals' } },
          { kind: 'Field', name: { kind: 'Name', value: 'totalSupply' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TokenFragmentFragment, unknown>;
export const TokenValueFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TokenValueFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TokenValue' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'token' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TokenFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    ...TokenFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<TokenValueFragmentFragment, unknown>;
export const ShareFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ShareFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Share' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'payee' } },
          { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ShareFragmentFragment, unknown>;
export const SplitBaseFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SplitBaseFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Split' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blockNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metaData' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaDataUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'totalShares' } },
          { kind: 'Field', name: { kind: 'Name', value: 'txCount' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SplitBaseFragmentFragment, unknown>;
export const TransactionBaseFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TransactionBaseFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Transaction' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'split' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SplitBaseFragment' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'blockNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gasUsed' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gasPrice' } },
        ],
      },
    },
    ...SplitBaseFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<TransactionBaseFragmentFragment, unknown>;
export const WithdrawalFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WithdrawalFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Withdrawal' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'token' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'symbol' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'decimals' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalSupply' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transaction' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TransactionBaseFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'split' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SplitBaseFragment' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'origin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logIndex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'to' } },
        ],
      },
    },
    ...TransactionBaseFragmentFragmentDoc.definitions,
    ...SplitBaseFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<WithdrawalFragmentFragment, unknown>;
export const DepositFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'DepositFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Deposit' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'token' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TokenFragment' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transaction' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TransactionBaseFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'split' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SplitBaseFragment' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'origin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logIndex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'from' } },
        ],
      },
    },
    ...TokenFragmentFragmentDoc.definitions,
    ...TransactionBaseFragmentFragmentDoc.definitions,
    ...SplitBaseFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<DepositFragmentFragment, unknown>;
export const ContractUriUpdateFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ContractURIUpdateFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ContractURIUpdate' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transaction' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TransactionBaseFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'split' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SplitBaseFragment' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'origin' } },
          { kind: 'Field', name: { kind: 'Name', value: 'logIndex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'previousURI' } },
          { kind: 'Field', name: { kind: 'Name', value: 'newURI' } },
        ],
      },
    },
    ...TransactionBaseFragmentFragmentDoc.definitions,
    ...SplitBaseFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<ContractUriUpdateFragmentFragment, unknown>;
export const TransactionDetailsFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TransactionDetailsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Transaction' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'split' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SplitBaseFragment' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'blockNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gasUsed' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gasPrice' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'withdrawals' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'WithdrawalFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deposits' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'DepositFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contractURIUpdates' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ContractURIUpdateFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    ...SplitBaseFragmentFragmentDoc.definitions,
    ...WithdrawalFragmentFragmentDoc.definitions,
    ...DepositFragmentFragmentDoc.definitions,
    ...ContractUriUpdateFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<TransactionDetailsFragmentFragment, unknown>;
export const SplitDetailsFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SplitDetailsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Split' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blockNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metaData' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'metaDataUri' } },
          { kind: 'Field', name: { kind: 'Name', value: 'totalShares' } },
          { kind: 'Field', name: { kind: 'Name', value: 'txCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shares' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'payee' } },
                { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tokenWithdrawals' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'token' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'symbol' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'decimals' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalSupply' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tokenDeposits' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'token' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'symbol' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'decimals' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalSupply' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'withdrawableTokens' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'token' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'symbol' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'decimals' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalSupply' },
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
  ],
} as unknown as DocumentNode<SplitDetailsFragmentFragment, unknown>;
export const SplitsByPayeeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SplitsByPayee' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'payee' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Bytes' } },
          defaultValue: { kind: 'StringValue', value: '', block: false },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'splits' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'shares_' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'payee' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'payee' },
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
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SplitBaseFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    ...SplitBaseFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<SplitsByPayeeQuery, SplitsByPayeeQueryVariables>;
export const SplitDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Split' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'split' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SplitDetailsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    ...SplitDetailsFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<SplitQuery, SplitQueryVariables>;
export const TransactionsBySplitDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'TransactionsBySplit' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'split' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transactions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'split' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'split' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TransactionDetailsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    ...TransactionDetailsFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  TransactionsBySplitQuery,
  TransactionsBySplitQueryVariables
>;
