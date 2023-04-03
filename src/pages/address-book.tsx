import React from 'react';

import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';

import AddressBookPlaceholder from '@/templates/address-book/AddressBookPlaceholder';

import { NextPageWithLayout } from '#/app';

function AddressBookHeader() {
  return <PageHeader title={'Address-book'} showBack={false} />;
}
const SettingsPage: NextPageWithLayout = function SettingsPage() {
  return (
    <>
      <Seo />
      <AddressBookHeader />
      <AddressBookPlaceholder />
    </>
  );
};

export default SettingsPage;
