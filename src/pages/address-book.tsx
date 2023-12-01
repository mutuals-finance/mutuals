import React from 'react';

import Seo from '@/components/Seo';

import AddressBook from '@/templates/address-book';

import { NextPageWithLayout } from '#/app';

const SettingsPage: NextPageWithLayout = function SettingsPage() {
  return (
    <>
      <Seo />
      <AddressBook />
    </>
  );
};

export default SettingsPage;
