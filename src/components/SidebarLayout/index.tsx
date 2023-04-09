import React from 'react';

interface SidebarLayoutProps {
  title?: string;
  titleTag?: React.ElementType;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function SidebarLayout({
  title,
  titleTag: TitleComponent = 'h2',
  children,
  body,
  footer,
}: React.PropsWithChildren<SidebarLayoutProps>) {
  return (
    <div className={'container'}>
      <div className={'grid grid-cols-7 gap-24'}>
        <div
          className={
            'sticky left-0 top-16 col-span-2 flex h-[calc(100vh_-_4rem)]'
          }
        >
          <div className={'flex flex-1 flex-col'}>
            {title && (
              <TitleComponent className={'title-1 flex-shrink-0'}>
                {title}
              </TitleComponent>
            )}
            {body && (
              <div className={'flex flex-1 flex-col overflow-auto py-6'}>
                {body}
              </div>
            )}
            {footer && <div className={'flex-shrink-0 py-6'}>{footer}</div>}
          </div>
        </div>
        <div className={'col-span-5 self-start p-6'}>{children} </div>
      </div>
    </div>
  );
}
