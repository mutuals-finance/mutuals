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

export type AddUserWalletPayload = {
  viewer: User;
};

export type AddUserWalletResult = AddUserWalletPayload | ErrAddressOwnedByUser | ErrAuthenticationFailed | ErrInvalidInput | ErrNotAuthorized;

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
  data?: Maybe<Scalars['JSON']['output']>;
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

export type ClaimBulkCreateInput = {
  children?: InputMaybe<Array<Scalars['ID']['input']>>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  recipientAddress?: InputMaybe<Scalars['Address']['input']>;
  stateId: Scalars['String']['input'];
  strategyId: Scalars['String']['input'];
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
  data?: InputMaybe<Scalars['JSON']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  recipientAddress?: InputMaybe<Scalars['Address']['input']>;
  stateId?: InputMaybe<Scalars['String']['input']>;
  strategyId?: InputMaybe<Scalars['String']['input']>;
};

export type ClaimBulkUpdatePayload = {
  claims: Array<Claim>;
  count: Scalars['Int']['output'];
};

export type ClaimBulkUpdateResult = ClaimBulkUpdatePayload | ErrInvalidInput | ErrNotAuthorized | ErrPoolNotFound;

export type ClaimCreateInput = {
  children?: InputMaybe<Array<Scalars['String']['input']>>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  label: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['String']['input']>;
  recipientAddress?: InputMaybe<Scalars['Address']['input']>;
  stateId: Scalars['String']['input'];
  strategyId: Scalars['String']['input'];
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
  data?: InputMaybe<Scalars['JSON']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  recipientAddress?: InputMaybe<Scalars['Address']['input']>;
  stateId?: InputMaybe<Scalars['String']['input']>;
  strategyId?: InputMaybe<Scalars['String']['input']>;
};

export type ClaimUpdatePayload = {
  claim: Claim;
};

export type ClaimUpdateResult = ClaimUpdatePayload | ErrInvalidInput | ErrNotAuthorized | ErrPoolNotFound;

export type ClearNotificationsPayload = {
  notifications: Array<Maybe<Notification>>;
};

export type ClearNotificationsResult = ClearNotificationsPayload | ErrNotAuthorized;

export type DebugAuth = {
  asUsername?: InputMaybe<Scalars['String']['input']>;
  chainAddresses?: InputMaybe<Array<ChainAddressInput>>;
  debugToolsPassword?: InputMaybe<Scalars['String']['input']>;
};

export type DeletedNode = Node & {
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

export type EmailNotificationSettingsUpdatePayload = {
  emailNotificationSettings: EmailNotificationSettings;
};

export type EmailNotificationSettingsUpdateResult = EmailNotificationSettingsUpdatePayload | ErrInvalidInput | ErrNotAuthorized;

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
  IgnoreFailed: 'IGNORE_FAILED',
  RejectEverything: 'REJECT_EVERYTHING',
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
  viewer: User;
};

export type LoginResult = ErrAuthenticationFailed | ErrDoesNotOwnRequiredToken | ErrUserNotFound | LoginPayload;

export type LogoutPayload = {
  viewer?: Maybe<User>;
};

export type MagicLinkAuth = {
  token: Scalars['String']['input'];
};

export type Mutation = {
  addUserWallet: AddUserWalletResult;
  clearNotifications: ClearNotificationsResult;
  emailNotificationSettingsUpdate: EmailNotificationSettingsUpdateResult;
  login: LoginResult;
  logout: LogoutPayload;
  notificationSettingsUpdate: NotificationSettingsUpdateResult;
  poolClaimBulkCreate: ClaimBulkCreateResult;
  poolClaimBulkDelete: ClaimBulkDeleteResult;
  poolClaimBulkUpdate: ClaimBulkUpdateResult;
  poolClaimCreate: ClaimCreateResult;
  poolClaimDelete: ClaimDeleteResult;
  poolClaimUpdate: ClaimUpdateResult;
  poolCreate: PoolCreateResult;
  poolDelete: PoolDeleteResult;
  poolUpdate: PoolUpdateResult;
  preverifyEmail: PreverifyEmailResult;
  pushTokenRegister: PushTokenRegisterResult;
  pushTokenUnregister: PushTokenUnregisterResult;
  removeUserWallets: RemoveUserWalletsResult;
  resendVerificationEmail: ResendVerificationEmailResult;
  roleUpdate: RoleUpdateResult;
  tokenVerify: VerifyTokenResult;
  unsubscribeFromEmail: UnsubscribeFromEmailResult;
  updateEmail: UpdateEmailResult;
  userDelete: UserDeleteResult;
  userRegister: UserRegisterResult;
  userRequestDeletion: UserDeleteResult;
  userUpdate: UserUpdateResult;
  verifyEmail: VerifyEmailResult;
};


