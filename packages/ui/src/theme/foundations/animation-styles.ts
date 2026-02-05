import { defineAnimationStyles } from "@chakra-ui/react";

export default defineAnimationStyles({
  "gradient-slide": {
    value: {
      animationName: "slide-bg",
      animationDuration: "6s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    },
  },
});
