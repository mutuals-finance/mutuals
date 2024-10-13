import { Box, BoxProps, Heading, Text, VStack } from "@mutuals/ui";
import { isValidElement, PropsWithChildren, ReactNode } from "react";

interface FormGroupProps extends BoxProps {
  title?: string;
  description?: ReactNode | string;
}

export default function FormGroup({
  title,
  description,
  children,
  ...props
}: PropsWithChildren<FormGroupProps>) {
  return (
    <Box {...props}>
      <VStack gap={"4"} alignItems={"start"}>
        {!!title && (
          <Heading as={"h3"} size={"3xl"}>
            {title}
          </Heading>
        )}
        {!!description &&
          (isValidElement(description) ? (
            description
          ) : (
            <Text variant={"muted"}>{description}</Text>
          ))}
        {children}
      </VStack>
    </Box>
  );
}
