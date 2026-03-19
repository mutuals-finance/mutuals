import type { ClaimCreateNode } from "@mutuals/sdk-react";
import {
  createListCollection,
  createTreeCollection,
  type SelectCollectionItemProps,
} from "@mutuals/ui";

export const createClaim = (
  props?: Partial<ClaimCreateNode>
): ClaimCreateNode => ({
  label: `${Date.now()}`,
  validationId: "merkle_tree_validation",
  distributionId: "direct_distribution",
  validationData: undefined,
  distributionData: undefined,
  children: [],
  ...props,
});

export const defaultClaims = createTreeCollection<ClaimCreateNode>({
  nodeToValue: (node) => node.label ?? "",
  nodeToString: (node) => node.label,
  rootNode: createClaim({
    validationId: "",
    distributionId: "",
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
  moduleType: "Distribution" | "Validation"
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
