import {
  IconButton,
  IconButtonProps,
  Stack,
  StackProps,
  Text,
} from '@chakra-ui/react';
import React from 'react';

type IconTextButtonProps = IconButtonProps & {
  spacing?: StackProps['spacing'];
};

export default function IconTextButton({
  children,
  spacing = '3',
  size = 'xl',
  w = '16',
  rounded = 'full',
  ...props
}: IconTextButtonProps) {
  return (
    <Stack spacing={spacing} alignItems={'center'} textAlign={'center'}>
      <IconButton rounded={rounded} size={size} w={w} {...props} />

      <Text fontWeight={'500'}>{props['aria-label'] || children}</Text>
    </Stack>
  );
}
