"use server";

import { query } from "./client";
import {
  GetPoolQuery,
  GetPoolQueryVariables,
  GetPoolWithBalanceQuery,
  GetPoolWithBalanceQueryVariables,
  GetPoolWithContractQuery,
  GetPoolWithContractQueryVariables,
  GetPoolWithClaimsQuery,
  GetPoolWithClaimsQueryVariables,
  GetPoolWithBalanceAndContractQuery,
  GetPoolWithBalanceAndContractQueryVariables,
  UserQuery,
  UserQueryVariables,
  GetPoolWithTokensQuery,
  GetPoolWithTokensQueryVariables,
  PoolTransactionsQuery,
  PoolTransactionsQueryVariables,
} from "../graphql/data/__generated__/graphql";
import {
  GET_POOL,
  GET_POOL_WITH_BALANCE,
  GET_POOL_WITH_CONTRACT,
  GET_POOL_WITH_CLAIMS,
  GET_POOL_WITH_BALANCE_AND_CONTRACT,
  GET_USER,
  GET_POOL_WITH_TOKENS,
  GET_POOL_TRANSACTIONS,
} from "../graphql/data";
import { ApolloClient } from "@apollo/client";

export async function getPool(options?: GetPoolOptions) {
  return query({ query: GET_POOL, ...options });
}
export type GetPoolOptions = Omit<
  ApolloClient.QueryOptions<GetPoolQuery, GetPoolQueryVariables>,
  "query"
>;

export async function getPoolWithBalance(options?: GetPoolWithBalanceOptions) {
  return query({
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
  return query({
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
  options?: GetPoolWithContractOptions,
) {
  return query({ query: GET_POOL_WITH_CONTRACT, ...options });
}
export type GetPoolWithContractOptions = Omit<
  ApolloClient.QueryOptions<
    GetPoolWithContractQuery,
    GetPoolWithContractQueryVariables
  >,
  "query"
>;

export async function getPoolWithClaims(options?: GetPoolWithClaimsOptions) {
  return query({ query: GET_POOL_WITH_CLAIMS, ...options });
}
export type GetPoolWithClaimsOptions = Omit<
  ApolloClient.QueryOptions<
    GetPoolWithClaimsQuery,
    GetPoolWithClaimsQueryVariables
  >,
  "query"
>;

export async function getPoolWithBalanceAndContract(
  options?: GetPoolWithBalanceAndContractOptions,
) {
  return query({ query: GET_POOL_WITH_BALANCE_AND_CONTRACT, ...options });
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
  return query({
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
  options?: GetPoolTransactionsOptions,
) {
  return query({
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
  return query({ query: GET_USER, ...options });
}

export type GetUserOptions = Omit<
  ApolloClient.QueryOptions<UserQuery, UserQueryVariables>,
  "query"
>;
