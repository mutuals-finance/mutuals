import { ApolloQueryResult, QueryOptions } from "@apollo/client";
import {
  PoolDetailsByIdDocument,
  PoolDetailsByIdQuery,
  PoolListByRecipientDocument,
  PoolListByRecipientQuery,
} from "../graphql/__generated__/graphql";
import { getClient } from "../client/server";

type TQueryOptions<TVariableType, TQueryType> = Omit<
  QueryOptions<TVariableType, TQueryType>,
  "query"
>;

export function getPoolListByRecipient(
  options: TQueryOptions<{ recipient?: string }, PoolListByRecipientQuery>,
) {
  return getClient().query({
    query: PoolListByRecipientDocument,
    ...options,
  });
}

export function getPoolDetails(
  options: TQueryOptions<{ id: string }, PoolDetailsByIdQuery>,
): Promise<ApolloQueryResult<PoolDetailsByIdQuery>> {
  return getClient().query({
    query: PoolDetailsByIdDocument,
    ...options,
  });
}
