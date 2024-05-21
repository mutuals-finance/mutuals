/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "query PoolDetailsById($id: ID!) {\n  split(id: $id) {\n    id\n    address\n    blockNumber\n    timestamp\n    metaDataUri\n    totalShares\n    txCount\n    metaData {\n      name\n      description\n      image\n    }\n    shares {\n      id\n      payee\n      timestamp\n      value\n    }\n  }\n}": types.PoolDetailsByIdDocument,
    "query PoolListByRecipient($recipient: Bytes!) {\n  splits(where: {shares_: {payee: $recipient}}) {\n    id\n    address\n    blockNumber\n    timestamp\n    metaData {\n      name\n      description\n      image\n    }\n    metaDataUri\n    totalShares\n    txCount\n  }\n}": types.PoolListByRecipientDocument,
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
export function graphql(source: "query PoolDetailsById($id: ID!) {\n  split(id: $id) {\n    id\n    address\n    blockNumber\n    timestamp\n    metaDataUri\n    totalShares\n    txCount\n    metaData {\n      name\n      description\n      image\n    }\n    shares {\n      id\n      payee\n      timestamp\n      value\n    }\n  }\n}"): (typeof documents)["query PoolDetailsById($id: ID!) {\n  split(id: $id) {\n    id\n    address\n    blockNumber\n    timestamp\n    metaDataUri\n    totalShares\n    txCount\n    metaData {\n      name\n      description\n      image\n    }\n    shares {\n      id\n      payee\n      timestamp\n      value\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PoolListByRecipient($recipient: Bytes!) {\n  splits(where: {shares_: {payee: $recipient}}) {\n    id\n    address\n    blockNumber\n    timestamp\n    metaData {\n      name\n      description\n      image\n    }\n    metaDataUri\n    totalShares\n    txCount\n  }\n}"): (typeof documents)["query PoolListByRecipient($recipient: Bytes!) {\n  splits(where: {shares_: {payee: $recipient}}) {\n    id\n    address\n    blockNumber\n    timestamp\n    metaData {\n      name\n      description\n      image\n    }\n    metaDataUri\n    totalShares\n    txCount\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;