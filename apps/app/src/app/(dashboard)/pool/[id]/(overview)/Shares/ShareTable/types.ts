import type { Share } from "@splitfi/sdk";
export type ActiveShare = Share & { isActive?: boolean };

export type ShareTableProps = {
  shares: ActiveShare[];
};
