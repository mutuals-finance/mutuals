/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation AddWallet(\n    $chainAddress: ChainAddressInput!\n    $authMechanism: AuthMechanism!\n  ) {\n    addUserWallet(chainAddress: $chainAddress, authMechanism: $authMechanism) {\n      ... on AddUserWalletPayload {\n        __typename\n        viewer {\n          user {\n            primaryWallet {\n              __typename\n            }\n            wallets {\n              dbid\n              chainAddress {\n                address\n                chain\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.AddWalletDocument,
    "\n  mutation CreateNonce {\n    getAuthNonce {\n      __typename\n\n      ... on AuthNonce {\n        nonce # @required(action: THROW)\n        message # @required(action: THROW)\n      }\n    }\n  }\n": types.CreateNonceDocument,
    "\n  mutation CreateUser(\n    $authMechanism: AuthMechanism!\n    $input: CreateUserInput!\n  ) {\n    createUser(authMechanism: $authMechanism, input: $input) {\n      __typename\n      ... on CreateUserPayload {\n        __typename\n        viewer {\n          ... on Viewer {\n            user {\n              username\n            }\n          }\n        }\n      }\n      ... on ErrAuthenticationFailed {\n        __typename\n      }\n      ... on ErrDoesNotOwnRequiredToken {\n        __typename\n      }\n      ... on ErrUserAlreadyExists {\n        __typename\n      }\n      ... on ErrUsernameNotAvailable {\n        __typename\n      }\n      ... on ErrInvalidInput {\n        __typename\n      }\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation Login($mechanism: AuthMechanism!) {\n    login(authMechanism: $mechanism) {\n      __typename\n\n      ... on LoginPayload {\n        userId # @required(action: THROW)\n      }\n      ... on ErrUserNotFound {\n        message\n      }\n      ... on ErrAuthenticationFailed {\n        message\n      }\n      ... on ErrDoesNotOwnRequiredToken {\n        message\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Logout {\n    logout {\n      __typename\n    }\n  }\n": types.LogoutDocument,
    "\n  query UserByAddress($chainAddress: ChainAddressInput!) {\n    userByAddress(chainAddress: $chainAddress) {\n      __typename\n      ... on SplitFiUser {\n        dbid\n        universal\n      }\n    }\n  }\n": types.UserByAddressDocument,
    "\n  query ViewerWallets {\n    viewer {\n      ... on Viewer {\n        user {\n          wallets {\n            dbid\n            chainAddress {\n              chain\n              address\n            }\n          }\n          primaryWallet {\n            dbid\n            chainAddress {\n              chain\n              address\n            }\n          }\n        }\n      }\n    }\n  }\n": types.ViewerWalletsDocument,
    "\n  query Viewer {\n    viewer {\n      ... on Viewer {\n        __typename\n        id\n        user {\n          wallets {\n            chainAddress {\n              address\n            }\n          }\n        }\n      }\n    }\n  }\n": types.ViewerDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddWallet(\n    $chainAddress: ChainAddressInput!\n    $authMechanism: AuthMechanism!\n  ) {\n    addUserWallet(chainAddress: $chainAddress, authMechanism: $authMechanism) {\n      ... on AddUserWalletPayload {\n        __typename\n        viewer {\n          user {\n            primaryWallet {\n              __typename\n            }\n            wallets {\n              dbid\n              chainAddress {\n                address\n                chain\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddWallet(\n    $chainAddress: ChainAddressInput!\n    $authMechanism: AuthMechanism!\n  ) {\n    addUserWallet(chainAddress: $chainAddress, authMechanism: $authMechanism) {\n      ... on AddUserWalletPayload {\n        __typename\n        viewer {\n          user {\n            primaryWallet {\n              __typename\n            }\n            wallets {\n              dbid\n              chainAddress {\n                address\n                chain\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateNonce {\n    getAuthNonce {\n      __typename\n\n      ... on AuthNonce {\n        nonce # @required(action: THROW)\n        message # @required(action: THROW)\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateNonce {\n    getAuthNonce {\n      __typename\n\n      ... on AuthNonce {\n        nonce # @required(action: THROW)\n        message # @required(action: THROW)\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser(\n    $authMechanism: AuthMechanism!\n    $input: CreateUserInput!\n  ) {\n    createUser(authMechanism: $authMechanism, input: $input) {\n      __typename\n      ... on CreateUserPayload {\n        __typename\n        viewer {\n          ... on Viewer {\n            user {\n              username\n            }\n          }\n        }\n      }\n      ... on ErrAuthenticationFailed {\n        __typename\n      }\n      ... on ErrDoesNotOwnRequiredToken {\n        __typename\n      }\n      ... on ErrUserAlreadyExists {\n        __typename\n      }\n      ... on ErrUsernameNotAvailable {\n        __typename\n      }\n      ... on ErrInvalidInput {\n        __typename\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser(\n    $authMechanism: AuthMechanism!\n    $input: CreateUserInput!\n  ) {\n    createUser(authMechanism: $authMechanism, input: $input) {\n      __typename\n      ... on CreateUserPayload {\n        __typename\n        viewer {\n          ... on Viewer {\n            user {\n              username\n            }\n          }\n        }\n      }\n      ... on ErrAuthenticationFailed {\n        __typename\n      }\n      ... on ErrDoesNotOwnRequiredToken {\n        __typename\n      }\n      ... on ErrUserAlreadyExists {\n        __typename\n      }\n      ... on ErrUsernameNotAvailable {\n        __typename\n      }\n      ... on ErrInvalidInput {\n        __typename\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($mechanism: AuthMechanism!) {\n    login(authMechanism: $mechanism) {\n      __typename\n\n      ... on LoginPayload {\n        userId # @required(action: THROW)\n      }\n      ... on ErrUserNotFound {\n        message\n      }\n      ... on ErrAuthenticationFailed {\n        message\n      }\n      ... on ErrDoesNotOwnRequiredToken {\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($mechanism: AuthMechanism!) {\n    login(authMechanism: $mechanism) {\n      __typename\n\n      ... on LoginPayload {\n        userId # @required(action: THROW)\n      }\n      ... on ErrUserNotFound {\n        message\n      }\n      ... on ErrAuthenticationFailed {\n        message\n      }\n      ... on ErrDoesNotOwnRequiredToken {\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Logout {\n    logout {\n      __typename\n    }\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout {\n      __typename\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UserByAddress($chainAddress: ChainAddressInput!) {\n    userByAddress(chainAddress: $chainAddress) {\n      __typename\n      ... on SplitFiUser {\n        dbid\n        universal\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserByAddress($chainAddress: ChainAddressInput!) {\n    userByAddress(chainAddress: $chainAddress) {\n      __typename\n      ... on SplitFiUser {\n        dbid\n        universal\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ViewerWallets {\n    viewer {\n      ... on Viewer {\n        user {\n          wallets {\n            dbid\n            chainAddress {\n              chain\n              address\n            }\n          }\n          primaryWallet {\n            dbid\n            chainAddress {\n              chain\n              address\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ViewerWallets {\n    viewer {\n      ... on Viewer {\n        user {\n          wallets {\n            dbid\n            chainAddress {\n              chain\n              address\n            }\n          }\n          primaryWallet {\n            dbid\n            chainAddress {\n              chain\n              address\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Viewer {\n    viewer {\n      ... on Viewer {\n        __typename\n        id\n        user {\n          wallets {\n            chainAddress {\n              address\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Viewer {\n    viewer {\n      ... on Viewer {\n        __typename\n        id\n        user {\n          wallets {\n            chainAddress {\n              address\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;