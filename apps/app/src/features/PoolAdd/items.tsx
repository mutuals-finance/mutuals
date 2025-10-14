import { createListCollection, createTreeCollection } from "@mutuals/ui";
import { stateIds, strategyIds, ClaimCreateNode } from "@mutuals/sdk-react";
import PoolAddInfo from "@/features/PoolAdd/Info";
import PoolAddClaims from "@/features/PoolAdd/Claims";

export const initialClaims = createTreeCollection<ClaimCreateNode>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.recipientAddress ?? node.id,
  rootNode: {
    id: "ROOT",
    value: 0,
    stateId: "",
    strategyId: "",
    data: "",
    children: [
      {
        id: "1",
        value: 0,
        stateId: stateIds.Offchain,
        strategyId: strategyIds.DefaultAllocation,
        data: "",
      },
      {
        id: "2",
        value: 0,
        stateId: stateIds.Offchain,
        strategyId: strategyIds.DefaultAllocation,
        data: "",
      },
    ],
  },
});

export const stepItems = {
  0: {
    label: "Step 1",
    description: "Enter pool information",
    children: <PoolAddInfo />,
  },
  1: {
    label: "Step 2",
    description: "Configure pool allocations",
    children: <PoolAddClaims />,
  },
};

export const stepCollection = createListCollection({
  items: Object.entries(stepItems).map(([key, value]) => ({
    ...value,
    value: key,
  })),
});
