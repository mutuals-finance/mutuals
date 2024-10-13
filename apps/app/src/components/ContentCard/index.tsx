import { Card, Heading, Collapsible, Stack } from "@mutuals/ui";
import { Fragment, type ReactNode } from "react";

export interface ContentCardProps extends Omit<Card.RootProps, "title"> {
  title?: string;
  titleAfter?: ReactNode;
  bodyProps?: Card.BodyProps;
  enableAccordion?: boolean;
}

export default function ContentCard({
  title,
  titleAfter,
  children,
  variant = "outline",
  enableAccordion = true,
  bodyProps,
  rounded,
  ...props
}: ContentCardProps) {
  const _enableAccordion = !(!(!!title || !!titleAfter) || !enableAccordion);

  const ContentCardWrapper = !_enableAccordion ? Fragment : Collapsible.Root;
  const ContentCardButton = !_enableAccordion ? Fragment : Collapsible.Trigger;
  const ContentCardPanel = !_enableAccordion ? Fragment : Collapsible.Content;

  const _showHeader = !!title || !!titleAfter;

  return (
    <ContentCardWrapper>
      <Card.Root
        variant={variant}
        rounded={rounded}
        overflow={"hidden"}
        {...props}
      >
        {_showHeader && (
          <ContentCardButton>
            <Card.Header
              as={Stack}
              direction={"row"}
              alignItems={"center"}
              flex={"1"}
            >
              <Stack flex={"1"} direction={"row"}>
                {!!title && (
                  <Heading as="h2" size="md">
                    {title}
                  </Heading>
                )}
                {titleAfter}
              </Stack>
              {/*
              {_enableAccordion && <Collapsible.Icon />}
*/}
            </Card.Header>
          </ContentCardButton>
        )}
        <ContentCardPanel p={"0"}>
          <Card.Body
            borderTopWidth={_showHeader ? "1px" : "0px"}
            borderColor={"border"}
            alignItems={"stretch"}
            {...bodyProps}
          >
            {children}
          </Card.Body>
        </ContentCardPanel>
      </Card.Root>
    </ContentCardWrapper>
  );
}
