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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment PoolWithOwnerAndContract on Pool {\n    id\n    name\n    description\n    image\n    slug\n    status\n    donationBps\n    createdAt\n    updatedAt\n    #    owner {\n    #      ... on User {\n    #        id\n    #      }\n    #      ... on EVMAccount {\n    #        id\n    #        address\n    #        accountType\n    #        createdAt\n    #        updatedAt\n    #      }\n    #    }\n    #    contract {\n    #      id\n    #      address\n    #      status\n    #      chainId\n    #      createdAt\n    #      updatedAt\n    #    }\n  }\n": typeof types.PoolWithOwnerAndContractFragmentDoc,
    "\n  fragment UserPoolListWithOwnerAndContract on User {\n    pools {\n      id\n      name\n      description\n      image\n      slug\n      status\n      donationBps\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.UserPoolListWithOwnerAndContractFragmentDoc,
    "\n  mutation PoolCreate($input: PoolCreateInput!) {\n    poolCreate(input: $input) {\n      ... on ErrInvalidInput {\n        message\n      }\n      ... on ErrNotAuthorized {\n        message\n      }\n      ... on Error {\n        message\n      }\n      ... on PoolCreatePayload {\n        pool {\n          ...PoolWithOwnerAndContract\n        }\n      }\n    }\n  }\n": typeof types.PoolCreateDocument,
    "\n  mutation UserRegister($input: UserRegisterInput!) {\n    userRegister(input: $input) {\n      ... on ErrUserAlreadyExists {\n        message\n      }\n      ... on ErrAuthenticationFailed {\n        message\n      }\n      ... on ErrInvalidInput {\n        message\n      }\n      ... on Error {\n        message\n      }\n      ... on UserRegisterPayload {\n        user {\n          id\n        }\n        requiresConfirmation\n      }\n    }\n  }\n": typeof types.UserRegisterDocument,
    "\n  query UserByAddress($chainAddress: ChainAddressInput!) {\n    userByAddress(chainAddress: $chainAddress) {\n      __typename\n      ... on Error {\n        __typename\n        message\n      }\n      ... on User {\n        id\n      }\n    }\n  }\n": typeof types.UserByAddressDocument,
    "\n  query Viewer {\n    viewer {\n      ... on User {\n        id\n      }\n      ... on ErrNotAuthorized {\n        message\n      }\n    }\n  }\n": typeof types.ViewerDocument,
    "\n  query Pool($id: ID, $slug: String, $contractId: ID) {\n    pool(id: $id, slug: $slug, contractId: $contractId) {\n      ... on ErrPoolNotFound {\n        message\n      }\n      ... on ErrInvalidInput {\n        message\n      }\n      ... on Error {\n        message\n      }\n      ... on Pool {\n        ...PoolWithOwnerAndContract\n      }\n    }\n  }\n": typeof types.PoolDocument,
    "\n  query ViewerPoolList {\n    viewer {\n      __typename\n      ... on User {\n        ...UserPoolListWithOwnerAndContract\n      }\n      ... on ErrNotAuthorized {\n        message\n      }\n    }\n  }\n": typeof types.ViewerPoolListDocument,
};
const documents: Documents = {
    "\n  fragment PoolWithOwnerAndContract on Pool {\n    id\n    name\n    description\n    image\n    slug\n    status\n    donationBps\n    createdAt\n    updatedAt\n    #    owner {\n    #      ... on User {\n    #        id\n    #      }\n    #      ... on EVMAccount {\n    #        id\n    #        address\n    #        accountType\n    #        createdAt\n    #        updatedAt\n    #      }\n    #    }\n    #    contract {\n    #      id\n    #      address\n    #      status\n    #      chainId\n    #      createdAt\n    #      updatedAt\n    #    }\n  }\n": types.PoolWithOwnerAndContractFragmentDoc,
    "\n  fragment UserPoolListWithOwnerAndContract on User {\n    pools {\n      id\n      name\n      description\n      image\n      slug\n      status\n      donationBps\n      createdAt\n      updatedAt\n    }\n  }\n": types.UserPoolListWithOwnerAndContractFragmentDoc,
    "\n  mutation PoolCreate($input: PoolCreateInput!) {\n    poolCreate(input: $input) {\n      ... on ErrInvalidInput {\n        message\n      }\n      ... on ErrNotAuthorized {\n        message\n      }\n      ... on Error {\n        message\n      }\n      ... on PoolCreatePayload {\n        pool {\n          ...PoolWithOwnerAndContract\n        }\n      }\n    }\n  }\n": types.PoolCreateDocument,
    "\n  mutation UserRegister($input: UserRegisterInput!) {\n    userRegister(input: $input) {\n      ... on ErrUserAlreadyExists {\n        message\n      }\n      ... on ErrAuthenticationFailed {\n        message\n      }\n      ... on ErrInvalidInput {\n        message\n      }\n      ... on Error {\n        message\n      }\n      ... on UserRegisterPayload {\n        user {\n          id\n        }\n        requiresConfirmation\n      }\n    }\n  }\n": types.UserRegisterDocument,
    "\n  query UserByAddress($chainAddress: ChainAddressInput!) {\n    userByAddress(chainAddress: $chainAddress) {\n      __typename\n      ... on Error {\n        __typename\n        message\n      }\n      ... on User {\n        id\n      }\n    }\n  }\n": types.UserByAddressDocument,
    "\n  query Viewer {\n    viewer {\n      ... on User {\n        id\n      }\n      ... on ErrNotAuthorized {\n        message\n      }\n    }\n  }\n": types.ViewerDocument,
    "\n  query Pool($id: ID, $slug: String, $contractId: ID) {\n    pool(id: $id, slug: $slug, contractId: $contractId) {\n      ... on ErrPoolNotFound {\n        message\n      }\n      ... on ErrInvalidInput {\n        message\n      }\n      ... on Error {\n        message\n      }\n      ... on Pool {\n        ...PoolWithOwnerAndContract\n      }\n    }\n  }\n": types.PoolDocument,
    "\n  query ViewerPoolList {\n    viewer {\n      __typename\n      ... on User {\n        ...UserPoolListWithOwnerAndContract\n      }\n      ... on ErrNotAuthorized {\n        message\n      }\n    }\n  }\n": types.ViewerPoolListDocument,
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
export function graphql(source: "\n  fragment PoolWithOwnerAndContract on Pool {\n    id\n    name\n    description\n    image\n    slug\n    status\n    donationBps\n    createdAt\n    updatedAt\n    #    owner {\n    #      ... on User {\n    #        id\n    #      }\n    #      ... on EVMAccount {\n    #        id\n    #        address\n    #        accountType\n    #        createdAt\n    #        updatedAt\n    #      }\n    #    }\n    #    contract {\n    #      id\n    #      address\n    #      status\n    #      chainId\n    #      createdAt\n    #      updatedAt\n    #    }\n  }\n"): (typeof documents)["\n  fragment PoolWithOwnerAndContract on Pool {\n    id\n    name\n    description\n    image\n    slug\n    status\n    donationBps\n    createdAt\n    updatedAt\n    #    owner {\n    #      ... on User {\n    #        id\n    #      }\n    #      ... on EVMAccount {\n    #        id\n    #        address\n    #        accountType\n    #        createdAt\n    #        updatedAt\n    #      }\n    #    }\n    #    contract {\n    #      id\n    #      address\n    #      status\n    #      chainId\n    #      createdAt\n    #      updatedAt\n    #    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserPoolListWithOwnerAndContract on User {\n    pools {\n      id\n      name\n      description\n      image\n      slug\n      status\n      donationBps\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  fragment UserPoolListWithOwnerAndContract on User {\n    pools {\n      id\n      name\n      description\n      image\n      slug\n      status\n      donationBps\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation PoolCreate($input: PoolCreateInput!) {\n    poolCreate(input: $input) {\n      ... on ErrInvalidInput {\n        message\n      }\n      ... on ErrNotAuthorized {\n        message\n      }\n      ... on Error {\n        message\n      }\n      ... on PoolCreatePayload {\n        pool {\n          ...PoolWithOwnerAndContract\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation PoolCreate($input: PoolCreateInput!) {\n    poolCreate(input: $input) {\n      ... on ErrInvalidInput {\n        message\n      }\n      ... on ErrNotAuthorized {\n        message\n      }\n      ... on Error {\n        message\n      }\n      ... on PoolCreatePayload {\n        pool {\n          ...PoolWithOwnerAndContract\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UserRegister($input: UserRegisterInput!) {\n    userRegister(input: $input) {\n      ... on ErrUserAlreadyExists {\n        message\n      }\n      ... on ErrAuthenticationFailed {\n        message\n      }\n      ... on ErrInvalidInput {\n        message\n      }\n      ... on Error {\n        message\n      }\n      ... on UserRegisterPayload {\n        user {\n          id\n        }\n        requiresConfirmation\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UserRegister($input: UserRegisterInput!) {\n    userRegister(input: $input) {\n      ... on ErrUserAlreadyExists {\n        message\n      }\n      ... on ErrAuthenticationFailed {\n        message\n      }\n      ... on ErrInvalidInput {\n        message\n      }\n      ... on Error {\n        message\n      }\n      ... on UserRegisterPayload {\n        user {\n          id\n        }\n        requiresConfirmation\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UserByAddress($chainAddress: ChainAddressInput!) {\n    userByAddress(chainAddress: $chainAddress) {\n      __typename\n      ... on Error {\n        __typename\n        message\n      }\n      ... on User {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserByAddress($chainAddress: ChainAddressInput!) {\n    userByAddress(chainAddress: $chainAddress) {\n      __typename\n      ... on Error {\n        __typename\n        message\n      }\n      ... on User {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Viewer {\n    viewer {\n      ... on User {\n        id\n      }\n      ... on ErrNotAuthorized {\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  query Viewer {\n    viewer {\n      ... on User {\n        id\n      }\n      ... on ErrNotAuthorized {\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Pool($id: ID, $slug: String, $contractId: ID) {\n    pool(id: $id, slug: $slug, contractId: $contractId) {\n      ... on ErrPoolNotFound {\n        message\n      }\n      ... on ErrInvalidInput {\n        message\n      }\n      ... on Error {\n        message\n      }\n      ... on Pool {\n        ...PoolWithOwnerAndContract\n      }\n    }\n  }\n"): (typeof documents)["\n  query Pool($id: ID, $slug: String, $contractId: ID) {\n    pool(id: $id, slug: $slug, contractId: $contractId) {\n      ... on ErrPoolNotFound {\n        message\n      }\n      ... on ErrInvalidInput {\n        message\n      }\n      ... on Error {\n        message\n      }\n      ... on Pool {\n        ...PoolWithOwnerAndContract\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ViewerPoolList {\n    viewer {\n      __typename\n      ... on User {\n        ...UserPoolListWithOwnerAndContract\n      }\n      ... on ErrNotAuthorized {\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  query ViewerPoolList {\n    viewer {\n      __typename\n      ... on User {\n        ...UserPoolListWithOwnerAndContract\n      }\n      ... on ErrNotAuthorized {\n        message\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;