import {
  Card,
  CardBody,
  CardBodyProps,
  CardHeader,
  type CardProps,
  Heading,
} from "@splitfi/ui";
import { type ReactNode } from "react";

export interface ContentCardProps extends Omit<CardProps, "title"> {
  title?: string;
  titleAfter?: ReactNode;
  bodyProps?: CardBodyProps;
}

export default function ContentCard({
  title,
  titleAfter,
  children,
  variant = "outline",
  bodyProps,
  rounded,
  ...props
}: ContentCardProps) {
  return (
    <Card as={"article"} variant={variant} rounded={rounded} {...props}>
      {(!!title || !!titleAfter) && (
        <CardHeader borderBottom={"1px solid"} borderColor={"border.1"}>
          {!!title && (
            <Heading as="h2" size="md">
              {title}
            </Heading>
          )}
          {titleAfter}
        </CardHeader>
      )}

      <CardBody {...bodyProps}>{children}</CardBody>
    </Card>
  );
}
