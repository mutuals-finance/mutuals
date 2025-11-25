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
    "\n  mutation PoolCreate($input: PoolCreateInput!) {\n    poolCreate(input: $input) {\n      pool {\n        dbid\n        name\n        description\n      }\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n": typeof types.PoolCreateDocument,
    "\n  mutation UserRegister($input: UserRegisterInput!) {\n    userRegister(input: $input) {\n      requiresConfirmation\n      user {\n        id\n        dbid\n      }\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n": typeof types.UserRegisterDocument,
    "\n  query UserByAddress($chainAddress: ChainAddressInput!) {\n    userByAddress(chainAddress: $chainAddress) {\n      __typename\n      ... on Error {\n        __typename\n        message\n      }\n      ... on User {\n        dbid\n      }\n    }\n  }\n": typeof types.UserByAddressDocument,
    "\n  query MyPools {\n    viewer {\n      ... on Viewer {\n        pools {\n          id\n          dbid\n          status\n          name\n          description\n          slug\n          createdAt\n          updatedAt\n          owner {\n            ... on User {\n              dbid\n            }\n            ... on EVMAccount {\n              address\n              accountType\n            }\n          }\n        }\n      }\n    }\n  }\n": typeof types.MyPoolsDocument,
    "\n  query PoolGetById($id: DBID!) {\n    poolById(id: $id) {\n      ... on Pool {\n        id\n        dbid\n        status\n        name\n        description\n        slug\n        createdAt\n        updatedAt\n        owner {\n          ... on User {\n            dbid\n          }\n          ... on EVMAccount {\n            address\n            accountType\n          }\n        }\n      }\n      ... on ErrPoolNotFound {\n        message\n      }\n    }\n  }\n": typeof types.PoolGetByIdDocument,
};
const documents: Documents = {
    "\n  mutation PoolCreate($input: PoolCreateInput!) {\n    poolCreate(input: $input) {\n      pool {\n        dbid\n        name\n        description\n      }\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n": types.PoolCreateDocument,
    "\n  mutation UserRegister($input: UserRegisterInput!) {\n    userRegister(input: $input) {\n      requiresConfirmation\n      user {\n        id\n        dbid\n      }\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n": types.UserRegisterDocument,
    "\n  query UserByAddress($chainAddress: ChainAddressInput!) {\n    userByAddress(chainAddress: $chainAddress) {\n      __typename\n      ... on Error {\n        __typename\n        message\n      }\n      ... on User {\n        dbid\n      }\n    }\n  }\n": types.UserByAddressDocument,
    "\n  query MyPools {\n    viewer {\n      ... on Viewer {\n        pools {\n          id\n          dbid\n          status\n          name\n          description\n          slug\n          createdAt\n          updatedAt\n          owner {\n            ... on User {\n              dbid\n            }\n            ... on EVMAccount {\n              address\n              accountType\n            }\n          }\n        }\n      }\n    }\n  }\n": types.MyPoolsDocument,
    "\n  query PoolGetById($id: DBID!) {\n    poolById(id: $id) {\n      ... on Pool {\n        id\n        dbid\n        status\n        name\n        description\n        slug\n        createdAt\n        updatedAt\n        owner {\n          ... on User {\n            dbid\n          }\n          ... on EVMAccount {\n            address\n            accountType\n          }\n        }\n      }\n      ... on ErrPoolNotFound {\n        message\n      }\n    }\n  }\n": types.PoolGetByIdDocument,
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
export function graphql(source: "\n  mutation PoolCreate($input: PoolCreateInput!) {\n    poolCreate(input: $input) {\n      pool {\n        dbid\n        name\n        description\n      }\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation PoolCreate($input: PoolCreateInput!) {\n    poolCreate(input: $input) {\n      pool {\n        dbid\n        name\n        description\n      }\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UserRegister($input: UserRegisterInput!) {\n    userRegister(input: $input) {\n      requiresConfirmation\n      user {\n        id\n        dbid\n      }\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UserRegister($input: UserRegisterInput!) {\n    userRegister(input: $input) {\n      requiresConfirmation\n      user {\n        id\n        dbid\n      }\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UserByAddress($chainAddress: ChainAddressInput!) {\n    userByAddress(chainAddress: $chainAddress) {\n      __typename\n      ... on Error {\n        __typename\n        message\n      }\n      ... on User {\n        dbid\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserByAddress($chainAddress: ChainAddressInput!) {\n    userByAddress(chainAddress: $chainAddress) {\n      __typename\n      ... on Error {\n        __typename\n        message\n      }\n      ... on User {\n        dbid\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyPools {\n    viewer {\n      ... on Viewer {\n        pools {\n          id\n          dbid\n          status\n          name\n          description\n          slug\n          createdAt\n          updatedAt\n          owner {\n            ... on User {\n              dbid\n            }\n            ... on EVMAccount {\n              address\n              accountType\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyPools {\n    viewer {\n      ... on Viewer {\n        pools {\n          id\n          dbid\n          status\n          name\n          description\n          slug\n          createdAt\n          updatedAt\n          owner {\n            ... on User {\n              dbid\n            }\n            ... on EVMAccount {\n              address\n              accountType\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PoolGetById($id: DBID!) {\n    poolById(id: $id) {\n      ... on Pool {\n        id\n        dbid\n        status\n        name\n        description\n        slug\n        createdAt\n        updatedAt\n        owner {\n          ... on User {\n            dbid\n          }\n          ... on EVMAccount {\n            address\n            accountType\n          }\n        }\n      }\n      ... on ErrPoolNotFound {\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  query PoolGetById($id: DBID!) {\n    poolById(id: $id) {\n      ... on Pool {\n        id\n        dbid\n        status\n        name\n        description\n        slug\n        createdAt\n        updatedAt\n        owner {\n          ... on User {\n            dbid\n          }\n          ... on EVMAccount {\n            address\n            accountType\n          }\n        }\n      }\n      ... on ErrPoolNotFound {\n        message\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;