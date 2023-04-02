import React from 'react';

import ActivityTable from '@/components/ActivityTable';
import { ActivityTableProps } from '@/components/ActivityTable/types';
import Box from '@/components/Box';

type ActivityProps = ActivityTableProps;

export function Activity({ transfers, address }: ActivityProps) {
  return (
    <Box
      title={'Activity'}
      className={'lg:col-span-6'}
      innerClassName={'p-0 lg:p-0 overflow-y-auto max-h-72'}
    >
      <ActivityTable transfers={transfers} address={address} />
    </Box>
  );
}
