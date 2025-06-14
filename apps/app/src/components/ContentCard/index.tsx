import {
  CardHeader,
  CardBody,
  CardBodyProps,
  CardRootProps,
  Heading,
  Collapsible,
  CardRoot,
  Stack,
  Box,
} from "@mutuals/ui";
import { Fragment, type ReactNode } from "react";

export interface ContentCardProps extends Omit<CardRootProps, "title"> {
  title?: string;
  titleAfter?: ReactNode;
  bodyProps?: CardBodyProps;
  enableAccordion?: boolean;
  defaultOpen?: boolean;
}

export default function ContentCard({
  title,
  titleAfter,
  children,
  variant = "outline",
  enableAccordion = true,
  bodyProps,
  rounded,
  defaultOpen = true,
  ...props
}: ContentCardProps) {
  const _enableAccordion = !(!(!!title || !!titleAfter) || !enableAccordion);

  const ContentCardWrapper = !_enableAccordion ? Fragment : Collapsible.Root;
  const ContentCardButton = !_enableAccordion ? Fragment : Collapsible.Trigger;
  const ContentCardPanel = !_enableAccordion ? Fragment : Collapsible.Content;

  const _showHeader = !!title || !!titleAfter;

  return (
    <ContentCardWrapper defaultOpen={defaultOpen}>
      <CardRoot
        variant={variant}
        rounded={rounded}
        overflow={"hidden"}
        {...props}
      >
        {_showHeader && (
          <ContentCardButton>
            <CardHeader pb={"var(--card-padding)"} textAlign={"left"}>
              <Stack direction={"row"}>
                <Box flex={"1"}>
                  {!!title && (
                    <Heading as="h2" size="xl">
                      {title}
                    </Heading>
                  )}
                </Box>
                {titleAfter}
              </Stack>
              {/*
              {_enableAccordion && <Collapsible.Icon />}
*/}
            </CardHeader>
          </ContentCardButton>
        )}
        <ContentCardPanel p={"0"}>
          <CardBody
            borderTopWidth={_showHeader ? "1px" : "0px"}
            borderColor={"border"}
            alignItems={"stretch"}
            {...bodyProps}
          >
            {children}
          </CardBody>
        </ContentCardPanel>
      </CardRoot>
    </ContentCardWrapper>
  );
}
