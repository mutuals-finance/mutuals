'use client';

import { PropsWithChildren } from 'react';

import { Provider } from 'ankr-react';

export default function AnkrProvider({ children }: PropsWithChildren) {
  return (
    <Provider
      apiKey={
        'cef60793f2f7367ec790a80c1d9070fca55c8c7b8ec1f353279bb53cccb8289d'
      }
    >
      {children}
    </Provider>
  );
}
