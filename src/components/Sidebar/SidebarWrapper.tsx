import {BoxProps, SlideDirection, useColorModeValue, VStack} from '@chakra-ui/react';
import React from 'react';

import AnimationBox from '@/components/Animation/Box';

export interface SidebarWrapperProps extends BoxProps {
  isOpen?: boolean;
  placement?: SlideDirection;
}

export function SidebarWrapper({
  isOpen = true,
                                 children,
                                 width,
                                 w,placement ="left",
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
      borderRight={placement === "left" && '1px'}
      borderLeft={placement === "right" && '1px'}
      borderTop={placement === "bottom" && '1px'}
      borderBottom={placement === "top" && '1px'}
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      animate={isOpen ? 'open' : 'closed'}
      variants={{
        open: {
          width: width || w,
        },
        closed: {
          width: 0,
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
