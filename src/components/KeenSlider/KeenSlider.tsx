'use client';

import type { BoxProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import type { KeenSliderOptions, KeenSliderPlugin } from 'keen-slider/react';
import { useKeenSlider } from 'keen-slider/react';

interface KeenSliderProps extends BoxProps {
  options?: KeenSliderOptions;
  plugins?: KeenSliderPlugin[];
}

export default function KeenSlider({
  className,
  children,
  _active,
  options,
  plugins,
  ...props
}: KeenSliderProps) {
  const [sliderRef] = useKeenSlider(options, plugins);

  return (
    <Box
      ref={sliderRef}
      className={`keen-slider ${className}`}
      cursor='grab'
      _active={{ cursor: 'grabbing', ..._active }}
      {...props}
    >
      {children}
    </Box>
  );
}
