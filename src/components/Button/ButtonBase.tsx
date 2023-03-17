import React, { ReactNode } from 'react';

import clsxm from '@/lib/utils/clsxm';

import LoadingSpinner from '@/components/LoadingSpinner';

export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  iconAfter?: ReactNode;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  rounded?: 'base' | 'none' | 'full';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  justify?: 'between' | 'center' | 'around';
  color?: 'primary' | 'secondary' | 'outline' | 'link-1' | 'link-2';
  dense?: boolean;
  fullWidth?: boolean;
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
}: React.PropsWithChildren<ButtonBaseProps>) {
  const onlyIcon = (icon || (iconAfter && !icon)) && !children;
  const baseClass = `relative inline-flex items-center text-center font-semibold border transition-color ease-in-out duration-200 active:scale-95 disabled:active:scale-100 disabled:cursor-default`;

  const roundedClass = {
    full: `rounded-full`,
    base: `rounded-default`,
    none: ``,
  }[rounded];

  const widthClass = {
    xs: fullWidth ? 'w-full' : 'w-6',
    sm: fullWidth ? 'w-full' : 'w-8',
    md: fullWidth ? 'w-full' : 'w-10',
    lg: fullWidth ? 'w-full' : 'w-14',
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
    lg: `h-14`,
    xl: `h-16`,
  }[size];

  const sizeClass = {
    xs: `py-0.25 px-1`,
    sm: `py-0.5 px-3`,
    md: `py-1 px-4`,
    lg: `py-2 px-6`,
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
    secondary: `bg-neutral-900 hover:bg-neutral-700 disabled:hover:bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-100 dark:disabled:hover:bg-neutral-100`,
    outline: `bg-default-2 text-default border-transparent hover:bg-zinc-200 dark:hover:bg-zinc-800 disabled:hover:bg-zinc-100 dark:disabled:hover:bg-zinc-900`,
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
    <button className={buttonClass} disabled={disabled || loading} {...props}>
      {loading && (
        <div
          className={clsxm(
            `absolute top-0 left-0 block flex h-full w-full items-center justify-center`,
            roundedClass
          )}
        >
          <LoadingSpinner size={size} color={color} />
        </div>
      )}

      {icon && <span className={`block`}>{icon}</span>}
      {children && <span className={`block`}>{children}</span>}
      {iconAfter && <span className={`block`}>{iconAfter}</span>}
    </button>
  );
}
