/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Address: { input: any; output: any; }
  Currency: { input: any; output: any; }
  FieldSet: { input: any; output: any; }
  HexString: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Network: { input: any; output: any; }
  PubKey: { input: any; output: any; }
  Time: { input: any; output: any; }
  UInt256: { input: any; output: any; }
  _Any: { input: any; output: any; }
  federation__Policy: { input: any; output: any; }
  federation__Scope: { input: any; output: any; }
};

export type AddUserWalletPayload = {
  viewer: User;
};

export type AddUserWalletResult = AddUserWalletPayload | ErrAddressOwnedByUser | ErrAuthenticationFailed | ErrInvalidInput | ErrNotAuthorized;

export type AuthorizationError = ErrDoesNotOwnRequiredToken | ErrInvalidToken | ErrNoCookie | ErrSessionInvalidated;

export const BasicAuthType = {
  Monitoring: 'Monitoring',
  Retool: 'Retool'
} as const;

export type BasicAuthType = typeof BasicAuthType[keyof typeof BasicAuthType];
export type Claim = Node & {
  children: Array<Claim>;
  createdAt: Scalars['Time']['output'];
  distribution: Module;
  distributionData?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  parent?: Maybe<Claim>;
  path: Scalars['String']['output'];
  pool: Pool;
  updatedAt: Scalars['Time']['output'];
  validation: Module;
  validationData?: Maybe<Scalars['JSON']['output']>;
};

export type ClaimBulkCreateInput = {
  children?: InputMaybe<Array<Scalars['ID']['input']>>;
  distributionData?: InputMaybe<Scalars['JSON']['input']>;
  distributionId: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['ID']['input']>;
  validationData?: InputMaybe<Scalars['JSON']['input']>;
  validationId: Scalars['String']['input'];
};

export type ClaimBulkCreatePayload = {
  claims: Array<Claim>;
  count: Scalars['Int']['output'];
};

export type ClaimBulkCreateResult = ClaimBulkCreatePayload | ErrInvalidInput | ErrNotAuthorized | ErrPoolNotFound;

export type ClaimBulkDeletePayload = {
  count: Scalars['Int']['output'];
};

export type ClaimBulkDeleteResult = ClaimBulkDeletePayload | ErrInvalidInput | ErrNotAuthorized | ErrPoolNotFound;

export type ClaimBulkUpdateInput = {
  children?: InputMaybe<Array<Scalars['ID']['input']>>;
  claimId: Scalars['ID']['input'];
  distributionData?: InputMaybe<Scalars['JSON']['input']>;
  distributionId?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  validationData?: InputMaybe<Scalars['JSON']['input']>;
  validationId?: InputMaybe<Scalars['String']['input']>;
};

export type ClaimBulkUpdatePayload = {
  claims: Array<Claim>;
  count: Scalars['Int']['output'];
};

export type ClaimBulkUpdateResult = ClaimBulkUpdatePayload | ErrInvalidInput | ErrNotAuthorized | ErrPoolNotFound;

export type ClaimCreateInput = {
  children?: InputMaybe<Array<Scalars['String']['input']>>;
  distributionData?: InputMaybe<Scalars['JSON']['input']>;
  distributionId: Scalars['String']['input'];
  label: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['String']['input']>;
  validationData?: InputMaybe<Scalars['JSON']['input']>;
  validationId: Scalars['String']['input'];
};

export type ClaimCreatePayload = {
  claim: Claim;
};

export type ClaimCreateResult = ClaimCreatePayload | ErrInvalidInput | ErrNotAuthorized | ErrPoolNotFound;

export type ClaimDeletePayload = {
  claim: Claim;
};

export type ClaimDeleteResult = ClaimDeletePayload | ErrInvalidInput | ErrNotAuthorized | ErrPoolNotFound;

export type ClaimUpdateInput = {
  children?: InputMaybe<Array<Scalars['ID']['input']>>;
  claimId: Scalars['ID']['input'];
  distributionData?: InputMaybe<Scalars['JSON']['input']>;
  distributionId?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  validationData?: InputMaybe<Scalars['JSON']['input']>;
  validationId?: InputMaybe<Scalars['String']['input']>;
};

export type ClaimUpdatePayload = {
  claim: Claim;
};

export type ClaimUpdateResult = ClaimUpdatePayload | ErrInvalidInput | ErrNotAuthorized | ErrPoolNotFound;

export type DeletedNode = Node & {
  id: Scalars['ID']['output'];
};

export type Deposit = Node & {
  amount: Scalars['UInt256']['output'];
  createdAt: Scalars['Time']['output'];
  from: Scalars['Address']['output'];
  id: Scalars['ID']['output'];
  logIndex?: Maybe<Scalars['Int']['output']>;
  origin: Scalars['String']['output'];
  pool: Pool;
  to: Scalars['Address']['output'];
  token: Token;
  transaction: Tx;
  updatedAt: Scalars['Time']['output'];
};

export type DepositConnection = {
  edges: Array<DepositEdge>;
  pageInfo: PageInfo;
};

export type DepositEdge = {
  cursor: Scalars['String']['output'];
  node: Deposit;
};

export type EvmAccount = Node & {
  accountType: EvmAccountType;
  address: Scalars['Address']['output'];
  balances: TokenBalanceConnection;
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  selfPools: PoolConnection;
  updatedAt: Scalars['Time']['output'];
};


export type EvmAccountBalancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type EvmAccountSelfPoolsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export const EvmAccountType = {
  Contract: 'Contract',
  Eoa: 'EOA'
} as const;

export type EvmAccountType = typeof EvmAccountType[keyof typeof EvmAccountType];
export type ErrAddressOwnedByUser = Error & {
  message: Scalars['String']['output'];
};

export type ErrAuthenticationFailed = Error & {
  message: Scalars['String']['output'];
};

export type ErrDoesNotOwnRequiredToken = Error & {
  message: Scalars['String']['output'];
};

export type ErrInvalidInput = Error & {
  message: Scalars['String']['output'];
  parameters: Array<Scalars['String']['output']>;
  reasons: Array<Scalars['String']['output']>;
};

export type ErrInvalidToken = Error & {
  message: Scalars['String']['output'];
};

export type ErrNoCookie = Error & {
  message: Scalars['String']['output'];
};

export type ErrNotAuthorized = Error & {
  cause: AuthorizationError;
  message: Scalars['String']['output'];
};

export type ErrPoolNotFound = Error & {
  message: Scalars['String']['output'];
};

export type ErrSessionInvalidated = Error & {
  message: Scalars['String']['output'];
};

export type ErrSyncFailed = Error & {
  message: Scalars['String']['output'];
};

export type ErrTokenNotFound = Error & {
  message: Scalars['String']['output'];
};

export type ErrUserAlreadyExists = Error & {
  message: Scalars['String']['output'];
};

export type ErrUserNotFound = Error & {
  message: Scalars['String']['output'];
};

