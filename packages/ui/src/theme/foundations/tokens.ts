import { defineTokens } from "@chakra-ui/react";

export default defineTokens({
  fonts: {
    body: { value: "var(--font-geist)" },
    heading: { value: "var(--font-satoshi)" }, // font-satoshi
  },
  keyframes: {
    "slide-bg": {
      "0%": { backgroundPosition: "0% 50%" },
      "100%": { backgroundPosition: "200% 50%" },
    },
  },
});
