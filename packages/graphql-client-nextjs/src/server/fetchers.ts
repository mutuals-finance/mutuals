"use server";

import { query } from "./client";
import {
  PoolGetByIdQuery,
  PoolGetByIdQueryVariables,
} from "../graphql/data/__generated__/graphql";
import { TQueryOptions } from "../types";
import { POOL_GET_BY_ID } from "../graphql/data/queries/PoolGetById";

export async function getPoolById(
  options: TQueryOptions<PoolGetByIdQuery, PoolGetByIdQueryVariables>,
) {
  return query({
    query: POOL_GET_BY_ID,
    ...options,
  });
}
