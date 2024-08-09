import { MutationHookOptions, QueryOptions } from "@apollo/client";
import { Exact } from "./graphql/data/__generated__/graphql";

export type TMutationOptions<
  TMutationDocument,
  TVariables extends { [key: string]: unknown },
> = MutationHookOptions<TMutationDocument, Exact<TVariables>>;

export type TQueryOptions<TVariableType, TQueryType> = Omit<
  QueryOptions<TVariableType, TQueryType>,
  "query"
>;
