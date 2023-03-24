import React from 'react';

import ActivityTable from '@/components/ActivityTable';
import { ActivityTableProps } from '@/components/ActivityTable/types';
import Box from '@/components/Box';

type ActivityProps = ActivityTableProps;

export function Activity(props: ActivityProps) {
  return (
    <Box className={'lg:col-span-3'} title={'Activity'}>
      <div
        className={
          'relative -my-3 -ml-3 flex w-[calc(100%_+_1.5rem)] flex-1 overflow-y-auto lg:-my-6 lg:-ml-6 lg:w-[calc(100%_+_3rem)]'
        }
      >
        <div className={'absolute top-0 left-0 h-full w-full'}>
          <ActivityTable {...props} />
        </div>
      </div>
    </Box>
  );
}
