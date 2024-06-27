import {
  Card,
  CardBody,
  CardBodyProps,
  CardHeader,
  type CardProps,
  Heading,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@splitfi/ui";
import { Fragment, PropsWithChildren, type ReactNode } from "react";
import { Stack } from "@chakra-ui/react";

export interface ContentCardProps extends Omit<CardProps, "title"> {
  title?: string;
  titleAfter?: ReactNode;
  bodyProps?: CardBodyProps;
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
      <Card variant={variant} rounded={rounded} overflow={"hidden"} {...props}>
        {(!!title || !!titleAfter) && (
          <ContentCardButton p={"0"}>
            <CardHeader
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
            </CardHeader>
          </ContentCardButton>
        )}
        <ContentCardPanel p={"0"}>
          <CardBody
            borderTop={"1px solid"}
            borderColor={"border.1"}
            {...bodyProps}
          >
            {children}
          </CardBody>
        </ContentCardPanel>
      </Card>
    </ContentCardWrapper>
  );
}
