import { Box } from '@chakra-ui/react';
import { InferGetServerSidePropsType } from 'next';
import React from 'react';

import { SplitProvider } from '@/context/SplitContext';
import Header from '@/layouts/split-details/Header';
import { getServerSideProps } from '@/pages/splits/[id]/[...slug]';

export default function SplitDetailsLayout({
  children,
  split,
}: React.PropsWithChildren<
  InferGetServerSidePropsType<typeof getServerSideProps>
>) {
  return (
    <SplitProvider split={split}>
      <Header />
      <Box pt={'6'}>{children}</Box>
    </SplitProvider>
  );
}
