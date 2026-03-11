import { ClaimCreateNode } from "@mutuals/sdk-react";
import {
  createListCollection,
  createTreeCollection,
  SelectCollectionItemProps,
} from "@mutuals/ui";

export const createClaim = (
  props?: Partial<ClaimCreateNode>,
): ClaimCreateNode => ({
  label: `${Date.now()}`,
  recipientAddress: "",
  stateId: "merkle_tree_validation",
  strategyId: "direct_distribution",
  children: [],
  data: "",
  ...props,
});

export const defaultClaims = createTreeCollection<ClaimCreateNode>({
  nodeToValue: (node) => node.label ?? "",
  nodeToString: (node) => node.recipientAddress ?? node.label,
  rootNode: createClaim({
    stateId: "",
    strategyId: "",
    children: [
      createClaim({ label: `0-${Date.now()}` }),
      createClaim({ label: `1-${Date.now()}` }),
    ],
  }),
});

export const createClaimCollection = (
  config: {
    [id: string]: { id: string; name: string };
  },
  moduleType: "Distribution" | "Validation",
) =>
  createListCollection<SelectCollectionItemProps>({
    items: Object.values(config).map(({ id, name }) => ({
      value: id,
      children: name,
      group:
        moduleType === "Distribution"
          ? "Distribution Module"
          : "Validation Module",
    })),
  });
