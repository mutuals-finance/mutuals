import { ApolloQueryResult, QueryOptions } from "@apollo/client";
import { getClient } from "./client";
import {
  PoolDetailsByIdQuery,
  PoolDetailsByIdQueryVariables,
  PoolListByRecipientQuery,
  PoolListByRecipientQueryVariables,
} from "../graphql/__generated__/graphql";
import { GET_POOL_DETAILS_BY_ID } from "../graphql/queries/PoolDetailsById";
import { GET_POOL_LIST_BY_RECIPIENT } from "../graphql/queries/PoolListByRecipient";

type TQueryOptions<TVariableType, TQueryType> = Omit<
  QueryOptions<TVariableType, TQueryType>,
  "query"
>;

export function getPoolListByRecipient(
  options: TQueryOptions<
    PoolListByRecipientQueryVariables,
    PoolListByRecipientQuery
  >,
) {
  return getClient().query({
    query: GET_POOL_LIST_BY_RECIPIENT,
    ...options,
  });
}

export function getPoolDetails(
  options: TQueryOptions<PoolDetailsByIdQueryVariables, PoolDetailsByIdQuery>,
): Promise<ApolloQueryResult<PoolDetailsByIdQuery>> {
  return getClient().query({
    query: GET_POOL_DETAILS_BY_ID,
    ...options,
  });
}
