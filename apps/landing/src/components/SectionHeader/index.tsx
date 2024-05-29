import {
  type BoxProps,
  type HeadingProps,
  Text,
  Box,
  Heading,
} from "@splitfi/ui";

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
    <Box maxW="2xl" mx="auto" textAlign={{ lg: "center" }} mb="12" {...props}>
      {!!label && (
        <Text
          mb="6"
          variant={"tag"}
          casing={"uppercase"}
          fontWeight={"500"}
          color={"color.3"}
        >
          {label}
        </Text>
      )}
      <Heading size="2xl" lineHeight="1.2" color={"color.1"} {...headingProps}>
        {children}
      </Heading>
    </Box>
  );
}
