import { InferGetServerSidePropsType } from 'next';
import React from 'react';

import { SplitProvider } from '@/context/SplitContext';
import { getServerSideProps } from '@/pages/splits/[id]/[...slug]';

export default function SplitDetailsLayout({
  children,
  split,
}: React.PropsWithChildren<
  InferGetServerSidePropsType<typeof getServerSideProps>
>) {
  return <SplitProvider split={split}>{children}</SplitProvider>;
}

const ds = ({
  children,
  split,
}: React.PropsWithChildren<
  InferGetServerSidePropsType<typeof getServerSideProps>
>) => <SplitProvider split={split}>{children}</SplitProvider>;
