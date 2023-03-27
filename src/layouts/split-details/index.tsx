import React from 'react';

export default function SplitDetailsLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className={'flex flex-col'}>
      <div>{children}</div>
    </div>
  );
}
