import React from 'react';

import LinkBase, { LinkBaseProps } from '@/components/Link/LinkBase';

export type LinkProps = Omit<LinkBaseProps, 'color'>;

function LinkRoot(props: LinkBaseProps) {
  return <LinkBase {...props} />;
}

export function LinkPrimary({ children, ...props }: LinkProps) {
  return (
    <LinkRoot {...props} color={`primary`}>
      {children}
    </LinkRoot>
  );
}

export function LinkSecondary({ children, ...props }: LinkProps) {
  return (
    <LinkRoot {...props} color={`secondary`}>
      {children}
    </LinkRoot>
  );
}

export function LinkUnstyled({ children, ...props }: LinkProps) {
  return <LinkRoot {...props}>{children}</LinkRoot>;
}
