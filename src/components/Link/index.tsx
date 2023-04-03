import React, { useEffect } from 'react';
import { useNetwork } from 'wagmi';

import { shortenAddress } from '@/lib/utils';
import clsxm from '@/lib/utils/clsxm';

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

interface LinkChainExplorerProps extends Omit<LinkBaseProps, 'href'> {
  address: string;
}

export function LinkChainExplorer({
  address,
  target,
  color = 'primary',
  children,
  className,
  ...props
}: LinkChainExplorerProps) {
  const { chain } = useNetwork();
  const href = `${chain?.blockExplorers?.default.url}/address/${address}`;

  return (
    <LinkRoot
      href={href}
      target={target || '_blank'}
      color={color}
      className={clsxm('slashed-zero', className)}
      {...props}
    >
      {children || shortenAddress(address)}
    </LinkRoot>
  );
}
