import { ClaimCreateInput } from "@mutuals/graphql-client-nextjs";
import { TreeCollection } from "@mutuals/ui";

export type ActionWithLabel = [string, () => void];

export type AllocationNode = ClaimCreateInput & {
  id: string;
};

export type AllocationAddData = TreeCollection<AllocationNode>;

// export type AllocationNode = Claim;
