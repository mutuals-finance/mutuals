import { Box, Spinner } from '@chakra-ui/react';
import React, { Suspense } from 'react';

export default function Body({ children }: React.PropsWithChildren) {
  return (
    <Box as='main' w={'full'}>
      {children}
    </Box>
  );
}
