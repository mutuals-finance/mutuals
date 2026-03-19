import type { OperationVariables } from "@apollo/client";
import type { ReactNode } from "react";
import type { QueryResultWithoutData } from "../../types";

export interface ListContentProps<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables,
  TItem = unknown,
> {
  children: (
    item: TItem,
    index: number,
    result: QueryResultWithoutData<TData, TVariables>
  ) => ReactNode;
  data: NonNullable<TData>;
  fallback?: (
    data: NonNullable<TData>,
    result: QueryResultWithoutData<TData, TVariables>
  ) => ReactNode;
  items?: TItem[];
  result: QueryResultWithoutData<TData, TVariables>;
}

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
