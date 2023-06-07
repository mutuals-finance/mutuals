import React from 'react';

import { LinkUnstyled } from '@/components/Link';

import routes from '@/templates/split/details';

interface MenuProps {
  id: string;
}

export default function Menu({ id }: MenuProps) {
  return (
    <div className={'container'}>
      <ul className={'border-default flex border-b'}>
        {routes.map((route) => (
          <li className={'block'} key={route.slug}>
            <LinkUnstyled
              scroll={false}
              replace={true}
              href={`/splits/${'maticmum'}:${id}/${route.slug}`}
              className={
                'text-light hover:text-default -mb-px flex h-14 w-full items-center justify-center border-b-2 border-transparent px-4 text-center font-medium transition-all duration-200 hover:border-neutral-900 dark:hover:border-neutral-50'
              }
              exactActiveClassName={
                'text-default border-carlo dark:border-carlo'
              }
            >
              {route.label}
            </LinkUnstyled>
          </li>
        ))}
      </ul>
    </div>
  );
}
