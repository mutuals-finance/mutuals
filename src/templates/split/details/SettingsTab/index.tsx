import React from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';

import { useRouterTemplate } from '@/hooks/useRouterTemplate';

import SplitSettingsLayout from '@/layouts/split-settings';

import { MetadataTab } from './MetadataTab';

export const routes = [
  {
    label: 'Metadata',
    slug: 'metadata',
    icon: IoDocumentTextOutline,
    description: 'Modify the metadata of your split contract',
    component: MetadataTab,
  },
  /*
  {
    label: 'Recipients',
    slug: 'recipients',
    icon: IoPeopleOutline,
    description: 'Create and participate in Recipient quorums.',
    component: MetadataTab,
  },
  {
    label: 'Security',
    slug: 'security',
    icon: IoShieldOutline,
    description: 'Temporary or permanent pausing of withdrawals and deposits.',
    component: MetadataTab,
  },
  {
    label: 'Notifications',
    slug: 'notifications',
    icon: IoNotificationsOutline,
    description:
      'Modify your notifications for updates on withdrawals, deposits, and more.',
    component: MetadataTab,
  },
*/
];

export function SettingsTab() {
  const template = useRouterTemplate(
    routes,
    ({ asPath }) => asPath.split('/')[4]
  );

  return (
    <section>
      <div className={'container'}>
        <h2 className={'title-1'}>Settings</h2>
      </div>
      <SplitSettingsLayout>
        <template.component />
      </SplitSettingsLayout>
    </section>
  );
}
