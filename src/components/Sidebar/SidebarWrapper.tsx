import { BoxProps, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';

import AnimationBox from '@/components/Animation/Box';

interface SidebarWrapperProps extends BoxProps {
  isOpen?: boolean;
}

export function SidebarWrapper({
  isOpen,
  children,
  ...props
}: SidebarWrapperProps) {
  return (
    <AnimationBox
      flexShrink={'0'}
      position={'sticky'}
      top={'0'}
      left={'0'}
      h={'100vh'}
      display={'flex'}
      borderRight={'1px'}
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      animate={isOpen ? 'open' : 'closed'}
      variants={{
        open: {
          width: '16rem',
        },
        closed: {
          width: '5.6rem',
        },
      }}
      {...props}
    >
      <VStack flex={'1'} alignItems={'stretch'} overflow={'hidden'}>
        {children}
      </VStack>
    </AnimationBox>
  );
}
