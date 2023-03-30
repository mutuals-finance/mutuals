import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

import BreadcrumbItem from '@/layouts/default/Breadcrumbs/BreadcrumbItem';

const _defaultGetTextGenerator = (param?: string, query: ParsedUrlQuery) =>
  null;
const _defaultGetDefaultTextGenerator = (path: string, href: string) => path;

// Pulled out the path part breakdown because its
// going to be used by both `asPath` and `pathname`
const generatePathParts = (pathStr: string) => {
  const pathWithoutQuery = pathStr.split('?')[0];
  return pathWithoutQuery?.split('/').filter((v) => v.length > 0);
};

function BreadcrumbList({ children }: React.PropsWithChildren) {
  return (
    <ul
      className={'flex items-center justify-start space-x-2 py-4 text-sm'}
      aria-label='breadcrumb'
    >
      {children}
    </ul>
  );
}

export default function Breadcrumbs({
  getTextGenerator = _defaultGetTextGenerator,
  getDefaultTextGenerator = _defaultGetDefaultTextGenerator,
}) {
  const router = useRouter();

  const segments = React.useMemo(
    function generateBreadcrumbs() {
      const asPathNestedRoutes = generatePathParts(router.asPath);
      const pathnameNestedRoutes = generatePathParts(router.pathname);

      const list =
        asPathNestedRoutes?.map((subpath, idx) => {
          // Pull out and convert "[post_id]" into "post_id"
          const param = !!pathnameNestedRoutes
            ? pathnameNestedRoutes[idx]?.replace('[', '')?.replace(']', '')
            : '';

          const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');

          return {
            href,
            textGenerator: getTextGenerator(param, router.query),
            text: getDefaultTextGenerator(subpath, href),
          };
        }) || [];

      return [{ href: '/', text: 'Home' }, ...list];
    },
    [
      router.asPath,
      router.pathname,
      router.query,
      getTextGenerator,
      getDefaultTextGenerator,
    ]
  );

  return (
    <BreadcrumbList>
      {segments.map((segment, i) => (
        <BreadcrumbItem {...segment} key={i} isLast={i >= segments.length - 1}>
          {segment.text}
        </BreadcrumbItem>
      ))}
    </BreadcrumbList>
  );
}
