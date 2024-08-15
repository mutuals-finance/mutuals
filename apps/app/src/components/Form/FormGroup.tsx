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
      <VStack spacing={"6"} alignItems={"start"}>
        {!!title && (
          <Heading as={"h3"} size={"lg"}>
            {title}
          </Heading>
        )}
        {!!description &&
          (isValidElement(description) ? (
            description
          ) : (
            <Text color={"alpha.3"} fontWeight={"500"}>
              {description}
            </Text>
          ))}
        {children}
      </VStack>
    </Box>
  );
}
