import { PropsWithChildren } from 'react';

export const Layouts = {
  SplitDetails: ({ children }: PropsWithChildren) => <>{children}</>,
  Default: ({ children }: PropsWithChildren) => <>{children}</>,
};

export type LayoutKeys = keyof typeof Layouts;
