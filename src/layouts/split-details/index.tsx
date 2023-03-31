import { InferGetServerSidePropsType } from 'next';
import React from 'react';

import { ipfsResolveData } from '@/lib/utils';

import Header from '@/layouts/split-details/Header';
import { getServerSideProps } from '@/pages/splits/[id]/[slug]';

export default function SplitDetailsLayout({
  children,
  split,
}: React.PropsWithChildren<
  InferGetServerSidePropsType<typeof getServerSideProps>
>) {
  return (
    <>
      <Header
        id={split.id}
        {...split.metaData}
        image={ipfsResolveData(split.metaData.image)}
      />
      {children}
    </>
  );
}
