import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { ReactNode } from 'react';
import Link from 'next/link';

interface BreadcrumbsInnerProps extends BreadcrumbProps {
  items: { href: string; children: ReactNode }[];
}

export default function BreadcrumbsInner({
  items,
  ...props
}: BreadcrumbsInnerProps) {
  return (
    <Breadcrumb
      fontSize={'sm'}
      spacing='2'
      separator={<IoChevronForwardOutline />}
      {...props}
    >
      {items.map(({ children, href }, i) => (
        <BreadcrumbItem
          key={`${href}-${i}`}
          isCurrentPage={i === items.length - 1}
          fontWeight={'500'}
        >
          <Link href={href}>{children}</Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
