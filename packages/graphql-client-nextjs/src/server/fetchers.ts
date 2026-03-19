"use server";

import type { ApolloClient, OperationVariables } from "@apollo/client";
import {
  GET_POOL,
  GET_POOL_TRANSACTIONS,
  GET_POOL_WITH_BALANCE,
  GET_POOL_WITH_BALANCE_AND_CONTRACT,
  GET_POOL_WITH_BALANCE_CONTRACT_CLAIMS,
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
  GetPoolWithBalanceContractClaimsQuery,
  GetPoolWithBalanceContractClaimsQueryVariables,
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

export type BaseQueryOptions<
  TQuery,
  TVariables extends OperationVariables,
> = Omit<ApolloClient.QueryOptions<TQuery, TVariables>, "query">;

export type ExtractResult<T> =
  | { data: null; error: Error | unknown }
  | { data: T; error: null };

async function fetchAndExtract<
  TQuery,
  TVariables extends OperationVariables,
  TKey extends keyof NonNullable<TQuery>,
>(
  graphqlQuery: ApolloClient.QueryOptions<TQuery, TVariables>["query"],
  key: TKey,
  options?: BaseQueryOptions<TQuery, TVariables>
): Promise<
  ExtractResult<
    Exclude<NonNullable<NonNullable<TQuery>[TKey]>, { message: string }>
  >
> {
  const result = await query({
    query: graphqlQuery,
    ...(options ?? {}),
  } as ApolloClient.QueryOptions<TQuery, TVariables>);

  if (result.error) {
    return { data: null, error: result.error };
  }

  const data = result.data;
  if (!data) {
    return { data: null, error: new Error("No data returned") };
  }

  const payload = data[key];
  if (!payload) {
    return { data: null, error: new Error("Not found") };
  }

  if (typeof payload === "object" && "message" in payload) {
    return {
      data: null,
      error: new Error(String((payload as Record<string, unknown>).message)),
    };
  }

  type SuccessType = Exclude<
    NonNullable<NonNullable<TQuery>[TKey]>,
    { message: string }
  >;

  return { data: payload as SuccessType, error: null };
}

export type GetPoolOptions = BaseQueryOptions<
  GetPoolQuery,
  GetPoolQueryVariables
>;
export async function getPool(options?: GetPoolOptions) {
  return await fetchAndExtract<GetPoolQuery, GetPoolQueryVariables, "pool">(
    GET_POOL,
    "pool",
    options
  );
}

export type GetPoolWithBalanceOptions = BaseQueryOptions<
  GetPoolWithBalanceQuery,
  GetPoolWithBalanceQueryVariables
>;
export async function getPoolWithBalance(options?: GetPoolWithBalanceOptions) {
  return await fetchAndExtract<
    GetPoolWithBalanceQuery,
    GetPoolWithBalanceQueryVariables,
    "pool"
  >(GET_POOL_WITH_BALANCE, "pool", { fetchPolicy: "network-only", ...options });
}

export type GetPoolWithTokensOptions = BaseQueryOptions<
  GetPoolWithTokensQuery,
  GetPoolWithTokensQueryVariables
>;
export async function getPoolWithTokens(options?: GetPoolWithTokensOptions) {
  return await fetchAndExtract<
    GetPoolWithTokensQuery,
    GetPoolWithTokensQueryVariables,
    "pool"
  >(GET_POOL_WITH_TOKENS, "pool", { fetchPolicy: "network-only", ...options });
}

export type GetPoolWithContractOptions = BaseQueryOptions<
  GetPoolWithContractQuery,
  GetPoolWithContractQueryVariables
>;
export async function getPoolWithContract(
  options?: GetPoolWithContractOptions
) {
  return await fetchAndExtract<
    GetPoolWithContractQuery,
    GetPoolWithContractQueryVariables,
    "pool"
  >(GET_POOL_WITH_CONTRACT, "pool", options);
}

export type GetPoolWithClaimsOptions = BaseQueryOptions<
  GetPoolWithClaimsQuery,
  GetPoolWithClaimsQueryVariables
>;
export async function getPoolWithClaims(options?: GetPoolWithClaimsOptions) {
  return await fetchAndExtract<
    GetPoolWithClaimsQuery,
    GetPoolWithClaimsQueryVariables,
    "pool"
  >(GET_POOL_WITH_CLAIMS, "pool", options);
}

export type GetPoolWithBalanceAndContractOptions = BaseQueryOptions<
  GetPoolWithBalanceAndContractQuery,
  GetPoolWithBalanceAndContractQueryVariables
>;
export async function getPoolWithBalanceAndContract(
  options?: GetPoolWithBalanceAndContractOptions
) {
  return await fetchAndExtract<
    GetPoolWithBalanceAndContractQuery,
    GetPoolWithBalanceAndContractQueryVariables,
    "pool"
  >(GET_POOL_WITH_BALANCE_AND_CONTRACT, "pool", options);
}

export type GetPoolWithBalanceContractClaimsOptions = BaseQueryOptions<
  GetPoolWithBalanceContractClaimsQuery,
  GetPoolWithBalanceContractClaimsQueryVariables
>;
export async function getPoolWithBalanceContractClaims(
  options?: GetPoolWithBalanceContractClaimsOptions
) {
  return await fetchAndExtract<
    GetPoolWithBalanceContractClaimsQuery,
    GetPoolWithBalanceContractClaimsQueryVariables,
    "pool"
  >(GET_POOL_WITH_BALANCE_CONTRACT_CLAIMS, "pool", options);
}

export type GetPoolTransactionsOptions = BaseQueryOptions<
  PoolTransactionsQuery,
  PoolTransactionsQueryVariables
>;
export async function getPoolTransactions(
  options?: GetPoolTransactionsOptions
) {
  return await fetchAndExtract<
    PoolTransactionsQuery,
    PoolTransactionsQueryVariables,
    "pool"
  >(GET_POOL_TRANSACTIONS, "pool", { fetchPolicy: "network-only", ...options });
}

export type GetUserOptions = BaseQueryOptions<UserQuery, UserQueryVariables>;
export async function getUser(options: GetUserOptions) {
  return await fetchAndExtract<UserQuery, UserQueryVariables, "user">(
    GET_USER,
    "user",
    options
  );
}
