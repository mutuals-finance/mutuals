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
  DBID: { input: any; output: any; }
  Email: { input: any; output: any; }
  FieldSet: { input: any; output: any; }
  HexString: { input: any; output: any; }
  JSON: { input: any; output: any; }
  PubKey: { input: any; output: any; }
  Time: { input: any; output: any; }
  _Any: { input: any; output: any; }
  federation__Policy: { input: any; output: any; }
  federation__Scope: { input: any; output: any; }
};

export const Action = {
  UserCreated: 'UserCreated'
} as const;

export type Action = typeof Action[keyof typeof Action];
export type AddRolesToUserPayloadOrError = ErrNotAuthorized | User;

export type AddUserWalletPayload = {
  viewer?: Maybe<Viewer>;
};

/**
 * -------------------------------------------------------------------------------
 *  MUTATIONS
 * -------------------------------------------------------------------------------
 */
export type AddUserWalletPayloadOrError = AddUserWalletPayload | ErrAddressOwnedByUser | ErrAuthenticationFailed | ErrInvalidInput | ErrNotAuthorized;

export type AuthMechanism = {
  debug?: InputMaybe<DebugAuth>;
  eoa?: InputMaybe<EoaAuth>;
  gnosisSafe?: InputMaybe<GnosisSafeAuth>;
  magicLink?: InputMaybe<MagicLinkAuth>;
  oneTimeLoginToken?: InputMaybe<OneTimeLoginTokenAuth>;
  privy?: InputMaybe<PrivyAuth>;
};

export type AuthorizationError = ErrDoesNotOwnRequiredToken | ErrInvalidToken | ErrNoCookie | ErrSessionInvalidated;

export const BasicAuthType = {
  Monitoring: 'Monitoring',
  Retool: 'Retool'
} as const;

export type BasicAuthType = typeof BasicAuthType[keyof typeof BasicAuthType];
export type ChainAddress = {
  address?: Maybe<Scalars['Address']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
};

export type ChainAddressInput = {
  address: Scalars['Address']['input'];
  chainId: Scalars['Int']['input'];
};

export type ChainPools = {
  chainId?: Maybe<Scalars['Int']['output']>;
  pools?: Maybe<Array<Maybe<Pool>>>;
};

export type ChainPubKey = {
  chainId?: Maybe<Scalars['Int']['output']>;
  pubKey?: Maybe<Scalars['PubKey']['output']>;
};

export type ChainPubKeyInput = {
  chainId: Scalars['Int']['input'];
  pubKey: Scalars['PubKey']['input'];
};

export type Claim = Node & {
  children?: Maybe<Array<Claim>>;
  childrenCount: Scalars['Int']['output'];
  createdAt: Scalars['Time']['output'];
  /** Extension (strategy and state) specific data. */
  data?: Maybe<Scalars['JSON']['output']>;
  dbid: Scalars['DBID']['output'];
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  parent?: Maybe<Claim>;
  path: Scalars['String']['output'];
  pool: Pool;
  recipient?: Maybe<PoolOrUserOrEvmAccount>;
  state: Extension;
  strategy: Extension;
  updatedAt: Scalars['Time']['output'];
};

/** Creates claims. */
export type ClaimBulkCreate = {
  /** Returns how many objects were created. */
  count: Scalars['Int']['output'];
  errors: Array<ClaimBulkError>;
  /** List of the created claims. */
  results: Array<ClaimBulkResult>;
};

export type ClaimBulkCreateInput = {
  /** Children claims. */
  children?: InputMaybe<Array<Scalars['DBID']['input']>>;
  /** Extension (strategy and state) specific data. */
  data?: InputMaybe<Scalars['JSON']['input']>;
  /** Parent claim. */
  parent?: InputMaybe<Scalars['DBID']['input']>;
  /** Claim recipient address. */
  recipientAddress?: InputMaybe<Scalars['Address']['input']>;
  /** State id. */
  stateId: Scalars['String']['input'];
  /** Strategy id. */
  strategyId: Scalars['String']['input'];
};

/** Deletes claims. */
export type ClaimBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<ClaimError>;
};

export type ClaimBulkError = {
  /** The error code. */
  code: ClaimBulkErrorCode;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars['String']['output']>;
};

export const ClaimBulkErrorCode = {
  Blank: 'BLANK',
  DuplicatedInputItem: 'DUPLICATED_INPUT_ITEM',
  GraphqlError: 'GRAPHQL_ERROR',
  Invalid: 'INVALID',
  MaxLength: 'MAX_LENGTH',
  NotFound: 'NOT_FOUND',
  Required: 'REQUIRED',
  Unique: 'UNIQUE'
} as const;

export type ClaimBulkErrorCode = typeof ClaimBulkErrorCode[keyof typeof ClaimBulkErrorCode];
export type ClaimBulkResult = {
  /** Claim data. */
  claim?: Maybe<Claim>;
  /** List of errors occurred on create attempt. */
  errors?: Maybe<Array<ClaimBulkError>>;
};

