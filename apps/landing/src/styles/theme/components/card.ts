import { createMultiStyleConfigHelpers } from "@splitfi/ui";

const helpers = createMultiStyleConfigHelpers([
  "container",
  "header",
  "body",
  "footer",
]);

export const Card = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      rounded: "md",
    },
  },
  variants: {
    filled: () => ({
      container: {
        bg: "bg.2",
      },
    }),
    outline: () => ({
      container: {
        bg: "bg.1",
        borderColor: "border.1",
      },
    }),
  },
});
