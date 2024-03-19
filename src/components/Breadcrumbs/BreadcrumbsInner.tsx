import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbItemProps,
  BreadcrumbLink,
  BreadcrumbProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

function BreadcrumbsInnerItem({ children, ...props }: BreadcrumbItemProps) {
  return <BreadcrumbItem {...props}>{children}</BreadcrumbItem>;
}

interface BreadcrumbsInnerProps extends BreadcrumbProps {
  items: { href: string; children: ReactNode }[];
}

export default function BreadcrumbsInner({
  items,
  ...props
}: BreadcrumbsInnerProps) {
  return (
    <Breadcrumb fontSize={'md'} spacing='3' separator={'/'} {...props}>
      {items.map(({ children, href }, i) => (
        <BreadcrumbsInnerItem
          key={`${href}-${i}`}
          isCurrentPage={i === items.length - 1}
        >
          <Link href={href}>{children}</Link>
        </BreadcrumbsInnerItem>
      ))}
    </Breadcrumb>
  );
}
