import React, { PropsWithChildren } from 'react';
import ServerProviders from '@/app/RootProviders/ServerProviders';
import ClientProviders from '@/app/RootProviders/ClientProviders';
import 'keen-slider/keen-slider.min.css';

export default function RootProviders({ children }: PropsWithChildren) {
  return (
    <ServerProviders>
      <ClientProviders>{children}</ClientProviders>
    </ServerProviders>
  );
}
