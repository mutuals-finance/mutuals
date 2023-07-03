import { Icon } from '@chakra-ui/icon';
import { useColorModeValue } from '@chakra-ui/react';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import React from 'react';
import { IoHammerOutline } from 'react-icons/io5';

import { shortenAddress } from '@/lib/utils';

import ContentCard from '@/components/ContentCard';

import { useSplit } from '@/context/SplitContext';

export function Creator() {
  const { split } = useSplit();

  return (
    <ContentCard>
      <Icon
        as={IoHammerOutline}
        fontSize={'2xl'}
        mb={'auto'}
        color={useColorModeValue('gray.500', 'gray.400')}
      />
      <Stat mt={'3'}>
        <StatLabel>Creator</StatLabel>
        <StatNumber fontSize={'lg'}>{shortenAddress(split.address)}</StatNumber>
      </Stat>
    </ContentCard>
  );
}
