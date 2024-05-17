import type { BoxProps } from "@splitfi/ui";
import { Box } from "@splitfi/ui";

export default function KeenSliderSlide({
  className = "",
  children,
  ...props
}: BoxProps) {
  return (
    <Box className={`keen-slider__slide ${className}`} {...props}>
      {children}
    </Box>
  );
}
