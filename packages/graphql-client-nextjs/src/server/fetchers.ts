"use server";

import { query } from "./client";
import {
  MeQuery,
  MeQueryVariables,
  MyPoolsQuery,
  MyPoolsQueryVariables,
  PoolGetByIdQuery,
  PoolGetByIdQueryVariables,
} from "../graphql/data/__generated__/graphql";
import { TQueryOptions } from "../types";
import { ME_GET } from "../graphql/data/queries/MeGet";
import { MY_POOLS_GET } from "../graphql/data/queries/MyPoolsGet";
import { POOL_GET_BY_ID } from "../graphql/data/queries/PoolGetById";

export async function me(options?: TQueryOptions<MeQueryVariables, MeQuery>) {
  return query({
    query: ME_GET,
    ...options,
  });
}

export async function myPoolsGet(
  options?: TQueryOptions<MyPoolsQueryVariables, MyPoolsQuery>,
) {
  return query({
    query: MY_POOLS_GET,
    ...options,
  });
}

export async function getPoolById(
  options?: TQueryOptions<PoolGetByIdQueryVariables, PoolGetByIdQuery>,
) {
  return query({
    query: POOL_GET_BY_ID,
    ...options,
  });
}
