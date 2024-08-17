import type { Share } from "@mutuals/graphql-client-nextjs/thegraph";
import { DeepPartial } from "#/partial";
export type ActiveShare = DeepPartial<Share> & { isActive?: boolean };

export type ShareTableProps = {
  shares: ActiveShare[];
};
