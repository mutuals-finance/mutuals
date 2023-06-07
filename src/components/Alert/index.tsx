import React, { HTMLProps } from 'react';
import {
  IoAlertCircleOutline,
  IoCheckmarkCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
} from 'react-icons/io5';

import clsxm from '@/lib/utils/clsxm';

type Severity = 'success' | 'info' | 'warning' | 'error';

interface AlertProps extends HTMLProps<HTMLDivElement> {
  severity?: Severity;
}

export default function Alert({
  children,
  severity = 'error',
  className,
  ...props
}: AlertProps) {
  const classes: Record<
    'wrapper' | 'before' | 'icon',
    Record<Severity, string>
  > = {
    wrapper: {
      success:
        'border-green-300 bg-green-50/50 dark:border-green-300 dark:bg-green-900/20',
      info: 'border-blue-300 bg-blue-50/50 dark:border-blue-300 dark:bg-blue-900/20',
      warning:
        'border-orange-300 bg-orange-50/50 dark:border-orange-300 dark:bg-orange-900/5',
      error:
        'border-red-300 bg-red-50/50 dark:border-red-300 dark:bg-red-900/20',
    },
    before: {
      success: 'bg-green-400 dark:bg-green-300',
      info: 'bg-blue-400 dark:bg-blue-300',
      warning: 'bg-orange-400 dark:bg-orange-300',
      error: 'bg-red-400 dark:bg-red-300',
    },
    icon: {
      success: 'text-green-400 dark:text-green-300',
      info: 'text-blue-400 dark:text-blue-300',
      warning: 'text-orange-400 dark:text-orange-300',
      error: 'text-red-400 dark:text-red-300',
    },
  };

  const Icon = {
    success: IoCheckmarkCircleOutline,
    info: IoInformationCircleOutline,
    warning: IoWarningOutline,
    error: IoAlertCircleOutline,
  }[severity];

  return (
    <div
      {...props}
      className={clsxm(
        'rounded-default bg-default relative inline-flex overflow-hidden border ',
        classes.wrapper[severity],
        className
      )}
    >
      <span className={clsxm('block w-2', classes.before[severity])} />
      <span
        className={clsxm(
          'block self-center py-3 pl-6 pr-3 text-2xl',
          classes.icon[severity]
        )}
      >
        <Icon />
      </span>
      <div className={'p-3 text-sm'}>{children}</div>
    </div>
  );
}