export type ErrUsernameNotAvailable = Error & {
  message: Scalars['String']['output'];
};

export type Error = {
  message: Scalars['String']['output'];
};

export const ErrorPolicyEnum = {
  IgnoreFailed: 'IGNORE_FAILED',
  RejectEverything: 'REJECT_EVERYTHING',
  RejectFailedRows: 'REJECT_FAILED_ROWS'
} as const;

export type ErrorPolicyEnum = typeof ErrorPolicyEnum[keyof typeof ErrorPolicyEnum];
export type LoginPayload = {
  viewer: User;
};

export type LoginResult = ErrAuthenticationFailed | ErrDoesNotOwnRequiredToken | ErrUserNotFound | LoginPayload;

export type LogoutPayload = {
  viewer?: Maybe<User>;
};

export type Module = Node & {
  address: Scalars['Address']['output'];
  createdAt: Scalars['Time']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  moduleId: Scalars['String']['output'];
  moduleRegistry: ModuleRegistry;
  moduleType: ModuleType;
  name: Scalars['String']['output'];
  network: Scalars['Network']['output'];
  permissions: Array<Scalars['String']['output']>;
  updatedAt: Scalars['Time']['output'];
};

export type ModuleRegistry = Node & {
  address: Scalars['Address']['output'];
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  moduleCount: Scalars['Int']['output'];
  network: Scalars['Network']['output'];
  owner: EvmAccount;
  updatedAt: Scalars['Time']['output'];
};

export const ModuleType = {
  Distribution: 'Distribution',
  Validation: 'Validation'
} as const;

export type ModuleType = typeof ModuleType[keyof typeof ModuleType];
export type Mutation = {
  /** Creates multiple claim definitions for a pool in a single bulk operation. */
  poolClaimBulkCreate: ClaimBulkCreateResult;
  /** Deletes multiple claim definitions from a pool in a single bulk operation. */
  poolClaimBulkDelete: ClaimBulkDeleteResult;
  /** Updates multiple existing claim definitions within a pool in a single bulk operation. */
  poolClaimBulkUpdate: ClaimBulkUpdateResult;
  /** Creates a new claim definition for a specific pool. */
  poolClaimCreate: ClaimCreateResult;
  /** Deletes a specific claim definition from a pool. */
  poolClaimDelete: ClaimDeleteResult;
  /** Updates an existing claim definition within a pool. */
  poolClaimUpdate: ClaimUpdateResult;
  /** Creates a new pool. */
  poolCreate: PoolCreateResult;
  /** Soft-deletes or archives an existing pool. */
  poolDelete: PoolDeleteResult;
  /** Updates the details, configuration, or claims of an existing pool. */
  poolUpdate: PoolUpdateResult;
  /** Adds or removes administrative roles for a specific user. */
  roleUpdate: RoleUpdateResult;
  /** Completes the account deletion process using a provided confirmation token. */
  userDelete: UserDeleteResult;
  /** Registers a new user and returns the user object or validation errors. */
  userRegister: UserRegisterResult;
  /** Initiates the account deletion process for the authenticated user and returns a redirect URL. */
  userRequestDeletion: UserDeleteResult;
  /** Updates the profile information of the currently authenticated user. */
  userUpdate: UserUpdateResult;
};


export type MutationPoolClaimBulkCreateArgs = {
  claims: Array<ClaimBulkCreateInput>;
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  poolId: Scalars['ID']['input'];
};


export type MutationPoolClaimBulkDeleteArgs = {
  claimIds: Array<Scalars['ID']['input']>;
  poolId: Scalars['ID']['input'];
};


export type MutationPoolClaimBulkUpdateArgs = {
  claims: Array<ClaimBulkUpdateInput>;
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  poolId: Scalars['ID']['input'];
};


export type MutationPoolClaimCreateArgs = {
  input: ClaimCreateInput;
  poolId: Scalars['ID']['input'];
};


export type MutationPoolClaimDeleteArgs = {
  claimId: Scalars['ID']['input'];
  poolId: Scalars['ID']['input'];
};


export type MutationPoolClaimUpdateArgs = {
  input: ClaimUpdateInput;
  poolId: Scalars['ID']['input'];
};


export type MutationPoolCreateArgs = {
  input: PoolCreateInput;
};


export type MutationPoolDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPoolUpdateArgs = {
  id: Scalars['ID']['input'];
  input: PoolUpdateInput;
};


export type MutationRoleUpdateArgs = {
  input: RoleUpdateInput;
  role: Role;
};


export type MutationUserDeleteArgs = {
  token: Scalars['String']['input'];
};


export type MutationUserRequestDeletionArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type PageInfo = {
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  size: Scalars['Int']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Pool = Node & {
  balance: PoolBalance;
  claims: Array<Claim>;
  contract?: Maybe<PoolContract>;
  createdAt: Scalars['Time']['output'];
  description: Scalars['String']['output'];
  donationBps: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  owner: UserOrEvmAccount;
  slug: Scalars['String']['output'];
  status: PoolStatus;
  updatedAt: Scalars['Time']['output'];
};

export type PoolBalance = {
  balance: Array<Quote>;
  tokens: TokenBalanceConnection;
  totalIncome: Array<Quote>;
  withdrawals: Array<Quote>;
};


export type PoolBalanceTokensArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type PoolConnection = {
  edges: Array<PoolEdge>;
  pageInfo: PageInfo;
};

export type PoolContract = Node & {
  account: EvmAccount;
  address: Scalars['Address']['output'];
  createdAt: Scalars['Time']['output'];
  dayBalances: PoolDayBalanceConnection;
  deposits: DepositConnection;
  hourBalances: PoolHourBalanceConnection;
  id: Scalars['ID']['output'];
  network: Scalars['Network']['output'];
  owner: EvmAccount;
  poolFactory: PoolFactory;
  status: PoolStatus;
  updatedAt: Scalars['Time']['output'];
  withdrawals: WithdrawalConnection;
};


export type PoolContractDayBalancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type PoolContractDepositsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type PoolContractHourBalancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type PoolContractWithdrawalsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type PoolCreateInput = {
  addClaims?: InputMaybe<Array<ClaimCreateInput>>;
  description: Scalars['String']['input'];
  donationBps?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  owner?: InputMaybe<Scalars['String']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  slug: Scalars['String']['input'];
};

export type PoolCreatePayload = {
  pool: Pool;
};

export type PoolCreateResult = ErrInvalidInput | ErrNotAuthorized | PoolCreatePayload;

export type PoolDayBalance = Node & {
  amount: Scalars['UInt256']['output'];
  createdAt: Scalars['Time']['output'];
  date: Scalars['Time']['output'];
  formattedAmount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  network: Scalars['Network']['output'];
  pool: Pool;
  quotes: Array<Quote>;
  token: Token;
  updatedAt: Scalars['Time']['output'];
};

export type PoolDayBalanceConnection = {
  edges: Array<PoolDayBalanceEdge>;
  pageInfo: PageInfo;
};

export type PoolDayBalanceEdge = {
  cursor: Scalars['String']['output'];
  node: PoolDayBalance;
};

export type PoolDeletePayload = {
  pool: Pool;
};

export type PoolDeleteResult = ErrInvalidInput | ErrNotAuthorized | ErrPoolNotFound | PoolDeletePayload;

export type PoolEdge = {
  cursor: Scalars['String']['output'];
  node: Pool;
};

export type PoolFactory = Node & {
  address: Scalars['Address']['output'];
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  network: Scalars['Network']['output'];
  owner: EvmAccount;
  poolCount: Scalars['Int']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type PoolHourBalance = Node & {
  amount: Scalars['UInt256']['output'];
  createdAt: Scalars['Time']['output'];
  date: Scalars['Time']['output'];
  formattedAmount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  network: Scalars['Network']['output'];
  pool: Pool;
  quotes: Array<Quote>;
  token: Token;
  updatedAt: Scalars['Time']['output'];
};

export type PoolHourBalanceConnection = {
  edges: Array<PoolHourBalanceEdge>;
  pageInfo: PageInfo;
};

export type PoolHourBalanceEdge = {
  cursor: Scalars['String']['output'];
  node: PoolHourBalance;
};

export type PoolOrUserOrEvmAccount = EvmAccount | Pool | User;

export type PoolResult = ErrInvalidInput | ErrPoolNotFound | Pool;

export const PoolStatus = {
  Active: 'Active',
  Draft: 'Draft',
  Paused: 'Paused'
} as const;

export type PoolStatus = typeof PoolStatus[keyof typeof PoolStatus];
export type PoolUpdateInput = {
  addClaims?: InputMaybe<Array<ClaimCreateInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  donationBps?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  removeClaims?: InputMaybe<Array<Scalars['ID']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updateClaims?: InputMaybe<Array<ClaimUpdateInput>>;
};

export type PoolUpdatePayload = {
  pool: Pool;
};

export type PoolUpdateResult = ErrInvalidInput | ErrNotAuthorized | ErrPoolNotFound | PoolUpdatePayload;

export type Query = {
  _service: _Service;
  /** Fetches an object given its globally unique ID. */
  node?: Maybe<Node>;
  /** Look up a pool by ID, slug, or contract ID. */
  pool: PoolResult;
  /** Searches for pools based on a query string, with optional weighting for name and description matches. */
  searchPools: SearchPoolsResult;
  /** Searches for users based on a query string, with optional weighting for username matches. */
  searchUsers: SearchUsersResult;
  /** Combined lookup for a user by either their ID or their Ethereum address. */
  user: UserResult;
  /** Fetches a paginated list of users filtered by a specific role. Restricted to internal Retool basic auth. */
  usersByRole: UserConnection;
  /** Returns the currently authenticated user based on the session or token. */
  viewer?: Maybe<UserResult>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPoolArgs = {
  contractId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchPoolsArgs = {
  descriptionWeight?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nameWeight?: InputMaybe<Scalars['Float']['input']>;
  query: Scalars['String']['input'];
};


export type QuerySearchUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
  usernameWeight?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryUserArgs = {
  address?: InputMaybe<Scalars['Address']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersByRoleArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  role: Role;
};

export type Quote = {
  currency: Scalars['Currency']['output'];
  lastUpdatedAt: Scalars['Time']['output'];
  value: Scalars['Float']['output'];
};

export type RemoveUserWalletsPayload = {
  viewer: User;
};

export type RemoveUserWalletsResult = ErrInvalidInput | ErrNotAuthorized | RemoveUserWalletsPayload;

export const ReportWindow = {
  AllTime: 'ALL_TIME',
  Last_5Days: 'LAST_5_DAYS',
  Last_7Days: 'LAST_7_DAYS'
} as const;

export type ReportWindow = typeof ReportWindow[keyof typeof ReportWindow];
export const Role = {
  Admin: 'ADMIN',
  BetaTester: 'BETA_TESTER',
  EarlyAccess: 'EARLY_ACCESS'
} as const;

export type Role = typeof Role[keyof typeof Role];
export type RoleUpdateInput = {
  addRoles?: InputMaybe<Array<Role>>;
  removeRoles?: InputMaybe<Array<Role>>;
};

export type RoleUpdatePayload = {
  user: User;
};

export type RoleUpdateResult = ErrInvalidInput | ErrNotAuthorized | RoleUpdatePayload;

export type SearchPoolsPayload = {
  results: Array<Pool>;
};

export type SearchPoolsResult = ErrInvalidInput | SearchPoolsPayload;

export type SearchUsersPayload = {
  results: Array<User>;
};

export type SearchUsersResult = ErrInvalidInput | SearchUsersPayload;

export type Token = Node & {
  address: Scalars['Address']['output'];
  createdAt: Scalars['Time']['output'];
  decimals: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  network: Scalars['Network']['output'];
  possibleSpam?: Maybe<Scalars['Boolean']['output']>;
  quotes: Array<Quote>;
  symbol: Scalars['String']['output'];
  thumbnail?: Maybe<Scalars['String']['output']>;
  tokenType: TokenType;
  updatedAt: Scalars['Time']['output'];
  validated?: Maybe<Scalars['Int']['output']>;
};

export type TokenBalance = Node & {
  amount: Scalars['UInt256']['output'];
  createdAt: Scalars['Time']['output'];
  formattedAmount: Scalars['Float']['output'];
  holder: PoolOrUserOrEvmAccount;
  id: Scalars['ID']['output'];
  network: Scalars['Network']['output'];
  quotes: Array<Quote>;
  token: Token;
  updatedAt: Scalars['Time']['output'];
};

export type TokenBalanceConnection = {
  edges: Array<TokenBalanceEdge>;
  pageInfo: PageInfo;
};

export type TokenBalanceEdge = {
  cursor: Scalars['String']['output'];
  node: TokenBalance;
};

export const TokenType = {
  Erc20: 'ERC20',
  Erc721: 'ERC721',
  Erc1155: 'ERC1155',
  Native: 'NATIVE'
} as const;

export type TokenType = typeof TokenType[keyof typeof TokenType];
export type Tx = Node & {
  createdAt: Scalars['Time']['output'];
  deposits: DepositConnection;
  gasPrice: Scalars['UInt256']['output'];
  gasUsed: Scalars['UInt256']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['Time']['output'];
  withdrawals: WithdrawalConnection;
};


export type TxDepositsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type TxWithdrawalsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type User = Node & {
  id: Scalars['ID']['output'];
  pools: PoolConnection;
  roles: Array<Role>;
};


export type UserPoolsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type UserConnection = {
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserDeletePayload = {
  user?: Maybe<User>;
};

export type UserDeleteResult = ErrInvalidInput | ErrNotAuthorized | UserDeletePayload;

export type UserEdge = {
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserOrEvmAccount = EvmAccount | User;

export type UserRegisterPayload = {
  requiresConfirmation?: Maybe<Scalars['Boolean']['output']>;
  user: User;
};

export type UserRegisterResult = ErrAuthenticationFailed | ErrDoesNotOwnRequiredToken | ErrInvalidInput | ErrUserAlreadyExists | UserRegisterPayload;

export type UserResult = ErrInvalidInput | ErrNotAuthorized | ErrUserNotFound | User;

export type UserUpdateInput = {
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdatePayload = {
  user: User;
};

export type UserUpdateResult = ErrInvalidInput | ErrNotAuthorized | ErrUsernameNotAvailable | UserUpdatePayload;

export type VerifyTokenPayload = {
  isValid: Scalars['Boolean']['output'];
  user: User;
};

export type VerifyTokenResult = ErrInvalidInput | ErrNotAuthorized | VerifyTokenPayload;

export type Withdrawal = Node & {
  amount: Scalars['UInt256']['output'];
  createdAt: Scalars['Time']['output'];
  from: Scalars['Address']['output'];
  id: Scalars['ID']['output'];
  logIndex?: Maybe<Scalars['Int']['output']>;
  origin: Scalars['String']['output'];
  pool: Pool;
  to: Scalars['Address']['output'];
  token: Token;
  transaction: Tx;
  updatedAt: Scalars['Time']['output'];
};

export type WithdrawalConnection = {
  edges: Array<WithdrawalEdge>;
  pageInfo: PageInfo;
};

export type WithdrawalEdge = {
  cursor: Scalars['String']['output'];
  node: Withdrawal;
};

export type _Service = {
  sdl?: Maybe<Scalars['String']['output']>;
};

export type QuoteFragmentFragment = { currency: any, value: number, lastUpdatedAt: any };

export type TokenFragmentFragment = { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> };

export type TokenBalanceFragmentFragment = { id: string, network: any, amount: any, formattedAmount: number, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }>, token: { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> } };

export type EvmAccountFragmentFragment = { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any };

export type ModuleFragmentFragment = { id: string, address: any, network: any, moduleId: string, moduleType: ModuleType, permissions: Array<string>, data?: any | null, name: string, description: string, createdAt: any, updatedAt: any };

export type ClaimFragmentFragment = { id: string, label: string, path: string, validationData?: any | null, distributionData?: any | null, createdAt: any, updatedAt: any };

export type DepositFragmentFragment = { id: string, from: any, to: any, origin: string, amount: any, logIndex?: number | null, createdAt: any, updatedAt: any, token: { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> } };

export type WithdrawalFragmentFragment = { id: string, from: any, to: any, origin: string, amount: any, logIndex?: number | null, createdAt: any, updatedAt: any, token: { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> } };

export type TxFragmentFragment = { id: string, gasUsed: any, gasPrice: any, createdAt: any, updatedAt: any };

export type PoolBalanceFragmentFragment = { totalIncome: Array<{ currency: any, value: number, lastUpdatedAt: any }>, balance: Array<{ currency: any, value: number, lastUpdatedAt: any }>, withdrawals: Array<{ currency: any, value: number, lastUpdatedAt: any }> };

export type PoolContractFragmentFragment = { id: string, address: any, network: any, status: PoolStatus, createdAt: any, updatedAt: any };

export type PoolContractDetailsFragmentFragment = { id: string, address: any, network: any, status: PoolStatus, createdAt: any, updatedAt: any, poolFactory: { id: string, address: any, network: any, poolCount: number, createdAt: any, updatedAt: any }, account: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any }, owner: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any } };

export type PoolBaseFragmentFragment = { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any };

export type PoolWithBalanceFragmentFragment = { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, balance: { totalIncome: Array<{ currency: any, value: number, lastUpdatedAt: any }>, balance: Array<{ currency: any, value: number, lastUpdatedAt: any }>, withdrawals: Array<{ currency: any, value: number, lastUpdatedAt: any }> } };

export type PoolWithContractFragmentFragment = { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, contract?: { id: string, address: any, network: any, status: PoolStatus, createdAt: any, updatedAt: any, poolFactory: { id: string, address: any, network: any, poolCount: number, createdAt: any, updatedAt: any }, account: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any }, owner: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any } } | null };

export type PoolWithClaimsFragmentFragment = { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, claims: Array<{ id: string, label: string, path: string, validationData?: any | null, distributionData?: any | null, createdAt: any, updatedAt: any }> };

export type PoolWithBalanceAndContractFragmentFragment = { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, balance: { totalIncome: Array<{ currency: any, value: number, lastUpdatedAt: any }>, balance: Array<{ currency: any, value: number, lastUpdatedAt: any }>, withdrawals: Array<{ currency: any, value: number, lastUpdatedAt: any }> }, contract?: { id: string, address: any, network: any, status: PoolStatus, createdAt: any, updatedAt: any, poolFactory: { id: string, address: any, network: any, poolCount: number, createdAt: any, updatedAt: any }, account: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any }, owner: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any } } | null };

