import { Image, type ImageProps } from '@chakra-ui/next-js';
import { Box, useColorModeValue } from '@chakra-ui/react';
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
}: ImageProps) {
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
        <Image
          p={p}
          src={ipfsResolveData(src)}
          alt={alt || 'Unknown Split'}
          fill={fill}
          borderRadius={borderRadius}
          objectFit={objectFit}
          {...props}
        />
      )}
    </Box>
  );
}
