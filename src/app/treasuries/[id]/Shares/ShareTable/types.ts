import { ShareFragmentFragment } from '@/lib/graphql/__generated__/graphql';
export type ActiveShare = ShareFragmentFragment & { isActive?: boolean };

export type ShareTableProps = {
  shares: ActiveShare[];
};
