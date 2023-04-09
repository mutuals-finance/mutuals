import { HTMLAttributes, ReactNode } from 'react';

import clsxm from '@/lib/utils/clsxm';

interface StatisticProps
  extends React.PropsWithChildren<
    Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'prefix'>
  > {
  orientation?: 'vertical' | 'horizontal';
  title?: string | ReactNode;
  prefix?: string | number | ReactNode;
  suffix?: string | number | ReactNode;
}

export default function Statistic({
  title,
  children,
  prefix,
  suffix,
  orientation = 'vertical',
  className,
  ...props
}: StatisticProps) {
  const isVertical = orientation === 'vertical';
  const isHorizontal = !isVertical;

  return (
    <div
      className={clsxm(
        'flex',
        isVertical && 'flex-col',
        isHorizontal && 'items-end space-x-3'
      )}
    >
      {!!title && <span className='label block'>{title}</span>}

      <div
        className={clsxm(
          `flex items-center justify-start space-x-2 font-medium`,
          isVertical && 'leading-relaxed',
          className
        )}
        {...props}
      >
        {!!prefix && <div>{prefix}</div>}
        {!!children && <div>{children}</div>}
        {!!suffix && <div>{suffix}</div>}
      </div>
    </div>
  );
}
