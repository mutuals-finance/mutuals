import type {
  DocumentNode,
  FragmentType,
  OperationVariables,
} from "@apollo/client";
import type { useMutation, useQuery } from "@apollo/client/react";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";

export type TMutationOptions<
  TMutationDocument = unknown,
  TVariables extends OperationVariables = OperationVariables,
> = useMutation.Options<TMutationDocument, TVariables>;

export type TQueryOptions<
  TQueryType,
  TVariableType extends OperationVariables,
> = Omit<useQuery.Options<TQueryType, TVariableType>, "query">;

export type QueryResultWithoutData<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables,
> = Omit<useQuery.Result<TData, TVariables>, "data">;

export type QueryResult<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables,
> = useQuery.Result<TData, TVariables>;

export type QueryOptions<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables,
> = Omit<useQuery.Options<TData, TVariables>, "query">;

export type QueryDocument<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables,
> = DocumentNode | TypedDocumentNode<TData, TVariables>;

export interface FragmentConfig<
  TData,
  TFragment extends TypedDocumentNode<object, object>,
> {
  doc: TFragment;
  select: (data: TData) => FragmentType<TFragment> | null | undefined;
}
