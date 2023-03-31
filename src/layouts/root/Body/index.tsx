import React from 'react';

export default function Body({ children }: React.PropsWithChildren) {
  return <div className={'w-full flex-1'}>{children}</div>;
}
