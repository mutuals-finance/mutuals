import { getClient } from '@/lib/graphql/apolloClient';
import { POOL, POOL_WITH_SHARES, SHARES_BY_POOL } from '@/lib/graphql/queries';
import { QueryOptions } from '@apollo/client';
import {
  PoolQuery,
  PoolWithSharesQuery,
  PoolWithSharesQueryVariables,
  SharesByPoolQuery,
} from '@/lib/graphql/__generated__/graphql';

type TQueryOptions<TVariableType, TQueryType> = Omit<
  QueryOptions<TVariableType, TQueryType>,
  'query'
>;

export function getPoolDetails(
  options: TQueryOptions<{ id: string }, PoolQuery>,
) {
  return getClient().query({
    query: POOL,
    ...options,
  });
}

export function getPoolDetailsWithShares(
  options: TQueryOptions<PoolWithSharesQueryVariables, PoolWithSharesQuery>,
) {
  return getClient().query({
    query: POOL_WITH_SHARES,
    ...options,
  });
}

export function getPoolShares(
  options: TQueryOptions<{ pool: string }, SharesByPoolQuery>,
) {
  return getClient().query({
    query: SHARES_BY_POOL,
    ...options,
  });
}
