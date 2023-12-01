import React from 'react';

import Seo from '@/components/Seo';

import Settings from '@/templates/settings';

import { NextPageWithLayout } from '#/app';

const SettingsPage: NextPageWithLayout = function SettingsPage() {
  return (
    <>
      <Seo />
      <Settings />
    </>
  );
};

export default SettingsPage;
