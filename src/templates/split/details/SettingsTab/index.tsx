import Link from 'next/link';
import React from 'react';
import {
  IoDocumentTextOutline,
  IoNotificationsOutline,
  IoPeopleOutline,
  IoShieldOutline,
} from 'react-icons/io5';

import { useRouterTemplate } from '@/hooks/useRouterTemplate';

import { ButtonOutline } from '@/components/Button';
import SidebarLayout from '@/components/SidebarLayout';

import { MetadataTab } from './MetadataTab';

import { SplitSettingsSection, SplitSettingsTemplateTab } from '#/split';

const routes = [
  {
    label: 'Metadata',
    slug: 'metadata',
    icon: IoDocumentTextOutline,
    description: 'Modify the metadata of your split contract',
    component: MetadataTab,
  },
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
];

const sections: Record<SplitSettingsSection, SplitSettingsTemplateTab[]> = {
  [SplitSettingsSection.SPLIT]: routes.slice(0, 3),
  [SplitSettingsSection.PERSONAL]: routes.slice(3, 4),
};

function SidebarBody() {
  return (
    <div className={'space-y-6'}>
      {Object.keys(sections).map((label) => (
        <div key={label}>
          <span className={'label my-1'}>{label}</span>
          <ul className={'space-y-3'}>
            {sections[label as SplitSettingsSection].map((route) => (
              <li key={label + '-' + route.slug}>
                <Link
                  href={
                    'splits/0x8bc7ccfac818a5f5ed0c7b327024b8075e4f1407/settings/' +
                    route.slug
                  }
                  legacyBehavior={true}
                  passHref={true}
                >
                  <ButtonOutline
                    icon={<route.icon />}
                    justify={'start'}
                    size={'md'}
                    fullWidth={true}
                  >
                    {route.label}
                  </ButtonOutline>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function SettingsTab() {
  const template = useRouterTemplate(
    routes,
    ({ asPath }) => asPath.split('/')[4]
  );

  return (
    <section>
      <SidebarLayout title={'Settings'} body={<SidebarBody />}>
        <template.component />
      </SidebarLayout>
    </section>
  );
}
