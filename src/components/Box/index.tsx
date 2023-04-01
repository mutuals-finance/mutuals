import React, { HTMLAttributes } from 'react';

import clsxm from '@/lib/utils/clsxm';

interface BoxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: string;
  titleAfter?: React.ReactNode;
  innerClassName?: string;
}

export default function Box({
  title,
  titleAfter,
  className,
  children,
  innerClassName,
  ...props
}: React.PropsWithChildren<BoxProps>) {
  return (
    <article
      className={clsxm(
        `bg-default border-default rounded-default flex flex-1 flex-col overflow-hidden border`,
        className
      )}
      {...props}
    >
      {(!!title || !!titleAfter) && (
        <>
          <div
            className={
              'border-default bg-default-2 flex items-center justify-between border-b p-3 lg:px-6 lg:py-4'
            }
          >
            <div>
              {!!title && <h2 className={'text-lg font-medium'}>{title}</h2>}
            </div>
            <div>{titleAfter}</div>
          </div>
        </>
      )}
      <div
        className={clsxm('flex flex-1 flex-col', 'p-3 lg:p-6', innerClassName)}
      >
        {children}
      </div>
    </article>
  );
}
