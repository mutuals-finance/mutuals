import { Image, ImageProps } from '@chakra-ui/next-js';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { ipfsResolveData } from '@/lib/utils';

type SplitBlurBgProps = {
  src?: ImageProps['src'] | null;
  alt?: ImageProps['alt'] | null;
};

export default function SplitBlurBg({ src = '', alt = '' }: SplitBlurBgProps) {
  return (
    <Flex
      position={'absolute'}
      inset={'-3'}
      zIndex={'-10'}
      alignItems={'stretch'}
      justifyContent={'stretch'}
      sx={{
        filter: 'blur(12px)',
      }}
    >
      {!!src && (
        <Image
          fill
          objectFit={'cover'}
          src={ipfsResolveData(src) || src}
          alt={alt || 'Split Background'}
          className={'w-full flex-1 object-cover'}
        />
      )}
      <Box
        position={'absolute'}
        inset={'0'}
        bgGradient={useColorModeValue(
          'linear(to-t, white, whiteAlpha.800)',
          'linear(to-t, black, blackAlpha.800)'
        )}
      />
    </Flex>
  );
}
