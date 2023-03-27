import React from 'react';

import SplitDetailsLayout from '@/layouts/split-details';

export const Layouts = {
  SplitDetails: SplitDetailsLayout,
  Nullish: ({ children }: React.PropsWithChildren) => <>{children}</>,
};

export type LayoutKeys = keyof typeof Layouts;
