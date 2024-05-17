import { Stack, StackProps, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export function SidebarFooter({ children, ...props }: StackProps) {
  return (
    <Stack
      flexShrink={'0'}
      p={'6'}
      borderTop={'1px'}
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      {...props}
    >
      {children}
    </Stack>
  );
}
