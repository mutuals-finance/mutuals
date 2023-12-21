import type { BoxProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

export default function KeenSliderSlide({
  className = '',
  children,
  ...props
}: BoxProps) {
  return (
    <Box className={`keen-slider__slide ${className}`} {...props}>
      {children}
    </Box>
  );
}
