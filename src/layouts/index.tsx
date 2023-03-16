import React from 'react';

import AppLayout from '@/layouts/default';

export const Layouts = {
  Default: AppLayout,
  None: ({ children }: React.PropsWithChildren) => <>{children}</>,
};

export type LayoutKeys = keyof typeof Layouts;
