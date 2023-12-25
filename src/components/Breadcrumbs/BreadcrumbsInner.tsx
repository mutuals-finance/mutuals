import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps,
} from '@chakra-ui/react';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { ReactNode } from 'react';

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
      spacing='3'
      separator={<IoChevronForwardOutline />}
      {...props}
    >
      {items.map(({ children, href }, i) => (
        <BreadcrumbItem
          key={`${href}-${i}`}
          isCurrentPage={i === items.length - 1}
        >
          <BreadcrumbLink href={href}>{children}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
