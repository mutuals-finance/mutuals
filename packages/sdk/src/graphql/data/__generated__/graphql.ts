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
  PubKey: { input: any; output: any; }
  Time: { input: any; output: any; }
  _Any: { input: any; output: any; }
  federation__Policy: { input: any; output: any; }
  federation__Scope: { input: any; output: any; }
};

export enum Action {
  UserCreated = 'UserCreated'
}

export type AddRolesToUserPayloadOrError = ErrNotAuthorized | SplitFiUser;

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
  user?: Maybe<SplitFiUser>;
};

export type AdminAddWalletPayloadOrError = AdminAddWalletPayload | ErrAddressOwnedByUser | ErrNotAuthorized | ErrUserNotFound;

export type Asset = Node & {
  balance?: Maybe<Scalars['Int']['output']>;
  dbid: Scalars['DBID']['output'];
  id: Scalars['ID']['output'];
  ownerAddress?: Maybe<ChainAddress>;
  token?: Maybe<Token>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type AudioMedia = Media & {
  contentRenderURL?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<MediaDimensions>;
  mediaType?: Maybe<Scalars['String']['output']>;
  mediaURL?: Maybe<Scalars['String']['output']>;
  previewURLs?: Maybe<PreviewUrlSet>;
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

export enum BasicAuthType {
  Monitoring = 'Monitoring',
  Retool = 'Retool'
}

export enum Chain {
  Arbitrum = 'Arbitrum',
  Ethereum = 'Ethereum',
  Optimism = 'Optimism',
  Polygon = 'Polygon'
}

export type ChainAddress = {
  address?: Maybe<Scalars['Address']['output']>;
  chain?: Maybe<Chain>;
};

export type ChainAddressInput = {
  address: Scalars['Address']['input'];
  chain: Chain;
};

export type ChainPubKey = {
  chain?: Maybe<Chain>;
  pubKey?: Maybe<Scalars['PubKey']['output']>;
};

export type ChainPubKeyInput = {
  chain: Chain;
  pubKey: Scalars['PubKey']['input'];
};

export type ChainSplits = {
  chain?: Maybe<Chain>;
  splits?: Maybe<Array<Maybe<Split>>>;
};

export type ChainTokens = {
  chain?: Maybe<Chain>;
  tokens?: Maybe<Array<Maybe<Token>>>;
};

export type ClearAllNotificationsPayload = {
  notifications?: Maybe<Array<Maybe<Notification>>>;
};

export type CreateSplitInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSplitPayload = {
  split?: Maybe<Split>;
};

export type CreateSplitPayloadOrError = CreateSplitPayload | ErrInvalidInput | ErrNotAuthorized;

export type CreateUserInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['Email']['input']>;
  splitDescription?: InputMaybe<Scalars['String']['input']>;
  splitName?: InputMaybe<Scalars['String']['input']>;
  splitPosition?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type CreateUserPayload = {
  splitId?: Maybe<Scalars['DBID']['output']>;
  userId?: Maybe<Scalars['DBID']['output']>;
  viewer?: Maybe<Viewer>;
};

export type CreateUserPayloadOrError = CreateUserPayload | ErrAuthenticationFailed | ErrDoesNotOwnRequiredToken | ErrInvalidInput | ErrUserAlreadyExists | ErrUsernameNotAvailable;

export type DebugAuth = {
  asUsername?: InputMaybe<Scalars['String']['input']>;
  chainAddresses?: InputMaybe<Array<ChainAddressInput>>;
  debugToolsPassword?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['DBID']['input']>;
};

export type DeleteSplitPayload = {
  deletedId?: Maybe<DeletedNode>;
};

export type DeleteSplitPayloadOrError = DeleteSplitPayload | ErrInvalidInput | ErrNotAuthorized;

export type DeletedNode = Node & {
  dbid: Scalars['DBID']['output'];
  id: Scalars['ID']['output'];
};

export type EmailNotificationSettings = {
  unsubscribedFromAll: Scalars['Boolean']['output'];
  unsubscribedFromNotifications: Scalars['Boolean']['output'];
};

export enum EmailUnsubscriptionType {
  All = 'All',
  Notifications = 'Notifications'
}

export enum EmailVerificationStatus {
  Admin = 'Admin',
  Failed = 'Failed',
  Unverified = 'Unverified',
  Verified = 'Verified'
}

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

export type ErrPushTokenBelongsToAnotherUser = Error & {
  message: Scalars['String']['output'];
};

export type ErrSessionInvalidated = Error & {
  message: Scalars['String']['output'];
};

export type ErrSplitNotFound = Error & {
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

export type GifMedia = Media & {
  contentRenderURL?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<MediaDimensions>;
  mediaType?: Maybe<Scalars['String']['output']>;
  mediaURL?: Maybe<Scalars['String']['output']>;
  previewURLs?: Maybe<PreviewUrlSet>;
  staticPreviewURLs?: Maybe<PreviewUrlSet>;
};

export type GetAuthNoncePayloadOrError = AuthNonce;

export type GltfMedia = Media & {
  contentRenderURL?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<MediaDimensions>;
  mediaType?: Maybe<Scalars['String']['output']>;
  mediaURL?: Maybe<Scalars['String']['output']>;
  previewURLs?: Maybe<PreviewUrlSet>;
};

export type GnosisSafeAuth = {
  address: Scalars['Address']['input'];
  message: Scalars['String']['input'];
  nonce: Scalars['String']['input'];
};

export type GroupNotificationUserEdge = {
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<SplitFiUser>;
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

export type HtmlMedia = Media & {
  contentRenderURL?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<MediaDimensions>;
  mediaType?: Maybe<Scalars['String']['output']>;
  mediaURL?: Maybe<Scalars['String']['output']>;
  previewURLs?: Maybe<PreviewUrlSet>;
};

export type ImageMedia = Media & {
  contentRenderURL?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<MediaDimensions>;
  mediaType?: Maybe<Scalars['String']['output']>;
  mediaURL?: Maybe<Scalars['String']['output']>;
  previewURLs?: Maybe<PreviewUrlSet>;
};

export type InvalidMedia = Media & {
  contentRenderURL?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<MediaDimensions>;
  mediaType?: Maybe<Scalars['String']['output']>;
  mediaURL?: Maybe<Scalars['String']['output']>;
  previewURLs?: Maybe<PreviewUrlSet>;
};

export type JsonMedia = Media & {
  contentRenderURL?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<MediaDimensions>;
  mediaType?: Maybe<Scalars['String']['output']>;
  mediaURL?: Maybe<Scalars['String']['output']>;
  previewURLs?: Maybe<PreviewUrlSet>;
};

export type LoginPayload = {
  userId?: Maybe<Scalars['DBID']['output']>;
  viewer?: Maybe<Viewer>;
};

export type LoginPayloadOrError = ErrAuthenticationFailed | ErrDoesNotOwnRequiredToken | ErrUserNotFound | LoginPayload;

export type LogoutPayload = {
  viewer?: Maybe<Viewer>;
};

export type MagicLinkAuth = {
  token: Scalars['String']['input'];
};

export type Media = {
  dimensions?: Maybe<MediaDimensions>;
  mediaType?: Maybe<Scalars['String']['output']>;
  mediaURL?: Maybe<Scalars['String']['output']>;
  previewURLs?: Maybe<PreviewUrlSet>;
};

export type MediaDimensions = {
  aspectRatio?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type MediaSubtype = AudioMedia | GifMedia | GltfMedia | HtmlMedia | ImageMedia | InvalidMedia | JsonMedia | PdfMedia | TextMedia | UnknownMedia | VideoMedia;

export type Mutation = {
  addRolesToUser?: Maybe<AddRolesToUserPayloadOrError>;
  addUserWallet?: Maybe<AddUserWalletPayloadOrError>;
  addWalletToUserUnchecked?: Maybe<AdminAddWalletPayloadOrError>;
  clearAllNotifications?: Maybe<ClearAllNotificationsPayload>;
  createSplit?: Maybe<CreateSplitPayloadOrError>;
  createUser?: Maybe<CreateUserPayloadOrError>;
  deleteSplit?: Maybe<DeleteSplitPayloadOrError>;
  getAuthNonce?: Maybe<GetAuthNoncePayloadOrError>;
  login?: Maybe<LoginPayloadOrError>;
  logout?: Maybe<LogoutPayload>;
  optInForRoles?: Maybe<OptInForRolesPayloadOrError>;
  optOutForRoles?: Maybe<OptOutForRolesPayloadOrError>;
  preverifyEmail?: Maybe<PreverifyEmailPayloadOrError>;
  publishSplit?: Maybe<PublishSplitPayloadOrError>;
  registerUserPushToken?: Maybe<RegisterUserPushTokenPayloadOrError>;
  removeUserWallets?: Maybe<RemoveUserWalletsPayloadOrError>;
  resendVerificationEmail?: Maybe<ResendVerificationEmailPayloadOrError>;
  revokeRolesFromUser?: Maybe<RevokeRolesFromUserPayloadOrError>;
  unregisterUserPushToken?: Maybe<UnregisterUserPushTokenPayloadOrError>;
  unsubscribeFromEmailType?: Maybe<UnsubscribeFromEmailTypePayloadOrError>;
  updateEmail?: Maybe<UpdateEmailPayloadOrError>;
  updateEmailNotificationSettings?: Maybe<UpdateEmailNotificationSettingsPayloadOrError>;
  updateNotificationSettings?: Maybe<NotificationSettings>;
  updatePrimaryWallet?: Maybe<UpdatePrimaryWalletPayloadOrError>;
  updateSplit?: Maybe<UpdateSplitPayloadOrError>;
  updateSplitHidden?: Maybe<UpdateSplitHiddenPayloadOrError>;
  updateSplitInfo?: Maybe<UpdateSplitInfoPayloadOrError>;
  updateSplitOrder?: Maybe<UpdateSplitOrderPayloadOrError>;
  updateUserExperience?: Maybe<UpdateUserExperiencePayloadOrError>;
  updateUserInfo?: Maybe<UpdateUserInfoPayloadOrError>;
  uploadPersistedQueries?: Maybe<UploadPersistedQueriesPayloadOrError>;
  verifyEmail?: Maybe<VerifyEmailPayloadOrError>;
  verifyEmailMagicLink?: Maybe<VerifyEmailMagicLinkPayloadOrError>;
  viewSplit?: Maybe<ViewSplitPayloadOrError>;
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


export type MutationCreateSplitArgs = {
  input: CreateSplitInput;
};


export type MutationCreateUserArgs = {
  authMechanism: AuthMechanism;
  input: CreateUserInput;
};


export type MutationDeleteSplitArgs = {
  splitId: Scalars['DBID']['input'];
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


export type MutationPublishSplitArgs = {
  input: PublishSplitInput;
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


export type MutationUpdatePrimaryWalletArgs = {
  walletID: Scalars['DBID']['input'];
};


export type MutationUpdateSplitArgs = {
  input: UpdateSplitInput;
};


export type MutationUpdateSplitHiddenArgs = {
  input: UpdateSplitHiddenInput;
};


export type MutationUpdateSplitInfoArgs = {
  input: UpdateSplitInfoInput;
};


export type MutationUpdateSplitOrderArgs = {
  input: UpdateSplitOrderInput;
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


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};


export type MutationVerifyEmailMagicLinkArgs = {
  input: VerifyEmailMagicLinkInput;
};


export type MutationViewSplitArgs = {
  splitId: Scalars['DBID']['input'];
};

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
  someoneFollowedYou?: Maybe<Scalars['Boolean']['output']>;
  someoneViewedYourSplit?: Maybe<Scalars['Boolean']['output']>;
};

export type NotificationSettingsInput = {
  someoneFollowedYou?: InputMaybe<Scalars['Boolean']['input']>;
  someoneViewedYourSplit?: InputMaybe<Scalars['Boolean']['input']>;
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
  user?: Maybe<SplitFiUser>;
};

export type OptInForRolesPayloadOrError = ErrInvalidInput | ErrNotAuthorized | OptInForRolesPayload;

export type OptOutForRolesPayload = {
  user?: Maybe<SplitFiUser>;
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

export type PdfMedia = Media & {
  contentRenderURL?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<MediaDimensions>;
  mediaType?: Maybe<Scalars['String']['output']>;
  mediaURL?: Maybe<Scalars['String']['output']>;
  previewURLs?: Maybe<PreviewUrlSet>;
};

export type PreverifyEmailInput = {
  email: Scalars['Email']['input'];
};

export type PreverifyEmailPayload = {
  email: Scalars['Email']['output'];
  result: PreverifyEmailResult;
};

export type PreverifyEmailPayloadOrError = ErrInvalidInput | PreverifyEmailPayload;

export enum PreverifyEmailResult {
  Invalid = 'Invalid',
  Risky = 'Risky',
  Valid = 'Valid'
}

export type PreviewUrlSet = {
  blurhash?: Maybe<Scalars['String']['output']>;
  large?: Maybe<Scalars['String']['output']>;
  liveRender?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  raw?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['String']['output']>;
  srcSet?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
};

export type PrivyAuth = {
  token: Scalars['String']['input'];
};

export type PublishSplitInput = {
  caption?: InputMaybe<Scalars['String']['input']>;
  editId: Scalars['String']['input'];
  splitId: Scalars['DBID']['input'];
};

export type PublishSplitPayload = {
  split?: Maybe<Split>;
};

export type PublishSplitPayloadOrError = ErrInvalidInput | ErrNotAuthorized | PublishSplitPayload;

export type Query = {
  _service: _Service;
  node?: Maybe<Node>;
  /**
   * Search for splits with optional weighting. Weights are floats in the [0.0. 1.0] range
   * that help determine how matches will be ranked. nameWeight defaults to 0.4 and
   * descriptionWeight defaults to 0.2, meaning that a search result matching a split name is
   * considered twice as relevant as a search result matching a split description.
   */
  searchSplits?: Maybe<SearchSplitsPayloadOrError>;
  /**
   * Search for users with optional weighting. Weights are floats in the [0.0. 1.0] range
   * that help determine how matches will be ranked. usernameWeight defaults to 0.4 and
   * bioWeight defaults to 0.2, meaning that a search result matching a username is considered
   * twice as relevant as a search result matching a bio.
   */
  searchUsers?: Maybe<SearchUsersPayloadOrError>;
  splitById?: Maybe<SplitByIdPayloadOrError>;
  userByAddress?: Maybe<UserByAddressOrError>;
  userById?: Maybe<UserByIdOrError>;
  userByUsername?: Maybe<UserByUsernameOrError>;
  usersByRole?: Maybe<UsersConnection>;
  usersWithTrait?: Maybe<Array<Maybe<SplitFiUser>>>;
  viewer?: Maybe<ViewerOrError>;
  viewerSplitById?: Maybe<ViewerSplitByIdPayloadOrError>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySearchSplitsArgs = {
  descriptionWeight?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nameWeight?: InputMaybe<Scalars['Float']['input']>;
  query: Scalars['String']['input'];
};


export type QuerySearchUsersArgs = {
  bioWeight?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
  usernameWeight?: InputMaybe<Scalars['Float']['input']>;
};


export type QuerySplitByIdArgs = {
  id: Scalars['DBID']['input'];
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


export type QueryUsersWithTraitArgs = {
  trait: Scalars['String']['input'];
};


export type QueryViewerSplitByIdArgs = {
  id: Scalars['DBID']['input'];
};

export type Recipient = Node & {
  address?: Maybe<Scalars['Address']['output']>;
  creationTime?: Maybe<Scalars['Time']['output']>;
  dbid: Scalars['DBID']['output'];
  id: Scalars['ID']['output'];
  lastUpdated?: Maybe<Scalars['Time']['output']>;
  ownership?: Maybe<Scalars['Int']['output']>;
  split?: Maybe<Split>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type RegisterUserPushTokenPayload = {
  viewer?: Maybe<Viewer>;
};

export type RegisterUserPushTokenPayloadOrError = ErrInvalidInput | ErrNotAuthorized | ErrPushTokenBelongsToAnotherUser | RegisterUserPushTokenPayload;

export type RemoveUserWalletsPayload = {
  viewer?: Maybe<Viewer>;
};

export type RemoveUserWalletsPayloadOrError = ErrInvalidInput | ErrNotAuthorized | RemoveUserWalletsPayload;

export enum ReportWindow {
  AllTime = 'ALL_TIME',
  Last_5Days = 'LAST_5_DAYS',
  Last_7Days = 'LAST_7_DAYS'
}

export type ResendVerificationEmailPayload = {
  viewer?: Maybe<Viewer>;
};

export type ResendVerificationEmailPayloadOrError = ErrInvalidInput | ResendVerificationEmailPayload;

export type RevokeRolesFromUserPayloadOrError = ErrNotAuthorized | SplitFiUser;

export enum Role {
  Admin = 'ADMIN',
  BetaTester = 'BETA_TESTER',
  EarlyAccess = 'EARLY_ACCESS'
}

export type SearchSplitsPayload = {
  results?: Maybe<Array<SplitSearchResult>>;
};

export type SearchSplitsPayloadOrError = ErrInvalidInput | SearchSplitsPayload;

export type SearchUsersPayload = {
  results?: Maybe<Array<UserSearchResult>>;
};

export type SearchUsersPayloadOrError = ErrInvalidInput | SearchUsersPayload;

export type Split = Node & {
  assets?: Maybe<Array<Maybe<Asset>>>;
  badgeURL?: Maybe<Scalars['String']['output']>;
  bannerURL?: Maybe<Scalars['String']['output']>;
  chain?: Maybe<Chain>;
  dbid: Scalars['DBID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logoURL?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Maybe<Recipient>>>;
  version?: Maybe<Scalars['Int']['output']>;
};


export type SplitAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type SplitSharesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type SplitByIdPayloadOrError = ErrSplitNotFound | Split;

export type SplitFiUser = Node & {
  bio?: Maybe<Scalars['String']['output']>;
  dbid: Scalars['DBID']['output'];
  id: Scalars['ID']['output'];
  isAuthenticatedUser?: Maybe<Scalars['Boolean']['output']>;
  primaryWallet?: Maybe<Wallet>;
  roles?: Maybe<Array<Maybe<Role>>>;
  splits?: Maybe<Array<Maybe<Split>>>;
  splitsByChain?: Maybe<ChainSplits>;
  traits?: Maybe<Scalars['String']['output']>;
  universal?: Maybe<Scalars['Boolean']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  wallets?: Maybe<Array<Maybe<Wallet>>>;
};


export type SplitFiUserSplitsByChainArgs = {
  chain: Chain;
};

export type SplitFiUserOrAddress = ChainAddress | SplitFiUser;

export type SplitFiUserOrWallet = SplitFiUser | Wallet;

export type SplitPositionInput = {
  position: Scalars['String']['input'];
  splitId: Scalars['DBID']['input'];
};

export type SplitSearchResult = {
  split?: Maybe<Split>;
};

export type SplitShareInput = {
  ownership: Scalars['Int']['input'];
  recipientAddress: Scalars['Address']['input'];
  splitId: Scalars['DBID']['input'];
};

export type Subscription = {
  newNotification?: Maybe<Notification>;
  notificationUpdated?: Maybe<Notification>;
};

export type TextMedia = Media & {
  contentRenderURL?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<MediaDimensions>;
  mediaType?: Maybe<Scalars['String']['output']>;
  mediaURL?: Maybe<Scalars['String']['output']>;
  previewURLs?: Maybe<PreviewUrlSet>;
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

export enum TokenType {
  Erc20 = 'ERC20',
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155'
}

export type UnknownMedia = Media & {
  contentRenderURL?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<MediaDimensions>;
  mediaType?: Maybe<Scalars['String']['output']>;
  mediaURL?: Maybe<Scalars['String']['output']>;
  previewURLs?: Maybe<PreviewUrlSet>;
};

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

export type UpdatePrimaryWalletPayload = {
  viewer?: Maybe<Viewer>;
};

export type UpdatePrimaryWalletPayloadOrError = ErrInvalidInput | ErrNotAuthorized | UpdatePrimaryWalletPayload;

export type UpdateSplitHiddenInput = {
  hidden: Scalars['Boolean']['input'];
  id: Scalars['DBID']['input'];
};

export type UpdateSplitHiddenPayload = {
  split?: Maybe<Split>;
};

export type UpdateSplitHiddenPayloadOrError = ErrInvalidInput | ErrNotAuthorized | UpdateSplitHiddenPayload;

export type UpdateSplitInfoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['DBID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSplitInfoPayload = {
  split?: Maybe<Split>;
};

export type UpdateSplitInfoPayloadOrError = ErrInvalidInput | ErrNotAuthorized | UpdateSplitInfoPayload;

export type UpdateSplitInput = {
  caption?: InputMaybe<Scalars['String']['input']>;
  deletedCollections?: InputMaybe<Array<Scalars['DBID']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  editId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<Scalars['DBID']['input']>>;
  splitId: Scalars['DBID']['input'];
};

export type UpdateSplitOrderInput = {
  positions: Array<SplitPositionInput>;
};

export type UpdateSplitOrderPayload = {
  viewer?: Maybe<Viewer>;
};

export type UpdateSplitOrderPayloadOrError = ErrInvalidInput | ErrNotAuthorized | UpdateSplitOrderPayload;

export type UpdateSplitPayload = {
  split?: Maybe<Split>;
};

export type UpdateSplitPayloadOrError = ErrInvalidInput | ErrNotAuthorized | UpdateSplitPayload;

export type UpdateUserExperienceInput = {
  experienceType: UserExperienceType;
  experienced: Scalars['Boolean']['input'];
};

export type UpdateUserExperiencePayload = {
  viewer?: Maybe<Viewer>;
};

export type UpdateUserExperiencePayloadOrError = ErrInvalidInput | ErrNotAuthorized | UpdateUserExperiencePayload;

export type UpdateUserInfoInput = {
  bio: Scalars['String']['input'];
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

export type UserByAddressOrError = ErrInvalidInput | ErrUserNotFound | SplitFiUser;

export type UserByIdOrError = ErrInvalidInput | ErrUserNotFound | SplitFiUser;

export type UserByUsernameOrError = ErrInvalidInput | ErrUserNotFound | SplitFiUser;

export type UserEdge = {
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<SplitFiUser>;
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

export enum UserExperienceType {
  EmailUpsell = 'EmailUpsell',
  MaintenanceFeb2023 = 'MaintenanceFeb2023',
  TwitterConnectionOnboardingUpsell = 'TwitterConnectionOnboardingUpsell',
  UpsellMintMemento4 = 'UpsellMintMemento4'
}

export type UserSearchResult = {
  user?: Maybe<SplitFiUser>;
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

export type VideoMedia = Media & {
  contentRenderURLs?: Maybe<VideoUrlSet>;
  dimensions?: Maybe<MediaDimensions>;
  mediaType?: Maybe<Scalars['String']['output']>;
  mediaURL?: Maybe<Scalars['String']['output']>;
  previewURLs?: Maybe<PreviewUrlSet>;
};

export type VideoUrlSet = {
  large?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  raw?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['String']['output']>;
};

export type ViewSplitPayload = {
  split?: Maybe<Split>;
};

export type ViewSplitPayloadOrError = ErrAuthenticationFailed | ViewSplitPayload;

export type Viewer = Node & {
  email?: Maybe<UserEmail>;
  id: Scalars['ID']['output'];
  notificationSettings?: Maybe<NotificationSettings>;
  /**
   * Returns a list of notifications in reverse chronological order.
   * Seen notifications come after unseen notifications
   */
  notifications?: Maybe<NotificationsConnection>;
  user?: Maybe<SplitFiUser>;
  userExperiences?: Maybe<Array<UserExperience>>;
  viewerSplits?: Maybe<Array<Maybe<ViewerSplit>>>;
};


export type ViewerNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ViewerOrError = ErrNotAuthorized | Viewer;

export type ViewerSplit = {
  split?: Maybe<Split>;
};

export type ViewerSplitByIdPayloadOrError = ErrSplitNotFound | ViewerSplit;

export type Wallet = Node & {
  chain?: Maybe<Chain>;
  chainAddress?: Maybe<ChainAddress>;
  dbid: Scalars['DBID']['output'];
  id: Scalars['ID']['output'];
  splits?: Maybe<Array<Maybe<Split>>>;
  walletType?: Maybe<WalletType>;
};

export enum WalletType {
  Eoa = 'EOA',
  GnosisSafe = 'GnosisSafe'
}

export type _Service = {
  sdl?: Maybe<Scalars['String']['output']>;
};

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = { viewer?: { __typename: 'ErrNotAuthorized' } | { __typename: 'Viewer' } | null };


export const ViewerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<ViewerQuery, ViewerQueryVariables>;