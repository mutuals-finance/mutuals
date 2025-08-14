"use server";

import { query } from "./client";

import {
  PoolByIdQuery,
  PoolByIdQueryVariables,
  ViewerQuery,
  ViewerQueryVariables,
  ViewerPoolsQuery,
  ViewerPoolsQueryVariables,
  ViewerWalletsQuery,
  ViewerWalletsQueryVariables,
} from "../graphql/data/__generated__/graphql";
import { TQueryOptions } from "../types";

import { GET_VIEWER } from "../graphql/data/queries/GetViewer";
import { GET_VIEWER_WALLETS } from "../graphql/data/queries/GetViewerWallets";
import { GET_VIEWER_POOLS } from "../graphql/data/queries/GetViewerPools";
import { GET_POOL_BY_ID } from "../graphql/data/queries/GetPoolById";

export async function getViewer(
  options?: TQueryOptions<ViewerQueryVariables, ViewerQuery>,
) {
  return query({
    query: GET_VIEWER,
    ...options,
  });
}

export async function getViewerWallets(
  options?: TQueryOptions<ViewerWalletsQueryVariables, ViewerWalletsQuery>,
) {
  return query({
    query: GET_VIEWER_WALLETS,
    ...options,
  });
}

export async function getViewerPools(
  options?: TQueryOptions<ViewerPoolsQueryVariables, ViewerPoolsQuery>,
) {
  return query({
    query: GET_VIEWER_POOLS,
    ...options,
  });
}

export async function getPoolById(
  options?: TQueryOptions<PoolByIdQueryVariables, PoolByIdQuery>,
) {
  return query({
    query: GET_POOL_BY_ID,
    ...options,
  });
}
