import {
  Box,
  BreadcrumbRoot,
  type BreadcrumbRootProps,
  BreadcrumbLink,
  type BreadcrumbLinkProps,
  BreadcrumbCurrentLink,
} from "@mutuals/ui";
import { ReactNode } from "react";
import { Icon } from "@mutuals/ui";
import { RxSlash } from "react-icons/rx";

function BreadcrumbsInnerItem({
  children,
  isCurrentPage,
  ...props
}: BreadcrumbLinkProps & { isCurrentPage?: boolean }) {
  return !isCurrentPage ? (
    <BreadcrumbLink {...props}>{children}</BreadcrumbLink>
  ) : (
    <BreadcrumbCurrentLink {...props}>{children}</BreadcrumbCurrentLink>
  );
}

interface BreadcrumbsInnerProps extends BreadcrumbRootProps {
  items: { href: string; children: ReactNode }[];
}

export default function BreadcrumbsInner({
  items,
  ...props
}: BreadcrumbsInnerProps) {
  return (
    <BreadcrumbRoot
      fontSize={"sm"}
      gap="3"
      separator={<Icon as={RxSlash} boxSize={"0.6rem"} />}
      {...props}
    >
      {items.map(function ({ children, href }, i) {
        const isCurrentPage = i === items.length - 1;

        return (
          <BreadcrumbsInnerItem
            key={`${href}-${i}`}
            isCurrentPage={isCurrentPage}
          >
            {children}
          </BreadcrumbsInnerItem>
        );
      })}
    </BreadcrumbRoot>
  );
}