/** Updates claims. */
export type ClaimBulkUpdate = {
  /** Returns how many objects were updated. */
  count: Scalars['Int']['output'];
  errors: Array<ClaimBulkError>;
  /** List of the updated claims. */
  results: Array<ClaimBulkResult>;
};

export type ClaimBulkUpdateInput = {
  /** Children claims. */
  children?: InputMaybe<Array<Scalars['DBID']['input']>>;
  /** Claim ID. */
  claimId: Scalars['DBID']['input'];
  /** Extension (strategy and state) specific data. */
  data?: InputMaybe<Scalars['JSON']['input']>;
  /** Parent claim. */
  parent?: InputMaybe<Scalars['DBID']['input']>;
  /** Claim recipient address. */
  recipientAddress?: InputMaybe<Scalars['Address']['input']>;
  /** State id. */
  stateId: Scalars['String']['input'];
  /** Strategy id. */
  strategyId: Scalars['String']['input'];
};

/** Creates a new claim. */
export type ClaimCreate = {
  claim?: Maybe<Claim>;
  errors: Array<ClaimError>;
};

export type ClaimCreateInput = {
  /** Children claim labels. */
  children?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Extension (strategy and state) specific data. */
  data?: InputMaybe<Scalars['JSON']['input']>;
  /** Claim label. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Parent claim label. */
  parent?: InputMaybe<Scalars['String']['input']>;
  /** Claim recipient address. */
  recipientAddress?: InputMaybe<Scalars['Address']['input']>;
  /** State id. */
  stateId: Scalars['String']['input'];
  /** Strategy id. */
  strategyId: Scalars['String']['input'];
};

/** Deletes a claim. */
export type ClaimDelete = {
  claim?: Maybe<Claim>;
  errors: Array<ClaimError>;
};

