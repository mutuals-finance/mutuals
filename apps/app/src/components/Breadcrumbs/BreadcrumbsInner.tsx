import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbItemProps,
  BreadcrumbProps,
} from "@splitfi/ui";
import { ReactNode } from "react";
import Link from "next/link";
import { Icon } from "@splitfi/ui";
import { RxSlash } from "react-icons/rx";

function BreadcrumbsInnerItem({
  children,
  isCurrentPage,
  ...props
}: BreadcrumbItemProps) {
  return (
    <BreadcrumbItem isCurrentPage={isCurrentPage} fontWeight={"400"} {...props}>
      {children}
    </BreadcrumbItem>
  );
}

interface BreadcrumbsInnerProps extends BreadcrumbProps {
  items: { href: string; children: ReactNode }[];
}

export default function BreadcrumbsInner({
  items,
  ...props
}: BreadcrumbsInnerProps) {
  return (
    <Breadcrumb
      fontSize={"sm"}
      spacing="3"
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
            {isCurrentPage ? (
              <Box>{children}</Box>
            ) : (
              <Box
                as={Link}
                href={href}
                color={!isCurrentPage ? "alpha.2" : "inherit"}
                _hover={{ color: "color.1" }}
              >
                {children}
              </Box>
            )}
          </BreadcrumbsInnerItem>
        );
      })}
    </Breadcrumb>
  );
}
