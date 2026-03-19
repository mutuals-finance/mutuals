import {
  Box,
  CardBody,
  type CardBodyProps,
  CardHeader,
  CardRoot,
  type CardRootProps,
  Collapsible,
  Heading,
  Stack,
} from "@mutuals/ui";
import { Fragment, type ReactNode } from "react";

export interface ContentCardProps extends Omit<CardRootProps, "title"> {
  bodyProps?: CardBodyProps;
  defaultOpen?: boolean;
  enableAccordion?: boolean;
  title?: string;
  titleAfter?: ReactNode;
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
  const _enableAccordion = !!((!!title || !!titleAfter) && enableAccordion);

  const ContentCardWrapper = _enableAccordion ? Collapsible.Root : Fragment;
  const ContentCardButton = _enableAccordion ? Collapsible.Trigger : Fragment;
  const ContentCardPanel = _enableAccordion ? Collapsible.Content : Fragment;

  const _showHeader = !!title || !!titleAfter;

  return (
    <ContentCardWrapper defaultOpen={defaultOpen}>
      <CardRoot
        overflow={"hidden"}
        rounded={rounded}
        variant={variant}
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
            alignItems={"stretch"}
            borderColor={"border"}
            borderTopWidth={_showHeader ? "1px" : "0px"}
            {...bodyProps}
          >
            {children}
          </CardBody>
        </ContentCardPanel>
      </CardRoot>
    </ContentCardWrapper>
  );
}
