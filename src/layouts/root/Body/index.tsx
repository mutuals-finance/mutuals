import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Body({ children }: React.PropsWithChildren) {
  return (
    <Box
      as='main'
      w={'full'}
      /*
      position='relative'
      w='full'
      _before={{
        content: `""`,
        display: 'block',
        position: 'absolute',
        top: '-48',
        left: '0',
        w: 'full',
        h: 'sm',
        bgGradient: 'linear(to-b, primary.500, transparent)',
        opacity: '0.2',
      }}
*/
    >
      {children}
    </Box>
  );
}
