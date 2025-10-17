import { ClaimCreateNode } from "@mutuals/sdk-react";
import {
  createListCollection,
  createTreeCollection,
  SelectCollectionItemProps,
} from "@mutuals/ui";

export const createClaim = (
  props?: Partial<ClaimCreateNode>,
): ClaimCreateNode => ({
  id: `${Date.now()}`,
  value: 0,
  stateId: "offchain",
  strategyId: "default_allocation",
  children: [],
  data: "",
  ...props,
});

export const defaultClaims = createTreeCollection<ClaimCreateNode>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.recipientAddress ?? node.id,
  rootNode: createClaim({
    stateId: "",
    strategyId: "",
    children: [createClaim(), createClaim()],
  }),
});

export const createClaimCollection = (
  config: {
    [id: string]: { id: string; name: string };
  },
  configValue: string,
) =>
  createListCollection<SelectCollectionItemProps>({
    items: Object.values(config).map(({ id, name }) => ({
      value: id,
      children: name,
      configValue,
    })),
  });
