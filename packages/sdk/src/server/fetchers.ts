import { ApolloQueryResult, QueryOptions } from "@apollo/client";
import { getClient } from "./client";
import {
  PoolDetailsByIdQuery,
  PoolDetailsByIdQueryVariables,
  PoolListByRecipientQuery,
  PoolListByRecipientQueryVariables,
} from "../graphql/thegraph/__generated__/graphql";
import { GET_POOL_DETAILS_BY_ID } from "../graphql/thegraph/queries/PoolDetailsById";
import { GET_POOL_LIST_BY_RECIPIENT } from "../graphql/thegraph/queries/PoolListByRecipient";
import { GET_VIEWER } from "../graphql/data/queries/Viewer";
import {
  ViewerQuery,
  ViewerQueryVariables,
} from "../graphql/data/__generated__/graphql";

type TQueryOptions<TVariableType, TQueryType> = Omit<
  QueryOptions<TVariableType, TQueryType>,
  "query"
>;

export function getPoolListByRecipient(
  options?: TQueryOptions<
    PoolListByRecipientQueryVariables,
    PoolListByRecipientQuery
  >,
) {
  return getClient().query({
    query: GET_POOL_LIST_BY_RECIPIENT,
    context: { clientName: "thegraph", ...options?.context },
    ...options,
  });
}

export function getPoolDetails(
  options?: TQueryOptions<PoolDetailsByIdQueryVariables, PoolDetailsByIdQuery>,
): Promise<ApolloQueryResult<PoolDetailsByIdQuery>> {
  return getClient().query({
    query: GET_POOL_DETAILS_BY_ID,
    context: { clientName: "thegraph", ...options?.context },
    ...options,
  });
}

export function getViewer(
  options?: TQueryOptions<ViewerQueryVariables, ViewerQuery>,
): Promise<ApolloQueryResult<ViewerQuery>> {
  return getClient().query({
    query: GET_VIEWER,
    ...options,
  });
}
