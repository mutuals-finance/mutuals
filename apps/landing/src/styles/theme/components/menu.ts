import { createMultiStyleConfigHelpers } from "@splitfi/ui";

const helpers = createMultiStyleConfigHelpers(["list"]);

export const Menu = helpers.defineMultiStyleConfig({
  baseStyle: {
    list: {
      bg: "bg.1",
      borderColor: "border.1",
    },
    item: {
      bg: "bg.1",
      _hover: { bg: "bg.2" },
    },
  },
});
