import { Image, Link } from '@chakra-ui/next-js';
import { Heading, HStack } from '@chakra-ui/react';
import React from 'react';

import logoIcon from '@/assets/images/splitFi-logo.png';

export default function Logo() {
  return (
    <Link href='/' _hover={{ textDecoration: 'none' }}>
      <HStack spacing={'2'}>
        <Image src={logoIcon} alt='SplitFi' boxSize={12} />
        <Heading as={'h4'} size={'md'} fontWeight={'500'}>
          SplitFi
        </Heading>
      </HStack>
    </Link>
  );
}
