import { ApolloClient, OperationVariables } from "@apollo/client";
import { Exact } from "./graphql/data/__generated__/graphql";
import { useMutation } from "@apollo/client/react";

export type TMutationOptions<
  TMutationDocument,
  TVariables extends { [key: string]: unknown },
> = useMutation.Options<TMutationDocument, Exact<TVariables>>;

export type TQueryOptions<
  TQueryType,
  TVariableType extends OperationVariables,
> = Omit<ApolloClient.QueryOptions<TQueryType, TVariableType>, "query">;
