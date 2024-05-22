import type { Share } from "@splitfi/sdk/thegraph";
export type ActiveShare = Share & { isActive?: boolean };

export type ShareTableProps = {
  shares: ActiveShare[];
};
