"use server";

import type { ApolloClient } from "@apollo/client";
import {
  GET_POOL,
  GET_POOL_TRANSACTIONS,
  GET_POOL_WITH_BALANCE,
  GET_POOL_WITH_BALANCE_AND_CONTRACT,
  GET_POOL_WITH_CLAIMS,
  GET_POOL_WITH_CONTRACT,
  GET_POOL_WITH_TOKENS,
  GET_USER,
} from "../graphql/data";
import type {
  GetPoolQuery,
  GetPoolQueryVariables,
  GetPoolWithBalanceAndContractQuery,
  GetPoolWithBalanceAndContractQueryVariables,
  GetPoolWithBalanceQuery,
  GetPoolWithBalanceQueryVariables,
  GetPoolWithClaimsQuery,
  GetPoolWithClaimsQueryVariables,
  GetPoolWithContractQuery,
  GetPoolWithContractQueryVariables,
  GetPoolWithTokensQuery,
  GetPoolWithTokensQueryVariables,
  PoolTransactionsQuery,
  PoolTransactionsQueryVariables,
  UserQuery,
  UserQueryVariables,
} from "../graphql/data/__generated__/graphql";
import { query } from "./client";

export async function getPool(options?: GetPoolOptions) {
  return await query({ query: GET_POOL, ...options });
}
export type GetPoolOptions = Omit<
  ApolloClient.QueryOptions<GetPoolQuery, GetPoolQueryVariables>,
  "query"
>;

export async function getPoolWithBalance(options?: GetPoolWithBalanceOptions) {
  return await query({
    query: GET_POOL_WITH_BALANCE,
    fetchPolicy: "network-only",
    ...options,
  });
}
export type GetPoolWithBalanceOptions = Omit<
  ApolloClient.QueryOptions<
    GetPoolWithBalanceQuery,
    GetPoolWithBalanceQueryVariables
  >,
  "query"
>;

export async function getPoolWithTokens(options?: GetPoolWithTokensOptions) {
  return await query({
    query: GET_POOL_WITH_TOKENS,
    fetchPolicy: "network-only",
    ...options,
  });
}

export type GetPoolWithTokensOptions = Omit<
  ApolloClient.QueryOptions<
    GetPoolWithTokensQuery,
    GetPoolWithTokensQueryVariables
  >,
  "query"
>;

export async function getPoolWithContract(
  options?: GetPoolWithContractOptions
) {
  return await query({ query: GET_POOL_WITH_CONTRACT, ...options });
}
export type GetPoolWithContractOptions = Omit<
  ApolloClient.QueryOptions<
    GetPoolWithContractQuery,
    GetPoolWithContractQueryVariables
  >,
  "query"
>;

export async function getPoolWithClaims(options?: GetPoolWithClaimsOptions) {
  return await query({ query: GET_POOL_WITH_CLAIMS, ...options });
}
export type GetPoolWithClaimsOptions = Omit<
  ApolloClient.QueryOptions<
    GetPoolWithClaimsQuery,
    GetPoolWithClaimsQueryVariables
  >,
  "query"
>;

export async function getPoolWithBalanceAndContract(
  options?: GetPoolWithBalanceAndContractOptions
) {
  return await query({ query: GET_POOL_WITH_BALANCE_AND_CONTRACT, ...options });
}

export type GetPoolWithBalanceAndContractOptions = Omit<
  ApolloClient.QueryOptions<
    GetPoolWithBalanceAndContractQuery,
    GetPoolWithBalanceAndContractQueryVariables
  >,
  "query"
>;

/*
export async function getPoolWithBalanceContractClaims(
  options?: GetPoolWithBalanceContractClaimsOptions,
) {
  return await query({
    query: GET_POOL_WITH_BALANCE_CONTRACT_CLAIMS,
    ...(options ?? {}),
  });
}

export type GetPoolWithBalanceContractClaimsOptions = Omit<
  ApolloClient.QueryOptions<
    GetPoolWithBalanceContractClaimsQuery,
    GetPoolWithBalanceContractClaimsQueryVariables
  >,
  "query"
>;
*/

export async function getPoolTransactions(
  options?: GetPoolTransactionsOptions
) {
  return await query({
    query: GET_POOL_TRANSACTIONS,
    fetchPolicy: "network-only",
    ...options,
  });
}

export type GetPoolTransactionsOptions = Omit<
  ApolloClient.QueryOptions<
    PoolTransactionsQuery,
    PoolTransactionsQueryVariables
  >,
  "query"
>;

export async function getUser(options: GetUserOptions) {
  return await query({ query: GET_USER, ...options });
}

export type GetUserOptions = Omit<
  ApolloClient.QueryOptions<UserQuery, UserQueryVariables>,
  "query"
>;
