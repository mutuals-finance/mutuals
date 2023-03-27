import React from 'react';

export default function Body({ children }: React.PropsWithChildren) {
  return (
    <div className={'bg-default rounded-default rounded-r-0 w-full flex-1'}>
      {children}
    </div>
  );
}
