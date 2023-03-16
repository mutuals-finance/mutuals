import React from 'react';
import PageHeader from '@/components/PageHeader';
import { NextPageWithLayout } from '#/app';

function SettingsHeader() {
  return <PageHeader title={'Settings'} showBack={false} />;
}
const SettingsPage: NextPageWithLayout = function SettingsPage() {
  return (
    <>
      <SettingsHeader />
      <section>
        <div className={'container grid gap-4 lg:grid-cols-6 lg:gap-8'}>
          <div />
        </div>
      </section>
    </>
  );
};

export default SettingsPage;
