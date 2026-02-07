import { OperationVariables } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { ReactNode } from "react";
import { ResultOf, TypedDocumentNode } from "@graphql-typed-document-node/core";
import { getFragmentData } from "../../graphql/data/__generated__";
import {
  FragmentConfig,
  QueryDocument,
  QueryOptions,
  QueryResult,
  QueryResultWithoutData,
} from "../../types";

export type QueryRendererProps<
  TData,
  TVariables extends OperationVariables,
  TFragment extends TypedDocumentNode<any, any> | undefined = undefined,
> = {
  query: QueryDocument<TData, TVariables>;
  options?: QueryOptions<TData, TVariables>;
  fragment?: TFragment extends TypedDocumentNode<any, any>
    ? FragmentConfig<TData, TFragment>
    : undefined;
  children: (
    data: TFragment extends TypedDocumentNode<any, any>
      ? ResultOf<TFragment>
      : TData,
    result: QueryResultWithoutData<TData, TVariables>,
  ) => ReactNode;
  loading?: (result: QueryResult<TData, TVariables>) => ReactNode;
  error?: (
    error: NonNullable<QueryResult<TData, TVariables>["error"]>,
    result: QueryResult<TData, TVariables>,
  ) => ReactNode;
  empty?: (result: QueryResult<TData, TVariables>) => ReactNode;
};

export function QueryRenderer<
  TData,
  TVariables extends OperationVariables,
  TFragment extends TypedDocumentNode<any, any> | undefined = undefined,
>({
  query,
  options,
  fragment,
  children,
  loading: Loading,
  error: Error,
  empty: Empty,
}: QueryRendererProps<TData, TVariables, TFragment>) {
  const result = useQuery<TData, TVariables>(query, options ?? ({} as any));
  const { data, ...rest } = result;
  if (result.error && Error) return <>{Error(result.error, result)}</>;
  if (result.loading && Loading) return <>{Loading(result)}</>;
  if (!data && Empty) return <>{Empty(result)}</>;
  if (!data) return null;
  const processed = fragment
    ? getFragmentData(fragment.doc, fragment.select(data as any))
    : data;
  return <>{children(processed, rest)}</>;
}
