import React from 'react';

import { ButtonOutline } from '@/components/Button';

import { useSplit } from '@/context/SplitContext';
import { routes } from '@/templates/split/details/SettingsTab';

import { SplitSettingsSection, SplitSettingsTemplateTab } from '#/split';

export default function SettingsSidebarBody() {
  const sections: {
    [key in SplitSettingsSection]?: SplitSettingsTemplateTab[];
  } = {
    [SplitSettingsSection.SPLIT]: routes.slice(0, 3),
    //[SplitSettingsSection.PERSONAL]: routes.slice(3, 4),
  };

  const { split } = useSplit();

  return (
    <div className={'space-y-6'}>
      {Object.keys(sections).map((label) => (
        <div key={label}>
          <span className={'label my-1'}>{label}</span>
          <ul className={'space-y-3'}>
            {sections[label as SplitSettingsSection]?.map((route) => (
              <li key={label + '-' + route.slug}>
                <ButtonOutline
                  href={`/splits/${split.id}/settings/${route.slug}`}
                  icon={<route.icon />}
                  justify={'start'}
                  size={'md'}
                  fullWidth={true}
                >
                  {route.label}
                </ButtonOutline>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
