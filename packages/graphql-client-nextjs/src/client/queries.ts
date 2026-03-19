import { useQuery } from "@apollo/client/react";
import {
  GET_NODE,
  GET_POOL,
  GET_POOL_DAY_BALANCES,
  GET_POOL_DEPOSITS,
  GET_POOL_HOUR_BALANCES,
  GET_POOL_TRANSACTIONS,
  GET_POOL_WITH_BALANCE,
  GET_POOL_WITH_BALANCE_AND_CONTRACT,
  GET_POOL_WITH_BALANCE_CONTRACT_CLAIMS,
  GET_POOL_WITH_CLAIMS,
  GET_POOL_WITH_CONTRACT,
  GET_POOL_WITHDRAWALS,
  GET_USER,
  SEARCH_POOLS,
  SEARCH_USERS,
  VIEWER,
  VIEWER_POOL_LIST,
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
  NodeQuery,
  NodeQueryVariables,
  PoolDayBalancesQuery,
  PoolDayBalancesQueryVariables,
  PoolDepositsQuery,
  PoolDepositsQueryVariables,
  PoolHourBalancesQuery,
  PoolHourBalancesQueryVariables,
  PoolTransactionsQuery,
  PoolTransactionsQueryVariables,
  PoolWithdrawalsQuery,
  PoolWithdrawalsQueryVariables,
  SearchPoolsQuery,
  SearchPoolsQueryVariables,
  SearchUsersQuery,
  SearchUsersQueryVariables,
  UserQuery,
  UserQueryVariables,
  ViewerPoolListQuery,
  ViewerPoolListQueryVariables,
  ViewerQuery,
  ViewerQueryVariables,
} from "../graphql/data/__generated__/graphql";
import type { QueryOptions } from "../types";

export function useViewer(
  options?: QueryOptions<ViewerQuery, ViewerQueryVariables>
) {
  return useQuery(VIEWER, options);
}

export function useUser(options: QueryOptions<UserQuery, UserQueryVariables>) {
  return useQuery(GET_USER, options);
}

export function usePool(
  options?: QueryOptions<GetPoolQuery, GetPoolQueryVariables>
) {
  return useQuery(GET_POOL, options);
}

export function usePoolWithBalance(
  options?: QueryOptions<
    GetPoolWithBalanceQuery,
    GetPoolWithBalanceQueryVariables
  >
) {
  return useQuery(GET_POOL_WITH_BALANCE, options);
}

export function usePoolWithContract(
  options?: QueryOptions<
    GetPoolWithContractQuery,
    GetPoolWithContractQueryVariables
  >
) {
  return useQuery(GET_POOL_WITH_CONTRACT, options);
}

export function usePoolWithClaims(
  options?: QueryOptions<
    GetPoolWithClaimsQuery,
    GetPoolWithClaimsQueryVariables
  >
) {
  return useQuery(GET_POOL_WITH_CLAIMS, options);
}

export function usePoolWithBalanceAndContract(
  options?: QueryOptions<
    GetPoolWithBalanceAndContractQuery,
    GetPoolWithBalanceAndContractQueryVariables
  >
) {
  return useQuery(GET_POOL_WITH_BALANCE_AND_CONTRACT, options);
}

export function usePoolWithBalanceContractClaims(
  options?: QueryOptions<
    GetPoolWithBalanceContractClaimsQuery,
    GetPoolWithBalanceContractClaimsQueryVariables
  >
) {
  return useQuery(GET_POOL_WITH_BALANCE_CONTRACT_CLAIMS, options);
}

export function useViewerPoolList(
  options?: QueryOptions<ViewerPoolListQuery, ViewerPoolListQueryVariables>
) {
  return useQuery(VIEWER_POOL_LIST, options);
}

export function usePoolDayBalances(
  options?: QueryOptions<PoolDayBalancesQuery, PoolDayBalancesQueryVariables>
) {
  return useQuery(GET_POOL_DAY_BALANCES, options);
}

export function usePoolHourBalances(
  options?: QueryOptions<PoolHourBalancesQuery, PoolHourBalancesQueryVariables>
) {
  return useQuery(GET_POOL_HOUR_BALANCES, options);
}

export function usePoolDeposits(
  options?: QueryOptions<PoolDepositsQuery, PoolDepositsQueryVariables>
) {
  return useQuery(GET_POOL_DEPOSITS, options);
}

export function usePoolWithdrawals(
  options?: QueryOptions<PoolWithdrawalsQuery, PoolWithdrawalsQueryVariables>
) {
  return useQuery(GET_POOL_WITHDRAWALS, options);
}

export function usePoolTransactions(
  options?: QueryOptions<PoolTransactionsQuery, PoolTransactionsQueryVariables>
) {
  return useQuery(GET_POOL_TRANSACTIONS, options);
}

// Search Queries
export function useSearchUsers(
  options: QueryOptions<SearchUsersQuery, SearchUsersQueryVariables>
) {
  return useQuery(SEARCH_USERS, options);
}

export function useSearchPools(
  options: QueryOptions<SearchPoolsQuery, SearchPoolsQueryVariables>
) {
  return useQuery(SEARCH_POOLS, options);
}

export function useNode(options: QueryOptions<NodeQuery, NodeQueryVariables>) {
  return useQuery(GET_NODE, options);
}
