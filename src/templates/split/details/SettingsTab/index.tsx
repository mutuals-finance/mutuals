import React from 'react';

import { Metadata } from './Metadata';

export function SettingsTab() {
  return (
    <section>
      <div className={'container'}>
        <div className={'w-full max-w-4xl'}>
          <h2 className={'title-3 mb-6'}>Settings</h2>
          <div className={'flex flex-col space-y-3'}>
            <Metadata />
          </div>
        </div>
      </div>
    </section>
  );
}
