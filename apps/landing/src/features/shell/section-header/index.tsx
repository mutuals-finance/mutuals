import { Box, type BoxProps, Heading, type HeadingProps } from "@mutuals/ui";

export interface ShellSectionHeaderProps extends BoxProps {
  headingProps?: HeadingProps;
  label?: string;
}

export default function ShellSectionHeader({
  children,
  label,
  headingProps,
  ...props
}: ShellSectionHeaderProps) {
  return (
    <Box maxW="2xl" mb="12" mx="auto" textAlign={"center"} {...props}>
      {!!label && (
        <Heading as={"h4"} mb="6" size={"xs"} variant={"subtag"}>
          {label}
        </Heading>
      )}
      <Heading color={"fg"} size={{ base: "4xl", lg: "5xl" }} {...headingProps}>
        {children}
      </Heading>
    </Box>
  );
}