export type PoolWithBalanceContractClaimsFragmentFragment = { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, balance: { totalIncome: Array<{ currency: any, value: number, lastUpdatedAt: any }>, balance: Array<{ currency: any, value: number, lastUpdatedAt: any }>, withdrawals: Array<{ currency: any, value: number, lastUpdatedAt: any }> }, contract?: { id: string, address: any, network: any, status: PoolStatus, createdAt: any, updatedAt: any, poolFactory: { id: string, address: any, network: any, poolCount: number, createdAt: any, updatedAt: any }, account: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any }, owner: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any } } | null, claims: Array<{ id: string, label: string, path: string, validationData?: any | null, distributionData?: any | null, createdAt: any, updatedAt: any }> };

export type UserPoolListWithOwnerAndContractFragment = { pools: { edges: Array<{ cursor: string, node: { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, balance: { totalIncome: Array<{ currency: any, value: number, lastUpdatedAt: any }>, balance: Array<{ currency: any, value: number, lastUpdatedAt: any }>, withdrawals: Array<{ currency: any, value: number, lastUpdatedAt: any }> } } }>, pageInfo: { hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type PoolDayBalanceFragmentFragment = { id: string, network: any, date: any, amount: any, formattedAmount: number, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }>, token: { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> } };

export type PoolHourBalanceFragmentFragment = { id: string, network: any, date: any, amount: any, formattedAmount: number, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }>, token: { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> } };

export type PoolClaimBulkCreateMutationVariables = Exact<{
  poolId: Scalars['ID']['input'];
  claims: Array<ClaimBulkCreateInput> | ClaimBulkCreateInput;
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
}>;


export type PoolClaimBulkCreateMutation = { poolClaimBulkCreate:
    | { count: number, claims: Array<{ id: string, label: string, path: string, validationData?: any | null, distributionData?: any | null, createdAt: any, updatedAt: any }> }
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { message: string }
   };

export type PoolClaimBulkDeleteMutationVariables = Exact<{
  poolId: Scalars['ID']['input'];
  claimIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type PoolClaimBulkDeleteMutation = { poolClaimBulkDelete:
    | { count: number }
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { message: string }
   };

export type PoolClaimBulkUpdateMutationVariables = Exact<{
  poolId: Scalars['ID']['input'];
  claims: Array<ClaimBulkUpdateInput> | ClaimBulkUpdateInput;
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
}>;


export type PoolClaimBulkUpdateMutation = { poolClaimBulkUpdate:
    | { count: number, claims: Array<{ id: string, label: string, path: string, validationData?: any | null, distributionData?: any | null, createdAt: any, updatedAt: any }> }
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { message: string }
   };

export type PoolClaimCreateMutationVariables = Exact<{
  poolId: Scalars['ID']['input'];
  input: ClaimCreateInput;
}>;


export type PoolClaimCreateMutation = { poolClaimCreate:
    | { claim: { id: string, label: string, path: string, validationData?: any | null, distributionData?: any | null, createdAt: any, updatedAt: any } }
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { message: string }
   };

export type PoolClaimDeleteMutationVariables = Exact<{
  poolId: Scalars['ID']['input'];
  claimId: Scalars['ID']['input'];
}>;


export type PoolClaimDeleteMutation = { poolClaimDelete:
    | { claim: { id: string } }
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { message: string }
   };

export type PoolClaimUpdateMutationVariables = Exact<{
  poolId: Scalars['ID']['input'];
  input: ClaimUpdateInput;
}>;


export type PoolClaimUpdateMutation = { poolClaimUpdate:
    | { claim: { id: string, label: string, path: string, validationData?: any | null, distributionData?: any | null, createdAt: any, updatedAt: any } }
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { message: string }
   };

export type PoolCreateMutationVariables = Exact<{
  input: PoolCreateInput;
}>;


export type PoolCreateMutation = { poolCreate:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { pool: { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, balance: { totalIncome: Array<{ currency: any, value: number, lastUpdatedAt: any }>, balance: Array<{ currency: any, value: number, lastUpdatedAt: any }>, withdrawals: Array<{ currency: any, value: number, lastUpdatedAt: any }> }, contract?: { id: string, address: any, network: any, status: PoolStatus, createdAt: any, updatedAt: any, poolFactory: { id: string, address: any, network: any, poolCount: number, createdAt: any, updatedAt: any }, account: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any }, owner: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any } } | null } }
   };

