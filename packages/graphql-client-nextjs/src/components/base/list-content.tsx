import { OperationVariables } from "@apollo/client";
import { ReactNode, Fragment } from "react";
import { QueryResultWithoutData } from "../../types";

export type ListContentProps<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables,
  TItem = unknown,
> = {
  items?: TItem[];
  data: NonNullable<TData>;
  result: QueryResultWithoutData<TData, TVariables>;
  children: (
    item: TItem,
    index: number,
    result: QueryResultWithoutData<TData, TVariables>,
  ) => ReactNode;
  fallback?: (
    data: NonNullable<TData>,
    result: QueryResultWithoutData<TData, TVariables>,
  ) => ReactNode;
};

export function ListContent<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables,
  TItem = unknown,
>({
  items,
  data,
  result,
  children,
  fallback: FallbackComponent,
}: ListContentProps<TData, TVariables, TItem>) {
  if (items?.length === 0) {
    if (FallbackComponent) {
      return <>{FallbackComponent(data, result)}</>;
    }
    return null;
  }

  return <>{items?.map((item, index) => children(item, index, result))}</>;
}
