import { Icon } from '@chakra-ui/icon';
import { useColorModeValue } from '@chakra-ui/react';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import React from 'react';
import { IoGlobeOutline } from 'react-icons/io5';

import ContentCard from '@/components/ContentCard';

export function ChainInfo() {
  return (
    <ContentCard>
      <Icon
        as={IoGlobeOutline}
        fontSize={'2xl'}
        mb={'auto'}
        color={useColorModeValue('gray.500', 'gray.400')}
      />
      <Stat mt={'3'}>
        <StatLabel>Chain</StatLabel>
        <StatNumber fontSize={'lg'}>Ethereum</StatNumber>
      </Stat>
    </ContentCard>
  );
}
