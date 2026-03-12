"use server";

import { query } from "./client";
import {
  PoolQuery,
  PoolQueryVariables,
} from "../graphql/data/__generated__/graphql";
import { POOL } from "../graphql/data";
import { ApolloClient } from "@apollo/client";

export async function getPool(options?: GetPoolOptions) {
  return query({
    query: POOL,
    ...options,
  });
}

export type GetPoolOptions = Omit<
  ApolloClient.QueryOptions<PoolQuery, PoolQueryVariables>,
  "query"
>;

export type GetPoolResult = ApolloClient.QueryResult<PoolQuery>;
