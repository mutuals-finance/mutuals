import { DeepPartial } from "#/partial";
export type ActiveShare = DeepPartial<any> & { isActive?: boolean };

export type ShareTableProps = {
  shares: ActiveShare[];
};
