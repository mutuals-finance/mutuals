import { Image, Link, type LinkProps } from '@chakra-ui/next-js';
import { Heading, HStack } from '@chakra-ui/react';
import React from 'react';

import SplitFiLogo from '@/components/SplitFiLogo';

import logoIcon from '@/assets/svg/splitfi-icon-text.svg';

export default function Logo({
  _hover,
  href = '/',
  ...props
}: Partial<LinkProps>) {
  return (
    <Link
      href={href}
      _hover={{ textDecoration: 'none', ..._hover }}
      display={'block'}
      {...props}
    >
      <SplitFiLogo />
    </Link>
  );
}