export type PoolDeleteMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PoolDeleteMutation = { poolDelete:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { message: string }
    | { pool: { id: string } }
   };

export type PoolUpdateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: PoolUpdateInput;
}>;


export type PoolUpdateMutation = { poolUpdate:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { message: string }
    | { pool: { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, balance: { totalIncome: Array<{ currency: any, value: number, lastUpdatedAt: any }>, balance: Array<{ currency: any, value: number, lastUpdatedAt: any }>, withdrawals: Array<{ currency: any, value: number, lastUpdatedAt: any }> }, contract?: { id: string, address: any, network: any, status: PoolStatus, createdAt: any, updatedAt: any, poolFactory: { id: string, address: any, network: any, poolCount: number, createdAt: any, updatedAt: any }, account: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any }, owner: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any } } | null } }
   };

export type RoleUpdateMutationVariables = Exact<{
  role: Role;
  input: RoleUpdateInput;
}>;


export type RoleUpdateMutation = { roleUpdate:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { user: { id: string, roles: Array<Role> } }
   };

export type UserDeleteMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type UserDeleteMutation = { userDelete:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { user?: { id: string } | null }
   };

export type UserRegisterMutationVariables = Exact<{ [key: string]: never; }>;


export type UserRegisterMutation = { userRegister:
    | { message: string }
    | { message: string }
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { requiresConfirmation?: boolean | null, user: { id: string } }
   };

export type UserRequestDeletionMutationVariables = Exact<{
  redirectUrl: Scalars['String']['input'];
}>;


export type UserRequestDeletionMutation = { userRequestDeletion:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { user?: { id: string } | null }
   };

export type UserUpdateMutationVariables = Exact<{
  input: UserUpdateInput;
}>;


export type UserUpdateMutation = { userUpdate:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { message: string }
    | { user: { id: string } }
   };

export type NodeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type NodeQuery = { node?:
    | { id: string, label: string, path: string, validationData?: any | null, distributionData?: any | null, createdAt: any, updatedAt: any }
    | { id: string, from: any, to: any, origin: string, amount: any, logIndex?: number | null, createdAt: any, updatedAt: any, token: { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> } }
    | { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any }
    | { id: string, address: any, network: any, moduleId: string, moduleType: ModuleType, permissions: Array<string>, data?: any | null, name: string, description: string, createdAt: any, updatedAt: any }
    | { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, balance: { totalIncome: Array<{ currency: any, value: number, lastUpdatedAt: any }>, balance: Array<{ currency: any, value: number, lastUpdatedAt: any }>, withdrawals: Array<{ currency: any, value: number, lastUpdatedAt: any }> } }
    | { id: string, address: any, network: any, status: PoolStatus, createdAt: any, updatedAt: any }
    | { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> }
    | { id: string, network: any, amount: any, formattedAmount: number, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }>, token: { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> } }
    | { id: string, gasUsed: any, gasPrice: any, createdAt: any, updatedAt: any }
    | { id: string, roles: Array<Role> }
    | { id: string, from: any, to: any, origin: string, amount: any, logIndex?: number | null, createdAt: any, updatedAt: any, token: { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> } }
    | Record<PropertyKey, never>
   | null };

export type UserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  address?: InputMaybe<Scalars['Address']['input']>;
}>;


