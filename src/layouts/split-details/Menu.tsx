import React from 'react';

import { LinkUnstyled } from '@/components/Link';

interface SidebarSplitMenuProps {
  collapsed?: boolean;
}

export default function SplitDetailsMenu({}: SidebarSplitMenuProps) {
  const routes: Record<string, string> = {
    Overview: '',
    Withdraw: 'withdraw',
    Deposit: 'deposit',
    Assets: 'assets',
    Activity: 'activity',
    Settings: 'settings',
  };

  return (
    <div className={'sticky left-0 top-0'}>
      <div className={'container'}>
        <ul className={'border-default flex border-b'}>
          {Object.keys(routes).map((name) => (
            <li className={'block'} key={name}>
              <LinkUnstyled
                href={`/splits/0x8bc7ccfac818a5f5ed0c7b327024b8075e4f1407/${routes[name]}`}
                className={
                  'text-lighter hover:text-default -mb-px flex h-14 w-full items-center justify-center border-b-2 border-transparent px-4 text-center text-sm font-medium hover:border-neutral-900 dark:hover:border-neutral-50'
                }
                activeClassName={'border-carlo dark:border-carlo'}
              >
                {name}
              </LinkUnstyled>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
