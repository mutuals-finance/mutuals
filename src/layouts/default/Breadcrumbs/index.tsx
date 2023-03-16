import React from 'react';

import BreadcrumbItem from '@/layouts/default/Breadcrumbs/BreadcrumbItem';

function slugToTitle(slug: string) {
  return slug.replace(/-/g, ' ').replace(/\b[a-z]/g, function (...args) {
    return args[0].toUpperCase();
  });
}

function BreadcrumbList({ children }: React.PropsWithChildren<unknown>) {
  return (
    <ul
      className={'flex items-center justify-start space-x-2 py-4 text-sm'}
      aria-label='breadcrumb'
    >
      {children}
    </ul>
  );
}

export default function Breadcrumbs() {
  //const { pathname } = useRouter();
  const segments = [''];

  return (
    <BreadcrumbList>
      {segments.map((segment, i) => (
        <BreadcrumbItem
          isLast={i >= segments.length - 1}
          key={i}
          href={segments.slice(0, i + 1).join('/')}
        >
          {slugToTitle(segment)}
        </BreadcrumbItem>
      ))}
    </BreadcrumbList>
  );
}
