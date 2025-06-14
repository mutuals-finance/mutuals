import { Box, type BoxProps } from "@mutuals/ui";
import { forwardRef } from "react";

const KeenSliderSlide = forwardRef<"div", BoxProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Box ref={ref} className={`keen-slider__slide ${className}`} {...props}>
        {children}
      </Box>
    );
  },
);

KeenSliderSlide.displayName = "KeenSliderSlide";
export default KeenSliderSlide;
