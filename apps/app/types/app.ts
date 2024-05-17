import { NextPage } from 'next';

import { LayoutKeys } from '@/layouts';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  Layout?: LayoutKeys;
};
