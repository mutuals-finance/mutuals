import type { DeepPartial } from "#/partial";
export type ActiveShare = DeepPartial<Record<string, unknown>> & {
  isActive?: boolean;
};

export interface ShareTableProps {
  shares: ActiveShare[];
}
