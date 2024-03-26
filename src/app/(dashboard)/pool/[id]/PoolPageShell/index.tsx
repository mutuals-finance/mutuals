import React, { PropsWithChildren } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import SectionContainer, {
  SectionContainerProps,
} from '@/components/Shell/SectionContainer';
import PoolBreadcrumbs from '@/app/(dashboard)/pool/[id]/PoolPageShell/Breadcrumbs';

interface PoolPageShellProps {
  metaData: { name: string; description: string; image: string };
  sectionContainerProps?: SectionContainerProps;
}
export default function PoolPageShell({
  metaData,
  sectionContainerProps,
  children,
}: PropsWithChildren<PoolPageShellProps>) {
  return (
    <SectionContainer flex={'1'} {...sectionContainerProps}>
      <PoolBreadcrumbs metaData={metaData} />
      <Box mt={'12'}>{children}</Box>
    </SectionContainer>
  );
}
