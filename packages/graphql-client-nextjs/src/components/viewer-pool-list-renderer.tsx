import type {
  UserPoolListWithOwnerAndContractFragmentDoc,
  ViewerPoolListQuery,
} from "../graphql/data/__generated__/graphql";
import type { QueryRendererProps } from "./base";

export type ViewerPoolListRendererProps = Omit<
  QueryRendererProps<
    ViewerPoolListQuery,
    Record<string, never>,
    typeof UserPoolListWithOwnerAndContractFragmentDoc
  >,
  "query" | "fragment"
>;

export function ViewerPoolListRenderer(_props: ViewerPoolListRendererProps) {
  return null;
  /*
    <QueryRenderer
      query={VIEWER_POOL_LIST}
      fragment={{
        doc: UserPoolListWithOwnerAndContractFragmentDoc,
        select: (data) =>
          data.viewer?.__typename === "User" ? data.viewer : null,
      }}
      {...props}
    />
  */
}
