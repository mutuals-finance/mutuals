import { UserPoolListWithOwnerAndContractFragmentDoc } from "../graphql/data/__generated__/graphql";
import { VIEWER_POOL_LIST } from "../graphql/data/queries/ViewerPoolList";
import { QueryRenderer, QueryRendererProps } from "./base";
import { type ViewerPoolListQuery } from "../graphql/data/__generated__/graphql";

export type ViewerPoolListRendererProps = Omit<
  QueryRendererProps<
    ViewerPoolListQuery,
    {},
    typeof UserPoolListWithOwnerAndContractFragmentDoc
  >,
  "query" | "fragment"
>;

export function ViewerPoolListRenderer(props: ViewerPoolListRendererProps) {
  return (
    <QueryRenderer
      query={VIEWER_POOL_LIST}
      fragment={{
        doc: UserPoolListWithOwnerAndContractFragmentDoc,
        select: (data) =>
          data.viewer?.__typename === "User" ? data.viewer : null,
      }}
      {...props}
    />
  );
}
