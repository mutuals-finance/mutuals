import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Body({ children }: React.PropsWithChildren) {
  return <Box>{children}</Box>;
}
