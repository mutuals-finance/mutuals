'use client';

import {
  forwardRef,
  IconButton,
  IconButtonProps,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

type IconTextButtonProps = IconButtonProps;

const IconTextButton = forwardRef<IconTextButtonProps, 'button'>(function (
  { children, size = 'xl', w = '16', rounded = 'full', ...props },
  ref,
) {
  return (
    <Stack spacing='3' alignItems={'center'} textAlign={'center'}>
      <IconButton rounded={rounded} size={size} w={w} {...props} ref={ref} />

      <Text fontWeight={'500'}>{children || props['aria-label']}</Text>
    </Stack>
  );
});

IconTextButton.displayName = 'IconTextButton';
export default IconTextButton;
