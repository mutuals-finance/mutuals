import React from 'react';

import ActivityTable from '@/components/ActivityTable';
import { ActivityTableProps } from '@/components/ActivityTable/types';
import Box from '@/components/Box';
import { ButtonOutline } from '@/components/Button';

type ActivityProps = ActivityTableProps;

export function Activity({ transfers, address }: ActivityProps) {
  return (
    <Box
      title={'Activity'}
      titleAfter={<ButtonOutline size={'sm'}>Full Activity</ButtonOutline>}
      className={'lg:col-span-3'}
      innerClassName={'p-0 lg:p-0 overflow-y-auto max-h-72'}
    >
      <ActivityTable transfers={transfers} address={address} />
    </Box>
  );
}
