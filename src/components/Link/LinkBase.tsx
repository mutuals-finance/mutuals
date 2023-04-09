import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode, useCallback, useEffect, useMemo } from 'react';

import clsxm from '@/lib/utils/clsxm';

import LoadingSpinner from '@/components/LoadingSpinner';

type AllNextLinkProps = React.ComponentProps<typeof NextLink>;
export interface LinkBaseProps extends AllNextLinkProps {
  icon?: ReactNode;
  iconAfter?: ReactNode;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'unstyled';
  dense?: boolean;
  fullWidth?: boolean;
  activeClassName?: string;
  exactActiveClassName?: string;
}

export default function LinkBase({
  children,
  className,
  icon,
  iconAfter,
  size = `md`,
  color = `unstyled`,
  fullWidth = false,
  loading = false,
  activeClassName,
  exactActiveClassName,
  ...props
}: React.PropsWithChildren<LinkBaseProps>) {
  const router = useRouter();

  const normalize = (s: string) => s.replace(/\/+$/, '');

  const path = normalize(router.asPath);
  const href = normalize(props.href.toString());

  const isActive = path.includes(href);
  const isExactActive = path === href;

  const onlyIcon = (icon || (iconAfter && !icon)) && !children;
  const baseClass = `disabled:cursor-default`;

  const widthClass = fullWidth && 'w-full';

  const spaceClass = {
    xs: `space-x-0.5`,
    sm: `space-x-1`,
    md: `space-x-1.5`,
    lg: `space-x-2`,
    xl: `space-x-3`,
  }[size];

  const colorClass = {
    unstyled: ``,
    primary: `link-1`,
    secondary: `link-2`,
  }[color];

  const linkClass = clsxm(
    'inline-flex items-center',
    colorClass,
    baseClass,
    widthClass,
    !onlyIcon && spaceClass,
    className,
    isActive && activeClassName,
    isExactActive && exactActiveClassName
  );

  return (
    <NextLink className={linkClass} {...props}>
      {children}
    </NextLink>
  );
}