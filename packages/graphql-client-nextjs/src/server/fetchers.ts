"use server";

import { ApolloQueryResult } from "@apollo/client";
import { getClient } from "./client";
import {
  PoolDetailsByIdQuery,
  PoolDetailsByIdQueryVariables,
  PoolListByRecipientQuery,
  PoolListByRecipientQueryVariables,
} from "../graphql/thegraph/__generated__/graphql";
import { GET_POOL_DETAILS_BY_ID } from "../graphql/thegraph/queries/PoolDetailsById";
import { GET_POOL_LIST_BY_RECIPIENT } from "../graphql/thegraph/queries/PoolListByRecipient";
import { GET_VIEWER } from "../graphql/data/queries/GetViewer";
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
import { GET_VIEWER_WALLETS } from "../graphql/data/queries/GetViewerWallets";
import { TQueryOptions } from "../types";
import { GET_VIEWER_POOLS } from "../graphql/data/queries/GetViewerPools";
import { GET_POOL_BY_ID } from "../graphql/data/queries/GetPoolById";

export async function getPoolListByRecipient(
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

export async function getPoolDetails(
  options?: TQueryOptions<PoolDetailsByIdQueryVariables, PoolDetailsByIdQuery>,
): Promise<ApolloQueryResult<PoolDetailsByIdQuery>> {
  return getClient().query({
    query: GET_POOL_DETAILS_BY_ID,
    context: { clientName: "thegraph", ...options?.context },
    ...options,
  });
}

export async function getViewer(
  options?: TQueryOptions<ViewerQueryVariables, ViewerQuery>,
): Promise<ApolloQueryResult<ViewerQuery>> {
  return getClient().query({
    query: GET_VIEWER,
    ...options,
  });
}

export async function getViewerWallets(
  options?: TQueryOptions<ViewerWalletsQueryVariables, ViewerWalletsQuery>,
): Promise<ApolloQueryResult<ViewerWalletsQuery>> {
  return getClient().query({
    query: GET_VIEWER_WALLETS,
    ...options,
  });
}

export async function getViewerPools(
  options?: TQueryOptions<ViewerPoolsQueryVariables, ViewerPoolsQuery>,
): Promise<ApolloQueryResult<ViewerPoolsQuery>> {
  return getClient().query({
    query: GET_VIEWER_POOLS,
    ...options,
  });
}

export async function getPoolById(
  options?: TQueryOptions<PoolByIdQueryVariables, PoolByIdQuery>,
): Promise<ApolloQueryResult<PoolByIdQuery>> {
  return getClient().query({
    query: GET_POOL_BY_ID,
    ...options,
  });
}
