/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
export type AddRolesToUserPayloadOrError = ErrNotAuthorized | MutualsUser;

export type AddUserWalletPayload = {
  viewer?: Maybe<Viewer>;
};

export type AddUserWalletPayloadOrError = AddUserWalletPayload | ErrAddressOwnedByUser | ErrAuthenticationFailed | ErrInvalidInput | ErrNotAuthorized;

export type AdminAddWalletInput = {
  chainAddress: ChainAddressInput;
  username: Scalars['String']['input'];
  walletType: WalletType;
};

export type AdminAddWalletPayload = {
  user?: Maybe<MutualsUser>;
};

export type AdminAddWalletPayloadOrError = AdminAddWalletPayload | ErrAddressOwnedByUser | ErrNotAuthorized | ErrUserNotFound;

export type Allocation = Node & {
  creationTime?: Maybe<Scalars['Time']['output']>;
  dbid: Scalars['DBID']['output'];
  id: Scalars['ID']['output'];
  lastUpdated?: Maybe<Scalars['Time']['output']>;
  pool?: Maybe<Pool>;
  recipientAddress?: Maybe<Scalars['Address']['output']>;
  value?: Maybe<Scalars['HexString']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type AllocationAggregation = Node & {
  creationTime?: Maybe<Scalars['Time']['output']>;
  dbid: Scalars['DBID']['output'];
  expression?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastUpdated?: Maybe<Scalars['Time']['output']>;
  pool?: Maybe<Pool>;
  recipientAddress?: Maybe<Scalars['Address']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type Asset = Node & {
  balance?: Maybe<Scalars['HexString']['output']>;
  dbid: Scalars['DBID']['output'];
  id: Scalars['ID']['output'];
  ownerAddress?: Maybe<ChainAddress>;
  token?: Maybe<Token>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type AuthMechanism = {
  debug?: InputMaybe<DebugAuth>;
  eoa?: InputMaybe<EoaAuth>;
  gnosisSafe?: InputMaybe<GnosisSafeAuth>;
  magicLink?: InputMaybe<MagicLinkAuth>;
  oneTimeLoginToken?: InputMaybe<OneTimeLoginTokenAuth>;
  privy?: InputMaybe<PrivyAuth>;
};

export type AuthNonce = {
  message?: Maybe<Scalars['String']['output']>;
  nonce?: Maybe<Scalars['String']['output']>;
};

export type AuthorizationError = ErrDoesNotOwnRequiredToken | ErrInvalidToken | ErrNoCookie | ErrSessionInvalidated;

export const BasicAuthType = {
  Monitoring: 'Monitoring',
  Retool: 'Retool'
} as const;

export type BasicAuthType = typeof BasicAuthType[keyof typeof BasicAuthType];
export const CalculationType = {
  Fixed: 'Fixed',
  Percentage: 'Percentage'
} as const;

export type CalculationType = typeof CalculationType[keyof typeof CalculationType];
export const Chain = {
  Arbitrum: 'Arbitrum',
  Ethereum: 'Ethereum',
  Optimism: 'Optimism',
  Polygon: 'Polygon'
} as const;

export type Chain = typeof Chain[keyof typeof Chain];
export type ChainAddress = {
  address?: Maybe<Scalars['Address']['output']>;
  chain?: Maybe<Chain>;
};

export type ChainAddressInput = {
  address: Scalars['Address']['input'];
  chain: Chain;
};

export type ChainPools = {
  chain?: Maybe<Chain>;
  pools?: Maybe<Array<Maybe<Pool>>>;
};

export type ChainPubKey = {
  chain?: Maybe<Chain>;
  pubKey?: Maybe<Scalars['PubKey']['output']>;
};

export type ChainPubKeyInput = {
  chain: Chain;
  pubKey: Scalars['PubKey']['input'];
};

export type ClearAllNotificationsPayload = {
  notifications?: Maybe<Array<Maybe<Notification>>>;
};

export type CreatePoolInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePoolPayload = {
  pool?: Maybe<Pool>;
};

export type CreatePoolPayloadOrError = CreatePoolPayload | ErrInvalidInput | ErrNotAuthorized;

export type CreateUserInput = {
  email?: InputMaybe<Scalars['Email']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
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

export type DeletePoolPayload = {
  deletedId?: Maybe<DeletedNode>;
};

export type DeletePoolPayloadOrError = DeletePoolPayload | ErrInvalidInput | ErrNotAuthorized;

export type DeletedNode = Node & {
  dbid: Scalars['DBID']['output'];
  id: Scalars['ID']['output'];
};

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

export type GetAuthNoncePayloadOrError = AuthNonce;

export type GnosisSafeAuth = {
  address: Scalars['Address']['input'];
  message: Scalars['String']['input'];
  nonce: Scalars['String']['input'];
};

export type GroupNotificationUserEdge = {
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<MutualsUser>;
};

export type GroupNotificationUsersConnection = {
  edges?: Maybe<Array<Maybe<GroupNotificationUserEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type GroupedNotification = {
  count?: Maybe<Scalars['Int']['output']>;
  creationTime?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  seen?: Maybe<Scalars['Boolean']['output']>;
  updatedTime?: Maybe<Scalars['Time']['output']>;
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
  addRolesToUser?: Maybe<AddRolesToUserPayloadOrError>;
  addUserWallet?: Maybe<AddUserWalletPayloadOrError>;
  addWalletToUserUnchecked?: Maybe<AdminAddWalletPayloadOrError>;
  clearAllNotifications?: Maybe<ClearAllNotificationsPayload>;
  createPool?: Maybe<CreatePoolPayloadOrError>;
  createUser?: Maybe<CreateUserPayloadOrError>;
  deletePool?: Maybe<DeletePoolPayloadOrError>;
  getAuthNonce?: Maybe<GetAuthNoncePayloadOrError>;
  login?: Maybe<LoginPayloadOrError>;
  logout?: Maybe<LogoutPayload>;
  optInForRoles?: Maybe<OptInForRolesPayloadOrError>;
  optOutForRoles?: Maybe<OptOutForRolesPayloadOrError>;
  preverifyEmail?: Maybe<PreverifyEmailPayloadOrError>;
  publishPool?: Maybe<PublishPoolPayloadOrError>;
  registerUserPushToken?: Maybe<RegisterUserPushTokenPayloadOrError>;
  removeUserWallets?: Maybe<RemoveUserWalletsPayloadOrError>;
  resendVerificationEmail?: Maybe<ResendVerificationEmailPayloadOrError>;
  revokeRolesFromUser?: Maybe<RevokeRolesFromUserPayloadOrError>;
  unregisterUserPushToken?: Maybe<UnregisterUserPushTokenPayloadOrError>;
  unsubscribeFromEmailType?: Maybe<UnsubscribeFromEmailTypePayloadOrError>;
  updateEmail?: Maybe<UpdateEmailPayloadOrError>;
  updateEmailNotificationSettings?: Maybe<UpdateEmailNotificationSettingsPayloadOrError>;
  updateNotificationSettings?: Maybe<NotificationSettings>;
  updatePoolHidden?: Maybe<UpdatePoolHiddenPayloadOrError>;
  updatePoolOrder?: Maybe<UpdatePoolOrderPayloadOrError>;
  updatePrimaryWallet?: Maybe<UpdatePrimaryWalletPayloadOrError>;
  updateUserExperience?: Maybe<UpdateUserExperiencePayloadOrError>;
  updateUserInfo?: Maybe<UpdateUserInfoPayloadOrError>;
  uploadPersistedQueries?: Maybe<UploadPersistedQueriesPayloadOrError>;
  upsertPool?: Maybe<UpsertPoolPayloadOrError>;
  verifyEmail?: Maybe<VerifyEmailPayloadOrError>;
  verifyEmailMagicLink?: Maybe<VerifyEmailMagicLinkPayloadOrError>;
};


export type MutationAddRolesToUserArgs = {
  roles?: InputMaybe<Array<InputMaybe<Role>>>;
  username: Scalars['String']['input'];
};


export type MutationAddUserWalletArgs = {
  authMechanism: AuthMechanism;
  chainAddress: ChainAddressInput;
};


export type MutationAddWalletToUserUncheckedArgs = {
  input: AdminAddWalletInput;
};


export type MutationCreatePoolArgs = {
  input: CreatePoolInput;
};


export type MutationCreateUserArgs = {
  authMechanism: AuthMechanism;
  input: CreateUserInput;
};


export type MutationDeletePoolArgs = {
  poolId: Scalars['DBID']['input'];
};


export type MutationLoginArgs = {
  authMechanism: AuthMechanism;
};


export type MutationLogoutArgs = {
  pushTokenToUnregister?: InputMaybe<Scalars['String']['input']>;
};


export type MutationOptInForRolesArgs = {
  roles: Array<Role>;
};


export type MutationOptOutForRolesArgs = {
  roles: Array<Role>;
};


export type MutationPreverifyEmailArgs = {
  input: PreverifyEmailInput;
};


export type MutationPublishPoolArgs = {
  input: PublishPoolInput;
};


export type MutationRegisterUserPushTokenArgs = {
  pushToken: Scalars['String']['input'];
};


export type MutationRemoveUserWalletsArgs = {
  walletIds: Array<Scalars['DBID']['input']>;
};


export type MutationRevokeRolesFromUserArgs = {
  roles?: InputMaybe<Array<InputMaybe<Role>>>;
  username: Scalars['String']['input'];
};


export type MutationUnregisterUserPushTokenArgs = {
  pushToken: Scalars['String']['input'];
};


export type MutationUnsubscribeFromEmailTypeArgs = {
  input: UnsubscribeFromEmailTypeInput;
};


export type MutationUpdateEmailArgs = {
  input: UpdateEmailInput;
};


export type MutationUpdateEmailNotificationSettingsArgs = {
  input: UpdateEmailNotificationSettingsInput;
};


export type MutationUpdateNotificationSettingsArgs = {
  settings?: InputMaybe<NotificationSettingsInput>;
};


export type MutationUpdatePoolHiddenArgs = {
  input: UpdatePoolHiddenInput;
};


export type MutationUpdatePoolOrderArgs = {
  input: UpdatePoolOrderInput;
};


export type MutationUpdatePrimaryWalletArgs = {
  walletID: Scalars['DBID']['input'];
};


export type MutationUpdateUserExperienceArgs = {
  input: UpdateUserExperienceInput;
};


export type MutationUpdateUserInfoArgs = {
  input: UpdateUserInfoInput;
};


export type MutationUploadPersistedQueriesArgs = {
  input?: InputMaybe<UploadPersistedQueriesInput>;
};


export type MutationUpsertPoolArgs = {
  input: UpsertPoolInput;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};


export type MutationVerifyEmailMagicLinkArgs = {
  input: VerifyEmailMagicLinkInput;
};

export type MutualsUser = Node & {
  dbid: Scalars['DBID']['output'];
  id: Scalars['ID']['output'];
  isAuthenticatedUser?: Maybe<Scalars['Boolean']['output']>;
  pools?: Maybe<Array<Maybe<Pool>>>;
  poolsByChain?: Maybe<ChainPools>;
  primaryWallet?: Maybe<Wallet>;
  roles?: Maybe<Array<Maybe<Role>>>;
  universal?: Maybe<Scalars['Boolean']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  wallets?: Maybe<Array<Maybe<Wallet>>>;
};


export type MutualsUserPoolsByChainArgs = {
  chain: Chain;
};

export type MutualsUserOrAddress = ChainAddress | MutualsUser;

export type MutualsUserOrWallet = MutualsUser | Wallet;

export type Node = {
  id: Scalars['ID']['output'];
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
  user?: Maybe<MutualsUser>;
};

export type OptInForRolesPayloadOrError = ErrInvalidInput | ErrNotAuthorized | OptInForRolesPayload;

export type OptOutForRolesPayload = {
  user?: Maybe<MutualsUser>;
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
  address?: Maybe<Scalars['Address']['output']>;
  allocationAggregation?: Maybe<Array<AllocationAggregation>>;
  allocations?: Maybe<Array<Maybe<Allocation>>>;
  assets?: Maybe<Array<Maybe<Asset>>>;
  chain?: Maybe<Chain>;
  creatorAddress?: Maybe<Scalars['Address']['output']>;
  dbid: Scalars['DBID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  ownerAddress?: Maybe<Scalars['Address']['output']>;
  status: PoolStatus;
  version?: Maybe<Scalars['Int']['output']>;
};


export type PoolAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type PoolAllocationInput = {
  calculationType: Array<CalculationType>;
  children?: InputMaybe<Array<PoolAllocationInput>>;
  id?: InputMaybe<Scalars['DBID']['input']>;
  recipientAddress?: InputMaybe<Scalars['Address']['input']>;
  recipientType: Array<RecipientType>;
  value: Scalars['HexString']['input'];
};

export type PoolByIdPayloadOrError = ErrPoolNotFound | Pool;

export type PoolPositionInput = {
  poolId: Scalars['DBID']['input'];
  position: Scalars['String']['input'];
};

export type PoolSearchResult = {
  pool?: Maybe<Pool>;
};

export const PoolStatus = {
  Active: 'Active',
  Draft: 'Draft',
  Paused: 'Paused'
} as const;

export type PoolStatus = typeof PoolStatus[keyof typeof PoolStatus];
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

export type PublishPoolInput = {
  caption?: InputMaybe<Scalars['String']['input']>;
  editId: Scalars['String']['input'];
  poolId: Scalars['DBID']['input'];
};

export type PublishPoolPayload = {
  pool?: Maybe<Pool>;
};

export type PublishPoolPayloadOrError = ErrInvalidInput | ErrNotAuthorized | PublishPoolPayload;

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
  viewerPoolById?: Maybe<ViewerPoolByIdPayloadOrError>;
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


export type QueryViewerPoolByIdArgs = {
  id: Scalars['DBID']['input'];
};

export const RecipientType = {
  DefaultGroup: 'DefaultGroup',
  DefaultItem: 'DefaultItem',
  PrioritizedGroup: 'PrioritizedGroup',
  TimedGroup: 'TimedGroup'
} as const;

export type RecipientType = typeof RecipientType[keyof typeof RecipientType];
export type RegisterUserPushTokenPayload = {
  viewer?: Maybe<Viewer>;
};

export type RegisterUserPushTokenPayloadOrError = ErrInvalidInput | ErrNotAuthorized | ErrPushTokenBelongsToAnotherUser | RegisterUserPushTokenPayload;

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

export type RevokeRolesFromUserPayloadOrError = ErrNotAuthorized | MutualsUser;

export const Role = {
  Admin: 'ADMIN',
  BetaTester: 'BETA_TESTER',
  EarlyAccess: 'EARLY_ACCESS'
} as const;

export type Role = typeof Role[keyof typeof Role];
export type SearchPoolsPayload = {
  results?: Maybe<Array<PoolSearchResult>>;
};

export type SearchPoolsPayloadOrError = ErrInvalidInput | SearchPoolsPayload;

export type SearchUsersPayload = {
  results?: Maybe<Array<UserSearchResult>>;
};

export type SearchUsersPayloadOrError = ErrInvalidInput | SearchUsersPayload;

export type Subscription = {
  newNotification?: Maybe<Notification>;
  notificationUpdated?: Maybe<Notification>;
};

export type Token = Node & {
  blockNumber?: Maybe<Scalars['String']['output']>;
  chain?: Maybe<Chain>;
  contractAddress?: Maybe<Scalars['Int']['output']>;
  creationTime?: Maybe<Scalars['Time']['output']>;
  dbid: Scalars['DBID']['output'];
  decimals?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isSpam?: Maybe<Scalars['Boolean']['output']>;
  lastUpdated?: Maybe<Scalars['Time']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  tokenType?: Maybe<TokenType>;
  totalSupply?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export const TokenType = {
  Erc20: 'ERC20'
} as const;

export type TokenType = typeof TokenType[keyof typeof TokenType];
export type UnregisterUserPushTokenPayload = {
  viewer?: Maybe<Viewer>;
};

export type UnregisterUserPushTokenPayloadOrError = ErrInvalidInput | ErrNotAuthorized | ErrPushTokenBelongsToAnotherUser | UnregisterUserPushTokenPayload;

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

export type UpdatePoolHiddenInput = {
  hidden: Scalars['Boolean']['input'];
  id: Scalars['DBID']['input'];
};

export type UpdatePoolHiddenPayload = {
  pool?: Maybe<Pool>;
};

export type UpdatePoolHiddenPayloadOrError = ErrInvalidInput | ErrNotAuthorized | UpdatePoolHiddenPayload;

export type UpdatePoolInfoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['DBID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePoolInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  editId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<Scalars['DBID']['input']>>;
  poolId: Scalars['DBID']['input'];
};

export type UpdatePoolOrderInput = {
  positions: Array<PoolPositionInput>;
};

export type UpdatePoolOrderPayload = {
  viewer?: Maybe<Viewer>;
};

export type UpdatePoolOrderPayloadOrError = ErrInvalidInput | ErrNotAuthorized | UpdatePoolOrderPayload;

export type UpdatePoolPayload = {
  pool?: Maybe<Pool>;
};

export type UpdatePoolPayloadOrError = ErrInvalidInput | ErrNotAuthorized | UpdatePoolPayload;

export type UpdatePrimaryWalletPayload = {
  viewer?: Maybe<Viewer>;
};

export type UpdatePrimaryWalletPayloadOrError = ErrInvalidInput | ErrNotAuthorized | UpdatePrimaryWalletPayload;

export type UpdateUserExperienceInput = {
  experienceType: UserExperienceType;
  experienced: Scalars['Boolean']['input'];
};

export type UpdateUserExperiencePayload = {
  viewer?: Maybe<Viewer>;
};

export type UpdateUserExperiencePayloadOrError = ErrInvalidInput | ErrNotAuthorized | UpdateUserExperiencePayload;

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

export type UpsertPoolInput = {
  allocations?: InputMaybe<Array<PoolAllocationInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  poolId?: InputMaybe<Scalars['DBID']['input']>;
};

export type UpsertPoolPayload = {
  pool?: Maybe<Pool>;
};

export type UpsertPoolPayloadOrError = ErrInvalidInput | ErrNotAuthorized | UpsertPoolPayload;

export type UserByAddressOrError = ErrInvalidInput | ErrUserNotFound | MutualsUser;

export type UserByIdOrError = ErrInvalidInput | ErrUserNotFound | MutualsUser;

export type UserByUsernameOrError = ErrInvalidInput | ErrUserNotFound | MutualsUser;

export type UserEdge = {
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<MutualsUser>;
};

export type UserEmail = {
  email?: Maybe<Scalars['Email']['output']>;
  emailNotificationSettings?: Maybe<EmailNotificationSettings>;
  verificationStatus?: Maybe<EmailVerificationStatus>;
};

export type UserExperience = {
  experienced: Scalars['Boolean']['output'];
  type: UserExperienceType;
};

export const UserExperienceType = {
  EmailUpsell: 'EmailUpsell',
  MaintenanceFeb2023: 'MaintenanceFeb2023',
  TwitterConnectionOnboardingUpsell: 'TwitterConnectionOnboardingUpsell',
  UpsellMintMemento4: 'UpsellMintMemento4'
} as const;

export type UserExperienceType = typeof UserExperienceType[keyof typeof UserExperienceType];
export type UserSearchResult = {
  user?: Maybe<MutualsUser>;
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

export type Viewer = Node & {
  email?: Maybe<UserEmail>;
  id: Scalars['ID']['output'];
  notificationSettings?: Maybe<NotificationSettings>;
  /**
   * Returns a list of notifications in reverse chronological order.
   * Seen notifications come after unseen notifications
   */
  notifications?: Maybe<NotificationsConnection>;
  user?: Maybe<MutualsUser>;
  userExperiences?: Maybe<Array<UserExperience>>;
  viewerPools?: Maybe<Array<Maybe<ViewerPool>>>;
};


export type ViewerNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ViewerOrError = ErrNotAuthorized | Viewer;

export type ViewerPool = {
  pool?: Maybe<Pool>;
};

export type ViewerPoolByIdPayloadOrError = ErrPoolNotFound | ViewerPool;

export type Wallet = Node & {
  chain?: Maybe<Chain>;
  chainAddress?: Maybe<ChainAddress>;
  dbid: Scalars['DBID']['output'];
  id: Scalars['ID']['output'];
  pools?: Maybe<Array<Maybe<Pool>>>;
  walletType?: Maybe<WalletType>;
};

export const WalletType = {
  Eoa: 'EOA',
  GnosisSafe: 'GnosisSafe'
} as const;

export type WalletType = typeof WalletType[keyof typeof WalletType];
export type _Service = {
  sdl?: Maybe<Scalars['String']['output']>;
};

export type AddWalletMutationVariables = Exact<{
  chainAddress: ChainAddressInput;
  authMechanism: AuthMechanism;
}>;


export type AddWalletMutation = { addUserWallet?: { __typename: 'AddUserWalletPayload', viewer?: { user?: { primaryWallet?: { __typename: 'Wallet' } | null, wallets?: Array<{ dbid: any, chainAddress?: { address?: any | null, chain?: Chain | null } | null } | null> | null } | null } | null } | {} | null };

export type CreateNonceMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateNonceMutation = { getAuthNonce?: { __typename: 'AuthNonce', nonce?: string | null, message?: string | null } | null };

export type CreateUserMutationVariables = Exact<{
  authMechanism: AuthMechanism;
  input: CreateUserInput;
}>;


export type CreateUserMutation = { createUser?: { __typename: 'CreateUserPayload', viewer?: { user?: { dbid: any } | null } | null } | { __typename: 'ErrAuthenticationFailed' } | { __typename: 'ErrDoesNotOwnRequiredToken' } | { __typename: 'ErrInvalidInput' } | { __typename: 'ErrUserAlreadyExists' } | { __typename: 'ErrUsernameNotAvailable' } | null };

export type LoginMutationVariables = Exact<{
  mechanism: AuthMechanism;
}>;


export type LoginMutation = { login?: { __typename: 'ErrAuthenticationFailed', message: string } | { __typename: 'ErrDoesNotOwnRequiredToken', message: string } | { __typename: 'ErrUserNotFound', message: string } | { __typename: 'LoginPayload', viewer?: { user?: { dbid: any } | null } | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logout?: { __typename: 'LogoutPayload' } | null };

export type UpsertPoolMutationVariables = Exact<{
  input: UpsertPoolInput;
}>;


export type UpsertPoolMutation = { upsertPool?: { __typename: 'ErrInvalidInput' } | { __typename: 'ErrNotAuthorized' } | { __typename: 'UpsertPoolPayload', pool?: { id: string, dbid: any, version?: number | null, status: PoolStatus, name?: string | null, description?: string | null, address?: any | null, ownerAddress?: any | null, creatorAddress?: any | null, chain?: Chain | null } | null } | null };

export type PoolByIdQueryVariables = Exact<{
  id: Scalars['DBID']['input'];
}>;


export type PoolByIdQuery = { poolById?: { id: string, dbid: any, version?: number | null, status: PoolStatus, name?: string | null, description?: string | null, address?: any | null, ownerAddress?: any | null, creatorAddress?: any | null, chain?: Chain | null } | {} | null };

export type UserByAddressQueryVariables = Exact<{
  chainAddress: ChainAddressInput;
}>;


export type UserByAddressQuery = { userByAddress?: { __typename: 'ErrInvalidInput' } | { __typename: 'ErrUserNotFound' } | { __typename: 'MutualsUser', dbid: any, universal?: boolean | null } | null };

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = { viewer?: { __typename: 'Viewer', id: string, user?: { wallets?: Array<{ chainAddress?: { address?: any | null } | null } | null> | null } | null } | {} | null };

export type ViewerPoolsQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerPoolsQuery = { viewer?: { viewerPools?: Array<{ pool?: { id: string, dbid: any, version?: number | null, status: PoolStatus, name?: string | null, description?: string | null, address?: any | null, ownerAddress?: any | null, creatorAddress?: any | null, chain?: Chain | null } | null } | null> | null } | {} | null };

export type ViewerWalletsQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerWalletsQuery = { viewer?: { user?: { wallets?: Array<{ dbid: any, chainAddress?: { chain?: Chain | null, address?: any | null } | null } | null> | null, primaryWallet?: { dbid: any, chainAddress?: { chain?: Chain | null, address?: any | null } | null } | null } | null } | {} | null };


export const AddWalletDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddWallet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chainAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChainAddressInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authMechanism"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthMechanism"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUserWallet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chainAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chainAddress"}}},{"kind":"Argument","name":{"kind":"Name","value":"authMechanism"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authMechanism"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AddUserWalletPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primaryWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dbid"}},{"kind":"Field","name":{"kind":"Name","value":"chainAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"chain"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddWalletMutation, AddWalletMutationVariables>;
export const CreateNonceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNonce"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAuthNonce"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthNonce"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<CreateNonceMutation, CreateNonceMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authMechanism"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthMechanism"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authMechanism"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authMechanism"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Viewer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dbid"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrAuthenticationFailed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrDoesNotOwnRequiredToken"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrUserAlreadyExists"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrUsernameNotAvailable"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mechanism"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthMechanism"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authMechanism"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mechanism"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LoginPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dbid"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrUserNotFound"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrAuthenticationFailed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrDoesNotOwnRequiredToken"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const UpsertPoolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertPool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPoolInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertPool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPoolPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pool"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dbid"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ownerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"creatorAddress"}},{"kind":"Field","name":{"kind":"Name","value":"chain"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrInvalidInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrNotAuthorized"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]}}]} as unknown as DocumentNode<UpsertPoolMutation, UpsertPoolMutationVariables>;
export const PoolByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PoolById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DBID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poolById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pool"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dbid"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ownerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"creatorAddress"}},{"kind":"Field","name":{"kind":"Name","value":"chain"}}]}}]}}]}}]} as unknown as DocumentNode<PoolByIdQuery, PoolByIdQueryVariables>;
export const UserByAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserByAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chainAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChainAddressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userByAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chainAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chainAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutualsUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dbid"}},{"kind":"Field","name":{"kind":"Name","value":"universal"}}]}}]}}]}}]} as unknown as DocumentNode<UserByAddressQuery, UserByAddressQueryVariables>;
export const ViewerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Viewer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chainAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ViewerQuery, ViewerQueryVariables>;
export const ViewerPoolsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ViewerPools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Viewer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewerPools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pool"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dbid"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ownerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"creatorAddress"}},{"kind":"Field","name":{"kind":"Name","value":"chain"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ViewerPoolsQuery, ViewerPoolsQueryVariables>;
export const ViewerWalletsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ViewerWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Viewer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dbid"}},{"kind":"Field","name":{"kind":"Name","value":"chainAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chain"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dbid"}},{"kind":"Field","name":{"kind":"Name","value":"chainAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chain"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ViewerWalletsQuery, ViewerWalletsQueryVariables>;