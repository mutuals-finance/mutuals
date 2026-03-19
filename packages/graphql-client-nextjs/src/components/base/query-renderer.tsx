import type { OperationVariables } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type { ReactNode } from "react";
import type {
  FragmentConfig,
  QueryDocument,
  QueryOptions,
  QueryResult,
  QueryResultWithoutData,
} from "../../types";

export interface QueryRendererProps<
  TData,
  TVariables extends OperationVariables,
  TFragment extends TypedDocumentNode<object, object> | undefined = undefined,
> {
  children: (
    data: TData,
    result: QueryResultWithoutData<TData, TVariables>
  ) => ReactNode;
  empty?: (result: QueryResult<TData, TVariables>) => ReactNode;
  error?: (
    error: NonNullable<QueryResult<TData, TVariables>["error"]>,
    result: QueryResult<TData, TVariables>
  ) => ReactNode;
  fragment?: TFragment extends TypedDocumentNode<object, object>
    ? FragmentConfig<TData, TFragment>
    : undefined;
  loading?: (result: QueryResult<TData, TVariables>) => ReactNode;
  options?: QueryOptions<TData, TVariables>;
  query: QueryDocument<TData, TVariables>;
}

export function QueryRenderer<
  TData,
  TVariables extends OperationVariables,
  TFragment extends TypedDocumentNode<object, object> | undefined = undefined,
>({
  query,
  options,
  children,
  loading: Loading,
  error: ErrorRenderer,
  empty: Empty,
}: QueryRendererProps<TData, TVariables, TFragment>) {
  // biome-ignore lint/suspicious/noExplicitAny: options may be undefined and we need a fallback
  const result = useQuery<TData, TVariables>(query, options ?? ({} as any));
  const { data, ...rest } = result;
  if (result.error && ErrorRenderer) {
    return <>{ErrorRenderer(result.error, result)}</>;
  }
  if (result.loading && Loading) {
    return <>{Loading(result)}</>;
  }
  if (!data && Empty) {
    return <>{Empty(result)}</>;
  }
  if (!data) {
    return null;
  }
  return <>{children(data as TData, rest)}</>;
}