export type UserQuery = { user:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { message: string }
    | { id: string, roles: Array<Role>, pools: { edges: Array<{ cursor: string, node: { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, balance: { totalIncome: Array<{ currency: any, value: number, lastUpdatedAt: any }>, balance: Array<{ currency: any, value: number, lastUpdatedAt: any }>, withdrawals: Array<{ currency: any, value: number, lastUpdatedAt: any }> } } }>, pageInfo: { hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } }
   };

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = { viewer?:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { message: string }
    | { id: string, roles: Array<Role>, pools: { edges: Array<{ cursor: string, node: { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, balance: { totalIncome: Array<{ currency: any, value: number, lastUpdatedAt: any }>, balance: Array<{ currency: any, value: number, lastUpdatedAt: any }>, withdrawals: Array<{ currency: any, value: number, lastUpdatedAt: any }> } } }>, pageInfo: { hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } }
   | null };

export type ViewerPoolListQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerPoolListQuery = { viewer?:
    | { __typename: 'ErrInvalidInput' }
    | { __typename: 'ErrNotAuthorized', message: string }
    | { __typename: 'ErrUserNotFound' }
    | { __typename: 'User', pools: { edges: Array<{ cursor: string, node: { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, balance: { totalIncome: Array<{ currency: any, value: number, lastUpdatedAt: any }>, balance: Array<{ currency: any, value: number, lastUpdatedAt: any }>, withdrawals: Array<{ currency: any, value: number, lastUpdatedAt: any }> } } }>, pageInfo: { hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } }
   | null };

export type GetPoolQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetPoolQuery = { pool:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any }
   };

export type GetPoolWithBalanceQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetPoolWithBalanceQuery = { pool:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, balance: { totalIncome: Array<{ currency: any, value: number, lastUpdatedAt: any }>, balance: Array<{ currency: any, value: number, lastUpdatedAt: any }>, withdrawals: Array<{ currency: any, value: number, lastUpdatedAt: any }> } }
   };

export type GetPoolWithContractQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetPoolWithContractQuery = { pool:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, contract?: { id: string, address: any, network: any, status: PoolStatus, createdAt: any, updatedAt: any, poolFactory: { id: string, address: any, network: any, poolCount: number, createdAt: any, updatedAt: any }, account: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any }, owner: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any } } | null }
   };

export type GetPoolWithClaimsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetPoolWithClaimsQuery = { pool:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, claims: Array<{ id: string, label: string, path: string, validationData?: any | null, distributionData?: any | null, createdAt: any, updatedAt: any }> }
   };

export type GetPoolWithBalanceAndContractQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetPoolWithBalanceAndContractQuery = { pool:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, balance: { totalIncome: Array<{ currency: any, value: number, lastUpdatedAt: any }>, balance: Array<{ currency: any, value: number, lastUpdatedAt: any }>, withdrawals: Array<{ currency: any, value: number, lastUpdatedAt: any }> }, contract?: { id: string, address: any, network: any, status: PoolStatus, createdAt: any, updatedAt: any, poolFactory: { id: string, address: any, network: any, poolCount: number, createdAt: any, updatedAt: any }, account: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any }, owner: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any } } | null }
   };

export type GetPoolWithBalanceContractClaimsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetPoolWithBalanceContractClaimsQuery = { pool:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, balance: { totalIncome: Array<{ currency: any, value: number, lastUpdatedAt: any }>, balance: Array<{ currency: any, value: number, lastUpdatedAt: any }>, withdrawals: Array<{ currency: any, value: number, lastUpdatedAt: any }> }, contract?: { id: string, address: any, network: any, status: PoolStatus, createdAt: any, updatedAt: any, poolFactory: { id: string, address: any, network: any, poolCount: number, createdAt: any, updatedAt: any }, account: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any }, owner: { id: string, address: any, accountType: EvmAccountType, createdAt: any, updatedAt: any } } | null, claims: Array<{ id: string, label: string, path: string, validationData?: any | null, distributionData?: any | null, createdAt: any, updatedAt: any }> }
   };

