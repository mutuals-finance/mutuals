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
  stateId: "offchain",
  strategyId: "default_allocation",
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
