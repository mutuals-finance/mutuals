import { Box, type BoxProps } from "@mutuals/ui";

export default function KeenSliderSlide({
  className,
  children,
  ...props
}: BoxProps) {
  return (
    <Box className={`keen-slider__slide ${className}`} {...props}>
      {children}
    </Box>
  );
}
