import React from 'react';

import clsxm from '@/lib/utils/clsxm';

export interface LoadingSpinnerProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  enabled?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'outline' | 'link-1' | 'link-2';
  rounded?: 'base' | 'none' | 'full';
}

export default function LoadingSpinner({
  enabled = true,
  size = `md`,
  color = `primary`,
  rounded = `base`,
  ...props
}: LoadingSpinnerProps) {
  const sizeClass = {
    xs: 'w-2 h-2',
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  }[size];

  const roundedClass = {
    full: `rounded-full`,
    base: `rounded-default`,
    none: ``,
  }[rounded];

  const colorClass = {
    primary: `text-white`,
    secondary: `text-neutral-50 dark:text-neutral-900`,
    outline: `text-neutral-900 dark:text-neutral-50`,
    'link-1': `text-neutral-900 dark:text-neutral-50`,
    'link-2': `text-neutral-900 dark:text-neutral-50`,
  }[color];

  return enabled ? (
    <div
      aria-label='Loading...'
      role='status'
      className={clsxm('inline-block', colorClass, roundedClass)}
      {...props}
    >
      <span className='sr-only'>Loading...</span>

      <svg
        className={clsxm(`block animate-spin text-current`, sizeClass)}
        viewBox='3 3 18 18'
      >
        <path
          className='opacity-25'
          fill='currentColor'
          d='M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z'
        />
        <path
          className='opacity-100'
          fill='currentColor'
          d='M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z'
        />
      </svg>
    </div>
  ) : (
    <></>
  );
}
