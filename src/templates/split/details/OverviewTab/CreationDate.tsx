import { Icon } from '@chakra-ui/icon';
import { useColorModeValue } from '@chakra-ui/react';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import React from 'react';
import { IoCalendarOutline } from 'react-icons/io5';

import ContentCard from '@/components/ContentCard';
import Date from '@/components/Date';

import { useSplit } from '@/context/SplitContext';

export function CreationDate() {
  const { split } = useSplit();

  return (
    <ContentCard>
      <Icon
        as={IoCalendarOutline}
        fontSize={'2xl'}
        mb={'auto'}
        color={useColorModeValue('gray.500', 'gray.400')}
      />

      <Stat mt={'3'}>
        <StatLabel>Created At</StatLabel>
        <StatNumber fontSize={'lg'}>
          <Date timestamp={split.timestamp} />
        </StatNumber>
      </Stat>
    </ContentCard>
  );
}
