import {
  Box,
  BreadcrumbRoot,
  type BreadcrumbRootProps,
  BreadcrumbLink,
  type BreadcrumbLinkProps,
  BreadcrumbCurrentLink,
  Link,
} from "@mutuals/ui";
import { ReactNode } from "react";
import { Icon } from "@mutuals/ui";
import { RxSlash } from "react-icons/rx";

function BreadcrumbsInnerItem({
  children,
  isCurrentPage,
  href,
  ...props
}: BreadcrumbLinkProps & { isCurrentPage?: boolean }) {
  return !isCurrentPage && !!href ? (
    <BreadcrumbLink asChild {...props}>
      <Link href={href} unstyled={true}>
        {children}
      </Link>
    </BreadcrumbLink>
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
      gap="3"
      separator={
        <Icon boxSize={"0.6rem"}>
          <RxSlash />
        </Icon>
      }
      {...props}
    >
      {items.map(function ({ children, href, ...innerProps }, i) {
        const isCurrentPage = i === items.length - 1;

        return (
          <BreadcrumbsInnerItem
            key={`${href}-${i}`}
            isCurrentPage={isCurrentPage}
            href={href}
            {...innerProps}
          >
            {children}
          </BreadcrumbsInnerItem>
        );
      })}
    </BreadcrumbRoot>
  );
}
