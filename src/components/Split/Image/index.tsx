import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import NextImage, { type ImageProps } from 'next/image';
import React from 'react';
import { IoImage } from 'react-icons/io5';

import { ipfsResolveData } from '@/lib/utils';

export function SplitImage({
  src = '',
  alt = 'Unknown Split',
  boxSize = '3rem',
  p = '1',
  fill = true,
  objectFit = 'cover',
  borderRadius = 12,
  bg,
  ...props
}: ImageProps & Omit<BoxProps, 'fill'>) {
  return (
    <Box
      position={'relative'}
      borderRadius={borderRadius}
      boxSize={boxSize}
      borderWidth={'1px'}
      bg={useColorModeValue(bg || 'whiteAlpha.600', bg || 'blackAlpha.600')}
    >
      {!src || src === '' ? (
        <IoImage />
      ) : (
        <Box p={p} borderRadius={borderRadius} {...props}>
          <NextImage
            src={ipfsResolveData(src)}
            alt={alt || 'Unknown Split'}
            fill={fill}
            objectFit={objectFit}
          />
        </Box>
      )}
    </Box>
  );
}
