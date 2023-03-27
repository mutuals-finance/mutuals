import React from 'react';

import SplitDetailsLayout from '@/layouts/split-details';

export const Layouts = {
  SplitDetails: SplitDetailsLayout,
  None: ({ children }: React.PropsWithChildren) => <>{children}</>,
};

export type LayoutKeys = keyof typeof Layouts;
