import { ShareFragmentFragment } from "@/lib/graphql/thegraph/__generated__/graphql";
export type ActiveShare = ShareFragmentFragment & { isActive?: boolean };

export type ShareTableProps = {
  shares: ActiveShare[];
};
