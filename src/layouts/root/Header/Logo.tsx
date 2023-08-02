import { Image, Link, type LinkProps } from '@chakra-ui/next-js';
import { Heading, HStack } from '@chakra-ui/react';
import React from 'react';

import logoIcon from '@/assets/images/splitFi-logo.png';

export default function Logo({
  _hover,
  href = '/',
  ...props
}: Partial<LinkProps>) {
  return (
    <Link href={href} _hover={{ textDecoration: 'none', ..._hover }} {...props}>
      <HStack spacing={'2'}>
        <Image src={logoIcon} alt='SplitFi' boxSize={9} />
        <Heading as={'h4'} size={'md'} fontWeight={'500'}>
          SplitFi
        </Heading>
      </HStack>
    </Link>
  );
}
