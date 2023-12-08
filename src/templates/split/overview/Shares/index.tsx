import { AspectRatio, Flex, Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';
import { useList } from 'react-use';

import ContentCard from '@/components/ContentCard';

import { useSplit } from '@/context/SplitContext';
import ShareTable from '@/templates/split/overview/Shares/ShareTable';
import { ActiveShare } from '@/templates/split/overview/Shares/ShareTable/types';

const PieChart = dynamic(() => import('@/components/PieChart'), {
  ssr: false,
});

export function Shares() {
  const { split } = useSplit();
  const [payees, { updateAt }] = useList<ActiveShare>(
    split.shares.map((s) => ({
      ...s,
      isActive: false,
    })),
  );

  function setActive(index: number) {
    updateAt(index, { ...(payees[index] as ActiveShare), isActive: true });
  }

  function setInactive(index: number) {
    updateAt(index, { ...(payees[index] as ActiveShare), isActive: false });
  }

  return (
    <ContentCard
      title={'Shares'}
      flex='1'
      bodyProps={{ flex: '1', overflowY: 'auto', p: '0' }}
    >
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex p={'6'} flex={'1'} maxWidth={{ base: '12rem', md: '16rem' }}>
          <AspectRatio ratio={1} flex={'1'}>
            <PieChart
              data={payees}
              onMouseOut={(_, i) => setInactive(i)}
              onMouseMove={(_, i) => setActive(i)}
            />
          </AspectRatio>
        </Flex>
        <ShareTable shares={payees} containerProps={{ flex: '1' }} />

        {/*
        <ShareItem
            key={index}
            onMouseOut={() => setInactive(index)}
            onMouseMove={() => setActive(index)}
            share={share}
            isActive={share.isActive}
        />
*/}
      </Stack>
    </ContentCard>
  );
}
