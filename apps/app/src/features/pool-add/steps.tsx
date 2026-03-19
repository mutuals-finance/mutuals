import { createListCollection } from "@mutuals/ui";
import PoolAddClaims from "@/features/pool-add/claims";
import PoolAddInfo from "@/features/pool-add/info";

const items = {
  0: {
    label: "Step 1",
    description:
      "Enter pool information that will be displayed to users when they view the pool",
    children: <PoolAddInfo />,
  },
  1: {
    label: "Step 2",
    description:
      "Configure modules and allocations for users to claim from the pool",
    children: <PoolAddClaims />,
  },
};

const collection = createListCollection({
  items: Object.entries(items).map(([key, value]) => ({
    ...value,
    value: key,
  })),
});

export const poolAddSteps = { items, collection };
