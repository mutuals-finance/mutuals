import { InferGetServerSidePropsType } from 'next';
import React from 'react';

import { ipfsResolveData } from '@/lib/utils';

import { SplitProvider } from '@/context/SplitProvider';
import SplitDetailsLayoutHeader from '@/layouts/split-details/Header';
import { getServerSideProps } from '@/pages/splits/[id]';

export default function SplitDetailsLayout({
  children,
  data,
}: React.PropsWithChildren<
  InferGetServerSidePropsType<typeof getServerSideProps>
>) {
  const split = data.split;

  return (
    <>
      <SplitDetailsLayoutHeader
        {...split.metaData}
        image={ipfsResolveData(split.metaData.image)}
        address={split.id}
      />

      <div>{children}</div>
    </>
  );
}
