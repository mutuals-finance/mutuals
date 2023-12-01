import { InferGetServerSidePropsType } from 'next';
import React from 'react';

import { SplitProvider } from '@/context/SplitContext';
import { getServerSideProps } from '@/pages/splits/[id]/[[...slug]]';

export const Layouts = {
  SplitDetails: ({
    children,
    split,
  }: React.PropsWithChildren<
    InferGetServerSidePropsType<typeof getServerSideProps>
  >) => <SplitProvider split={split}>{children}</SplitProvider>,
  Default: ({ children }: React.PropsWithChildren) => <>{children}</>,
};

export type LayoutKeys = keyof typeof Layouts;
