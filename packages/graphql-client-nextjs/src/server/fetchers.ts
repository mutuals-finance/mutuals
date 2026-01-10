"use server";

import { query } from "./client";
import {
  PoolQuery,
  PoolQueryVariables,
} from "../graphql/data/__generated__/graphql";
import { TQueryOptions } from "../types";
import { POOL } from "../graphql/data/queries/Pool";

export async function getPool(
  options: TQueryOptions<PoolQuery, PoolQueryVariables>,
) {
  return query({
    query: POOL,
    ...options,
  });
}
