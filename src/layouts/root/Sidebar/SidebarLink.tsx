import React from 'react';

import clsxm from '@/lib/utils/clsxm';

import { LinkProps, LinkUnstyled } from '@/components/Link';

type AppSidebarLinkProps = Omit<LinkProps, 'fullWidth'>;

export default function SidebarLink({
  activeClassName,
  className,
  size,
  ...props
}: React.PropsWithChildren<AppSidebarLinkProps>) {
  const isSmall = size === 'sm';
  const heightClass = isSmall ? 'h-10' : 'h-11';
  const sizeClass = isSmall ? 'space-x-3 px-3' : 'space-x-6 px-4';

  return (
    <LinkUnstyled
      {...props}
      className={clsxm(
        className,
        heightClass,
        sizeClass,
        'rounded-default hover:bg-default-2 flex items-center justify-start truncate whitespace-nowrap border border-transparent font-medium'
      )}
      fullWidth={true}
      activeClassName={clsxm(activeClassName, 'bg-default-1')}
      size={size}
    />
  );
}
