import { TMutationOptions, TQueryOptions } from "../types";
import {
  ViewerPoolListQuery,
  ViewerPoolListQueryVariables,
} from "../graphql/data/__generated__/graphql";
import { useQuery } from "@apollo/client/react";
import { VIEWER_POOL_LIST } from "../graphql/data/queries/ViewerPoolList";

export function useViewerPoolList(
  options?: TQueryOptions<ViewerPoolListQuery, ViewerPoolListQueryVariables>,
) {
  return useQuery(VIEWER_POOL_LIST, options);
}
