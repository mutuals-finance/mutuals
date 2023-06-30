import { HTMLProps } from 'react';

import clsxm from '@/lib/utils/clsxm';

interface PageHeaderProps extends HTMLProps<HTMLHeadElement> {
  title: string;
  titleBefore?: React.ReactNode;
  titleAfter?: React.ReactNode;
  showBack?: boolean;
}

export default function PageHeader({
  title,
  titleBefore,
  titleAfter,
  showBack = true,
  className,
  children,
  ...props
}: PageHeaderProps) {
  return (
    <header className={clsxm('space-y-6 py-6', className)} {...props}>
      <div className={'container relative pt-44'}>
        <div className={'flex items-center justify-between space-x-6'}>
          <div
            className={
              'flex items-center justify-start space-x-3 overflow-hidden'
            }
          >
            {titleBefore}
            <h1 className={'title-2 truncate leading-normal'}>{title}</h1>
          </div>
          {titleAfter}
        </div>
      </div>
      {children}
    </header>
  );
}
