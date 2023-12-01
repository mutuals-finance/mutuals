import { StackProps, VStack } from '@chakra-ui/react';
import React from 'react';

export function SidebarContent({ children, ...props }: StackProps) {
  return (
    <VStack
      flex={'1'}
      p={'6'}
      spacing={3}
      overflowY={'auto'}
      overflowX={'hidden'}
      justifyContent={'space-between'}
      {...props}
    >
      {children}
    </VStack>
  );
}
