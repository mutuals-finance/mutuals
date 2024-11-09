import {
  type BoxProps,
  type HeadingProps,
  Text,
  Box,
  Heading,
} from "@mutuals/ui";

interface SectionHeaderProps extends BoxProps {
  label?: string;
  headingProps?: HeadingProps;
}

export default function SectionHeader({
  children,
  label,
  headingProps,
  ...props
}: SectionHeaderProps) {
  return (
    <Box maxW="2xl" mx="auto" textAlign={"center"} mb="12" {...props}>
      {!!label && (
        <Heading as={"h4"} variant={"subtag"} size={"xs"} mb="6">
          {label}
        </Heading>
      )}
      <Heading size={{ base: "4xl", lg: "5xl" }} {...headingProps}>
        {children}
      </Heading>
    </Box>
  );
}
