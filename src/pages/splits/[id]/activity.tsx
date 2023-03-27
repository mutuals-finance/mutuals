import React from 'react';

import Seo from '@/components/Seo';

import { NextPageWithLayout } from '#/app';

const ActivityPage: NextPageWithLayout = function ActivityPage() {
  return (
    <>
      <Seo />
      <h2>Activity</h2>
    </>
  );
};

ActivityPage.Layout = 'SplitDetails';
export default ActivityPage;
