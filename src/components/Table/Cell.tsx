import React, { HTMLProps } from 'react';

import clsxm from '@/lib/utils/clsxm';

interface CellProps extends HTMLProps<HTMLTableCellElement> {
  as: 'th' | 'td';
  index: number;
  length: number;
}

export default function Cell({
  as: As,
  index,
  length,
  className,
  children,
  ...props
}: React.PropsWithChildren<CellProps>) {
  return (
    <As
      className={clsxm(
        `border-default table-cell border-b align-middle text-sm font-normal`,
        'h-14',
        index <= 0 && 'lg:pl-6',
        index >= length - 1 && 'lg:pr-6',
        className
      )}
      {...props}
    >
      {children}
    </As>
  );
}
