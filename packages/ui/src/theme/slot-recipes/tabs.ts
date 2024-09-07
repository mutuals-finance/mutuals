import { tabsAnatomy } from "@chakra-ui/react/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

/*
const baseStyle = definePartsStyle({
  tab: {
    fontWeight: "500",
  },
});

const variants = {
  line: definePartsStyle({
    tab: { borderBottom: "2px solid", marginBottom: "-1px" },
    tablist: {
      borderBottom: "1px solid",
    },
  }),
};
const sizes = {
  md: definePartsStyle({
    // define the parts that will change for each size
    tab: {
      py: "3",
      px: "4",
    },
    tabpanel: {
      py: "3",
      px: "4",
    },
  }),
};
*/

export default defineSlotRecipe({
  slots: tabsAnatomy.keys(),
});
