import { createListCollection } from "@mutuals/ui";
import PoolAddInfo from "@/features/PoolAdd/Info";
import PoolAddClaims from "@/features/PoolAdd/Claims";

const items = {
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

const collection = createListCollection({
  items: Object.entries(items).map(([key, value]) => ({
    ...value,
    value: key,
  })),
});

export const poolAddSteps = { items, collection };
