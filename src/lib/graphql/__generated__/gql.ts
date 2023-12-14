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
    "\n  fragment TokenFragment on Token {\n    id\n    symbol\n    name\n    decimals\n    totalSupply\n  }\n": types.TokenFragmentFragmentDoc,
    "\n  fragment TokenValueFragment on TokenValue {\n    amount\n    token {\n      ...TokenFragment\n    }\n  }\n": types.TokenValueFragmentFragmentDoc,
    "\n  fragment ShareFragment on Share {\n    id\n    payee\n    timestamp\n    value\n  }\n": types.ShareFragmentFragmentDoc,
    "\n  fragment TransactionBaseFragment on Transaction {\n    id\n    split {\n      ...SplitBaseFragment\n    }\n    blockNumber\n    timestamp\n    gasUsed\n    gasPrice\n  }\n": types.TransactionBaseFragmentFragmentDoc,
    "\n  fragment TransactionDetailsFragment on Transaction {\n    id\n    split {\n      ...SplitBaseFragment\n    }\n    blockNumber\n    timestamp\n    gasUsed\n    gasPrice\n    withdrawals {\n      ...WithdrawalFragment\n    }\n    deposits {\n      ...DepositFragment\n    }\n    contractURIUpdates {\n      ...ContractURIUpdateFragment\n    }\n  }\n": types.TransactionDetailsFragmentFragmentDoc,
    "\n  fragment WithdrawalFragment on Withdrawal {\n    amount\n    token {\n      id\n      symbol\n      name\n      decimals\n      totalSupply\n    }\n    id\n    transaction {\n      ...TransactionBaseFragment\n    }\n    split {\n      ...SplitBaseFragment\n    }\n    origin\n    logIndex\n    to\n  }\n": types.WithdrawalFragmentFragmentDoc,
    "\n  fragment DepositFragment on Deposit {\n    amount\n    token {\n      ...TokenFragment\n    }\n    id\n    transaction {\n      ...TransactionBaseFragment\n    }\n    split {\n      ...SplitBaseFragment\n    }\n    origin\n    logIndex\n    from\n  }\n": types.DepositFragmentFragmentDoc,
    "\n  fragment ContractURIUpdateFragment on ContractURIUpdate {\n    id\n    transaction {\n      ...TransactionBaseFragment\n    }\n    split {\n      ...SplitBaseFragment\n    }\n    origin\n    logIndex\n    previousURI\n    newURI\n  }\n": types.ContractUriUpdateFragmentFragmentDoc,
    "\n  fragment SplitBaseFragment on Split {\n    id\n    address\n    blockNumber\n    timestamp\n    metaData {\n      name\n      description\n      image\n    }\n    metaDataUri\n    totalShares\n    txCount\n    shares {\n      id\n      payee\n      timestamp\n      value\n    }\n  }\n": types.SplitBaseFragmentFragmentDoc,
    "\n  fragment SplitDetailsFragment on Split {\n    id\n    address\n    blockNumber\n    timestamp\n    metaData {\n      name\n      description\n      image\n    }\n    metaDataUri\n    totalShares\n    txCount\n    shares {\n      id\n      payee\n      timestamp\n      value\n    }\n    tokenWithdrawals {\n      amount\n      token {\n        id\n        symbol\n        name\n        decimals\n        totalSupply\n      }\n    }\n    tokenDeposits {\n      amount\n      token {\n        id\n        symbol\n        name\n        decimals\n        totalSupply\n      }\n    }\n    withdrawableTokens {\n      amount\n      token {\n        id\n        symbol\n        name\n        decimals\n        totalSupply\n      }\n    }\n  }\n": types.SplitDetailsFragmentFragmentDoc,
    "\n  query SplitsByPayee($payee: Bytes = \"\") {\n    splits(where: { shares_: { payee: $payee } }) {\n      ...SplitBaseFragment\n    }\n  }\n": types.SplitsByPayeeDocument,
    "\n  query Split($id: ID!) {\n    split(id: $id) {\n      ...SplitDetailsFragment\n    }\n  }\n": types.SplitDocument,
    "\n  query Pool($id: ID!) {\n    split(id: $id) {\n      ...SplitBaseFragment\n    }\n  }\n": types.PoolDocument,
    "\n  query TransactionsBySplit($split: String!) {\n    transactions(where: { split: $split }) {\n      ...TransactionDetailsFragment\n    }\n  }\n": types.TransactionsBySplitDocument,
    "\n  query SharesByPool($pool: String!) {\n    shares(where: { split: $pool }) {\n      ...ShareFragment\n    }\n  }\n": types.SharesByPoolDocument,
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
export function graphql(source: "\n  fragment TokenFragment on Token {\n    id\n    symbol\n    name\n    decimals\n    totalSupply\n  }\n"): (typeof documents)["\n  fragment TokenFragment on Token {\n    id\n    symbol\n    name\n    decimals\n    totalSupply\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TokenValueFragment on TokenValue {\n    amount\n    token {\n      ...TokenFragment\n    }\n  }\n"): (typeof documents)["\n  fragment TokenValueFragment on TokenValue {\n    amount\n    token {\n      ...TokenFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ShareFragment on Share {\n    id\n    payee\n    timestamp\n    value\n  }\n"): (typeof documents)["\n  fragment ShareFragment on Share {\n    id\n    payee\n    timestamp\n    value\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TransactionBaseFragment on Transaction {\n    id\n    split {\n      ...SplitBaseFragment\n    }\n    blockNumber\n    timestamp\n    gasUsed\n    gasPrice\n  }\n"): (typeof documents)["\n  fragment TransactionBaseFragment on Transaction {\n    id\n    split {\n      ...SplitBaseFragment\n    }\n    blockNumber\n    timestamp\n    gasUsed\n    gasPrice\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TransactionDetailsFragment on Transaction {\n    id\n    split {\n      ...SplitBaseFragment\n    }\n    blockNumber\n    timestamp\n    gasUsed\n    gasPrice\n    withdrawals {\n      ...WithdrawalFragment\n    }\n    deposits {\n      ...DepositFragment\n    }\n    contractURIUpdates {\n      ...ContractURIUpdateFragment\n    }\n  }\n"): (typeof documents)["\n  fragment TransactionDetailsFragment on Transaction {\n    id\n    split {\n      ...SplitBaseFragment\n    }\n    blockNumber\n    timestamp\n    gasUsed\n    gasPrice\n    withdrawals {\n      ...WithdrawalFragment\n    }\n    deposits {\n      ...DepositFragment\n    }\n    contractURIUpdates {\n      ...ContractURIUpdateFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment WithdrawalFragment on Withdrawal {\n    amount\n    token {\n      id\n      symbol\n      name\n      decimals\n      totalSupply\n    }\n    id\n    transaction {\n      ...TransactionBaseFragment\n    }\n    split {\n      ...SplitBaseFragment\n    }\n    origin\n    logIndex\n    to\n  }\n"): (typeof documents)["\n  fragment WithdrawalFragment on Withdrawal {\n    amount\n    token {\n      id\n      symbol\n      name\n      decimals\n      totalSupply\n    }\n    id\n    transaction {\n      ...TransactionBaseFragment\n    }\n    split {\n      ...SplitBaseFragment\n    }\n    origin\n    logIndex\n    to\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DepositFragment on Deposit {\n    amount\n    token {\n      ...TokenFragment\n    }\n    id\n    transaction {\n      ...TransactionBaseFragment\n    }\n    split {\n      ...SplitBaseFragment\n    }\n    origin\n    logIndex\n    from\n  }\n"): (typeof documents)["\n  fragment DepositFragment on Deposit {\n    amount\n    token {\n      ...TokenFragment\n    }\n    id\n    transaction {\n      ...TransactionBaseFragment\n    }\n    split {\n      ...SplitBaseFragment\n    }\n    origin\n    logIndex\n    from\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ContractURIUpdateFragment on ContractURIUpdate {\n    id\n    transaction {\n      ...TransactionBaseFragment\n    }\n    split {\n      ...SplitBaseFragment\n    }\n    origin\n    logIndex\n    previousURI\n    newURI\n  }\n"): (typeof documents)["\n  fragment ContractURIUpdateFragment on ContractURIUpdate {\n    id\n    transaction {\n      ...TransactionBaseFragment\n    }\n    split {\n      ...SplitBaseFragment\n    }\n    origin\n    logIndex\n    previousURI\n    newURI\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SplitBaseFragment on Split {\n    id\n    address\n    blockNumber\n    timestamp\n    metaData {\n      name\n      description\n      image\n    }\n    metaDataUri\n    totalShares\n    txCount\n    shares {\n      id\n      payee\n      timestamp\n      value\n    }\n  }\n"): (typeof documents)["\n  fragment SplitBaseFragment on Split {\n    id\n    address\n    blockNumber\n    timestamp\n    metaData {\n      name\n      description\n      image\n    }\n    metaDataUri\n    totalShares\n    txCount\n    shares {\n      id\n      payee\n      timestamp\n      value\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SplitDetailsFragment on Split {\n    id\n    address\n    blockNumber\n    timestamp\n    metaData {\n      name\n      description\n      image\n    }\n    metaDataUri\n    totalShares\n    txCount\n    shares {\n      id\n      payee\n      timestamp\n      value\n    }\n    tokenWithdrawals {\n      amount\n      token {\n        id\n        symbol\n        name\n        decimals\n        totalSupply\n      }\n    }\n    tokenDeposits {\n      amount\n      token {\n        id\n        symbol\n        name\n        decimals\n        totalSupply\n      }\n    }\n    withdrawableTokens {\n      amount\n      token {\n        id\n        symbol\n        name\n        decimals\n        totalSupply\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment SplitDetailsFragment on Split {\n    id\n    address\n    blockNumber\n    timestamp\n    metaData {\n      name\n      description\n      image\n    }\n    metaDataUri\n    totalShares\n    txCount\n    shares {\n      id\n      payee\n      timestamp\n      value\n    }\n    tokenWithdrawals {\n      amount\n      token {\n        id\n        symbol\n        name\n        decimals\n        totalSupply\n      }\n    }\n    tokenDeposits {\n      amount\n      token {\n        id\n        symbol\n        name\n        decimals\n        totalSupply\n      }\n    }\n    withdrawableTokens {\n      amount\n      token {\n        id\n        symbol\n        name\n        decimals\n        totalSupply\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SplitsByPayee($payee: Bytes = \"\") {\n    splits(where: { shares_: { payee: $payee } }) {\n      ...SplitBaseFragment\n    }\n  }\n"): (typeof documents)["\n  query SplitsByPayee($payee: Bytes = \"\") {\n    splits(where: { shares_: { payee: $payee } }) {\n      ...SplitBaseFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Split($id: ID!) {\n    split(id: $id) {\n      ...SplitDetailsFragment\n    }\n  }\n"): (typeof documents)["\n  query Split($id: ID!) {\n    split(id: $id) {\n      ...SplitDetailsFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Pool($id: ID!) {\n    split(id: $id) {\n      ...SplitBaseFragment\n    }\n  }\n"): (typeof documents)["\n  query Pool($id: ID!) {\n    split(id: $id) {\n      ...SplitBaseFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TransactionsBySplit($split: String!) {\n    transactions(where: { split: $split }) {\n      ...TransactionDetailsFragment\n    }\n  }\n"): (typeof documents)["\n  query TransactionsBySplit($split: String!) {\n    transactions(where: { split: $split }) {\n      ...TransactionDetailsFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SharesByPool($pool: String!) {\n    shares(where: { split: $pool }) {\n      ...ShareFragment\n    }\n  }\n"): (typeof documents)["\n  query SharesByPool($pool: String!) {\n    shares(where: { split: $pool }) {\n      ...ShareFragment\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;