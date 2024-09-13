import {
  Card,
  Heading,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
} from "@mutuals/ui";
import { Fragment, PropsWithChildren, type ReactNode } from "react";

export interface ContentCardProps extends Omit<Card.RootProps, "title"> {
  title?: string;
  titleAfter?: ReactNode;
  bodyProps?: Card.BodyProps;
  enableAccordion?: boolean;
}

function AccordionWrapper({ children }: PropsWithChildren) {
  return (
    <Accordion allowToggle as={"article"} defaultIndex={[0]}>
      <AccordionItem sx={{ border: "none !important" }}>
        {children}
      </AccordionItem>
    </Accordion>
  );
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
  const ContentCardWrapper = !_enableAccordion ? Fragment : AccordionWrapper;
  const ContentCardButton = !_enableAccordion ? Fragment : AccordionButton;
  const ContentCardPanel = !_enableAccordion ? Fragment : AccordionPanel;

  return (
    <ContentCardWrapper>
      <Card.Root
        variant={variant}
        rounded={rounded}
        overflow={"hidden"}
        {...props}
      >
        {(!!title || !!titleAfter) && (
          <ContentCardButton p={"0"}>
            <Card.Header
              as={Stack}
              direction={"row"}
              align={"center"}
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
              {_enableAccordion && <AccordionIcon />}
            </Card.Header>
          </ContentCardButton>
        )}
        <ContentCardPanel p={"0"}>
          <Card.Body
            borderTop={"1px solid"}
            borderColor={"border.1"}
            {...bodyProps}
          >
            {children}
          </Card.Body>
        </ContentCardPanel>
      </Card.Root>
    </ContentCardWrapper>
  );
}
