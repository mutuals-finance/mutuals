import React from 'react';

import AssetTable from '@/components/AssetTable';
import { AssetTableProps } from '@/components/AssetTable/types';
import Box from '@/components/Box';

type AssetsProps = AssetTableProps;

export function Assets({ assets }: AssetsProps) {
  return (
    <Box
      title={'Assets'}
      className={'lg:col-span-3'}
      innerClassName={'p-0 lg:p-0 overflow-y-auto max-h-72'}
    >
      <AssetTable assets={assets} />
    </Box>
  );
}
