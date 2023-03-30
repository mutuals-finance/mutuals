import React from 'react';

import { LinkUnstyled } from '@/components/Link';

export default function SplitDetailsLayoutMenu() {
  const routes: Record<string, string> = {
    Overview: '',
    Withdraw: 'withdraw',
    Deposit: 'deposit',
    Assets: 'assets',
    Activity: 'activity',
    Settings: 'settings',
  };

  return (
    <div className={'container'}>
      <ul className={'border-default flex border-b'}>
        {Object.keys(routes).map((name) => (
          <li className={'block'} key={name}>
            <LinkUnstyled
              href={`/splits/0x8bc7ccfac818a5f5ed0c7b327024b8075e4f1407/${routes[name]}`}
              className={
                'text-lighter hover:text-default -mb-px flex h-14 w-full items-center justify-center border-b-2 border-transparent px-4 text-center font-medium transition-all duration-200 hover:border-neutral-900 dark:hover:border-neutral-50'
              }
              exactActiveClassName={
                'text-default border-carlo dark:border-carlo'
              }
            >
              {name}
            </LinkUnstyled>
          </li>
        ))}
      </ul>
    </div>
  );
}
