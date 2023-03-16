import React from 'react';

export default function Body({ children }: React.PropsWithChildren) {
  return (
    <div
      className={
        'bg-default-1 rounded-default rounded-r-0 w-full flex-1 py-6 lg:py-12'
      }
    >
      {children}
    </div>
  );
}
