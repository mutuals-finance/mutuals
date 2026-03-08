import { defineAnimationStyles } from "@chakra-ui/react";

export default defineAnimationStyles({
  gradientSlide: {
    value: {
      animationName: "slideBg",
      animationDuration: "10s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    },
  },
});
