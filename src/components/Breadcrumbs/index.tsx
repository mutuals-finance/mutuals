'use client';

import { useParams, usePathname } from 'next/navigation';
import BreadcrumbsInner from '@/components/Breadcrumbs/BreadcrumbsInner';
import { ReactNode, useCallback, useMemo } from 'react';
import { formatToTitleCase } from '@/lib/utils';

interface BreadcrumbsProps {
  overwrite?: { [key: string]: ReactNode };
}
export default function Breadcrumbs({ overwrite }: BreadcrumbsProps) {
  // Gives us ability to load the current route details
  const pathname = usePathname();
  const params = useParams<any>();

  const routeParam = useCallback(
    (path: string) => {
      return Object.keys(params).find(
        (key) => decodeURIComponent(params[key]) == path,
      );
    },
    [params],
  );

  const items = useMemo(() => {
    const asPathWithoutQuery = pathname.split('?')[0] ?? '';

    const asPathNestedRoutes = asPathWithoutQuery
      .split('/')
      .filter((v) => v.length > 0);

    const _items = asPathNestedRoutes.map((subpath, idx) => {
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');

      const children =
        overwrite?.[routeParam(subpath) ?? ''] ??
        overwrite?.[subpath] ??
        formatToTitleCase(subpath);
      return { href, children };
    });

    return [{ href: '/', children: 'Home' }, ..._items];
  }, [pathname, overwrite, routeParam]);

  return <BreadcrumbsInner items={items} />;
}
