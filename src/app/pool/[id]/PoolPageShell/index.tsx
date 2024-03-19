import React, { PropsWithChildren } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import SectionContainer from '@/components/Shell/SectionContainer';
import PoolBreadcrumbs from '@/app/pool/[id]/PoolPageShell/Breadcrumbs';

interface PoolPageShellProps {
  metaData: { name: string; description: string; image: string };
}
export default function PoolPageShell({
  metaData,
  children,
}: PropsWithChildren<PoolPageShellProps>) {
  return (
    <SectionContainer flex={'1'} w={'full'}>
      <PoolBreadcrumbs metaData={metaData} />
      <Box mt={'12'}>{children}</Box>
    </SectionContainer>
  );
}
