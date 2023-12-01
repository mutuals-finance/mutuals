import { Stack, StackProps } from '@chakra-ui/react';
import React from 'react';

export function SidebarHeader({ children, ...props }: StackProps) {
  return (
    <Stack flexShrink={'0'} p={'6'} {...props}>
      {children}
    </Stack>
  );
}
