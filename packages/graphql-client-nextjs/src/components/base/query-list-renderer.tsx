import { OperationVariables } from "@apollo/client";
import { ReactNode, PropsWithChildren } from "react";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { FragmentType } from "../../graphql/data/__generated__";
import { QueryRenderer, QueryRendererProps } from "./query-renderer";
import { ListContent } from "./list-content";
import { QueryResultWithoutData } from "../../types";

export type QueryListRendererProps<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables,
  TFragment extends TypedDocumentNode<any, any> = TypedDocumentNode<any, any>,
> = Omit<QueryRendererProps<TData, TVariables, TFragment>, "children"> & {
  children: (
    item: TFragment extends TypedDocumentNode<infer R, any> ? R : never,
    index: number,
    result: QueryResultWithoutData<TData, TVariables>,
  ) => ReactNode;
  wrapper?: (props: PropsWithChildren) => ReactNode;
  fallback?: (
    data: TData,
    result: QueryResultWithoutData<TData, TVariables>,
  ) => ReactNode;
};

export function QueryListRenderer<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables,
  TFragment extends TypedDocumentNode<any, any> = TypedDocumentNode<any, any>,
>({
  children,
  wrapper: WrapperComponent,
  fallback,
  ...props
}: QueryListRendererProps<TData, TVariables, TFragment>) {
  const content = (
    <QueryRenderer<TData, TVariables, TFragment> {...props}>
      {(items, result) => (
        <ListContent
          items={items}
          result={result}
          data={result as any}
          children={children}
          fallback={fallback}
        />
      )}
    </QueryRenderer>
  );

  return WrapperComponent ? (
    <WrapperComponent>{content}</WrapperComponent>
  ) : (
    content
  );
}