export type PoolDayBalancesQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type PoolDayBalancesQuery = { pool:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { id: string, contract?: { id: string, dayBalances: { edges: Array<{ cursor: string, node: { id: string, network: any, date: any, amount: any, formattedAmount: number, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }>, token: { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> } } }>, pageInfo: { hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null }
   };

export type PoolHourBalancesQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type PoolHourBalancesQuery = { pool:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { id: string, contract?: { id: string, hourBalances: { edges: Array<{ cursor: string, node: { id: string, network: any, date: any, amount: any, formattedAmount: number, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }>, token: { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> } } }>, pageInfo: { hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null }
   };

export type PoolDepositsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type PoolDepositsQuery = { pool:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { id: string, contract?: { id: string, deposits: { edges: Array<{ cursor: string, node: { id: string, from: any, to: any, origin: string, amount: any, logIndex?: number | null, createdAt: any, updatedAt: any, transaction: { id: string, gasUsed: any, gasPrice: any, createdAt: any, updatedAt: any }, token: { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> } } }>, pageInfo: { hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null }
   };

export type PoolWithdrawalsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type PoolWithdrawalsQuery = { pool:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { id: string, contract?: { id: string, withdrawals: { edges: Array<{ cursor: string, node: { id: string, from: any, to: any, origin: string, amount: any, logIndex?: number | null, createdAt: any, updatedAt: any, transaction: { id: string, gasUsed: any, gasPrice: any, createdAt: any, updatedAt: any }, token: { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> } } }>, pageInfo: { hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null }
   };

export type PoolTransactionsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type PoolTransactionsQuery = { pool:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { message: string }
    | { id: string, contract?: { id: string, deposits: { edges: Array<{ cursor: string, node: { id: string, from: any, to: any, origin: string, amount: any, logIndex?: number | null, createdAt: any, updatedAt: any, transaction: { id: string, gasUsed: any, gasPrice: any, createdAt: any, updatedAt: any }, token: { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> } } }>, pageInfo: { hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } }, withdrawals: { edges: Array<{ cursor: string, node: { id: string, from: any, to: any, origin: string, amount: any, logIndex?: number | null, createdAt: any, updatedAt: any, transaction: { id: string, gasUsed: any, gasPrice: any, createdAt: any, updatedAt: any }, token: { id: string, address: any, network: any, tokenType: TokenType, symbol: string, name: string, decimals: number, logo?: string | null, thumbnail?: string | null, validated?: number | null, possibleSpam?: boolean | null, createdAt: any, updatedAt: any, quotes: Array<{ currency: any, value: number, lastUpdatedAt: any }> } } }>, pageInfo: { hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null }
   };

export type SearchUsersQueryVariables = Exact<{
  query: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  usernameWeight?: InputMaybe<Scalars['Float']['input']>;
}>;


export type SearchUsersQuery = { searchUsers:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { results: Array<{ id: string, roles: Array<Role> }> }
   };

export type SearchPoolsQueryVariables = Exact<{
  query: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  nameWeight?: InputMaybe<Scalars['Float']['input']>;
  descriptionWeight?: InputMaybe<Scalars['Float']['input']>;
}>;


export type SearchPoolsQuery = { searchPools:
    | { message: string, parameters: Array<string>, reasons: Array<string> }
    | { results: Array<{ id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any, balance: { totalIncome: Array<{ currency: any, value: number, lastUpdatedAt: any }>, balance: Array<{ currency: any, value: number, lastUpdatedAt: any }>, withdrawals: Array<{ currency: any, value: number, lastUpdatedAt: any }> } }> }
   };

export const QuoteFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}}]} as unknown as DocumentNode<QuoteFragmentFragment, unknown>;
export const TokenFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"validated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleSpam"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}}]} as unknown as DocumentNode<TokenFragmentFragment, unknown>;
export const TokenBalanceFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"formattedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"validated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleSpam"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<TokenBalanceFragmentFragment, unknown>;
export const EvmAccountFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EVMAccountFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<EvmAccountFragmentFragment, unknown>;
export const ModuleFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ModuleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Module"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"moduleId"}},{"kind":"Field","name":{"kind":"Name","value":"moduleType"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<ModuleFragmentFragment, unknown>;
export const DepositFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DepositFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Deposit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"logIndex"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"validated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleSpam"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<DepositFragmentFragment, unknown>;
export const WithdrawalFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithdrawalFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Withdrawal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"logIndex"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"validated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleSpam"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<WithdrawalFragmentFragment, unknown>;
export const TxFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tx"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<TxFragmentFragment, unknown>;
export const PoolBaseFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolBaseFragmentFragment, unknown>;
export const PoolContractFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolContractFragmentFragment, unknown>;
export const PoolContractDetailsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractFragment"}},{"kind":"Field","name":{"kind":"Name","value":"poolFactory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"poolCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolContractDetailsFragmentFragment, unknown>;
export const PoolWithContractFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractDetailsFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractFragment"}},{"kind":"Field","name":{"kind":"Name","value":"poolFactory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"poolCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<PoolWithContractFragmentFragment, unknown>;
export const ClaimFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClaimFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Claim"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"validationData"}},{"kind":"Field","name":{"kind":"Name","value":"distributionData"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<ClaimFragmentFragment, unknown>;
export const PoolWithClaimsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithClaimsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"claims"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClaimFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClaimFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Claim"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"validationData"}},{"kind":"Field","name":{"kind":"Name","value":"distributionData"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolWithClaimsFragmentFragment, unknown>;
export const PoolBalanceFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}}]} as unknown as DocumentNode<PoolBalanceFragmentFragment, unknown>;
export const PoolWithBalanceAndContractFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithBalanceAndContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBalanceFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractDetailsFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractFragment"}},{"kind":"Field","name":{"kind":"Name","value":"poolFactory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"poolCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<PoolWithBalanceAndContractFragmentFragment, unknown>;
export const PoolWithBalanceContractClaimsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithBalanceContractClaimsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBalanceFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractDetailsFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"claims"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClaimFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractFragment"}},{"kind":"Field","name":{"kind":"Name","value":"poolFactory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"poolCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClaimFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Claim"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"validationData"}},{"kind":"Field","name":{"kind":"Name","value":"distributionData"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolWithBalanceContractClaimsFragmentFragment, unknown>;
export const PoolWithBalanceFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBalanceFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}}]}}]} as unknown as DocumentNode<PoolWithBalanceFragmentFragment, unknown>;
export const UserPoolListWithOwnerAndContractFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPoolListWithOwnerAndContract"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolWithBalanceFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBalanceFragment"}}]}}]}}]} as unknown as DocumentNode<UserPoolListWithOwnerAndContractFragment, unknown>;
export const PoolDayBalanceFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolDayBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolDayBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"formattedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"validated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleSpam"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolDayBalanceFragmentFragment, unknown>;
export const PoolHourBalanceFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolHourBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolHourBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"formattedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"validated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleSpam"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolHourBalanceFragmentFragment, unknown>;
export const PoolClaimBulkCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PoolClaimBulkCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"poolId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"claims"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClaimBulkCreateInput"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"errorPolicy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorPolicyEnum"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poolClaimBulkCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"poolId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"poolId"}}},{"kind":"Argument","name":{"kind":"Name","value":"claims"},"value":{"kind":"Variable","name":{"kind":"Name","value":"claims"}}},{"kind":"Argument","name":{"kind":"Name","value":"errorPolicy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"errorPolicy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ClaimBulkCreatePayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"claims"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClaimFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClaimFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Claim"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"validationData"}},{"kind":"Field","name":{"kind":"Name","value":"distributionData"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolClaimBulkCreateMutation, PoolClaimBulkCreateMutationVariables>;
export const PoolClaimBulkDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PoolClaimBulkDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"poolId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"claimIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poolClaimBulkDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"poolId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"poolId"}}},{"kind":"Argument","name":{"kind":"Name","value":"claimIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"claimIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ClaimBulkDeletePayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<PoolClaimBulkDeleteMutation, PoolClaimBulkDeleteMutationVariables>;
export const PoolClaimBulkUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PoolClaimBulkUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"poolId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"claims"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClaimBulkUpdateInput"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"errorPolicy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorPolicyEnum"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poolClaimBulkUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"poolId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"poolId"}}},{"kind":"Argument","name":{"kind":"Name","value":"claims"},"value":{"kind":"Variable","name":{"kind":"Name","value":"claims"}}},{"kind":"Argument","name":{"kind":"Name","value":"errorPolicy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"errorPolicy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ClaimBulkUpdatePayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"claims"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClaimFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClaimFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Claim"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"validationData"}},{"kind":"Field","name":{"kind":"Name","value":"distributionData"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolClaimBulkUpdateMutation, PoolClaimBulkUpdateMutationVariables>;
export const PoolClaimCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PoolClaimCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"poolId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClaimCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poolClaimCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"poolId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"poolId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ClaimCreatePayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"claim"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClaimFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClaimFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Claim"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"validationData"}},{"kind":"Field","name":{"kind":"Name","value":"distributionData"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolClaimCreateMutation, PoolClaimCreateMutationVariables>;
export const PoolClaimDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PoolClaimDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"poolId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"claimId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poolClaimDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"poolId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"poolId"}}},{"kind":"Argument","name":{"kind":"Name","value":"claimId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"claimId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ClaimDeletePayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"claim"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PoolClaimDeleteMutation, PoolClaimDeleteMutationVariables>;
export const PoolClaimUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PoolClaimUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"poolId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClaimUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poolClaimUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"poolId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"poolId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ClaimUpdatePayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"claim"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClaimFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClaimFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Claim"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"validationData"}},{"kind":"Field","name":{"kind":"Name","value":"distributionData"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolClaimUpdateMutation, PoolClaimUpdateMutationVariables>;
export const PoolCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PoolCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PoolCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poolCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolCreatePayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolWithBalanceAndContractFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractFragment"}},{"kind":"Field","name":{"kind":"Name","value":"poolFactory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"poolCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithBalanceAndContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBalanceFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractDetailsFragment"}}]}}]}}]} as unknown as DocumentNode<PoolCreateMutation, PoolCreateMutationVariables>;
export const PoolDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PoolDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poolDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolDeletePayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PoolDeleteMutation, PoolDeleteMutationVariables>;
export const PoolUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PoolUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PoolUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poolUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolUpdatePayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolWithBalanceAndContractFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractFragment"}},{"kind":"Field","name":{"kind":"Name","value":"poolFactory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"poolCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithBalanceAndContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBalanceFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractDetailsFragment"}}]}}]}}]} as unknown as DocumentNode<PoolUpdateMutation, PoolUpdateMutationVariables>;
export const RoleUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RoleUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Role"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roleUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RoleUpdatePayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RoleUpdateMutation, RoleUpdateMutationVariables>;
export const UserDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserDeletePayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserDeleteMutation, UserDeleteMutationVariables>;
export const UserRegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserRegister"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRegister"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrUserAlreadyExists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrAuthenticationFailed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrDoesNotOwnRequiredToken"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserRegisterPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requiresConfirmation"}}]}}]}}]}}]} as unknown as DocumentNode<UserRegisterMutation, UserRegisterMutationVariables>;
export const UserRequestDeletionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserRequestDeletion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"redirectUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRequestDeletion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"redirectUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"redirectUrl"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserDeletePayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserRequestDeletionMutation, UserRequestDeletionMutationVariables>;
export const UserUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrUsernameNotAvailable"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdatePayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserUpdateMutation, UserUpdateMutationVariables>;
export const NodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Node"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolWithBalanceFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EVMAccountFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenBalanceFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Claim"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClaimFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Module"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ModuleFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Deposit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DepositFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Withdrawal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithdrawalFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tx"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TxFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"validated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleSpam"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBalanceFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EVMAccountFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"formattedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClaimFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Claim"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"validationData"}},{"kind":"Field","name":{"kind":"Name","value":"distributionData"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ModuleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Module"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"moduleId"}},{"kind":"Field","name":{"kind":"Name","value":"moduleType"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DepositFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Deposit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"logIndex"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithdrawalFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Withdrawal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"logIndex"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tx"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<NodeQuery, NodeQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrUserNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"pools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolWithBalanceFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBalanceFragment"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const ViewerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrUserNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"pools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolWithBalanceFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBalanceFragment"}}]}}]}}]} as unknown as DocumentNode<ViewerQuery, ViewerQueryVariables>;
export const ViewerPoolListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ViewerPoolList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPoolListWithOwnerAndContract"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBalanceFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPoolListWithOwnerAndContract"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolWithBalanceFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<ViewerPoolListQuery, ViewerPoolListQueryVariables>;
export const GetPoolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<GetPoolQuery, GetPoolQueryVariables>;
export const GetPoolWithBalanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPoolWithBalance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolWithBalanceFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBalanceFragment"}}]}}]}}]} as unknown as DocumentNode<GetPoolWithBalanceQuery, GetPoolWithBalanceQueryVariables>;
export const GetPoolWithContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPoolWithContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolWithContractFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractFragment"}},{"kind":"Field","name":{"kind":"Name","value":"poolFactory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"poolCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractDetailsFragment"}}]}}]}}]} as unknown as DocumentNode<GetPoolWithContractQuery, GetPoolWithContractQueryVariables>;
export const GetPoolWithClaimsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPoolWithClaims"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolWithClaimsFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClaimFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Claim"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"validationData"}},{"kind":"Field","name":{"kind":"Name","value":"distributionData"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithClaimsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"claims"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClaimFragment"}}]}}]}}]} as unknown as DocumentNode<GetPoolWithClaimsQuery, GetPoolWithClaimsQueryVariables>;
export const GetPoolWithBalanceAndContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPoolWithBalanceAndContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolWithBalanceAndContractFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractFragment"}},{"kind":"Field","name":{"kind":"Name","value":"poolFactory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"poolCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithBalanceAndContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBalanceFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractDetailsFragment"}}]}}]}}]} as unknown as DocumentNode<GetPoolWithBalanceAndContractQuery, GetPoolWithBalanceAndContractQueryVariables>;
export const GetPoolWithBalanceContractClaimsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPoolWithBalanceContractClaims"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolWithBalanceContractClaimsFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolContractDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolContract"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractFragment"}},{"kind":"Field","name":{"kind":"Name","value":"poolFactory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"poolCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClaimFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Claim"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"validationData"}},{"kind":"Field","name":{"kind":"Name","value":"distributionData"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithBalanceContractClaimsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBalanceFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolContractDetailsFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"claims"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClaimFragment"}}]}}]}}]} as unknown as DocumentNode<GetPoolWithBalanceContractClaimsQuery, GetPoolWithBalanceContractClaimsQueryVariables>;
export const PoolDayBalancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PoolDayBalances"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dayBalances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolDayBalanceFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"validated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleSpam"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolDayBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolDayBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"formattedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenFragment"}}]}}]}}]} as unknown as DocumentNode<PoolDayBalancesQuery, PoolDayBalancesQueryVariables>;
export const PoolHourBalancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PoolHourBalances"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hourBalances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolHourBalanceFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"validated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleSpam"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolHourBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolHourBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"formattedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenFragment"}}]}}]}}]} as unknown as DocumentNode<PoolHourBalancesQuery, PoolHourBalancesQueryVariables>;
export const PoolDepositsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PoolDeposits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"deposits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DepositFragment"}},{"kind":"Field","name":{"kind":"Name","value":"transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TxFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"validated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleSpam"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DepositFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Deposit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"logIndex"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tx"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolDepositsQuery, PoolDepositsQueryVariables>;
export const PoolWithdrawalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PoolWithdrawals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithdrawalFragment"}},{"kind":"Field","name":{"kind":"Name","value":"transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TxFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"validated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleSpam"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithdrawalFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Withdrawal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"logIndex"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tx"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolWithdrawalsQuery, PoolWithdrawalsQueryVariables>;
export const PoolTransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PoolTransactions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"deposits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DepositFragment"}},{"kind":"Field","name":{"kind":"Name","value":"transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TxFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithdrawalFragment"}},{"kind":"Field","name":{"kind":"Name","value":"transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TxFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Token"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"validated"}},{"kind":"Field","name":{"kind":"Name","value":"possibleSpam"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DepositFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Deposit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"logIndex"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TxFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tx"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gasUsed"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithdrawalFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Withdrawal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"logIndex"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenFragment"}}]}}]}}]} as unknown as DocumentNode<PoolTransactionsQuery, PoolTransactionsQueryVariables>;
export const SearchUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"usernameWeight"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"usernameWeight"},"value":{"kind":"Variable","name":{"kind":"Name","value":"usernameWeight"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SearchUsersPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchUsersQuery, SearchUsersQueryVariables>;
export const SearchPoolsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchPools"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nameWeight"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"descriptionWeight"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchPools"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"nameWeight"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nameWeight"}}},{"kind":"Argument","name":{"kind":"Name","value":"descriptionWeight"},"value":{"kind":"Variable","name":{"kind":"Name","value":"descriptionWeight"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SearchPoolsPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolWithBalanceFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolBalance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withdrawals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithBalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolBalanceFragment"}}]}}]}}]} as unknown as DocumentNode<SearchPoolsQuery, SearchPoolsQueryVariables>;