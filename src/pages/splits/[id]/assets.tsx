import React from 'react';

import Seo from '@/components/Seo';

import { NextPageWithLayout } from '#/app';

const AssetsPage: NextPageWithLayout = function AssetsPage() {
  return (
    <>
      <Seo />
      <h2>Assets</h2>
    </>
  );
};

AssetsPage.Layout = 'SplitDetails';
export default AssetsPage;
