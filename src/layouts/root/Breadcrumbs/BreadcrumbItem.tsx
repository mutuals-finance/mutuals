import Link from 'next/link';
import React from 'react';

interface BreadcrumbItemInnerProps extends React.PropsWithChildren {
  icon?: React.ReactNode;
}

function BreadcrumbItemInner({ icon, children }: BreadcrumbItemInnerProps) {
  const label = <span className={'block'}>{children}</span>;
  return !!icon ? (
    <>
      <span className={'block'}>{icon}</span>
      {label}
    </>
  ) : (
    label
  );
}

interface BreadcrumbItemProps extends BreadcrumbItemInnerProps {
  href?: string;
  isLast?: boolean;
}

export default function BreadcrumbItem({
  isLast,
  href,
  ...props
}: BreadcrumbItemProps) {
  const createBreadcrumbItem = ({
    children,
  }: React.PropsWithChildren<unknown>) => (
    <>
      {!!href && <li>/</li>}
      <li className={'truncate capitalize'}>{children}</li>
    </>
  );

  const breadcrumbInner = <BreadcrumbItemInner {...props} />;

  if (!href || isLast) {
    return createBreadcrumbItem({
      children: breadcrumbInner,
    });
  }

  return createBreadcrumbItem({
    children: (
      <Link href={href} className={'link block font-normal capitalize'}>
        {breadcrumbInner}
      </Link>
    ),
  });
}