export type MutationAddUserWalletArgs = {
  authMechanism: AuthMechanism;
};


export type MutationEmailNotificationSettingsUpdateArgs = {
  settings: UpdateEmailNotificationSettingsInput;
};


export type MutationLoginArgs = {
  authMechanism: AuthMechanism;
};


export type MutationNotificationSettingsUpdateArgs = {
  settings: NotificationSettingsInput;
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


export type MutationPreverifyEmailArgs = {
  email: Scalars['Email']['input'];
};


export type MutationPushTokenRegisterArgs = {
  pushToken: Scalars['String']['input'];
};


export type MutationPushTokenUnregisterArgs = {
  pushToken: Scalars['String']['input'];
};


export type MutationRemoveUserWalletsArgs = {
  walletIds: Array<Scalars['ID']['input']>;
};


export type MutationRoleUpdateArgs = {
  input: RoleUpdateInput;
  role: Role;
};


export type MutationTokenVerifyArgs = {
  token: Scalars['String']['input'];
};


export type MutationUnsubscribeFromEmailArgs = {
  input: UnsubscribeFromEmailTypeInput;
};


export type MutationUpdateEmailArgs = {
  authMechanism?: InputMaybe<AuthMechanism>;
  email: Scalars['Email']['input'];
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
  input: UserUpdateInput;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']['input'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

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

export type NotificationSettingsUpdatePayload = {
  notificationSettings: NotificationSettings;
};

export type NotificationSettingsUpdateResult = ErrInvalidInput | ErrNotAuthorized | NotificationSettingsUpdatePayload;

export type NotificationsConnection = {
  edges?: Maybe<Array<Maybe<NotificationEdge>>>;
  pageInfo?: Maybe<PageInfo>;
  unseenCount?: Maybe<Scalars['Int']['output']>;
};

export type OneTimeLoginTokenAuth = {
  token: Scalars['String']['input'];
};

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
  description: Scalars['String']['output'];
  donationBps: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  owner: UserOrAccount;
  slug: Scalars['String']['output'];
  status: PoolStatus;
  updatedAt: Scalars['Time']['output'];
};

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

export type PoolDeletePayload = {
  pool: Pool;
};

export type PoolDeleteResult = ErrInvalidInput | ErrNotAuthorized | ErrPoolNotFound | PoolDeletePayload;

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

export type PoolResult = ErrInvalidInput | ErrPoolNotFound | Pool;

export type PoolSearchResult = {
  pool?: Maybe<Pool>;
};

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

export type PreverifyEmailPayload = {
  email: Scalars['Email']['output'];
  result: PreverifyEmailStatus;
};

export type PreverifyEmailResult = ErrInvalidInput | PreverifyEmailPayload;

export const PreverifyEmailStatus = {
  Invalid: 'Invalid',
  Risky: 'Risky',
  Valid: 'Valid'
} as const;

export type PreverifyEmailStatus = typeof PreverifyEmailStatus[keyof typeof PreverifyEmailStatus];
export type PrivyAuth = {
  token: Scalars['String']['input'];
};

export type PushTokenRegisterPayload = {
  pushToken: Scalars['String']['output'];
  user: User;
};

export type PushTokenRegisterResult = ErrInvalidInput | ErrNotAuthorized | ErrPushTokenBelongsToAnotherUser | PushTokenRegisterPayload;

export type PushTokenUnregisterPayload = {
  pushToken: Scalars['String']['output'];
  user: User;
};

export type PushTokenUnregisterResult = ErrInvalidInput | ErrNotAuthorized | PushTokenUnregisterPayload;

export type Query = {
  _service: _Service;
  isEmailAddressAvailable?: Maybe<Scalars['Boolean']['output']>;
  node?: Maybe<Node>;
  /** Look up a pool by ID, slug, or contract ID. */
  pool: PoolResult;
  searchPools: SearchPoolsResult;
  searchUsers: SearchUsersResult;
  userByAddress: UserResult;
  userById: UserResult;
  userByUsername: UserResult;
  usersByRole?: Maybe<UsersConnection>;
  viewer?: Maybe<UserResult>;
};


export type QueryIsEmailAddressAvailableArgs = {
  emailAddress: Scalars['Email']['input'];
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


export type QueryUserByAddressArgs = {
  chainAddress: ChainAddressInput;
};


export type QueryUserByIdArgs = {
  id: Scalars['ID']['input'];
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
  viewer: User;
};

export type RemoveUserWalletsResult = ErrInvalidInput | ErrNotAuthorized | RemoveUserWalletsPayload;

export const ReportWindow = {
  AllTime: 'ALL_TIME',
  Last_5Days: 'LAST_5_DAYS',
  Last_7Days: 'LAST_7_DAYS'
} as const;

export type ReportWindow = typeof ReportWindow[keyof typeof ReportWindow];
export type ResendVerificationEmailPayload = {
  viewer: User;
};

export type ResendVerificationEmailResult = ErrInvalidInput | ErrNotAuthorized | ResendVerificationEmailPayload;

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
  results?: Maybe<Array<PoolSearchResult>>;
};

export type SearchPoolsResult = ErrInvalidInput | SearchPoolsPayload;

export type SearchUsersPayload = {
  results?: Maybe<Array<UserSearchResult>>;
};

export type SearchUsersResult = ErrInvalidInput | SearchUsersPayload;

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

export type UnsubscribeFromEmailPayload = {
  viewer: User;
};

export type UnsubscribeFromEmailResult = ErrInvalidInput | UnsubscribeFromEmailPayload;

export type UnsubscribeFromEmailTypeInput = {
  token: Scalars['String']['input'];
  type: EmailUnsubscriptionType;
};

export type UpdateEmailNotificationSettingsInput = {
  unsubscribedFromAll: Scalars['Boolean']['input'];
  unsubscribedFromNotifications: Scalars['Boolean']['input'];
};

export type UpdateEmailPayload = {
  viewer: User;
};

export type UpdateEmailResult = ErrInvalidInput | ErrNotAuthorized | UpdateEmailPayload;

export type User = Node & {
  id: Scalars['ID']['output'];
  notificationSettings?: Maybe<NotificationSettings>;
  notifications?: Maybe<NotificationsConnection>;
  pools?: Maybe<Array<Maybe<Pool>>>;
  roles?: Maybe<Array<Maybe<Role>>>;
};


export type UserNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type UserDeletePayload = {
  user?: Maybe<User>;
};

export type UserDeleteResult = ErrInvalidInput | ErrNotAuthorized | UserDeletePayload;

export type UserEdge = {
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<User>;
};

export type UserEmail = {
  email?: Maybe<Scalars['Email']['output']>;
  emailNotificationSettings?: Maybe<EmailNotificationSettings>;
  verificationStatus?: Maybe<EmailVerificationStatus>;
};

export type UserOrAccount = EvmAccount | User;

export type UserRegisterInput = {
  authMechanism: AuthMechanism;
};

export type UserRegisterPayload = {
  requiresConfirmation?: Maybe<Scalars['Boolean']['output']>;
  user: User;
};

export type UserRegisterResult = ErrAuthenticationFailed | ErrDoesNotOwnRequiredToken | ErrInvalidInput | ErrUserAlreadyExists | UserRegisterPayload;

export type UserResult = ErrInvalidInput | ErrNotAuthorized | ErrUserNotFound | User;

export type UserSearchResult = {
  user?: Maybe<User>;
};

export type UserUpdateInput = {
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdatePayload = {
  user: User;
};

export type UserUpdateResult = ErrInvalidInput | ErrNotAuthorized | ErrUsernameNotAvailable | UserUpdatePayload;

export type UsersConnection = {
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo: PageInfo;
};

export type VerifyEmailPayload = {
  email: Scalars['Email']['output'];
};

export type VerifyEmailResult = ErrInvalidInput | VerifyEmailPayload;

export type VerifyTokenPayload = {
  isValid: Scalars['Boolean']['output'];
  user: User;
};

export type VerifyTokenResult = ErrInvalidInput | ErrNotAuthorized | VerifyTokenPayload;

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

export type PoolWithOwnerAndContractFragment = { id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any } & { ' $fragmentName'?: 'PoolWithOwnerAndContractFragment' };

export type UserPoolListWithOwnerAndContractFragment = { pools?: Array<{ id: string, name: string, description: string, image: string, slug: string, status: PoolStatus, donationBps: number, createdAt: any, updatedAt: any } | null> | null } & { ' $fragmentName'?: 'UserPoolListWithOwnerAndContractFragment' };

export type PoolCreateMutationVariables = Exact<{
  input: PoolCreateInput;
}>;


export type PoolCreateMutation = { poolCreate:
    | { message: string }
    | { message: string }
    | { pool: { ' $fragmentRefs'?: { 'PoolWithOwnerAndContractFragment': PoolWithOwnerAndContractFragment } } }
   };

export type UserRegisterMutationVariables = Exact<{
  input: UserRegisterInput;
}>;


export type UserRegisterMutation = { userRegister:
    | { message: string }
    | { message: string }
    | { message: string }
    | { message: string }
    | { requiresConfirmation?: boolean | null, user: { id: string } }
   };

export type UserByAddressQueryVariables = Exact<{
  chainAddress: ChainAddressInput;
}>;


export type UserByAddressQuery = { userByAddress:
    | { __typename: 'ErrInvalidInput', message: string }
    | { __typename: 'ErrNotAuthorized', message: string }
    | { __typename: 'ErrUserNotFound', message: string }
    | { __typename: 'User', id: string }
   };

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = { viewer?:
    | { message: string }
    | { id: string }
    | Record<PropertyKey, never>
   | null };

export type PoolQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type PoolQuery = { pool:
    | { message: string }
    | { message: string }
    | { ' $fragmentRefs'?: { 'PoolWithOwnerAndContractFragment': PoolWithOwnerAndContractFragment } }
   };

export type ViewerPoolListQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerPoolListQuery = { viewer?:
    | { __typename: 'ErrInvalidInput' }
    | { __typename: 'ErrNotAuthorized', message: string }
    | { __typename: 'ErrUserNotFound' }
    | (
      { __typename: 'User' }
      & { ' $fragmentRefs'?: { 'UserPoolListWithOwnerAndContractFragment': UserPoolListWithOwnerAndContractFragment } }
    )
   | null };

export const PoolWithOwnerAndContractFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithOwnerAndContract"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolWithOwnerAndContractFragment, unknown>;
export const UserPoolListWithOwnerAndContractFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPoolListWithOwnerAndContract"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UserPoolListWithOwnerAndContractFragment, unknown>;
export const PoolCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PoolCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PoolCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poolCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoolCreatePayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolWithOwnerAndContract"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithOwnerAndContract"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolCreateMutation, PoolCreateMutationVariables>;
export const UserRegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserRegister"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserRegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRegister"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrUserAlreadyExists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrAuthenticationFailed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserRegisterPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requiresConfirmation"}}]}}]}}]}}]} as unknown as DocumentNode<UserRegisterMutation, UserRegisterMutationVariables>;
export const UserByAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserByAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chainAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChainAddressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userByAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chainAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chainAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserByAddressQuery, UserByAddressQueryVariables>;
export const ViewerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<ViewerQuery, ViewerQueryVariables>;
export const PoolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"contractId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrPoolNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PoolWithOwnerAndContract"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PoolWithOwnerAndContract"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PoolQuery, PoolQueryVariables>;
export const ViewerPoolListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ViewerPoolList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPoolListWithOwnerAndContract"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPoolListWithOwnerAndContract"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"donationBps"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ViewerPoolListQuery, ViewerPoolListQueryVariables>;