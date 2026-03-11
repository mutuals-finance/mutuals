import { useQuery } from "@apollo/client/react";
import type { QueryOptions } from "../types";
import {
  ViewerPoolListQuery,
  ViewerPoolListQueryVariables,
  ViewerQuery,
  ViewerQueryVariables,
  PoolQuery,
  PoolQueryVariables,
  PoolWithContractDetailsQuery,
  PoolWithContractDetailsQueryVariables,
  PoolDayBalancesQuery,
  PoolDayBalancesQueryVariables,
  PoolHourBalancesQuery,
  PoolHourBalancesQueryVariables,
  PoolDepositsQuery,
  PoolDepositsQueryVariables,
  PoolWithdrawalsQuery,
  PoolWithdrawalsQueryVariables,
  PoolTransactionsQuery,
  PoolTransactionsQueryVariables,
  UserByIdQuery,
  UserByIdQueryVariables,
  UserByUsernameQuery,
  UserByUsernameQueryVariables,
  UserByAddressQuery,
  UserByAddressQueryVariables,
  SearchUsersQuery,
  SearchUsersQueryVariables,
  SearchPoolsQuery,
  SearchPoolsQueryVariables,
  NodeQuery,
  NodeQueryVariables,
} from "../graphql/data/__generated__/graphql";
import {
  VIEWER_POOL_LIST,
  VIEWER,
  POOL,
  GET_POOL_WITH_CONTRACT_DETAILS,
  GET_POOL_DAY_BALANCES,
  GET_POOL_HOUR_BALANCES,
  GET_POOL_DEPOSITS,
  GET_POOL_WITHDRAWALS,
  GET_POOL_TRANSACTIONS,
  GET_USER_BY_ID,
  GET_USER_BY_USERNAME,
  GET_USER_BY_WALLET_ADDRESS,
  SEARCH_USERS,
  SEARCH_POOLS,
  GET_NODE,
} from "../graphql/data";

// User Queries
export function useViewer(
  options?: QueryOptions<ViewerQuery, ViewerQueryVariables>,
) {
  return useQuery(VIEWER, options);
}

export function useUserById(
  options: QueryOptions<UserByIdQuery, UserByIdQueryVariables>,
) {
  return useQuery(GET_USER_BY_ID, options);
}

export function useUserByUsername(
  options: QueryOptions<UserByUsernameQuery, UserByUsernameQueryVariables>,
) {
  return useQuery(GET_USER_BY_USERNAME, options);
}

export function useUserByWalletAddress(
  options: QueryOptions<UserByAddressQuery, UserByAddressQueryVariables>,
) {
  return useQuery(GET_USER_BY_WALLET_ADDRESS, options);
}

// Pool Queries
export function usePool(options?: QueryOptions<PoolQuery, PoolQueryVariables>) {
  return useQuery(POOL, options);
}

export function usePoolWithContractDetails(
  options?: QueryOptions<
    PoolWithContractDetailsQuery,
    PoolWithContractDetailsQueryVariables
  >,
) {
  return useQuery(GET_POOL_WITH_CONTRACT_DETAILS, options);
}

export function useViewerPoolList(
  options?: QueryOptions<ViewerPoolListQuery, ViewerPoolListQueryVariables>,
) {
  return useQuery(VIEWER_POOL_LIST, options);
}

export function usePoolDayBalances(
  options?: QueryOptions<PoolDayBalancesQuery, PoolDayBalancesQueryVariables>,
) {
  return useQuery(GET_POOL_DAY_BALANCES, options);
}

export function usePoolHourBalances(
  options?: QueryOptions<PoolHourBalancesQuery, PoolHourBalancesQueryVariables>,
) {
  return useQuery(GET_POOL_HOUR_BALANCES, options);
}

export function usePoolDeposits(
  options?: QueryOptions<PoolDepositsQuery, PoolDepositsQueryVariables>,
) {
  return useQuery(GET_POOL_DEPOSITS, options);
}

export function usePoolWithdrawals(
  options?: QueryOptions<PoolWithdrawalsQuery, PoolWithdrawalsQueryVariables>,
) {
  return useQuery(GET_POOL_WITHDRAWALS, options);
}

export function usePoolTransactions(
  options?: QueryOptions<PoolTransactionsQuery, PoolTransactionsQueryVariables>,
) {
  return useQuery(GET_POOL_TRANSACTIONS, options);
}

// Search Queries
export function useSearchUsers(
  options: QueryOptions<SearchUsersQuery, SearchUsersQueryVariables>,
) {
  return useQuery(SEARCH_USERS, options);
}

export function useSearchPools(
  options: QueryOptions<SearchPoolsQuery, SearchPoolsQueryVariables>,
) {
  return useQuery(SEARCH_POOLS, options);
}

// Node Query
export function useNode(options: QueryOptions<NodeQuery, NodeQueryVariables>) {
  return useQuery(GET_NODE, options);
}
