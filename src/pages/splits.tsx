import React from 'react';

import Seo from '@/components/Seo';

import {
  SplitListBanner,
  SplitListList,
  SplitListWrapper,
} from '@/templates/split/list';

import { NextPageWithLayout } from '#/app';

const SplitsPage: NextPageWithLayout = function () {
  return (
    <>
      <Seo />
      <SplitListWrapper />
    </>
  );
};

export default SplitsPage;
