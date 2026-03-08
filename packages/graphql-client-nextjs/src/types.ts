import { DocumentNode, FragmentType, OperationVariables } from "@apollo/client";
import { Exact } from "./graphql/data/__generated__/graphql";
import { useMutation } from "@apollo/client/react";
import { useQuery } from "@apollo/client/react";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export type TMutationOptions<
  TMutationDocument,
  TVariables extends { [key: string]: unknown },
> = useMutation.Options<TMutationDocument, Exact<TVariables>>;

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
> = Omit<Parameters<typeof useQuery<TData, TVariables>>[1], "query">;

export type QueryDocument<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables,
> = DocumentNode | TypedDocumentNode<TData, TVariables>;

export type FragmentConfig<
  TData,
  TFragment extends TypedDocumentNode<any, any>,
> = {
  doc: TFragment;
  select: (data: TData) => FragmentType<TFragment> | null | undefined;
};
