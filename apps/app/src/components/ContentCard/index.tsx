import {
  Card,
  CardBody,
  CardBodyProps,
  CardHeader,
  type CardProps,
  Divider,
  Heading,
  useColorModeValue,
} from "@splitfi/ui";
import React from "react";

interface BoxProps extends Omit<CardProps, "title"> {
  title?: string;
  titleAfter?: React.ReactNode;
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
}: React.PropsWithChildren<BoxProps>) {
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
