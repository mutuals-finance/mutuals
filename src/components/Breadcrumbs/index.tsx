'use client';

import { useParams, usePathname } from 'next/navigation';
import BreadcrumbsInner from '@/components/Breadcrumbs/BreadcrumbsInner';
import { ReactNode, useCallback, useEffect, useMemo } from 'react';
import { formatToTitleCase } from '@/lib/utils';

export interface BreadcrumbsProps {
  overwrite?: { [key: string]: ReactNode };
}
export default function Breadcrumbs({ overwrite }: BreadcrumbsProps) {
  // Gives us ability to load the current route details
  const pathname = usePathname();

  const params = useParams<any>();

  const formatOverwrite = useCallback(
    (path: string) => {
      const param = Object.keys(params).find(
        (key) => decodeURIComponent(params[key]) == path,
      );
      // 1. check if route param matches overwrite key
      // 2. check if route path matches overwrite key
      return overwrite?.[param ?? path];
    },
    [overwrite, params],
  );

  const items = useMemo(() => {
    const asPathWithoutQuery = pathname.split('?')[0] ?? '';

    const asPathNestedRoutes = asPathWithoutQuery
      .split('/')
      .filter((v) => v.length > 0);

    const _items = asPathNestedRoutes
      .map((path, idx) => {
        const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');

        const children = formatOverwrite(path) ?? formatToTitleCase(path);
        return { href, children };
      })
      .filter((v) => v.children !== false);

    return [{ href: '/', children: 'Home' }, ..._items];
  }, [pathname, formatOverwrite]);

  return <BreadcrumbsInner items={items} />;
}
