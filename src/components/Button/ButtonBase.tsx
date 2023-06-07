import Link from 'next/link';
import React, { ReactNode } from 'react';

import clsxm from '@/lib/utils/clsxm';

import { LinkUnstyled } from '@/components/Link';
import LoadingSpinner from '@/components/LoadingSpinner';

type LinkProps = React.ComponentProps<typeof Link>;

export interface ButtonBaseProps extends React.PropsWithChildren {
  icon?: ReactNode;
  iconAfter?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  rounded?: 'base' | 'small' | 'none' | 'full';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  justify?: 'start' | 'between' | 'center' | 'around';
  color?: 'primary' | 'secondary' | 'outline' | 'link-1' | 'link-2';
  dense?: boolean;
  fullWidth?: boolean;
  href?: LinkProps['href'];
  target?: LinkProps['target'];
  className?: string;
  activeClassName?: string;
  exactActiveClassName?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

function LinkOrButton({ href, type, onClick, ...props }: ButtonBaseProps) {
  const isLink = !!href;
  return isLink ? (
    <LinkUnstyled href={href as URL} {...props} />
  ) : (
    <button type={type} onClick={onClick} {...props} />
  );
}

export default function ButtonBase({
  children,
  className,
  icon,
  iconAfter,
  rounded = 'base',
  size = `md`,
  justify = `center`,
  color = `primary`,
  dense = false,
  fullWidth = false,
  loading = false,
  disabled = false,
  ...props
}: ButtonBaseProps) {
  const onlyIcon = (icon || (iconAfter && !icon)) && !children;
  const baseClass = `relative inline-flex items-center text-center font-medium border transition-color ease-in-out duration-200 active:scale-95 disabled:active:scale-100 disabled:cursor-default`;

  const roundedClass = {
    full: `rounded-full`,
    small: `rounded-md`,
    base: `rounded-default`,
    none: ``,
  }[rounded];

  const widthClass = {
    xs: fullWidth ? 'w-full' : 'w-6',
    sm: fullWidth ? 'w-full' : 'w-8',
    md: fullWidth ? 'w-full' : 'w-10',
    lg: fullWidth ? 'w-full' : 'w-12',
    xl: fullWidth ? 'w-full' : 'w-16',
  }[size];

  const textClass = {
    xs: `text-xs`,
    sm: `text-sm`,
    md: `text-base`,
    lg: `text-lg`,
    xl: `text-xl`,
  }[size];

  const heightClass = {
    xs: `h-6`,
    sm: `h-8`,
    md: `h-10`,
    lg: `h-12`,
    xl: `h-16`,
  }[size];

  const sizeClass = {
    xs: `py-0.25 px-2`,
    sm: `py-0.5 px-3`,
    md: `py-1 px-3`,
    lg: `py-2 px-3`,
    xl: `py-3 px-8`,
  }[size];

  const spaceClass = {
    xs: `space-x-0.5`,
    sm: `space-x-1.5`,
    md: `space-x-1.5`,
    lg: `space-x-2`,
    xl: `space-x-3`,
  }[size];

  const justifyClass = {
    start: `justify-start`,
    center: `justify-center`,
    between: `justify-between`,
    around: `justify-around`,
  }[justify];

  const colorClass = {
    primary: `text-white bg-carlo hover:bg-carlo-400 disabled:hover:bg-carlo border-transparent`,
    secondary: `bg-default-2 text-default border-transparent hover:bg-default disabled:hover:bg-default-2`,
    outline: `text-default bg-default hover:bg-default-2 border-default disabled:hover:bg-default`,
    'link-1': `link-1 border-transparent`,
    'link-2': `link-2 border-transparent`,
  }[color];

  const buttonClass = clsxm(
    roundedClass,
    justifyClass,
    colorClass,
    baseClass,
    heightClass,
    textClass,
    !fullWidth && (dense || !onlyIcon) ? '' : fullWidth ? 'w-full' : widthClass,
    dense || onlyIcon ? '' : heightClass,
    dense || onlyIcon ? '' : sizeClass,
    onlyIcon ? '' : spaceClass,
    className
  );

  return (
    <LinkOrButton
      className={buttonClass}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div
          className={clsxm(
            `absolute left-0 top-0 block flex h-full w-full items-center justify-center`,
            roundedClass
          )}
        >
          <LoadingSpinner size={size} color={color} />
        </div>
      )}

      {icon && <span className={`block`}>{icon}</span>}
      {children && <span className={`block`}>{children}</span>}
      {iconAfter && <span className={`block`}>{iconAfter}</span>}
    </LinkOrButton>
  );
}