export type ClaimError = {
  /** The error code. */
  code: ClaimErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

export const ClaimErrorCode = {
  AlreadyExists: 'ALREADY_EXISTS',
  GraphqlError: 'GRAPHQL_ERROR',
  Invalid: 'INVALID',
  NotFound: 'NOT_FOUND',
  Required: 'REQUIRED',
  Unique: 'UNIQUE'
} as const;

export type ClaimErrorCode = typeof ClaimErrorCode[keyof typeof ClaimErrorCode];
/** Updates given claim. */
export type ClaimUpdate = {
  claim?: Maybe<Claim>;
  errors: Array<ClaimError>;
};

export type ClaimUpdateInput = {
  /** Children claims. */
  children?: InputMaybe<Array<Scalars['DBID']['input']>>;
  /** Claim ID. */
  claimId: Scalars['DBID']['input'];
  /** Extension (strategy and state) specific data. */
  data?: InputMaybe<Scalars['JSON']['input']>;
  /** Parent claim. */
  parent?: InputMaybe<Scalars['DBID']['input']>;
  /** Claim recipient address. */
  recipientAddress?: InputMaybe<Scalars['Address']['input']>;
  /** State id. */
  stateId: Scalars['String']['input'];
  /** Strategy id. */
  strategyId: Scalars['String']['input'];
};

export type ClearAllNotificationsPayload = {
  notifications?: Maybe<Array<Maybe<Notification>>>;
};

export type CreateUserPayload = {
  viewer?: Maybe<Viewer>;
};

export type CreateUserPayloadOrError = CreateUserPayload | ErrAuthenticationFailed | ErrDoesNotOwnRequiredToken | ErrInvalidInput | ErrUserAlreadyExists | ErrUsernameNotAvailable;

export type DebugAuth = {
  asUsername?: InputMaybe<Scalars['String']['input']>;
  chainAddresses?: InputMaybe<Array<ChainAddressInput>>;
  debugToolsPassword?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['DBID']['input']>;
};

export type DeletedNode = Node & {
  dbid: Scalars['DBID']['output'];
  id: Scalars['ID']['output'];
};

export type Deposit = {
  amount: Scalars['HexString']['output'];
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

export type EvmAccount = {
  accountType: EvmAccountType;
  address: Scalars['Address']['output'];
  balances?: Maybe<Array<TokenBalance>>;
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  selfPools?: Maybe<Array<Pool>>;
  updatedAt: Scalars['Time']['output'];
};

export const EvmAccountType = {
  Contract: 'Contract',
  Eoa: 'EOA'
} as const;

export type EvmAccountType = typeof EvmAccountType[keyof typeof EvmAccountType];
export type EmailNotificationSettings = {
  unsubscribedFromAll: Scalars['Boolean']['output'];
  unsubscribedFromNotifications: Scalars['Boolean']['output'];
};

export const EmailUnsubscriptionType = {
  All: 'All',
  Notifications: 'Notifications'
} as const;

export type EmailUnsubscriptionType = typeof EmailUnsubscriptionType[keyof typeof EmailUnsubscriptionType];
export const EmailVerificationStatus = {
  Admin: 'Admin',
  Failed: 'Failed',
  Unverified: 'Unverified',
  Verified: 'Verified'
} as const;

export type EmailVerificationStatus = typeof EmailVerificationStatus[keyof typeof EmailVerificationStatus];
export type EoaAuth = {
  chainPubKey: ChainPubKeyInput;
  message: Scalars['String']['input'];
  nonce: Scalars['String']['input'];
  signature: Scalars['String']['input'];
};

export type ErrAddressOwnedByUser = Error & {
  message: Scalars['String']['output'];
};

export type ErrAuthenticationFailed = Error & {
  message: Scalars['String']['output'];
};

export type ErrCommunityNotFound = Error & {
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

export type ErrPushTokenBelongsToAnotherUser = Error & {
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
  /** Save what is possible within a single row. If there are errors in an input data row, try to save it partially and skip the invalid part. */
  IgnoreFailed: 'IGNORE_FAILED',
  /** Reject all rows if there is at least one error in any of them. */
  RejectEverything: 'REJECT_EVERYTHING',
  /** Reject rows with errors. */
  RejectFailedRows: 'REJECT_FAILED_ROWS'
} as const;

export type ErrorPolicyEnum = typeof ErrorPolicyEnum[keyof typeof ErrorPolicyEnum];
export type Extension = {
  address: Scalars['Address']['output'];
  chainId: Scalars['Int']['output'];
  createdAt: Scalars['Time']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  extensionId: Scalars['String']['output'];
  extensionRegistry: ExtensionRegistry;
  extensionType: ExtensionType;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['Time']['output'];
};

export type ExtensionRegistry = {
  address: Scalars['Address']['output'];
  chainId: Scalars['Int']['output'];
  createdAt: Scalars['Time']['output'];
  extensionCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  owner: EvmAccount;
  updatedAt: Scalars['Time']['output'];
};

export const ExtensionType = {
  State: 'State',
  Strategy: 'Strategy'
} as const;

export type ExtensionType = typeof ExtensionType[keyof typeof ExtensionType];
export type GnosisSafeAuth = {
  address: Scalars['Address']['input'];
  message: Scalars['String']['input'];
  nonce: Scalars['String']['input'];
};

export type GroupNotificationUserEdge = {
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<User>;
};

export type GroupNotificationUsersConnection = {
  edges?: Maybe<Array<Maybe<GroupNotificationUserEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type LoginPayload = {
  viewer?: Maybe<Viewer>;
};

export type LoginPayloadOrError = ErrAuthenticationFailed | ErrDoesNotOwnRequiredToken | ErrUserNotFound | LoginPayload;

export type LogoutPayload = {
  viewer?: Maybe<Viewer>;
};

export type MagicLinkAuth = {
  token: Scalars['String']['input'];
};

export type Mutation = {
  /** Clears a users notifications. */
  clearNotifications?: Maybe<ClearAllNotificationsPayload>;
  /** Updates a users email notification settings. */
  emailNotificationSettingsUpdate?: Maybe<EmailNotificationSettings>;
  /** Updates a users notification settings. */
  notificationSettingsUpdate?: Maybe<NotificationSettings>;
  /** Creates claims. */
  poolClaimBulkCreate?: Maybe<ClaimBulkCreate>;
  /** Deletes claims. */
  poolClaimBulkDelete?: Maybe<ClaimBulkDelete>;
  /** Updates claims. */
  poolClaimBulkUpdate?: Maybe<ClaimBulkUpdate>;
  /** Creates a new claim. */
  poolClaimCreate?: Maybe<ClaimCreate>;
  /** Deletes a claim. */
  poolClaimDelete?: Maybe<ClaimDelete>;
  /** Updates a new claim. */
  poolClaimUpdate?: Maybe<ClaimUpdate>;
  /** Creates a pool. */
  poolCreate?: Maybe<PoolCreate>;
  /** Deletes a pool. */
  poolDelete?: Maybe<PoolDelete>;
  /** Updates a pool. */
  poolUpdate?: Maybe<PoolUpdate>;
  /** Register a push token. */
  pushTokenRegister?: Maybe<PushTokenRegister>;
  /** Unregister a push token. */
  pushTokenUnregister?: Maybe<PushTokenUnregister>;
  /** Update a role. */
  roleUpdate?: Maybe<RoleUpdate>;
  /** Verify JWT token. */
  tokenVerify?: Maybe<VerifyToken>;
  /** Remove user. */
  userDelete?: Maybe<UserDelete>;
  /** Register a new user. */
  userRegister?: Maybe<UserRegister>;
  /** Sends an email with the user removal link for the logged-in user. */
  userRequestDeletion?: Maybe<UserRequestDeletion>;
  /** Updates the user of the logged-in user. */
  userUpdate?: Maybe<UserUpdate>;
};


export type MutationEmailNotificationSettingsUpdateArgs = {
  settings: UpdateEmailNotificationSettingsInput;
};


export type MutationNotificationSettingsUpdateArgs = {
  settings: NotificationSettingsInput;
};


export type MutationPoolClaimBulkCreateArgs = {
  claims: Array<ClaimBulkCreateInput>;
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  poolId: Scalars['DBID']['input'];
};


export type MutationPoolClaimBulkDeleteArgs = {
  claimIds: Array<Scalars['DBID']['input']>;
  poolId: Scalars['DBID']['input'];
};


export type MutationPoolClaimBulkUpdateArgs = {
  claims: Array<ClaimBulkUpdateInput>;
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  poolId: Scalars['DBID']['input'];
};


export type MutationPoolClaimCreateArgs = {
  input: ClaimCreateInput;
  poolId: Scalars['DBID']['input'];
};


export type MutationPoolClaimDeleteArgs = {
  claimId: Scalars['DBID']['input'];
  poolId: Scalars['DBID']['input'];
};


export type MutationPoolClaimUpdateArgs = {
  input: ClaimUpdateInput;
  poolId: Scalars['DBID']['input'];
};


export type MutationPoolCreateArgs = {
  input: PoolCreateInput;
};


export type MutationPoolDeleteArgs = {
  id: Scalars['DBID']['input'];
};


export type MutationPoolUpdateArgs = {
  id: Scalars['DBID']['input'];
  input: PoolUpdateInput;
};


export type MutationPushTokenRegisterArgs = {
  pushToken: Scalars['String']['input'];
};


export type MutationPushTokenUnregisterArgs = {
  pushToken: Scalars['String']['input'];
};


export type MutationRoleUpdateArgs = {
  input: RoleUpdateInput;
  role?: InputMaybe<Role>;
};


export type MutationTokenVerifyArgs = {
  token: Scalars['String']['input'];
};


export type MutationUserDeleteArgs = {
  token: Scalars['String']['input'];
};


export type MutationUserRegisterArgs = {
  input: UserRegisterInput;
};


export type MutationUserRequestDeletionArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type MutationUserUpdateArgs = {
  input: UserInput;
  userId?: InputMaybe<Scalars['DBID']['input']>;
};

export type Node = {
  id: Scalars['ID']['output'];
};

/** Create and get a new nonce and message. */
export type Nonce = {
  message?: Maybe<Scalars['String']['output']>;
  nonce?: Maybe<Scalars['String']['output']>;
};

export type Notification = {
  creationTime?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  seen?: Maybe<Scalars['Boolean']['output']>;
  updatedTime?: Maybe<Scalars['Time']['output']>;
};

export type NotificationEdge = {
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Notification>;
};

export type NotificationSettings = {
  someoneViewedYourPool?: Maybe<Scalars['Boolean']['output']>;
};

export type NotificationSettingsInput = {
  someoneViewedYourPool?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NotificationsConnection = {
  edges?: Maybe<Array<Maybe<NotificationEdge>>>;
  pageInfo?: Maybe<PageInfo>;
  unseenCount?: Maybe<Scalars['Int']['output']>;
};

export type OneTimeLoginTokenAuth = {
  token: Scalars['String']['input'];
};

export type OptInForRolesPayload = {
  user?: Maybe<User>;
};

export type OptInForRolesPayloadOrError = ErrInvalidInput | ErrNotAuthorized | OptInForRolesPayload;

export type OptOutForRolesPayload = {
  user?: Maybe<User>;
};

export type OptOutForRolesPayloadOrError = ErrInvalidInput | ErrNotAuthorized | OptOutForRolesPayload;

export type PageInfo = {
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  size: Scalars['Int']['output'];
  startCursor: Scalars['String']['output'];
  total?: Maybe<Scalars['Int']['output']>;
};

export type Pool = Node & {
  claims?: Maybe<Array<Claim>>;
  contract?: Maybe<PoolContract>;
  createdAt: Scalars['Time']['output'];
  dbid: Scalars['DBID']['output'];
  description: Scalars['String']['output'];
  /** Basis point donation. */
  donationBps: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  owner: UserOrAccount;
  slug: Scalars['String']['output'];
  status: PoolStatus;
  updatedAt: Scalars['Time']['output'];
};

export type PoolByIdPayloadOrError = ErrPoolNotFound | Pool;

export type PoolContract = {
  account: EvmAccount;
  address: Scalars['Address']['output'];
  chainId: Scalars['Int']['output'];
  createdAt: Scalars['Time']['output'];
  dayBalance: Array<PoolDayBalance>;
  deposits: Array<Deposit>;
  hourBalance: Array<PoolHourBalance>;
  id: Scalars['ID']['output'];
  owner: EvmAccount;
  poolFactory: PoolFactory;
  status: PoolStatus;
  updatedAt: Scalars['Time']['output'];
  withdrawals: Array<Withdrawal>;
};

export type PoolCreate = {
  errors: Array<PoolError>;
  pool?: Maybe<Pool>;
};

export type PoolCreateInput = {
  /** List of claims to create and assign to the pool. */
  addClaims?: InputMaybe<Array<ClaimCreateInput>>;
  /** Name of the pool. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Basis point donation. */
  donationBps?: InputMaybe<Scalars['Int']['input']>;
  /** Name of the pool. */
  image?: InputMaybe<Scalars['String']['input']>;
  /** Name of the pool. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Name of the pool. */
  owner?: InputMaybe<Scalars['String']['input']>;
  /** Whether a pool is shared with its recipients or not. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** Slug of the pool. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDayBalance = {
  amount: Scalars['HexString']['output'];
  chainId: Scalars['Int']['output'];
  createdAt: Scalars['Time']['output'];
  date: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  pool: Pool;
  token: Token;
  updatedAt: Scalars['Time']['output'];
};

/** Update a pool. */
export type PoolDelete = {
  errors: Array<PoolError>;
  pool?: Maybe<Pool>;
};

export type PoolError = {
  /** The error code. */
  code: PoolErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

export const PoolErrorCode = {
  AlreadyExists: 'ALREADY_EXISTS',
  GraphqlError: 'GRAPHQL_ERROR',
  Invalid: 'INVALID',
  NotFound: 'NOT_FOUND',
  Required: 'REQUIRED',
  Unique: 'UNIQUE'
} as const;

export type PoolErrorCode = typeof PoolErrorCode[keyof typeof PoolErrorCode];
export type PoolFactory = {
  address: Scalars['Address']['output'];
  chainId: Scalars['Int']['output'];
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  owner: EvmAccount;
  poolCount: Scalars['Int']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type PoolHourBalance = {
  amount: Scalars['HexString']['output'];
  chainId: Scalars['Int']['output'];
  createdAt: Scalars['Time']['output'];
  date: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  pool: Pool;
  token: Token;
  updatedAt: Scalars['Time']['output'];
};

export type PoolOrUserOrEvmAccount = EvmAccount | Pool | User;

export type PoolSearchResult = {
  pool?: Maybe<Pool>;
};

export const PoolStatus = {
  Active: 'Active',
  Draft: 'Draft',
  Paused: 'Paused'
} as const;

export type PoolStatus = typeof PoolStatus[keyof typeof PoolStatus];
/** Update a pool. */
export type PoolUpdate = {
  errors: Array<PoolError>;
  pool?: Maybe<Pool>;
};

export type PoolUpdateInput = {
  /** List of claims to assign to the pool. */
  addClaims?: InputMaybe<Array<ClaimCreateInput>>;
  /** Name of the pool. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Basis point donation. */
  donationBps?: InputMaybe<Scalars['Int']['input']>;
  /** Image of the pool. */
  image?: InputMaybe<Scalars['String']['input']>;
  /** Name of the pool. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Whether a pool is shared with its recipients or not. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of claims to remove from the pool. */
  removeClaims?: InputMaybe<Array<Scalars['DBID']['input']>>;
  /** Slug of the pool. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** List of claims to assign to the pool. */
  updateClaims?: InputMaybe<Array<ClaimUpdateInput>>;
};

export type PreverifyEmailInput = {
  email: Scalars['Email']['input'];
};

export type PreverifyEmailPayload = {
  email: Scalars['Email']['output'];
  result: PreverifyEmailResult;
};

export type PreverifyEmailPayloadOrError = ErrInvalidInput | PreverifyEmailPayload;

export const PreverifyEmailResult = {
  Invalid: 'Invalid',
  Risky: 'Risky',
  Valid: 'Valid'
} as const;

export type PreverifyEmailResult = typeof PreverifyEmailResult[keyof typeof PreverifyEmailResult];
export type PrivyAuth = {
  token: Scalars['String']['input'];
};

export type PushTokenError = {
  /** The error code. */
  code: PushTokenErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

export const PushTokenErrorCode = {
  AlreadyExists: 'ALREADY_EXISTS',
  GraphqlError: 'GRAPHQL_ERROR',
  Invalid: 'INVALID',
  NotFound: 'NOT_FOUND',
  Required: 'REQUIRED',
  Unique: 'UNIQUE'
} as const;

export type PushTokenErrorCode = typeof PushTokenErrorCode[keyof typeof PushTokenErrorCode];
export type PushTokenRegister = {
  errors: Array<PushTokenError>;
  /** push token. */
  pushToken?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user?: Maybe<User>;
};

export type PushTokenRegisterInput = {
  /** List of claims to assign to the pool. */
  addClaims?: InputMaybe<Array<Scalars['DBID']['input']>>;
  /** Name of the pool. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Name of the pool. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Whether a pool is shared with its recipients or not. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** Slug of the pool. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Update a pool. */
export type PushTokenUnregister = {
  errors: Array<PushTokenError>;
  /** push token. */
  pushToken?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user?: Maybe<User>;
};

export type PushTokenUnregisterInput = {
  /** List of claims to assign to the pool. */
  addClaims?: InputMaybe<Array<Scalars['DBID']['input']>>;
  /** Name of the pool. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Name of the pool. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Whether a pool is shared with its recipients or not. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of claims to remove from the pool. */
  removeClaims?: InputMaybe<Array<Scalars['DBID']['input']>>;
  /** Slug of the pool. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  _service: _Service;
  isEmailAddressAvailable?: Maybe<Scalars['Boolean']['output']>;
  node?: Maybe<Node>;
  poolById?: Maybe<PoolByIdPayloadOrError>;
  /**
   * Search for pools with optional weighting. Weights are floats in the [0.0. 1.0] range
   * that help determine how matches will be ranked. nameWeight defaults to 0.4 and
   * descriptionWeight defaults to 0.2, meaning that a search result matching a pool name is
   * considered twice as relevant as a search result matching a pool description.
   */
  searchPools?: Maybe<SearchPoolsPayloadOrError>;
  /**
   * Search for users with optional weighting. Weights are floats in the [0.0. 1.0] range
   * that help determine how matches will be ranked. usernameWeight defaults to 0.4 and
   * bioWeight defaults to 0.2, meaning that a search result matching a username is considered
   * twice as relevant as a search result matching another entry (currently nothing provided.
   * See searchPools(...) for more).
   */
  searchUsers?: Maybe<SearchUsersPayloadOrError>;
  userByAddress?: Maybe<UserByAddressOrError>;
  userById?: Maybe<UserByIdOrError>;
  userByUsername?: Maybe<UserByUsernameOrError>;
  usersByRole?: Maybe<UsersConnection>;
  viewer?: Maybe<ViewerOrError>;
};


export type QueryIsEmailAddressAvailableArgs = {
  emailAddress: Scalars['Email']['input'];
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPoolByIdArgs = {
  id: Scalars['DBID']['input'];
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


export type QueryUserByAddressArgs = {
  chainAddress: ChainAddressInput;
};


export type QueryUserByIdArgs = {
  id: Scalars['DBID']['input'];
};


export type QueryUserByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryUsersByRoleArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  role: Role;
};

export type RemoveUserWalletsPayload = {
  viewer?: Maybe<Viewer>;
};

export type RemoveUserWalletsPayloadOrError = ErrInvalidInput | ErrNotAuthorized | RemoveUserWalletsPayload;

export const ReportWindow = {
  AllTime: 'ALL_TIME',
  Last_5Days: 'LAST_5_DAYS',
  Last_7Days: 'LAST_7_DAYS'
} as const;

export type ReportWindow = typeof ReportWindow[keyof typeof ReportWindow];
export type ResendVerificationEmailPayload = {
  viewer?: Maybe<Viewer>;
};

export type ResendVerificationEmailPayloadOrError = ErrInvalidInput | ResendVerificationEmailPayload;

export type RevokeRolesFromUserPayloadOrError = ErrNotAuthorized | User;

export const Role = {
  Admin: 'ADMIN',
  BetaTester: 'BETA_TESTER',
  EarlyAccess: 'EARLY_ACCESS'
} as const;

export type Role = typeof Role[keyof typeof Role];
export type RoleError = {
  /** The error code. */
  code: RoleErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

export const RoleErrorCode = {
  DuplicatedInputItem: 'DUPLICATED_INPUT_ITEM',
  OutOfScopeUser: 'OUT_OF_SCOPE_USER',
  Required: 'REQUIRED',
  Unique: 'UNIQUE'
} as const;

export type RoleErrorCode = typeof RoleErrorCode[keyof typeof RoleErrorCode];
/** Update role. */
export type RoleUpdate = {
  errors: Array<RoleError>;
  role?: Maybe<Role>;
};

export type RoleUpdateInput = {
  /** List of users to assign to a role. */
  addUsers?: InputMaybe<Array<Scalars['DBID']['input']>>;
  /** List of users to unassign from a role. */
  removeUsers?: InputMaybe<Array<Scalars['DBID']['input']>>;
};

export type SearchPoolsPayload = {
  results?: Maybe<Array<PoolSearchResult>>;
};

export type SearchPoolsPayloadOrError = ErrInvalidInput | SearchPoolsPayload;

export type SearchUsersPayload = {
  results?: Maybe<Array<UserSearchResult>>;
};

export type SearchUsersPayloadOrError = ErrInvalidInput | SearchUsersPayload;

export type Subscription = {
  notificationCreated?: Maybe<Notification>;
  notificationUpdated?: Maybe<Notification>;
};

export type Token = {
  address: Scalars['Address']['output'];
  chainId: Scalars['Int']['output'];
  createdAt: Scalars['Time']['output'];
  decimals: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  possibleSpam?: Maybe<Scalars['Boolean']['output']>;
  symbol: Scalars['String']['output'];
  thumbnail?: Maybe<Scalars['String']['output']>;
  tokenType: TokenType;
  updatedAt: Scalars['Time']['output'];
  validated?: Maybe<Scalars['Int']['output']>;
};

export type TokenBalance = {
  amount: Scalars['HexString']['output'];
  chainId: Scalars['Int']['output'];
  createdAt: Scalars['Time']['output'];
  holder: PoolOrUserOrEvmAccount;
  id: Scalars['ID']['output'];
  token: Token;
  updatedAt: Scalars['Time']['output'];
};

export const TokenType = {
  Erc20: 'ERC20'
} as const;

export type TokenType = typeof TokenType[keyof typeof TokenType];
export type Tx = {
  createdAt: Scalars['Time']['output'];
  deposits: Array<Maybe<Deposit>>;
  gasPrice: Scalars['HexString']['output'];
  gasUsed: Scalars['HexString']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['Time']['output'];
  withdrawals: Array<Maybe<Withdrawal>>;
};

export type UnsubscribeFromEmailTypeInput = {
  token: Scalars['String']['input'];
  type: EmailUnsubscriptionType;
};

export type UnsubscribeFromEmailTypePayload = {
  viewer?: Maybe<Viewer>;
};

export type UnsubscribeFromEmailTypePayloadOrError = ErrInvalidInput | UnsubscribeFromEmailTypePayload;

export type UpdateEmailInput = {
  /**
   * authMechanism is an optional parameter that can verify a user's email address in lieu of sending
   * a verification email to the user. If not provided, a verification email will be sent.
   */
  authMechanism?: InputMaybe<AuthMechanism>;
  email: Scalars['Email']['input'];
};

export type UpdateEmailNotificationSettingsInput = {
  unsubscribedFromAll: Scalars['Boolean']['input'];
  unsubscribedFromNotifications: Scalars['Boolean']['input'];
};

export type UpdateEmailNotificationSettingsPayload = {
  viewer?: Maybe<Viewer>;
};

export type UpdateEmailNotificationSettingsPayloadOrError = ErrInvalidInput | UpdateEmailNotificationSettingsPayload;

export type UpdateEmailPayload = {
  viewer?: Maybe<Viewer>;
};

export type UpdateEmailPayloadOrError = ErrInvalidInput | UpdateEmailPayload;

export type UpdateUserInfoInput = {
  username: Scalars['String']['input'];
};

export type UpdateUserInfoPayload = {
  viewer?: Maybe<Viewer>;
};

export type UpdateUserInfoPayloadOrError = ErrInvalidInput | ErrNotAuthorized | ErrUsernameNotAvailable | UpdateUserInfoPayload;

export type UploadPersistedQueriesInput = {
  persistedQueries?: InputMaybe<Scalars['String']['input']>;
};

export type UploadPersistedQueriesPayload = {
  message?: Maybe<Scalars['String']['output']>;
};

export type UploadPersistedQueriesPayloadOrError = ErrNotAuthorized | UploadPersistedQueriesPayload;

export type User = Node & {
  dbid: Scalars['DBID']['output'];
  id: Scalars['ID']['output'];
  pools?: Maybe<Array<Maybe<Pool>>>;
  roles?: Maybe<Array<Maybe<Role>>>;
};

export type UserByAddressOrError = ErrInvalidInput | ErrUserNotFound | User;

export type UserByIdOrError = ErrInvalidInput | ErrUserNotFound | User;

export type UserByUsernameOrError = ErrInvalidInput | ErrUserNotFound | User;

/** Removes a user. */
export type UserDelete = {
  errors: Array<UserError>;
  user?: Maybe<User>;
};

export type UserEdge = {
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<User>;
};

export type UserEmail = {
  email?: Maybe<Scalars['Email']['output']>;
  emailNotificationSettings?: Maybe<EmailNotificationSettings>;
  verificationStatus?: Maybe<EmailVerificationStatus>;
};

/** Represents errors in user mutations. */
export type UserError = {
  /** The error code. */
  code: UserErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

export const UserErrorCode = {
  AccountNotConfirmed: 'ACCOUNT_NOT_CONFIRMED',
  ActivateOwnAccount: 'ACTIVATE_OWN_ACCOUNT',
  ActivateSuperuserAccount: 'ACTIVATE_SUPERUSER_ACCOUNT',
  DeactivateOwnAccount: 'DEACTIVATE_OWN_ACCOUNT',
  DeactivateSuperuserAccount: 'DEACTIVATE_SUPERUSER_ACCOUNT',
  DeleteNonStaffUser: 'DELETE_NON_STAFF_USER',
  DeleteOwnAccount: 'DELETE_OWN_ACCOUNT',
  DeleteSuperuserAccount: 'DELETE_SUPERUSER_ACCOUNT',
  DuplicatedInputItem: 'DUPLICATED_INPUT_ITEM',
  GraphqlError: 'GRAPHQL_ERROR',
  Inactive: 'INACTIVE',
  Invalid: 'INVALID',
  InvalidCredentials: 'INVALID_CREDENTIALS',
  JwtDecodeError: 'JWT_DECODE_ERROR',
  JwtInvalidCsrfToken: 'JWT_INVALID_CSRF_TOKEN',
  JwtInvalidToken: 'JWT_INVALID_TOKEN',
  JwtMissingToken: 'JWT_MISSING_TOKEN',
  JwtSignatureExpired: 'JWT_SIGNATURE_EXPIRED',
  LoginAttemptDelayed: 'LOGIN_ATTEMPT_DELAYED',
  NotFound: 'NOT_FOUND',
  OutOfScopeRole: 'OUT_OF_SCOPE_ROLE',
  Required: 'REQUIRED',
  Unique: 'UNIQUE',
  UnknownIpAddress: 'UNKNOWN_IP_ADDRESS'
} as const;

export type UserErrorCode = typeof UserErrorCode[keyof typeof UserErrorCode];
/** Fields required to update the user. */
export type UserInput = {
  /** Username. */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Login an existing user or register a new one. */
export type UserLoginOrRegister = {
  errors: Array<UserError>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars['String']['output']>;
  /** Informs whether users need to confirm their email address. */
  requiresConfirmation?: Maybe<Scalars['Boolean']['output']>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

/** Fields required to login or register a user. */
export type UserLoginOrRegisterInput = {
  /** Base of frontend URL that will be needed to create confirmation URL. Required when account confirmation is enabled. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrAccount = EvmAccount | User;

/** Register a new user. */
export type UserRegister = {
  errors: Array<UserError>;
  /** Informs whether users need to confirm their email address. */
  requiresConfirmation?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

/** Fields required to create a user. */
export type UserRegisterInput = {
  /** Decentralized identifier of the user. */
  did?: InputMaybe<Scalars['String']['input']>;
  /** Base of frontend URL that will be needed to create confirmation URL. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
};

/** Sends an email with the user removal link for the logged-in user. */
export type UserRequestDeletion = {
  errors: Array<UserError>;
};

/**
 * -------------------------------------------------------------------------------
 *  SEARCH
 * -------------------------------------------------------------------------------
 */
export type UserSearchResult = {
  user?: Maybe<User>;
};

/** Updates the user of the logged-in user. */
export type UserUpdate = {
  errors: Array<UserError>;
  user?: Maybe<User>;
};

export type UsersConnection = {
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo: PageInfo;
};

export type VerifyEmailInput = {
  token: Scalars['String']['input'];
};

export type VerifyEmailMagicLinkInput = {
  email: Scalars['Email']['input'];
};

export type VerifyEmailMagicLinkPayload = {
  canSend: Scalars['Boolean']['output'];
};

export type VerifyEmailMagicLinkPayloadOrError = ErrInvalidInput | VerifyEmailMagicLinkPayload;

export type VerifyEmailPayload = {
  email: Scalars['Email']['output'];
};

export type VerifyEmailPayloadOrError = ErrInvalidInput | VerifyEmailPayload;

/** Verify JWT token. */
export type VerifyToken = {
  /** JWT payload. */
  errors: Array<UserError>;
  /** Determine if token is valid or not. */
  isValid: Scalars['Boolean']['output'];
  /** User assigned to token. */
  user?: Maybe<User>;
};

export type Viewer = Node & {
  id: Scalars['ID']['output'];
  notificationSettings?: Maybe<NotificationSettings>;
  /**
   * Returns a list of notifications in reverse chronological order.
   * Seen notifications come after unseen notifications
   */
  notifications?: Maybe<NotificationsConnection>;
  pools?: Maybe<Array<Maybe<Pool>>>;
  user?: Maybe<User>;
};


export type ViewerNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ViewerOrError = ErrNotAuthorized | Viewer;

export type Withdrawal = {
  amount: Scalars['HexString']['output'];
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

export type _Service = {
  sdl?: Maybe<Scalars['String']['output']>;
};

export type PoolCreateMutationVariables = Exact<{
  input: PoolCreateInput;
}>;


export type PoolCreateMutation = { poolCreate?: { pool?: { dbid: any, name: string, description: string } | null, errors: Array<{ field?: string | null, message?: string | null, code: PoolErrorCode }> } | null };

export type UserRegisterMutationVariables = Exact<{
  input: UserRegisterInput;
}>;


export type UserRegisterMutation = { userRegister?: { requiresConfirmation?: boolean | null, user?: { id: string, dbid: any } | null, errors: Array<{ field?: string | null, message?: string | null, code: UserErrorCode }> } | null };

export type UserByAddressQueryVariables = Exact<{
  chainAddress: ChainAddressInput;
}>;


export type UserByAddressQuery = { userByAddress?:
    | { __typename: 'ErrInvalidInput', message: string }
    | { __typename: 'ErrUserNotFound', message: string }
    | { __typename: 'User', dbid: any }
   | null };

export type MyPoolsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyPoolsQuery = { viewer?:
    | { pools?: Array<{ id: string, dbid: any, status: PoolStatus, name: string, description: string, slug: string, createdAt: any, updatedAt: any, owner:
          | { address: any, accountType: EvmAccountType }
          | { dbid: any }
         } | null> | null }
    | Record<PropertyKey, never>
   | null };

export type PoolGetByIdQueryVariables = Exact<{
  id: Scalars['DBID']['input'];
}>;


export type PoolGetByIdQuery = { poolById?:
    | { message: string }
    | { id: string, dbid: any, status: PoolStatus, name: string, description: string, slug: string, createdAt: any, updatedAt: any, owner:
        | { address: any, accountType: EvmAccountType }
        | { dbid: any }
       }
   | null };


export const PoolCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PoolCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PoolCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poolCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dbid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]} as unknown as DocumentNode<PoolCreateMutation, PoolCreateMutationVariables>;
export const UserRegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserRegister"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserRegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRegister"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requiresConfirmation"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dbid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]} as unknown as DocumentNode<UserRegisterMutation, UserRegisterMutationVariables>;
export const UserByAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserByAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chainAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChainAddressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userByAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chainAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chainAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dbid"}}]}}]}}]}}]} as unknown as DocumentNode<UserByAddressQuery, UserByAddressQueryVariables>;
export const MyPoolsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyPools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Viewer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dbid"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dbid"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<MyPoolsQuery, MyPoolsQueryVariables>;
export const PoolGetByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PoolGetById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DBID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poolById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dbid"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dbid"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EVMAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"accountType"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<PoolGetByIdQuery, PoolGetByIdQueryVariables>;